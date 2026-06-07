# Google Search Console sitemap automation — 一次性设置

本仓库包含一个 workflow（[`gsc-sitemap-notify.yml`](workflows/gsc-sitemap-notify.yml)），会在每次 GitHub Pages 部署成功后以及每周一重新把 `sitemap.xml` 提交到 Google Search Console。它需要 service account key 完成认证。一次性设置大约需要 10 分钟，之后会自动运行。

## 1 · 创建 Google Cloud project 和 service account

1. 打开 <https://console.cloud.google.com/>，创建一个 project，或复用已有 project。project 名称只用于你自己识别。
2. 启用 **Search Console API**（也叫 Webmasters API）：
   <https://console.cloud.google.com/apis/library/searchconsole.googleapis.com>
   → 点击 **Enable**。
3. 创建 service account：
   <https://console.cloud.google.com/iam-admin/serviceaccounts>
   → **Create service account** → 任意命名（例如 `resume-hub-sitemap-bot`）→ **Create and continue** → 跳过 role assignment → **Done**。
4. 在 service account 行里打开 **Keys** tab → **Add key → Create new key → JSON** → 下载 JSON 文件。这个文件等同密码处理。

## 2 · 授权 service account 访问 Search Console property

1. 打开刚下载的 JSON 文件，复制 `client_email` 字段（形如 `resume-hub-sitemap-bot@<project>.iam.gserviceaccount.com`）。
2. 在 Google Search Console 中选择 property `https://zenine.github.io/resume-intelligence-hub-site/` → ⚙ **Settings** → **Users and permissions** → **Add user**。
3. 粘贴 service account email。权限级别选择 **Owner**，API 提交 sitemap 需要该权限。

## 3 · 先在本地验证（推荐）

在配置 GitHub secrets 前，先确认 key 能正常调用 Google API。优先用环境变量指向 key，让 key 位置保持在仓库外。不要提交 JSON key。

```bash
# (a) 环境变量，单次使用，优先推荐：
export GSC_SERVICE_ACCOUNT="$(cat ~/Downloads/service-account.json)"
node scripts/submit-sitemap.mjs

# (b) 自定义文件路径，本地脚本优先推荐：
export GSC_SERVICE_ACCOUNT_FILE=~/Downloads/service-account.json
node scripts/submit-sitemap.mjs

# (c) scripts/submit-sitemap.mjs 使用的 fallback 默认路径：
mkdir -p ~/.config/resume-intelligence-hub-site
mv ~/Downloads/service-account.json ~/.config/resume-intelligence-hub-site/gsc-service-account.json
node scripts/submit-sitemap.mjs
```

预期输出：

```
PUT https://www.googleapis.com/webmasters/v3/sites/.../sitemaps/sitemap.xml → 200 OK
Sitemap submitted / refreshed successfully.
```

如果看到 `401`，通常是 service account 没有添加到 GSC property，或权限不是 Owner。如果看到 `403`，通常是 Search Console API 没有启用。先修复再继续。

## 4 · 把 key 添加为 GitHub Actions secret

1. 打开 <https://github.com/Zenine/resume-intelligence-hub-site/settings/secrets/actions>。
2. **New repository secret**：
   - Name: `GSC_SERVICE_ACCOUNT`
   - Value: 粘贴整个 JSON 文件内容（完整 `{ ... }`，包括 `-----BEGIN PRIVATE KEY-----` 的换行）。GitHub secrets 会保留换行，不要额外加引号。
3. 保存。

## 5 · 手动触发一次 workflow

<https://github.com/Zenine/resume-intelligence-hub-site/actions/workflows/gsc-sitemap-notify.yml> → **Run workflow**。预期输出与第 3 步一致。

之后：
- 每次 `main` push → VitePress 部署 → 自动重新提交 sitemap
- 每周一 03:00 UTC → 自动重新提交 sitemap（兜底）
- 需要时可以随时在 Actions UI 手动重跑

## 安全说明

- JSON key 会让持有者获得已绑定 Search Console property 的 **Owner-level** 控制权。不要提交它，也不要粘贴到任何公开位置。
- 本地 agent 工作如需固定私有 key 路径，只能写在本机私有配置中。不要把个人机器绝对路径写入这个公开仓库。
- 如果 key 泄露：到 Cloud Console 的 service accounts 页面撤销该 key，生成新 key，并重新添加到 GitHub secrets。
- service account scope 仅限 `https://www.googleapis.com/auth/webmasters`，不能读取 Gmail、Drive 或其他 Google 服务。

## 故障排查

| 现象 | 可能原因 |
|---|---|
| PUT 返回 `401 Unauthorized` | service account 未添加到 GSC property，或权限是 Restricted-User（需要 Owner） |
| `403 Forbidden` | Cloud project 未启用 Search Console API |
| Workflow 提示 `[skip] no GSC_SERVICE_ACCOUNT env var` | GitHub secret 缺失或命名不一致 |
| secret JSON parse error | secret 值被截断或多加了引号；应粘贴无外层引号的原始 JSON |
