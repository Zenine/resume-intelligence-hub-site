# Ops Decisions

This page records site-layer operational decisions that should survive future regeneration.

## LLM / GEO Discovery

The site serves one concise `llms.txt` per locale:

- `/llms.txt`
- `/zh/llms.txt`
- `/ja/llms.txt`
- `/zh-TW/llms.txt`

Every page emits a language-aware `llms.txt` discovery link in `transformHead`. The site also serves one multilingual `llms-full.txt`, generated from all four locale doc sets, for agents that prefer a single expanded source.

## IndexNow

IndexNow is enabled as optional automation. The workflow submits URLs only when the repository secret `INDEXNOW_KEY` exists.

The deploy workflow writes the key file into the GitHub Pages artifact at `/{base}/{key}.txt`. The notification workflow then sends only URLs under `/resume-intelligence-hub-site/`, with `keyLocation` pointing to that deployed key file.

No IndexNow key is committed to the repository.

## Link Checking

`scripts/verify.sh` runs `scripts/check-links.py`, which checks internal Markdown and public text links deterministically without external HTTP requests. External links are intentionally left out of the default verification path to avoid flaky CI.

## Lighthouse

Lighthouse audits run in a separate scheduled and pull-request workflow. Thresholds are intentionally conservative:

- Performance: warning at 0.5
- Accessibility: error below 0.9
- Best practices: error below 0.9
- SEO: error below 0.9

This keeps hard failures focused on accessibility, best practices, and SEO while still surfacing performance regressions.

## Runtime SVG Inlining

The current runtime SVG inlining strategy is retained. It provides themed icon styling with an `<img>` fallback if fetch or parsing fails. Moving all icons to build-time inline SVG would require changing how VitePress feature icons and Markdown icon images are emitted, with limited benefit for this static site.

The decision can be revisited if Lighthouse or visual testing shows measurable layout shift, icon flash, or fetch overhead.

## Future Skill Extraction

The reusable `meridian-vitepress-ops` skill should be designed outside this site repo. The extracted skill should parameterize:

- repository owner/name
- site URL and base path
- brand name and project type
- accent color and logo assets
- locales
- GSC and IndexNow enablement
- `llms.txt` / `llms-full.txt` generation policy
- i18n glossary and drift-check rules
- checkpoint structure

This repo remains the reference implementation, not the extracted skill package.
