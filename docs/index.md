---
layout: home
title: Your private career OS

hero:
  name: "Resume Intelligence Hub"
  text: "A career skill for your AI IDE"
  tagline: "One sentence bootstraps a private career hub — resume tailoring, interview prep, and grant applications in one Git repo. Works with Claude Code, Cursor, Windsurf, and more."
  image:
    src: /hero.svg
    alt: Resume Intelligence Hub
  actions:
    - theme: brand
      text: Quick Start →
      link: /quick-start
    - theme: alt
      text: View on GitHub
      link: https://github.com/Zenine/resume-intelligence-hub

features:
  - icon:
      src: /icons/compass.svg
      width: 48
      height: 48
    title: Single source of truth
    details: profiles/ is the authoritative data layer. Every generated resume, cover letter, and grant proposal is derived — never hand-edited.

  - icon:
      src: /icons/target.svg
      width: 48
      height: 48
    title: Career compass
    details: Name your stretch target 1–2 levels up, locked at the top of AGENTS.md so every resume biases to it. Diff the four-gap frame (skill / scope / credential / network) each quarter and ship a SMART plan.

  - icon:
      src: /icons/fork.svg
      width: 48
      height: 48
    title: Dual-track support
    details: Job applications and research / grant proposals have different data sources and formats. Keep them separate — toggle the research track at bootstrap.

  - icon:
      src: /icons/shield.svg
      width: 48
      height: 48
    title: Pre-submission verification
    details: Before senior-role interviews or grant submissions, run a public-source cross-check on every load-bearing claim. Evidence before assertions.

  - icon:
      src: /icons/globe.svg
      width: 48
      height: 48
    title: Cross-IDE via AGENTS.md
    details: Works with Claude Code, Cursor, Codex, Cline, Windsurf, GitHub Copilot. Symlink once, use anywhere.

  - icon:
      src: /icons/book.svg
      width: 48
      height: 48
    title: Backed by proven frameworks
    details: Google XYZ formula, STAR, BEI, Heilmeier Catechism, stretch-target heuristic, triangulation — named so you can research further.
---

<div class="vp-doc" style="max-width: 960px; margin: 48px auto 96px; padding: 0 24px;">

## Install

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

Then, in your AI IDE, say any of:

```
> build my career repo                              # bootstrap a new hub
> tailor my resume to this JD                        # JD-tailored resume
> what's out there for me                            # active JD sourcing
> prep me for this interview                         # interview coaching
> run a pre-submission verification                  # pre-submission fact-check
```

## How it differs from other resume skills

Most resume skills are one-shot generators — you paste a JD, they emit a resume. This one bootstraps a **persistent private repo** that you iterate on across months of job search, interviews, and (optionally) grant applications. The agent reads the repo each session and is biased by your positioning lock. The [SKILL.md](https://github.com/Zenine/resume-intelligence-hub/blob/main/SKILL.md) is the full methodology.

## Complementary skills

Compose on top of this hub for specific one-shot needs:

- [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) — ATS deep optimization
- [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) — LinkedIn profile
- [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) — Anthropic official interview prep
- [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) — Lenny's career transitions

</div>
