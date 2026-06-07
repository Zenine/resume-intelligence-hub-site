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
