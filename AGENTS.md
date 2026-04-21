# resume-intelligence-hub-site — AI Coding Assistant Context

## Quick Reference

One-sentence launch:
> The site source is at /Users/zeninexu/github/resume-intelligence-hub-site. Please read QUICK_START.md, then ask me any questions. If you have none, start working.

Resume after interruption:
> Please read checkpoint.md and continue where we left off.

---

## About This Project

- **Name**: resume-intelligence-hub-site
- **Description**: Landing page, VitePress documentation site, and CI automation for the [resume-intelligence-hub](https://github.com/Zenine/resume-intelligence-hub) skill.
- **GitHub**: https://github.com/Zenine/resume-intelligence-hub-site
- **Live site**: https://zenine.github.io/resume-intelligence-hub-site/
- **Skill repo**: https://github.com/Zenine/resume-intelligence-hub

---

## Architecture

This repo is the **site layer** — it contains VitePress docs, CI, and ops assets. The skill itself (SKILL.md + templates/ + workflows/) lives in the separate skill repo.

- `docs/` — VitePress source (4 locales: en / zh / ja / zh-TW)
- `scripts/` — CI automation (sitemap notify, llms-full.txt generator)
- `i18n/` — translation glossary (single source of truth for all translations)
- `.github/` — GitHub Actions (docs deploy + GSC sitemap notify)

Regeneration uses [Meridian](https://github.com/lordmos/meridian). To regenerate:
> Please read the project at /Users/zeninexu/github/resume-intelligence-hub-site, understand it, and set up its ops infrastructure.

---

## Key Files

| File | Purpose |
|------|---------|
| `QUICK_START.md` | AI orchestration entry point |
| `checkpoint.md` | Progress tracking for interrupted sessions |
| `docs/.vitepress/config.mts` | VitePress multi-locale config |
| `docs/.vitepress/theme/style.css` | Glow theme CSS variables |
| `docs/.vitepress/theme/inline-svg.ts` | Runtime SVG injection for themed icons |
| `i18n/glossary.md` | Translation authority — check before translating |
| `scripts/generate-llms-full.py` | Generates llms-full.txt for GEO |

---

## Rules

1. Update `checkpoint.md` after each completed task.
2. All 4 locales (en / zh / ja / zh-TW) must stay in sync — don't update one without updating the others.
3. Never commit `docs/.vitepress/dist/` — it's a build artifact.
4. After any docs change, run `cd docs && npm run docs:build` to verify no build errors.
5. Translation: check `i18n/glossary.md` before translating any term.
