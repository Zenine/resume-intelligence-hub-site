# resume-intelligence-hub-site · QUICK_START.md

> **This file is written for AI coding assistants, not humans.**
> Trigger sentence: "Please read the project at /Users/zeninexu/github/resume-intelligence-hub-site, understand it, and regenerate its site."
> When the user says this, you are the main orchestrator. Follow the phases below.

---

## Your Role

You are the Meridian ops orchestrator for this VitePress documentation site. Your goal: **help the user regenerate the full ops infrastructure** for this project.

The core tool is [Meridian](https://github.com/lordmos/meridian) at `/Users/zeninexu/github/meridian`. Read `PROMPT.md` there for detailed task instructions.

---

## Phase 1: Explore the Target Project (run autonomously, no user input needed)

Explore this repo and gather:

| Info | Source |
|------|--------|
| Project name | README title |
| One-line description | README first paragraph |
| Languages | docs/ locale structure |
| Tech stack | docs/package.json |
| GitHub info | git remote / README links |
| README issues | Compare against Meridian standard |

Then proceed to Phase 2.

---

## Phase 2: Proposal (show to user, wait for choice)

### 2a. Style — choose 1 of 4 (with recommendation)

This is an AI Agent skill site → recommend **`glow`** (gradient aura, deep space).

| id | Name | Default use |
|----|------|-------------|
| `glow` | Glow — gradient aura | AI / Agent / generative ← this project |
| `minimalist` | Minimalist — monochrome | CLI / library / docs-first |
| `dev-native` | Dev-native — terminal neon | shell / SDK / infra |
| `enterprise` | Enterprise — navy blue | B2B / platform / compliance |

### 2b. Accent color

Glow default: **`#7c3aed`** (violet). User can provide a custom hex.

### 2c. Logo letter

Default: **`R`** (for Resume). Confirm or change.

### 2d. README issues found

List issues with ✅ / ❌.

---

## Phase 3: Confirm (wait for user reply)

User confirms: style / accent color / logo letter / README issues handling.

---

## Phase 4: Execution Pipeline

Execute in this repo. Detailed instructions in `/Users/zeninexu/github/meridian/PROMPT.md`.

| # | Task | Output |
|---|------|--------|
| 1 | Brand naming | Evaluate existing name |
| 2 | i18n | `i18n/glossary.md` + `README.{zh,ja,zh-TW}.md` |
| 3 | VitePress theme | `docs/.vitepress/theme/style.css` (glow) |
| 4 | GitHub Pages | `.github/workflows/docs.yml` (verify) |
| 5 | Logo | `docs/public/hero.svg` + `.github/assets/hero.svg` |
| 6 | AI context files | `CLAUDE.md` / `AGENTS.md` / `.cursor/` / `.windsurf/` |
| 7 | QUICK_START.md | This file (update if needed) |
| 8 | Quick Start Guide | `docs/quick-start.md` (4 locales) |
| 9 | README ops | All language READMEs with badges + switcher + footer |
| 10 | Final checks | `.gitignore` + build verification |
| 11 | Emoji → SVG | `docs/public/icons/` + inline-svg.ts + all .md files |
| 12 | Discoverability | `robots.txt` + `og.png` + `llms.txt` + `llms-full.txt` + FAQ |

### Execution rules
- After each task, print `✅ Task N complete: [brief output]` and update `checkpoint.md`
- **Errors must be fixed before continuing**, no skipping
- After task 3, run `cd docs && npm run docs:build` — success required before continuing

---

## Progress Tracking

After each step, append to `checkpoint.md` in this repo:

```markdown
## [Task N] Complete
- Time: [ISO time]
- Output: [file list]
- Status: ✅
```

---

## Resume After Interruption

When user says "Please read checkpoint.md and continue":
1. Read `checkpoint.md`, find the last completed task
2. Continue from the next task
3. Do not repeat completed tasks

---

## Error Handling

| Scenario | Action |
|----------|--------|
| VitePress build error | Read Meridian PROMPT.md notes, fix the three critical config points |
| npm install fails | Check Node.js ≥ 20, clean node_modules and retry |
| Translation quality uncertain | Japanese: natural technical Japanese; zh-TW: manual review after OpenCC |
| GitHub Pages CI fails | Remind user: Settings → Pages → Source → GitHub Actions |

---

## Output File Reference

```
resume-intelligence-hub-site/
├── README.md / README.zh.md / README.ja.md / README.zh-TW.md
├── CLAUDE.md / AGENTS.md
├── QUICK_START.md
├── checkpoint.md
├── .gitignore
├── i18n/glossary.md
├── scripts/generate-llms-full.py
├── docs/
│   ├── .vitepress/config.mts
│   ├── .vitepress/theme/index.ts + style.css (glow theme)
│   ├── .vitepress/theme/inline-svg.ts
│   ├── public/hero.svg + icons/*.svg + og.png + robots.txt
│   ├── public/llms.txt + llms-full.txt
│   ├── index.md + quick-start.md + frameworks.md + philosophy.md + faq.md
│   └── en/ zh/ ja/ zh-TW/ (each with index.md, quick-start.md, etc.)
├── .github/assets/hero.svg
├── .github/workflows/docs.yml
└── .cursor/rules/project.mdc
```

**Do not modify**: the skill source at `/Users/zeninexu/.claude/skills/resume-intelligence-hub/`.
