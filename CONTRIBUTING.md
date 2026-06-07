# 贡献指南

感谢参与 `resume-intelligence-hub-site`。本仓库是 `resume-intelligence-hub` skill 的站点层，包含 VitePress 文档、SEO / GEO 资产和 GitHub Pages 自动化。

## 改动范围

- `docs/` 是 VitePress 站点源码，当前包含 en / zh / ja / zh-TW 四套语言内容。
- `i18n/glossary.md` 是翻译术语表和术语一致性的单一参考。
- `scripts/` 是站点运维脚本，例如 `llms-full.txt` 生成和 sitemap 通知。
- `.github/` 是 GitHub Actions、站点资产和仓库治理文件。

## 四语言同步规则

涉及文档正文、标题、导航、FAQ、示例或公开说明时，必须让四种语言保持等价：

- 英文根目录文档作为 en 版本。
- 简体中文位于 `docs/zh/`。
- 日文位于 `docs/ja/`。
- 繁体中文位于 `docs/zh-TW/`。

不要只更新一个语言版本，除非该改动确实只影响某个语言的翻译错误或排版问题。即便是单语言修复，也应确认其他语言没有同类问题。

## 翻译与术语

翻译或改写任何术语前，先查 `i18n/glossary.md`。已有术语必须沿用表中的译法；新增术语应先补充 glossary，再同步到相关语言内容。

特别注意：

- `Resume Intelligence Hub`、`resume-intelligence-hub`、`Meridian` 等品牌或项目名按 glossary 保留。
- `workflow`、`single source of truth`、`pre-submission verification`、`attribution boundary` 等概念按 glossary 译法处理。
- 繁体中文应做台湾用语检查，例如“履歷”“專案”“軟體”“預設”“儲存庫”。

## 验证入口

贡献前优先运行项目级验证入口：

```bash
scripts/verify.sh
```

该脚本会检查 `llms-full.txt` freshness、root/public 副本一致性、四语言页面与 heading 结构漂移，并运行 VitePress build。只需要局部排查时，可以单独运行对应子命令。

## 构建产物边界

不要提交 `docs/.vitepress/dist/`。它是 VitePress 构建产物，应由本地构建或 GitHub Actions 重新生成。

如果构建产生 `docs/.vitepress/.temp/`，本地验证后可以清理它；不要把临时目录作为贡献内容提交。

## 提交前检查

提交或发 PR 前请确认：

- 四语言内容是否需要同步，且已同步。
- 新术语是否已记录到 `i18n/glossary.md`。
- `scripts/verify.sh` 已通过。
- 未包含 `docs/.vitepress/dist/`、密钥、token、OAuth 凭证或个人机器绝对密钥路径。
- 如果改动完成了 TODO 中的事项，后续应将完成事实记录到 `CHANGELOG.md`，不要让同一事项同时作为已完成成果和待办保留。
