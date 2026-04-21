# Design Philosophy

Ten non-obvious choices that make the hub work. Preserve them when extending.

## 1. Single source of truth

`profiles/` is the only place factual data lives. `master.md` for recruitment, `research.md` for grants (optional). Historical resumes in `resumes-archive/` or `简历/` are **read-only** — never edited, never used as a data source except to recover info not yet migrated.

## 2. Positioning lock in AGENTS.md

The top of `AGENTS.md` declares the target role level and industry. Every generated resume biases toward this positioning. Change target = edit one file. No reprompting each session.

## 3. Dual-track separation (when enabled)

Job application and grant proposal resumes are entirely different documents — different format, language, emphasis, and truth-weighting. Their data sources are split: `master.md` vs `research.md`. Never merge.

## 4. Path-references for sensitive originals

Sensitive documents (IDs, contracts, appointment letters, diplomas, tax records) are **NOT** committed. `verification/references.md` holds a path-reference index pointing at local paths, cloud-sync paths, and public URLs. The repo stays shareable; originals stay out of version control.

## 5. Public-source cross-check before high-stakes submissions

Before senior-role interviews or grant submissions, run `workflows/verification.md`: cross-check every load-bearing claim against public sources. Triangulation (≥2 independent sources) is the standard. Log results in `verification/{date}-web-check.md`. Flag high-risk items — rewrite or find evidence, don't ignore.

## 6. todo.md vs changelog.md

- `todo.md` holds **only pending work**. No `[x]` completed items.
- `changelog.md` receives completed items, dated, reverse-chronological.

When something's done, tell the agent to archive — don't leave `[x]` marks accumulating. This keeps `todo.md` a true punch list.

## 7. Per-application folders, dated

Each attempt lives at `jobs/applications/{company}-{role}-{YYYY-MM-DD}/` with `jd.md`, `resume.md`, `cover.md`, `prep.md`. Same company, second attempt = second folder. Date is non-negotiable — it surfaces velocity and lets you revisit a specific run.

## 8. STAR stories separate from facts

`profiles/stories.md` holds interview-ready STAR narratives. `master.md` holds raw facts. A story is a **crafted retelling**; facts are **raw data**. Don't conflate.

## 9. Monolingual per hub

The hub is either all Chinese or all English. Pick one at bootstrap. Don't mix — the template, agent instructions, and workflow prose all assume a single language. Resumes themselves can still output in either language per application.

## 10. AI-IDE agnostic via AGENTS.md

The canonical context file is `AGENTS.md` — the cross-IDE standard. Symlink or copy for your specific IDE's convention (`.cursor/rules/`, `.windsurfrules`, etc.). Don't bind to a specific vendor.

---

## Frameworks referenced

The hub cites established career frameworks by name so you have vocabulary to research further. See [Frameworks](/frameworks) for the full list.
