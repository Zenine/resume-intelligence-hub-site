---
title: FAQ
description: Frequently asked questions about resume-intelligence-hub — what it is, who it's for, how it differs from other resume tools, and how to get started.
---

# FAQ

Frequently asked questions about resume-intelligence-hub.

### What is resume-intelligence-hub?

resume-intelligence-hub is an AI agent skill that bootstraps a personal career intelligence hub — a private Git repository that serves as a single source of truth for your resumes, interview preparation, grant applications, and pre-submission verification, while also acting as a career compass. It names your stretch target, diffs the gap between your current position and that target, and helps you ship a quarterly SMART plan.

### What specific problem does it solve?

Most people manage their careers reactively: scattered resumes across folders, ad-hoc interview prep before each interview, and no systematic way to track progress toward a target role. resume-intelligence-hub replaces this with structured infrastructure: `profiles/` holds factual career data, `AGENTS.md` locks in your positioning target so every generated resume biases toward it, and six workflows handle everything from JD-tailored resume generation to public-source fact-checking before high-stakes submissions.

### Who is this for?

Anyone actively managing a job search, planning a career move 1–2 levels up, or applying for research grants — at any seniority level, in any industry. Especially useful if you're managing bilingual job markets (Chinese/English), juggling multiple application types (recruitment + research/grants), or want an AI that remembers your career context across sessions rather than starting fresh each time.

### How does it compare to other resume AI tools?

Most resume tools are one-shot: paste a JD, get a resume. resume-intelligence-hub is persistent infrastructure you iterate on across months. The positioning lock biases all outputs toward your stretch target; the verification workflow cross-checks every claim against public sources; the gap analysis identifies exactly which skills, credentials, scope, and network you need to close. Specialized one-shot tools (ATS optimizers, LinkedIn profile generators) can compose on top of this hub for specific tasks — see [Quick Start](./quick-start.md) for recommended combinations.

### Does it work with my AI IDE?

Yes. The hub uses `AGENTS.md` as its instruction file — the cross-IDE standard. Claude Code, Cursor, Codex, Cline, Windsurf, and GitHub Copilot all read it (some via symlink or copy). See [Quick Start — Troubleshooting](./quick-start.md#troubleshooting) for IDE-specific wiring instructions.

### Is the research/grant track required?

No. It's optional and off by default. When you bootstrap, the agent asks if you apply for academic grants or research funding. If you say no, the research-track files (`profiles/research.md`, `科研/`, grant workflow) are omitted entirely. Most users don't need it.

### How do I get started?

Install with one command, then use one trigger phrase in your AI IDE:

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

Then open your AI IDE (Claude Code, Cursor, Windsurf, or any tool that reads `AGENTS.md`), navigate to where you want the hub to live, and say:

> **build my career repo**

The agent walks you through a 7-question interview and scaffolds your private hub in under 10 minutes. Full walkthrough in [Quick Start](./quick-start.md).
