# resume-intelligence-hub-site

VitePress documentation site + CI for the [resume-intelligence-hub](https://github.com/Zenine/resume-intelligence-hub) AI skill.

## Key directories
- `docs/` — VitePress source (en / zh / ja / zh-TW)
- `i18n/glossary.md` — translation authority
- `scripts/` — CI tooling

## Rules
- All 4 locales must stay in sync after any docs edit
- Run `cd docs && npm run docs:build` after changes
- Check `i18n/glossary.md` before translating any term
- Never commit `docs/.vitepress/dist/`
