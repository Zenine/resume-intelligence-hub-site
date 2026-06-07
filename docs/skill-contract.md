# Skill Contract

This page documents the long-term operating contract of the `resume-intelligence-hub` skill. The hub repository is a **private career hub**: it stores factual career evidence, positioning, drafts, verification logs, and quarterly plans. This site is the **documentation layer**: it explains the method publicly, but it is not where a user's private career data lives.

## Repository and site boundary

- The `resume-intelligence-hub` skill scaffolds and operates a private repository for one person.
- The hub is a single source of truth for resumes, JD-tailored applications, interview preparation, research/grant applications when enabled, credential / promotion dossiers when enabled, and pre-submission verification.
- Generated resumes and cover letters are derivatives. The durable source is `profiles/` plus the positioning lock in `AGENTS.md`.
- The public site explains the contract, workflows, examples, and setup guidance. It must not contain private resumes, real IDs, salary evidence, contracts, certificates, or local machine paths.
- A hub can be synced through a private Git remote, but it should never be pushed to a public repository.

## Directory structure after bootstrap

The exact language of folder names depends on the bootstrap language, but the shape is stable:

```text
career-hub/
├── profiles/
│   ├── master.md
│   ├── skills.md
│   ├── stories.md
│   └── research.md
├── jobs/
│   ├── templates/
│   ├── market-watch/
│   └── applications/
├── verification/
│   ├── references.md
│   └── credentials/
├── credential-applications/
├── resumes-archive/
├── research-archive/
├── assessments/
├── AGENTS.md
├── readme.md
├── todo.md
└── changelog.md
```

Optional folders are created only when the user needs them:

- `research.md` and `research-archive/` are for the research track.
- `credential-applications/` is for professional titles, licensing, board certification, or promotion dossiers.
- `assessments/` stores optional material such as 360 feedback or personality assessments used during interview prep.

## Core file responsibilities

| File or folder | Responsibility |
|---|---|
| `AGENTS.md` | The positioning lock: target role, seniority, field, emphasis, de-emphasis, enabled tracks, and operating rules for AI agents. |
| `profiles/master.md` | Factual career source for recruitment: roles, scope, achievements, metrics, projects, education, and public links. |
| `profiles/skills.md` | Capability matrix, including T-shaped / pi-shaped depth, target-seat gaps, tools, domains, and certifications. |
| `profiles/stories.md` | STAR stories for interviews. It stays separate from factual profile data so narratives can be reused without rewriting evidence. |
| `profiles/research.md` | Research-track source: publications, patents, funded projects, standards, research directions, service, and mentorship. |
| `jobs/market-watch/` | Target companies, live JD shortlists, warm intro paths, and gap-plan snapshots. |
| `jobs/applications/` | One dated folder per application, such as `company-role-2026-06-07/`, containing the JD, generated resume, cover letter, and interview prep. |
| `verification/references.md` | Path-reference index for sensitive originals. It records where evidence lives without copying that evidence into Git. |
| `verification/{date}-web-check.md` | Public-source cross-check logs for load-bearing claims. |
| `credential-applications/` | Evidence matrices and writing packets for credential, licensing, board, or promotion applications. |
| `resumes-archive/` | Old resumes and converted Markdown copies. Archive-only; do not keep editing old resumes as the source of truth. |
| `todo.md` | Pending work only, especially this quarter's SMART actions and unresolved evidence gaps. |
| `changelog.md` | Completed work, dated and reverse-chronological. Completed items move here instead of staying as checked items in `todo.md`. |

## Workflow inputs and outputs

### 1. Career planning and gap analysis

| Input | Output |
|---|---|
| `profiles/master.md`, `profiles/skills.md`, `profiles/stories.md`, `AGENTS.md`, recent `changelog.md`, and 3-5 target-level JDs or grant calls. | Refreshed positioning block in `AGENTS.md`, a dated `jobs/market-watch/{date}-gap-plan.md`, and 2-4 SMART quarterly items in `todo.md`. |

Run this first after bootstrap, then every quarter or after a major career event.

### 2. JD sourcing and market research

| Input | Output |
|---|---|
| `profiles/master.md`, `profiles/skills.md`, the positioning lock in `AGENTS.md`, region, seniority, target title, and channel constraints. | A ranked shortlist of 3-5 opportunities, a `jobs/market-watch/{date}-{theme}.md` watchlist, fit notes, and warm-intro paths when available. |

This workflow finds the right seats before the hub tailors a resume to one of them.

### 3. JD-tailored resume

| Input | Output |
|---|---|
| A JD as text, URL, or PDF; `profiles/master.md`; `profiles/skills.md`; `AGENTS.md`; and relevant verification references. | `jobs/applications/{company}-{role}-{date}/jd.md`, `resume.md`, optional `cover.md`, and starter `prep.md`. |

The resume is regenerated from source profile data, not rewritten from an old resume.

### 4. Interview preparation

| Input | Output |
|---|---|
| The JD or target role, generated `resume.md` when available, `profiles/stories.md`, `profiles/skills.md`, and optional `assessments/`. | `jobs/applications/{company}-{role}-{date}/prep.md` with predicted questions, STAR answer outlines, topic review list, questions for the interviewer, risk points, and optional mock interview notes. |

If the story library is thin, the workflow should surface the gap instead of inventing stories.

### 5. Pre-submission verification

| Input | Output |
|---|---|
| Outgoing resume, proposal, dossier, or other high-stakes text; `verification/references.md`; public sources; and the list of load-bearing claims. | `verification/{date}-web-check.md` with confirmed claims, insufficient-public-evidence items, high-risk items, safer rewrites, and required supporting evidence. |

Run this before senior-role submissions, grant applications, credential / promotion dossiers, and first-time use of any load-bearing claim.

### 6. Grant / research proposal profile

| Input | Output |
|---|---|
| Enabled research track, grant or funding type, call requirements, research direction, `profiles/research.md`, `profiles/master.md`, and verification sources. | A direction-filtered profile saved in `research-archive/{year}-{grant-type}-{direction}.md` and a stricter verification log when claims are externally checkable. |

This workflow is skipped entirely when the research track is not enabled.

### 7. Credential / promotion dossier

| Input | Output |
|---|---|
| Official rulebook or eligibility document, existing credential folder, `profiles/master.md`, `profiles/research.md` when relevant, `verification/references.md`, `todo.md`, and `changelog.md`. | `credential-applications/{credential-name}/` evidence matrix, writing packet, risk log, reviewer-facing concise version, updated unresolved evidence in `todo.md`, and completed work in `changelog.md`. |

The rule is evidence matrix first, polished prose second.

## Sensitive file strategy

Sensitive originals stay out of Git. Examples include IDs, passports, contracts, salary slips, appointment letters, certificates, diplomas, medical or licensing documents, and private recommendation letters.

Use `verification/references.md` to record path references:

```markdown
| Evidence | Location | Notes |
|---|---|---|
| Degree certificate | secure-drive:/career-documents/education/degree-certificate.pdf | Use for education verification only. |
| Employment letter | private-vault:/employment/company-a/appointment-letter.pdf | Confirms title and dates. |
```

The hub may contain summaries, claim wording, and verification logs. It should not contain raw sensitive originals unless the user has deliberately decided that the private repository is the right storage location.

## Interruption recovery

Every session should start by reading:

1. `AGENTS.md`
2. `todo.md`
3. `changelog.md`
4. the workflow-specific folder, such as `jobs/applications/{company}-{role}-{date}/`
5. the latest verification log when the work involves high-stakes claims

When a session stops midway:

- Leave unresolved items in `todo.md` with the next action and blocker.
- Move completed, verified work into `changelog.md`.
- Keep generated drafts in their dated application or dossier folder.
- Restart by asking the agent to continue from the hub state, not from memory.

## Migrating old resumes

Old resumes are useful input, but they should not remain the operating source.

1. Put old resumes under `resumes-archive/`.
2. Convert each PDF, DOCX, or pasted resume into a Markdown copy next to the original.
3. Consolidate factual claims into `profiles/master.md`.
4. Move interview-ready stories into `profiles/stories.md`.
5. Move research outputs into `profiles/research.md` only when the research track is enabled.
6. Record uncertain or unsupported claims in `todo.md` or `verification/references.md`.
7. Generate new resumes from `profiles/master.md` and a specific JD.

The archive preserves history. `profiles/` becomes the source of truth.

## Quarterly review cadence

The default strategic rhythm is quarterly:

- Re-run career planning and gap analysis.
- Re-read the previous `jobs/market-watch/{date}-gap-plan.md`.
- Check whether the target seat, compensation band, region, or life constraints have changed.
- Diff skill, scope, credential, network, and timing gaps.
- Close completed actions into `changelog.md`.
- Keep only active quarterly SMART items in `todo.md`.
- Refresh the positioning lock in `AGENTS.md` if the target changed materially.

The weekly rhythm is tactical: update applications, evidence collection, interview prep, and market-watch notes. The quarterly rhythm is strategic: decide whether the hub is still pointed at the right seat.
