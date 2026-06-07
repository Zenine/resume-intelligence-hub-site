#!/usr/bin/env python3
"""Check that VitePress locale pages stay structurally aligned.

The check is intentionally structural instead of textual: translated heading
text may differ, but matching pages should expose the same heading levels in
the same order.
"""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path


LOCALES = {
    "en": Path("docs"),
    "zh": Path("docs/zh"),
    "ja": Path("docs/ja"),
    "zh-TW": Path("docs/zh-TW"),
}

FRONTMATTER_RE = re.compile(r"\A---[ \t]*\n.*?\n---[ \t]*(?:\n|\Z)", re.S)
HEADING_RE = re.compile(r"^(#{1,6})[ \t]+(.+?)\s*#*\s*$")
FENCE_RE = re.compile(r"^([`~]{3,})")


@dataclass(frozen=True)
class Heading:
    level: int
    text: str
    line: int


def strip_frontmatter(text: str) -> tuple[str, int]:
    match = FRONTMATTER_RE.match(text)
    if not match:
        return text, 0
    return text[match.end() :], match.group(0).count("\n")


def extract_headings(path: Path) -> list[Heading]:
    text, skipped_lines = strip_frontmatter(path.read_text(encoding="utf-8"))
    headings: list[Heading] = []
    in_fence = False
    fence_marker = ""

    for offset, line in enumerate(text.splitlines(), start=1):
        fence_match = FENCE_RE.match(line)
        if fence_match:
            marker = fence_match.group(1)
            if not in_fence:
                in_fence = True
                fence_marker = marker
            elif marker.startswith(fence_marker[0]) and len(marker) >= len(fence_marker):
                in_fence = False
                fence_marker = ""
            continue

        if in_fence:
            continue

        heading_match = HEADING_RE.match(line)
        if heading_match:
            headings.append(
                Heading(
                    level=len(heading_match.group(1)),
                    text=heading_match.group(2).strip(),
                    line=skipped_lines + offset,
                )
            )

    return headings


def collect_pages(root: Path) -> dict[str, dict[str, Path]]:
    pages: dict[str, dict[str, Path]] = {}
    for locale, relative_dir in LOCALES.items():
        locale_dir = root / relative_dir
        if not locale_dir.is_dir():
            pages[locale] = {}
            continue
        pages[locale] = {path.stem: path for path in sorted(locale_dir.glob("*.md"))}
    return pages


def format_sequence(headings: list[Heading]) -> str:
    if not headings:
        return "(no headings)"
    return " ".join(f"H{heading.level}" for heading in headings)


def format_heading_details(path: Path, headings: list[Heading], root: Path) -> str:
    if not headings:
        return f"{path.relative_to(root)}: (no headings)"
    entries = [
        f"H{heading.level}@{heading.line} {heading.text}" for heading in headings
    ]
    return f"{path.relative_to(root)}: " + " | ".join(entries)


def check_page_sets(pages: dict[str, dict[str, Path]]) -> list[str]:
    errors: list[str] = []
    expected = set(pages["en"])

    for locale in LOCALES:
        current = set(pages[locale])
        missing = sorted(expected - current)
        extra = sorted(current - expected)
        if missing:
            errors.append(f"- {locale} missing pages: {', '.join(missing)}")
        if extra:
            errors.append(f"- {locale} extra pages: {', '.join(extra)}")

    return errors


def check_heading_sequences(
    pages: dict[str, dict[str, Path]], root: Path
) -> list[str]:
    errors: list[str] = []
    common_stems = set(pages["en"])
    for locale in LOCALES:
        common_stems &= set(pages[locale])

    for stem in sorted(common_stems):
        expected_path = pages["en"][stem]
        expected_headings = extract_headings(expected_path)
        expected_levels = [heading.level for heading in expected_headings]

        for locale in LOCALES:
            if locale == "en":
                continue
            current_path = pages[locale][stem]
            current_headings = extract_headings(current_path)
            current_levels = [heading.level for heading in current_headings]
            if current_levels == expected_levels:
                continue

            errors.append(
                "\n".join(
                    [
                        f"- {current_path.relative_to(root)} differs from "
                        f"{expected_path.relative_to(root)}",
                        f"  expected: {format_sequence(expected_headings)}",
                        f"  actual:   {format_sequence(current_headings)}",
                        f"  expected details: "
                        f"{format_heading_details(expected_path, expected_headings, root)}",
                        f"  actual details:   "
                        f"{format_heading_details(current_path, current_headings, root)}",
                    ]
                )
            )

    return errors


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Check VitePress locale page and heading drift."
    )
    parser.add_argument(
        "--path",
        default=".",
        help="project root containing docs/ (default: current directory)",
    )
    args = parser.parse_args()

    root = Path(args.path).resolve()
    pages = collect_pages(root)

    page_errors = check_page_sets(pages)
    heading_errors = check_heading_sequences(pages, root)

    if not page_errors and not heading_errors:
        print("i18n drift check passed: page sets and heading structures match.")
        return 0

    print("i18n drift check failed.")
    if page_errors:
        print("\nPage set differences:")
        print("\n".join(page_errors))
    if heading_errors:
        print("\nHeading structure differences:")
        print("\n".join(heading_errors))
    return 1


if __name__ == "__main__":
    sys.exit(main())
