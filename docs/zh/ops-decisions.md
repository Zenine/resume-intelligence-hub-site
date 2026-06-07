# 运维决策

本页记录站点层运维决策，避免未来再生成时丢失上下文。

## LLM / GEO 发现性

站点为每个语言提供一份简短 `llms.txt`：

- `/llms.txt`
- `/zh/llms.txt`
- `/ja/llms.txt`
- `/zh-TW/llms.txt`

每个页面都会在 `transformHead` 中输出按当前语言匹配的 `llms.txt` discovery link。站点也保留一份多语言 `llms-full.txt`，从四套语言文档生成，供偏好单一扩展文本源的 agent 使用。

## IndexNow

IndexNow 作为可选自动化启用。只有仓库 secret `INDEXNOW_KEY` 存在时，workflow 才会提交 URL。

部署 workflow 会把 key 文件临时写入 GitHub Pages artifact 的 `/{base}/{key}.txt`。通知 workflow 只提交 `/resume-intelligence-hub-site/` 下的 URL，并把 `keyLocation` 指向已部署的 key 文件。

IndexNow key 不提交进仓库。

## 链接检查

`scripts/verify.sh` 会运行 `scripts/check-links.py`，以确定性方式检查 Markdown 和 public text asset 里的内部链接。默认验证路径不检查外链，避免 CI 因外部网站短暂不可用而抖动。

## Lighthouse

Lighthouse 审计放在单独的 pull request 和定时 workflow 中。阈值刻意保持保守：

- Performance：低于 0.5 时警告
- Accessibility：低于 0.9 时报错
- Best practices：低于 0.9 时报错
- SEO：低于 0.9 时报错

这样硬失败集中在可访问性、最佳实践和 SEO，同时仍能暴露性能回归。

## 运行时 SVG 内联

当前保留运行时 SVG 内联策略。它能支持主题化图标样式，并在 fetch 或解析失败时保留 `<img>` fallback。改成全部构建期内联需要改变 VitePress feature icon 和 Markdown 图标图片的输出方式，对当前静态站点收益有限。

如果 Lighthouse 或视觉测试显示明显布局偏移、图标闪烁或 fetch 开销，再重新评估。

## 未来 Skill 抽象

可复用的 `meridian-vitepress-ops` skill 应在站点仓库外设计。抽象后的 skill 应参数化：

- 仓库 owner/name
- site URL 和 base path
- brand name 和 project type
- accent color 和 logo assets
- locales
- GSC 和 IndexNow enablement
- `llms.txt` / `llms-full.txt` 生成策略
- i18n glossary 和 drift-check 规则
- checkpoint 结构

本仓库保留为参考实现，而不是抽象 skill package 本身。
