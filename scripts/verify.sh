#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

cd "$ROOT"

echo "==> Checking llms-full.txt freshness"
python3 scripts/generate-llms-full.py --all-locales --output-dir "$TMP_DIR" >/dev/null
cmp -s "$TMP_DIR/llms-full.txt" "$ROOT/llms-full.txt" || {
  echo "llms-full.txt is stale. Run: python3 scripts/generate-llms-full.py --all-locales" >&2
  exit 1
}
cmp -s "$TMP_DIR/docs/public/llms-full.txt" "$ROOT/docs/public/llms-full.txt" || {
  echo "docs/public/llms-full.txt is stale. Run: python3 scripts/generate-llms-full.py --all-locales" >&2
  exit 1
}

echo "==> Checking root/public llms-full.txt consistency"
cmp -s "$ROOT/llms-full.txt" "$ROOT/docs/public/llms-full.txt" || {
  echo "llms-full.txt and docs/public/llms-full.txt differ" >&2
  exit 1
}
cmp -s "$ROOT/llms.txt" "$ROOT/docs/public/llms.txt" || {
  echo "llms.txt and docs/public/llms.txt differ" >&2
  exit 1
}

echo "==> Checking per-locale llms.txt files"
for locale in zh ja zh-TW; do
  test -f "$ROOT/docs/public/$locale/llms.txt" || {
    echo "docs/public/$locale/llms.txt is missing" >&2
    exit 1
  }
done

echo "==> Checking i18n page and heading drift"
python3 scripts/check-i18n-drift.py

echo "==> Checking internal links"
python3 scripts/check-links.py

echo "==> Building VitePress docs"
(cd "$ROOT/docs" && npm run docs:build)

echo "verify: ok"
