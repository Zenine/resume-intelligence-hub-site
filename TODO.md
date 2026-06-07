# TODO

更新时间：2026-06-07

本文件合并了本轮内部审阅和另一位专家的审阅意见。已经完成并验证的事项不要继续留在 TODO；应移入 `CHANGELOG.md` 或项目约定的完成记录。

## 独立性视图

### 可独立单项完成

- P4-4 评估 `security.txt` 和 `humans.txt`。

### 适合打包成一轮完成

- **LLM/GEO 索引包**：P2-4。
- **工程验证包**：P3-6。

### 有依赖或需要先确认

- P2-5 IndexNow：需要确认是否启用 Bing/IndexNow，以及 key 存放和 workflow 触发策略。
- P3-6 链接检查：需要先判断当前外链是否稳定，或选择 `lychee` / `linkinator`。
- P3-8 Lighthouse / 可访问性检查：需要确认阈值，否则容易引入噪声 CI。
- P3-9 构建期 SVG 内联：需要先评估当前运行时方案是否真的造成首屏闪动。
- P4-4 `security.txt` / `humans.txt`：需要确认公开联系邮箱或披露入口。
- P5 全部：属于后续抽象 skill 的独立项目，最好等当前站点 TODO 至少完成 P0-P3 后再启动。

## P2 — SEO / GEO / 发现性

- [ ] **P2-4 评估并实现 per-locale `llms.txt`。**
  - 预期改动：提供 `/llms.txt` 以及 `/zh/llms.txt`、`/ja/llms.txt`、`/zh-TW/llms.txt`，或明确记录为什么保留单一 multilingual `llms-full.txt`。
  - 验证：页面 head 中的 discovery links 指向预期的语言版本文本源。
  - 独立性：建议并入 LLM/GEO 索引包。

- [ ] **P2-5 增加 Bing / IndexNow 通知。**
  - 预期改动：如确认启用，新增 `scripts/submit-indexnow.mjs` 和 workflow step 或单独 workflow。
  - 验证：dry-run 或手动运行文档能确认行为，且不暴露 key。
  - 独立性：需要先确认是否启用和 key 策略。

## P3 — 工程化与 CI

- [ ] **P3-6 重新评估 `ignoreDeadLinks: true`。**
  - 预期改动：当前链接干净时关闭该选项，或新增 `lychee` / `linkinator` link-check workflow。
  - 验证：可复现命令能发现坏链接。
  - 独立性：需要先选择工具和容忍策略。

- [ ] **P3-8 增加 Lighthouse / 可访问性检查。**
  - 预期改动：增加轻量 CI 或定时检查，覆盖 performance、SEO、accessibility。
  - 验证：构建站点可被审计，明显回归会被发现。
  - 独立性：需先确认阈值。

- [ ] **P3-9 评估构建期 SVG 内联。**
  - 问题：`inline-svg.ts` 当前运行时 fetch + DOMParser 替换图标。
  - 预期改动：决定保留运行时方案，或改成构建期 SVG 注入 + runtime fallback。
  - 验证：明暗主题图标正常，无明显布局闪动。
  - 独立性：需要先评估现状收益，低优先级。

## P4 — 社区与仓库治理

- [ ] **P4-4 评估 `security.txt` 和 `humans.txt`。**
  - 预期改动：如项目需要公开联系/披露入口，则添加到 `docs/public/`。
  - 验证：构建后文件可被访问。
  - 独立性：需先确认公开联系邮箱或披露方式。

## P5 — 未来可复用 Skill 抽象

- [ ] **P5-1 探索抽象 `meridian-vitepress-ops` skill。**
  - 目的：把当前 repo 的 Meridian 站点再生成模式抽成可复用 skill。
  - 预期范围：主题模板、AI context files、llms generator、sitemap 通知、i18n glossary schema、SEO/GEO head 生成、checkpoint workflow。
  - 验证：起草 `SKILL.md`，并区分可复用模板与项目特定内容。
  - 独立性：后续独立项目；不建议和当前站点修复并行混做。

- [ ] **P5-2 参数化 Meridian 项目特定值。**
  - 预期输入模型：repo、site URL、base path、brand name、project type、accent color、logo letter、locales、GSC/IndexNow enablement、llms generation policy。
  - 验证：硬编码的 `Zenine/resume-intelligence-hub-site` 值集中在配置或明确标注为项目特定。
  - 独立性：依赖 P5-1 的抽象范围。

- [ ] **P5-3 升级 checkpoint 为机器可读格式。**
  - 预期改动：增加 YAML frontmatter 或结构化 status section，记录 Meridian version、skill version、completed tasks、外部验证状态。
  - 验证：未来 agent 能不解析散文就判断下一步。
  - 独立性：可独立研究，但最好和 P5-1 一起设计。
