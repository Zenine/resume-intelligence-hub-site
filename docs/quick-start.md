# Quick Start

Three steps to a working career intelligence hub.

## 1. Install the skill

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

Alternatively, clone directly:

```bash
git clone https://github.com/Zenine/resume-intelligence-hub ~/.claude/skills/resume-intelligence-hub
```

## 2. Bootstrap your hub

Open your AI IDE (Claude Code, Cursor, Codex, Cline, Windsurf, or anything that reads `AGENTS.md`). Navigate to where you want the hub to live (a private location — never a public repo). Then say:

> **build my career repo**

The agent will walk you through a 7-question interview:

1. **Language** — Chinese or English (pick one, don't mix)
2. **Existing materials** — upload any resumes/CVs you already have (makes every subsequent step easier)
3. **Industry / field** — software, healthcare, design, law, academia, etc.
4. **Target seniority** — entry to VP / founder / PI
5. **Research track?** — enable only if you apply for grants / research funding
6. **Resume output language** — Chinese, English, or both
7. **Repo location** — where on disk

Then the agent scaffolds the directory, seeds `AGENTS.md` with your positioning, imports your old resumes into the archive, and writes a "next steps" punch list into `todo.md`.

## 3. Use the hub

Once bootstrapped, the agent handles six workflows. Invoke with natural language:

| Say this | Workflow |
|----------|----------|
| Diff my gap against the target seat | [Career planning & gap analysis](https://github.com/Zenine/resume-intelligence-hub-site/blob/main/workflows/career-planning.md) — run this first, then re-run each quarter |
| Tailor my resume to this JD | [JD-tailored resume](https://github.com/Zenine/resume-intelligence-hub-site/blob/main/workflows/jd-tailored-resume.md) |
| What's out there for me | [Active JD sourcing](https://github.com/Zenine/resume-intelligence-hub-site/blob/main/workflows/jd-sourcing.md) |
| Prep me for this interview | [Interview prep](https://github.com/Zenine/resume-intelligence-hub-site/blob/main/workflows/interview-prep.md) |
| Run pre-submission verification | [Verification](https://github.com/Zenine/resume-intelligence-hub-site/blob/main/workflows/verification.md) |
| 帮我生成 XX 基金申报简历 / Generate XX grant application profile | [Grant application](https://github.com/Zenine/resume-intelligence-hub-site/blob/main/workflows/grant-application.md) (research track) |

## Troubleshooting

**"The AI isn't reading my AGENTS.md"**

- Claude Code: if on an older version that only loads `CLAUDE.md`, symlink: `ln -s AGENTS.md CLAUDE.md`
- Cursor: copy `AGENTS.md` content into `.cursor/rules/agents.mdc` or symlink
- Windsurf: use `.windsurfrules`
- GitHub Copilot: use `.github/copilot-instructions.md`
- Other IDEs: consult their context-file convention

**"My hub already exists — can I migrate?"**

Yes. Point the agent at your existing scattered resumes (`简历/` or similar) and say "migrate this into a resume-intelligence-hub structure." The bootstrap flow handles consolidation.

**"I need another language"**

Currently: Chinese and English templates. Contributions welcome — see the [GitHub repo](https://github.com/Zenine/resume-intelligence-hub).
