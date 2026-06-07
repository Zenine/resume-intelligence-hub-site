# CHANGELOG

本文件记录 `resume-intelligence-hub-site` 站点层的长期变更。`checkpoint.md` 仍用于 Meridian 再生成流程的会话进度，不替代这里的发布记录。

## 2026-06-07

### 已知历史起点

- 站点完成 Meridian v3.3 再生成，作为 `resume-intelligence-hub` skill 的 VitePress 多语言公共入口。
- 补齐 SEO / GEO 发现性基础，包括 `llms.txt`、`llms-full.txt`、`robots.txt`、Open Graph 图片和 sitemap 通知相关脚本。
- 增加 Google Search Console verification meta，支持后续 sitemap 提交通知自动化。
- 整理站点后续 TODO 范围，区分正确性修复、多语言一致性、SEO / GEO、工程化、社区治理和未来 skill 抽象。

### 本轮新增

- 修正 `llms.txt` / `docs/public/llms.txt` 中过期的 interview 题数和设计哲学条数描述。
- 更新 Search Console checkpoint 状态：Google verification meta 已配置，GSC 控制台真实验证状态仍需外部确认；Bing 保留待确认。
- 将 GSC 自动化设置文档改为简体中文，并对齐本地 service account key fallback 路径与环境变量用法。
- 统一 Meridian 触发句为 `set up its ops infrastructure`。
- 将 VitePress `theme-color` 调整为 Glow 主色 `#7c3aed`。
- GitHub Pages workflow 改用 `npm ci`，提升 lockfile 一致性。
- GitHub Pages workflow 改为运行 `scripts/verify.sh`，让 CI 同时覆盖 `llms-full.txt` freshness、四语言结构漂移和 VitePress build。
- 为 docs 包增加 Node engine `>=20` 和 `packageManager` 元数据。
- 新增 Dependabot 配置，覆盖 `docs/` 下的 npm 依赖。
- 新增站点级 `CHANGELOG.md`，为未来完成的 TODO 提供长期记录位置。
- 新增 `CONTRIBUTING.md`，记录四语言同步、术语表、项目级验证入口和构建产物提交边界。
- 新增 GitHub issue templates：bug report、feature request、translation issue、SEO / GEO issue。
- 将 `docs/.vitepress/.temp` 加入 `.gitignore`，避免 VitePress 本地临时产物被误提交。
- 修正 `scripts/generate-llms-full.py` 的语言收集逻辑，新增 `--locale`、`--all-locales` 和 `--output-dir`，并保留 `--all-langs` 兼容别名。
- 重新生成 `llms-full.txt` / `docs/public/llms-full.txt`，all-locale 输出已包含简体中文、日文和繁体中文页面来源。
- 新增项目级验证入口 `scripts/verify.sh`，检查 `llms-full.txt` freshness、root/public 一致性、四语言页面与 heading 结构漂移，并运行 VitePress build。
- 新增 `scripts/check-i18n-drift.py`，用于检测四语言页面集合和标题结构漂移，并接入项目级验证入口。
- 在 VitePress `transformHead` 中增加页面级 `hreflang` alternates、Open Graph locale metadata 和 FAQPage JSON-LD。
- 补齐日文 FAQ 的 AI IDE 支持问题，并调整简中 / 繁中 frameworks 标题层级，使四语言页面 heading 结构通过 i18n drift 检测。
- 补齐日文和繁中 README 中缺失的 GSC 设置链接、差异说明和配套 skill 说明。
- 新增四语言 `skill-contract` 页面，说明 skill 生成 hub 的目录结构、核心文件职责、workflow 输入输出、敏感文件边界、恢复、迁移和季度复盘。
- 新增四语言 `examples` 页面，提供合成的初始化目录、成就片段、JD 定制简历、STAR 故事、verification log 和季度 SMART 计划样例。
- 新增四语言 `release` 页面，记录站点层与 skill repo 的版本映射和再生成策略。
- 将 `skill-contract`、`examples` 和 `release` 接入四语言 VitePress nav 或 sidebar，并同步更新 `llms.txt` / `llms-full.txt` 发现性文本。
- 新增 per-locale `llms.txt`，覆盖 `/llms.txt`、`/zh/llms.txt`、`/ja/llms.txt`、`/zh-TW/llms.txt`，并让页面 head 按当前语言输出 discovery link。
- 新增可选 IndexNow 自动化：deploy workflow 在存在 `INDEXNOW_KEY` secret 时把 key file 写入 Pages artifact，`indexnow.yml` 在部署成功、手动触发或每周定时运行时提交站点 URL；无 key 时安全跳过。
- 新增 `scripts/check-links.py` 并接入 `scripts/verify.sh`，默认确定性检查内部链接，不在主验证路径检查易抖动外链。
- 新增 Lighthouse workflow 和 `lighthouserc.cjs`，对 performance、accessibility、best practices、SEO 设置保守阈值。
- 新增四语言 `ops-decisions` 页面，记录 LLM/GEO discovery、IndexNow、链接检查、Lighthouse、运行时 SVG 内联和未来 skill 抽象决策。
- 新增 `security.txt` 和 `humans.txt` 公开站点资产，安全披露入口使用 GitHub Security Advisories。
- 将 `checkpoint.md` 升级为带机器可读 frontmatter 的进度文件，并将本轮 TODO 全部收口。

### TODO 收口映射

- P2-4 per-locale `llms.txt`：已实现四语言 `llms.txt`，并由页面 head 按当前语言输出 discovery link。
- P2-5 Bing / IndexNow 通知：已实现可选 IndexNow workflow 和提交脚本；未配置 `INDEXNOW_KEY` 时安全跳过，不暴露 key。
- P3-6 `ignoreDeadLinks` / 链接检查：已新增确定性的内部链接检查脚本，并接入 `scripts/verify.sh`。
- P3-8 Lighthouse / 可访问性检查：已新增 Lighthouse workflow 和保守阈值配置。
- P3-9 构建期 SVG 内联评估：已在四语言 `ops-decisions` 中记录保留运行时 SVG 内联的决策、理由和重新评估条件。
- P4-4 `security.txt` / `humans.txt`：已添加公开站点资产，安全披露入口使用 GitHub Security Advisories。
- P5-1 / P5-2 未来可复用 skill 抽象：已在四语言 `ops-decisions` 中记录站点外抽象边界和参数化范围。
- P5-3 机器可读 checkpoint：已为 `checkpoint.md` 增加 YAML frontmatter，并保留人类可读进度记录。
