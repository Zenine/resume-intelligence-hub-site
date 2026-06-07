# Release / Version Mapping

This page records how the public site layer maps to the `resume-intelligence-hub` skill repo. It is a documentation baseline, not a claim that the local checkout is clean or that the skill repo is checked out on this machine.

## Repository Relationship

`resume-intelligence-hub-site` is the site layer. It contains the VitePress documentation, multilingual content, CI automation, SEO/GEO assets, and publishing support for GitHub Pages.

The skill itself lives in the separate [`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) repo. That repo owns `SKILL.md`, `templates/`, and `workflows/`; those files define the behavior users install and run in their AI IDE.

## Current Mapping

| Layer | Source | Version baseline | Notes |
| --- | --- | --- | --- |
| Site layer | [`Zenine/resume-intelligence-hub-site`](https://github.com/Zenine/resume-intelligence-hub-site) | `1b344c2` | From local `git rev-parse --short HEAD`. The working tree has uncommitted changes, so this is the committed baseline only. |
| Skill repo | [`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) | Remote `main` / published release tags | The skill repo is not checked out locally in the current machine context. Do not infer or invent a local skill commit; use the remote repo and release tags as the source of truth. |

## Regeneration Policy

Regenerate or review the site whenever one of these inputs changes:

- Skill repo behavior changes: `SKILL.md`, `templates/`, or `workflows/` changes in [`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub).
- Site multilingual content changes: any English, Simplified Chinese, Japanese, or Traditional Chinese docs page changes, with terminology checked against `i18n/glossary.md`.
- SEO/GEO assets change: `llms.txt`, `llms-full.txt`, sitemap-related automation, robots metadata, Open Graph assets, or discovery links change.

When regeneration is needed, update the site docs, regenerate `llms-full.txt`, and record the completed change in `CHANGELOG.md` in the same release cycle.

## Verification Notes

Use this page to answer one question: "Does the site documentation match the skill version I am about to install?"

For a precise answer, compare the current site commit with the current remote `main` or release tag in [`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub). If the skill repo has newer behavioral changes that are not reflected in the site, regenerate the site before treating the docs as current.
