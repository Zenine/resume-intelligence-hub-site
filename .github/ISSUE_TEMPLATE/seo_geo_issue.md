---
name: SEO / GEO issue
about: 报告搜索引擎、AI 检索、llms 文本、结构化数据或 sitemap 相关问题
title: "[SEO/GEO] "
labels: seo, geo
assignees: ""
---

## 问题概述

请说明发现性或索引相关问题，例如搜索结果异常、AI 摘要引用错误、`llms.txt` 过期、sitemap 通知失败、meta 信息不准确等。

## 涉及资产

- [ ] `docs/public/llms.txt`
- [ ] `docs/public/llms-full.txt`
- [ ] `docs/public/robots.txt`
- [ ] `docs/.vitepress/config.mts`
- [ ] sitemap / Google Search Console 通知
- [ ] Open Graph / meta / JSON-LD
- [ ] 其他：

## 影响范围

- 页面或 URL：
- 语言版本：en / zh / ja / zh-TW / 全部
- 观察渠道：Google Search Console / 搜索结果 / AI 检索 / 本地构建 / 其他

## 当前表现

请描述当前看到的问题。可以附截图、搜索结果链接、CI run 或日志摘要。

## 期望表现

请说明正确的索引、摘要或发现性行为应该是什么。

## 验证方式

如果涉及构建，请运行：

```bash
scripts/verify.sh
```

如果涉及 `llms-full.txt`，请说明是否需要重新生成或检查 freshness。

## 补充信息

请补充相关时间、提交、站点 URL 或 Search Console 状态。不要粘贴密钥、token 或服务账号 JSON。
