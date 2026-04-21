# Design Philosophy

Ten non-obvious choices, each one earned by a mistake. You don't need to understand all of them to use the hub — but read this before changing anything.

## 1. Your experience lives in one place

Facts scattered across five resume versions will eventually contradict each other. `profiles/master.md` is the single source of truth — every achievement, title, and timeline goes here. When you need a tailored resume, the AI pulls from this, not from last week's draft.

Historical resumes in `resumes-archive/` or `简历/` are read-only backups, not data sources.

## 2. Set your direction once

Repeating "I'm looking for X type of role" every session is tedious and unreliable. Write your target level and industry at the top of `AGENTS.md` — the AI reads it every session. When you change direction, change that one file.

## 3. Job applications and grant proposals are different things

Applying for a corporate role and applying for a research grant don't use the same materials — different format, tone, and which achievements "deserve mention." `master.md` for job search, `research.md` for grants (opt-in). Merging them makes both worse.

## 4. Sensitive originals stay out of the repo

IDs, contracts, appointment letters, diplomas, tax records — don't commit them. `verification/references.md` records where each file lives; the originals stay on your own drive or cloud sync. The repo can be shared or demoed at any time without worrying about leaks.

## 5. Before a high-stakes submission, verify what you've written

Senior-role interviews, grant reviews — worth a pass before you submit. Run `workflows/verification.md` and cross-check every degree, employer, title, project number, and quantified claim against public sources. Two independent sources is the bar.

If something doesn't hold up, fix it now — better than having the interviewer or reviewer find it.

## 6. When it's done, archive it

`todo.md` holds only pending work. When something is done, tell the AI to archive it — the item moves to `changelog.md`, dated. A to-do full of `[x]` marks may feel productive, but it obscures what actually needs doing.

## 7. Each application gets its own folder

`jobs/applications/{company}-{role}-{YYYY-MM-DD}/` — JD, resume, cover letter, interview prep, all together. Same company, second attempt = new folder, don't overwrite. The date is mandatory — it shows your pace and lets you return to any specific run.

## 8. Interview stories and factual records are separate

`profiles/stories.md` holds STAR narratives polished for speaking aloud. `master.md` holds raw factual records. A story is crafted to land; facts are recorded to be accurate. Different purposes — keep them separate.

## 9. Pick one language for the hub

Choose Chinese or English at bootstrap, then don't mix. The templates, AI instructions, and workflow prose all assume a single language. Mixing leads to inconsistent output. The resumes themselves can target either language per application — that's a separate choice.

## 10. Don't lock yourself into one AI IDE

`AGENTS.md` is the cross-IDE standard for context files. If your IDE wants a different location (Cursor's `.cursor/rules/`, Windsurf's `.windsurfrules`), symlink or copy. Don't write the content in a vendor-specific format — switching tools shouldn't require rewriting your context.

---

## Frameworks referenced

Each design choice here traces back to an established source. See [Frameworks](/frameworks) for the full list.
