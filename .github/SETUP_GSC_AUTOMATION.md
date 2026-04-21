# Google Search Console sitemap automation — one-time setup

The repo ships a workflow ([`gsc-sitemap-notify.yml`](workflows/gsc-sitemap-notify.yml)) that re-submits `sitemap.xml` to Google Search Console after every successful Pages deploy + weekly on Monday. It needs a service-account key to authenticate. Setup takes ~10 minutes; after that it's fully hands-off.

## 1 · Create a Google Cloud project and service account

1. Open <https://console.cloud.google.com/> and create a project (or reuse an existing one). Project name is purely for your own reference.
2. Enable the **Search Console API** (aka Webmasters API):
   <https://console.cloud.google.com/apis/library/searchconsole.googleapis.com>
   → click **Enable**.
3. Create a service account:
   <https://console.cloud.google.com/iam-admin/serviceaccounts>
   → **Create service account** → pick any name (e.g. `resume-hub-sitemap-bot`) → **Create and continue** → skip role assignment → **Done**.
4. On the service account row → **Keys** tab → **Add key → Create new key → JSON** → download the JSON file. Treat it like a password.

## 2 · Grant the service account access to your Search Console property

1. Open the JSON file you just downloaded; copy the `client_email` field (it looks like `resume-hub-sitemap-bot@<project>.iam.gserviceaccount.com`).
2. In Google Search Console → select the property `https://zenine.github.io/resume-intelligence-hub-site/` → ⚙ **Settings** → **Users and permissions** → **Add user**.
3. Paste the service account email. Permission level: **Owner** (required for sitemap submission via API).

## 3 · Verify locally first (recommended)

Before messing with GitHub secrets, confirm the key actually works against Google's API. Three ways to point the script at your JSON key:

```bash
# (a) env var — one-shot:
export GSC_SERVICE_ACCOUNT="$(cat ~/Downloads/service-account.json)"
node scripts/submit-sitemap.mjs

# (b) custom file path:
export GSC_SERVICE_ACCOUNT_FILE=~/Downloads/service-account.json
node scripts/submit-sitemap.mjs

# (c) default path (no env var needed):
mkdir -p ~/.config/resume-intelligence-hub
mv ~/Downloads/service-account.json ~/.config/resume-intelligence-hub-site/gsc-service-account.json
node scripts/submit-sitemap.mjs
```

Expected output:

```
PUT https://www.googleapis.com/webmasters/v3/sites/.../sitemaps/sitemap.xml → 200 OK
Sitemap submitted / refreshed successfully.
```

If you see `401`, the service account isn't added to the GSC property (or is a non-Owner). If `403`, the Search Console API isn't enabled. Fix before moving on.

## 4 · Add the key as a GitHub Actions secret

1. Open <https://github.com/Zenine/resume-intelligence-hub-site/settings/secrets/actions>.
2. **New repository secret**:
   - Name: `GSC_SERVICE_ACCOUNT`
   - Value: paste the entire contents of the JSON file (the whole `{ ... }` blob, including the `-----BEGIN PRIVATE KEY-----` line breaks). GitHub preserves newlines inside secrets, don't re-quote.
3. Save.

## 5 · Trigger the workflow once

<https://github.com/Zenine/resume-intelligence-hub-site/actions/workflows/gsc-sitemap-notify.yml> → **Run workflow**. Same output as Step 3.

From this point on:
- Every `main` push → VitePress deploys → sitemap re-submitted automatically
- Every Monday 03:00 UTC → sitemap re-submitted (safety net)
- You can re-run manually anytime via the Actions UI

## Security notes

- The JSON key gives anyone who has it **Owner-level** control over the linked Search Console property. Don't commit it, don't paste it anywhere public.
- If it leaks: revoke the key in the Cloud Console service-accounts page, generate a new one, re-add to GitHub secrets.
- The service account is scoped to `https://www.googleapis.com/auth/webmasters` only — it cannot read your Gmail, Drive, or any other Google service.

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| `401 Unauthorized` on PUT | Service account not added to the GSC property, or added with Restricted-User level (needs Owner) |
| `403 Forbidden` | Search Console API not enabled in the Cloud project |
| Workflow says `[skip] no GSC_SERVICE_ACCOUNT env var` | GitHub secret missing or named differently |
| JSON parse error on secret | Secret value was truncated or has extra quoting — paste the raw JSON without outer quotes |
