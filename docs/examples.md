# Examples

This page shows what `resume-intelligence-hub` can produce after bootstrapping a private career hub. Every sample below is synthetic and anonymized: fictional names, fictional organizations, fictional metrics, and relative paths only.

## Safety note

Use these examples as format references, not as claims to copy. A real hub should keep private source materials out of public repos, separate verified facts from drafts, and run pre-submission verification before any high-stakes application.

## Initialized hub tree

```text
career-hub/
├── AGENTS.md
├── README.md
├── todo.md
├── changelog.md
├── profiles/
│   ├── master.md
│   ├── evidence-index.md
│   └── positioning.md
├── applications/
│   └── 2026-04-15-exampleworks-platform-lead/
│       ├── jd.md
│       ├── resume.md
│       ├── cover-letter.md
│       └── verification-log.md
├── interviews/
│   └── star-stories.md
├── planning/
│   ├── quarterly-review-2026-q2.md
│   └── smart-plan-2026-q3.md
└── archive/
    └── imported-resumes/
```

## profiles/master.md achievement snippet

```markdown
### Platform reliability and incident reduction

- Led a five-person platform squad to redesign the alert-routing workflow for a fictional analytics product, reducing duplicate alerts from 43% to 12% over two quarters.
- Built a weekly incident review template that separated personal ownership, team outcome, customer impact, and unresolved risk.
- Evidence status: internally documented; public-source cross-check required before external use.
- Attribution boundary: owned workflow design and facilitation; reliability gains were delivered by the full platform squad.
```

## JD-tailored resume snippet

```markdown
## Selected Experience

**Senior Platform Engineer, Fictional Product Group**

- Matched the JD requirement for "cross-functional incident leadership" by highlighting a synthetic platform reliability project: coordinated engineering, support, and product stakeholders across a two-quarter alert-routing redesign.
- Reframed generic "built dashboards" language into JD-specific scope: created service-health views used in weekly review meetings for prioritization and escalation.
- Removed unrelated mobile UI work because the JD emphasized backend reliability, stakeholder coordination, and operational metrics.

## Positioning lock

Target: Platform Lead for a mid-size B2B software team.
Signal to reinforce: operational judgment, incident systems, and clear attribution boundaries.
```

## STAR story

```markdown
### Story: Reducing noisy escalation paths

**Situation**: A fictional customer operations team received repeated incident notifications from overlapping monitoring rules.

**Task**: Clarify the escalation path without hiding high-severity alerts.

**Action**: Interviewed support leads, mapped alert ownership, removed duplicate routing rules, and introduced a weekly review with a shared incident taxonomy.

**Result**: In this synthetic example, duplicate alerts dropped from 43% to 12%, on-call review time fell by 30%, and the team adopted the taxonomy for future service launches.

**Follow-up interview angle**: Emphasize judgment under ambiguity, not just tooling.
```

## Verification log

```markdown
# Pre-submission verification log

Application: 2026-04-15-exampleworks-platform-lead
Reviewer: AI agent + human review
Status: needs human confirmation before submission

| Claim | Source type | Check | Result | Next action |
|-------|-------------|-------|--------|-------------|
| Reduced duplicate alerts from 43% to 12% | Internal dashboard summary | Compare source period and denominator | Draft only | Confirm export is allowed |
| Led five-person squad | Team roster note | Confirm role and dates | Plausible | Ask former manager for wording |
| Created weekly incident review template | Internal process doc | Check ownership boundary | Verified draft | Keep "created"; avoid claiming executive mandate |
| Customer impact language | Support ticket themes | Avoid unsupported revenue or churn claims | Needs evidence | Remove business-impact claim |
```

## Quarterly SMART plan

```markdown
# SMART plan: 2026 Q3

Positioning target: Platform Lead for a mid-size B2B software team.

1. Publish two internal reliability writeups by 2026-08-15, each reviewed by one engineering manager and one support lead.
2. Run one mock interview per month focused on incident judgment, tradeoff communication, and stakeholder alignment.
3. Convert three strongest reliability achievements into STAR stories with verified attribution boundaries by 2026-09-10.
4. Source 12 Platform Lead or Staff Platform Engineer JDs by 2026-09-30 and tag each by scope, team size, and required evidence.
5. Close one credential gap by completing a systems-design review packet and recording lessons in `planning/quarterly-review-2026-q3.md`.
```

## How to use these examples

The useful pattern is not the exact wording. It is the separation of source facts, generated drafts, interview stories, verification evidence, and quarterly planning. That separation lets the AI agent improve outputs over time without turning every application into a one-off rewrite.
