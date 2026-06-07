# TODO

更新时间：2026-06-07

当前无开放仓库内 TODO。

本轮内部审阅和另一位专家的审阅意见已经全部处理，并已迁移到 `CHANGELOG.md`、`docs/ops-decisions.md`、workflow、脚本或公开站点资产中。

## 已收口事项

- P2-4 per-locale `llms.txt`：已提供 `/llms.txt`、`/zh/llms.txt`、`/ja/llms.txt`、`/zh-TW/llms.txt`，并在页面 head 中按语言输出 discovery link。
- P2-5 IndexNow：已新增可选 IndexNow workflow 和提交脚本；无 `INDEXNOW_KEY` secret 时安全跳过。
- P3-6 链接检查：已新增确定性的内部链接检查，并接入 `scripts/verify.sh`。
- P3-8 Lighthouse / 可访问性检查：已新增 Lighthouse workflow 和保守阈值配置。
- P3-9 构建期 SVG 内联评估：已记录保留运行时 SVG 内联的决策和重新评估条件。
- P4-4 `security.txt` / `humans.txt`：已添加公开文件；安全披露入口使用 GitHub Security Advisories。
- P5-1 / P5-2：未来 `meridian-vitepress-ops` skill 抽象已记录为站点外项目，并明确参数化范围。
- P5-3：`checkpoint.md` 已增加机器可读 frontmatter，并保留人类可读进度记录。

## 外部配置状态

- Google Search Console：verification meta 已配置；控制台真实验证状态仍需到 GSC 外部确认。
- IndexNow：仓库已支持；启用前需要在 GitHub Actions secrets 中添加 `INDEXNOW_KEY`。
- Lighthouse：workflow 已配置；首次运行结果需在 GitHub Actions 中观察，如阈值过严再按实际报告调整。
