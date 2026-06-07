# 发布 / 版本映射

本页记录公共站点层如何对应 `resume-intelligence-hub` skill 仓库。它是文档基线，不表示当前本地工作树干净，也不表示这台机器已经检出了 skill 仓库。

## 仓库关系

`resume-intelligence-hub-site` 是站点层。它包含 VitePress 文档、多语言内容、CI 自动化、SEO/GEO 资产，以及 GitHub Pages 发布支持。

skill 本体位于独立的 [`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) 仓库。该仓库负责 `SKILL.md`、`templates/` 和 `workflows/`；这些文件定义用户在 AI IDE 中安装和运行的行为。

## 当前映射

| 层 | 来源 | 版本基线 | 说明 |
| --- | --- | --- | --- |
| 站点层 | [`Zenine/resume-intelligence-hub-site`](https://github.com/Zenine/resume-intelligence-hub-site) | `1b344c2` | 来自本地 `git rev-parse --short HEAD`。当前工作树有未提交改动，所以这里只表示已提交基线。 |
| skill 仓库 | [`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) | 远端 `main` / 已发布 tag | 当前机器上下文中没有本地检出 skill 仓库。不要推断或编造本地 skill commit；以远端仓库和发布 tag 作为单一事实来源。 |

## 再生成策略

以下任一输入变化时，都应重新生成或复核站点：

- skill 仓库行为变化：[`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) 中的 `SKILL.md`、`templates/` 或 `workflows/` 发生变化。
- 站点多语言内容变化：英文、简体中文、日文或繁体中文任一 docs 页面发生变化，并按 `i18n/glossary.md` 核对术语。
- SEO/GEO 资产变化：`llms.txt`、`llms-full.txt`、sitemap 相关自动化、robots 元数据、Open Graph 资产或 discovery links 发生变化。

需要再生成时，应同步更新站点文档，重新生成 `llms-full.txt`，并在同一发布周期把已完成变更记录到 `CHANGELOG.md`。

## 核查说明

使用本页回答一个问题：“站点文档是否匹配我准备安装的 skill 版本？”

要得到精确答案，应把当前站点 commit 与 [`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) 当前远端 `main` 或发布 tag 对比。如果 skill 仓库已有新的行为变化，而站点尚未反映这些变化，应先重新生成站点，再把文档视为当前版本。
