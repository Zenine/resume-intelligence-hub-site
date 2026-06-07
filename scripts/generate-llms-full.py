#!/usr/bin/env python3
# Meridian template · llms-full.txt generator
"""Walk README.md + selected VitePress locale docs, concatenate into llms-full.txt.

Output goes to BOTH:
  - <repo>/llms-full.txt       (repo-root copy; visible in GitHub tree)
  - <repo>/docs/public/llms-full.txt  (served at {SITE_URL}/llms-full.txt)

Strips YAML frontmatter and VitePress-specific components (::: blocks) so LLMs
get clean prose.

Usage:
  python3 scripts/generate-llms-full.py
  python3 scripts/generate-llms-full.py --locale zh
  python3 scripts/generate-llms-full.py --all-locales
  python3 scripts/generate-llms-full.py --path /tmp/other  # custom source root
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

FRONTMATTER_RE = re.compile(r"^---\s*\n.*?\n---\s*\n", re.S)
VITEPRESS_BLOCK_RE = re.compile(r"^:::[a-z]+.*?\n.*?^:::$", re.S | re.M)
HTML_COMMENT_RE = re.compile(r"<!--.*?-->", re.S)
LOCALES = ("en", "zh", "ja", "zh-TW")


def clean(text: str) -> str:
    text = FRONTMATTER_RE.sub("", text, count=1)
    text = VITEPRESS_BLOCK_RE.sub("", text)
    text = HTML_COMMENT_RE.sub("", text)
    return text.strip() + "\n"


def collect_docs(root: Path, locales: list[str]) -> list[Path]:
    docs: list[Path] = []
    # Always include the main README as the project-level overview.
    readme = root / "README.md"
    if readme.exists():
        docs.append(readme)

    docs_dir = root / "docs"
    if not docs_dir.is_dir():
        return docs

    if "en" in locales:
        for p in sorted(docs_dir.glob("*.md")):
            docs.append(p)

    for locale in locales:
        if locale == "en":
            continue
        locale_dir = docs_dir / locale
        if locale_dir.is_dir():
            for p in sorted(locale_dir.glob("*.md")):
                docs.append(p)

    return docs


def main() -> None:
    ap = argparse.ArgumentParser(description="Generate llms-full.txt from docs + README")
    ap.add_argument("--path", default=".", help="project root (default: cwd)")
    ap.add_argument("--output-dir", default=None,
                    help="output root for llms artifacts (default: same as --path)")
    ap.add_argument("--locale", choices=LOCALES, default="en",
                    help="docs locale to include: en uses root docs/*.md (default: en)")
    ap.add_argument("--all-locales", action="store_true",
                    help="include en root docs plus zh/ja/zh-TW locale docs")
    ap.add_argument("--all-langs", action="store_true",
                    help="deprecated alias for --all-locales")
    args = ap.parse_args()

    root = Path(args.path).resolve()
    if not root.is_dir():
        print(f"error: {root} is not a directory", file=sys.stderr)
        sys.exit(2)

    locales = list(LOCALES) if args.all_locales or args.all_langs else [args.locale]
    docs = collect_docs(root, locales)
    if not docs:
        print("error: no source docs found (no README.md or docs/*.md)", file=sys.stderr)
        sys.exit(2)

    parts: list[str] = []
    for p in docs:
        rel = p.relative_to(root)
        parts.append(f"<!-- source: {rel} -->\n")
        parts.append(clean(p.read_text(encoding="utf-8")))
        parts.append("\n---\n\n")

    output = "".join(parts).rstrip() + "\n"

    output_root = Path(args.output_dir).resolve() if args.output_dir else root
    out1 = output_root / "llms-full.txt"
    out2 = output_root / "docs" / "public" / "llms-full.txt"
    out1.parent.mkdir(parents=True, exist_ok=True)
    out1.write_text(output, encoding="utf-8")
    out2.parent.mkdir(parents=True, exist_ok=True)
    out2.write_text(output, encoding="utf-8")

    print(f"wrote {out1.relative_to(output_root)} ({len(output):,} chars, {len(docs)} source docs)")
    print(f"wrote {out2.relative_to(output_root)}")


if __name__ == "__main__":
    main()
