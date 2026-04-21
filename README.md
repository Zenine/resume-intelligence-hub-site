# resume-intelligence-hub-site

Landing page, VitePress source, and CI automation for the [**resume-intelligence-hub**](https://github.com/Zenine/resume-intelligence-hub) skill.

- 🌐 **Landing page** → https://zenine.github.io/resume-intelligence-hub-site/
- 📦 **Skill source** → https://github.com/Zenine/resume-intelligence-hub
- 📚 **Install the skill** → `npx skills add Zenine/resume-intelligence-hub -g -y`

This repo exists so the skill itself (SKILL.md + templates/ + workflows/) stays lean — when users install it via `npx skills add`, they get only what the agent needs, not VitePress source + npm lockfiles + CI scripts.

## Structure

```
docs/       VitePress site sources (4 locales: en / zh / ja / zh-TW)
scripts/    CI automation — submit-sitemap.mjs for GSC auto-notify
i18n/       glossary.md — translation drift reference
.github/    Deploy workflow + GSC sitemap notify + setup guide
```

See [`.github/SETUP_GSC_AUTOMATION.md`](.github/SETUP_GSC_AUTOMATION.md) for one-time Google Search Console automation setup.

## License

MIT — same as the skill itself.
