> **Language**: **English** · [简体中文](README.zh.md) · [日本語](README.ja.md) · [繁體中文](README.zh-TW.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Stars](https://img.shields.io/github/stars/Zenine/resume-intelligence-hub-site?style=flat-square&color=gold)](https://github.com/Zenine/resume-intelligence-hub-site/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/Zenine/resume-intelligence-hub-site?style=flat-square)](https://github.com/Zenine/resume-intelligence-hub-site/commits/main)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Zenine/resume-intelligence-hub-site/pulls)
[![Docs](https://img.shields.io/badge/Docs-online-4a9eff?style=flat-square&logo=vitepress&logoColor=white)](https://zenine.github.io/resume-intelligence-hub-site/)
[![Powered by Meridian](https://img.shields.io/badge/Powered%20by-Meridian-8b5cf6?style=flat-square)](https://github.com/lordmos/meridian)

<div align="center">
  <img src=".github/assets/hero.svg" alt="Resume Intelligence Hub" width="120" />
</div>

# resume-intelligence-hub-site

Landing page, VitePress documentation site, and CI automation for the [**resume-intelligence-hub**](https://github.com/Zenine/resume-intelligence-hub) skill — an AI agent that bootstraps a personal career intelligence hub.

## Quick Start

> Complete docs → [zenine.github.io/resume-intelligence-hub-site](https://zenine.github.io/resume-intelligence-hub-site/)

**Install the skill:**

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

**Then in your AI IDE, say:**

> **build my career repo**

The agent walks you through a 7-question interview and scaffolds your private career hub. You only need to: ① answer the interview → ② review the generated hub → ③ start using it.

**Resume after interruption** → tell the agent: `continue filling my hub`

## Features

- **Single source of truth** — `profiles/` is the authoritative data layer; generated resumes are derivatives, never hand-edited
- **Career compass** — name your stretch target 1–2 levels up, lock it in `AGENTS.md`, diff the four-gap frame each quarter
- **Dual-track support** — job applications and research/grant proposals separated by design; toggle the research track at bootstrap
- **Pre-submission verification** — public-source cross-check on every load-bearing claim before high-stakes submissions
- **Cross-IDE via AGENTS.md** — works with Claude Code, Cursor, Codex, Cline, Windsurf, GitHub Copilot
- **Backed by proven frameworks** — Google XYZ, STAR, BEI, Heilmeier Catechism, stretch-target heuristic, triangulation

## How it differs from other resume skills

Most resume skills are one-shot generators — paste a JD, get a resume. This one bootstraps a **persistent private repo** you iterate on across months of job search, interviews, and grant applications. The agent reads the repo each session and is biased by your positioning lock.

## Structure

```
docs/       VitePress site sources (4 locales: en / zh / ja / zh-TW)
scripts/    CI automation — sitemap notify + llms-full.txt generator
i18n/       glossary.md — translation drift reference
.github/    Deploy workflow + GSC sitemap notify + setup guide
```

See [`.github/SETUP_GSC_AUTOMATION.md`](.github/SETUP_GSC_AUTOMATION.md) for one-time Google Search Console automation setup.

## Complementary Skills

Compose on top of this hub for specific one-shot needs:

- [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) — ATS deep optimization
- [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) — LinkedIn profile
- [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) — Anthropic official interview prep
- [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) — Lenny's career transitions

## License

MIT — same as the skill itself.

---

<sub>Built with [Meridian](https://github.com/lordmos/meridian) · open-source ops toolkit for Agent projects</sub>
