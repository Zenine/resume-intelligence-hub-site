#!/usr/bin/env python3
"""Check internal links in Markdown and public text assets.

The check intentionally avoids external HTTP validation in the default path so
`scripts/verify.sh` remains deterministic and usable offline.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from urllib.parse import urlparse


SITE_ORIGIN = "https://zenine.github.io"
BASE_PATH = "/resume-intelligence-hub-site/"
LINK_RE = re.compile(r"(?<!\!)\[[^\]]+\]\(([^)\s]+)(?:\s+\"[^\"]*\")?\)")
ANGLE_URL_RE = re.compile(r"<(https?://[^>\s]+)>")
PUBLIC_ASSETS = {
    "llms.txt",
    "llms-full.txt",
    "robots.txt",
    "og.png",
    "hero.svg",
}


def iter_source_files(root: Path) -> list[Path]:
    patterns = ["*.md", "docs/**/*.md", "docs/public/**/*.txt"]
    files: set[Path] = set()
    for pattern in patterns:
        for path in root.glob(pattern):
            rel = path.relative_to(root).as_posix()
            if "node_modules/" in rel:
                continue
            if rel.endswith("llms-full.txt"):
                continue
            files.add(path)
    return sorted(files)


def strip_anchor(href: str) -> str:
    return href.split("#", 1)[0]


def is_ignored_scheme(href: str) -> bool:
    parsed = urlparse(href)
    return parsed.scheme in {"mailto", "tel", "javascript", "data"}


def markdown_to_output_path(path: str) -> str:
    if path.endswith("/"):
        return f"{path}index.html"
    if path.endswith(".md"):
        return f"{path[:-3]}.html"
    if "." not in Path(path).name:
        return f"{path}.html"
    return path


def site_url_to_output_path(href: str) -> str | None:
    parsed = urlparse(href)
    if parsed.scheme not in {"http", "https"}:
        return None
    if parsed.netloc != "zenine.github.io" or not parsed.path.startswith(BASE_PATH):
        return None
    rel = parsed.path.removeprefix(BASE_PATH)
    return rel or "index.html"


def resolve_relative_link(source: Path, href: str, root: Path) -> str | None:
    clean_href = strip_anchor(href)
    if not clean_href or clean_href.startswith("#") or is_ignored_scheme(clean_href):
        return None

    site_path = site_url_to_output_path(clean_href)
    if site_path is not None:
        return markdown_to_output_path(site_path)

    parsed = urlparse(clean_href)
    if parsed.scheme or clean_href.startswith("//"):
        return None

    raw_href = clean_href
    if clean_href.startswith("/resume-intelligence-hub-site/"):
        return markdown_to_output_path(clean_href.removeprefix("/resume-intelligence-hub-site/"))
    if clean_href.startswith("/"):
        return markdown_to_output_path(clean_href.removeprefix("/"))

    candidate = (source.parent / raw_href).resolve()
    if candidate.exists():
        return None

    if source.relative_to(root).as_posix().startswith("docs/"):
        docs_root = root / "docs"
        output_base = source.parent.relative_to(docs_root)
        candidate_output = (output_base / raw_href).as_posix()
        return markdown_to_output_path(candidate_output)

    try:
        rel = candidate.relative_to(root)
    except ValueError:
        return None
    return markdown_to_output_path(rel.as_posix())


def existing_outputs(root: Path) -> set[str]:
    outputs: set[str] = set()

    for md in root.glob("docs/**/*.md"):
        rel = md.relative_to(root / "docs").as_posix()
        outputs.add(markdown_to_output_path(rel))

    for asset in root.glob("docs/public/**/*"):
        if asset.is_file():
            outputs.add(asset.relative_to(root / "docs" / "public").as_posix())

    for asset_name in PUBLIC_ASSETS:
        if (root / asset_name).exists():
            outputs.add(asset_name)

    outputs.add("index.html")
    return outputs


def extract_links(text: str) -> list[str]:
    links = [match.group(1) for match in LINK_RE.finditer(text)]
    links.extend(match.group(1) for match in ANGLE_URL_RE.finditer(text))
    return links


def main() -> int:
    parser = argparse.ArgumentParser(description="Check internal docs links.")
    parser.add_argument("--path", default=".", help="project root (default: cwd)")
    args = parser.parse_args()

    root = Path(args.path).resolve()
    outputs = existing_outputs(root)
    errors: list[str] = []

    for source in iter_source_files(root):
        text = source.read_text(encoding="utf-8")
        for href in extract_links(text):
            resolved = resolve_relative_link(source, href, root)
            if resolved is None:
                continue
            if resolved not in outputs:
                errors.append(f"{source.relative_to(root)}: missing internal link target: {href} -> {resolved}")

    if errors:
        print("internal link check failed.")
        print("\n".join(errors))
        return 1

    print("internal link check passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
