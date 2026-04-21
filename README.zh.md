<!--
  Translation status:
  Source file : README.md
  Translated  : 2026-04-21
  Status      : up-to-date
-->

> **语言 / Language**: [English](README.md) · **简体中文** · [日本語](README.ja.md) · [繁體中文](README.zh-TW.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Stars](https://img.shields.io/github/stars/Zenine/resume-intelligence-hub-site?style=flat-square&color=gold)](https://github.com/Zenine/resume-intelligence-hub-site/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/Zenine/resume-intelligence-hub-site?style=flat-square)](https://github.com/Zenine/resume-intelligence-hub-site/commits/main)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Zenine/resume-intelligence-hub-site/pulls)
[![Docs](https://img.shields.io/badge/文档-在线阅读-4a9eff?style=flat-square&logo=vitepress&logoColor=white)](https://zenine.github.io/resume-intelligence-hub-site/zh/)
[![Powered by Meridian](https://img.shields.io/badge/Powered%20by-Meridian-8b5cf6?style=flat-square)](https://github.com/lordmos/meridian)

<div align="center">
  <img src=".github/assets/hero.svg" alt="Resume Intelligence Hub" width="120" />
</div>

# resume-intelligence-hub-site

[**resume-intelligence-hub**](https://github.com/Zenine/resume-intelligence-hub) skill 的落地页、VitePress 文档站与 CI 自动化——一个帮你搭起个人职业发展中枢的 AI agent。

## 快速开始

> 完整文档 → [zenine.github.io/resume-intelligence-hub-site/zh/](https://zenine.github.io/resume-intelligence-hub-site/zh/)

**安装 skill：**

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

**然后在 AI IDE 里说：**

> **帮我搭个简历库**

AI 会问你 7 个问题，然后搭好你的私有职业 hub。你只需要：① 回答问卷 → ② 审阅生成的 hub → ③ 开始使用。

**中断后恢复** → 告诉 AI：`继续完善档案`

## 核心功能

- **单一事实来源** — `profiles/` 是权威数据层；生成的简历都是衍生物，从不手动编辑
- **职业指南针** — 把高 1-2 级的目标锁在 `AGENTS.md` 顶部，每季度盘一次四维度差距
- **双轨分离** — 求职投递和课题申报数据源彻底分开；初始化时可选是否开启科研线
- **投递前核查** — 高风险投递前对每一条承重声明做公开资料三角验证
- **跨 IDE 通用** — 通过 AGENTS.md 支持 Claude Code、Cursor、Codex、Cline、Windsurf、GitHub Copilot
- **有方法论支撑** — Google XYZ 公式、STAR、BEI、Heilmeier 九问、拉伸目标启发式、三角验证

## 和其他简历 skill 的不同

大多数简历 skill 是一次性生成器——贴 JD 出简历。这个 skill 搭建的是一个**持久化的私有仓库**，让你在数月的求职、面试、课题申报过程中持续迭代。AI 每次对话都会读取仓库，并根据你的定位锁偏置输出。

## 目录结构

```
docs/       VitePress 站点源码（四语言：en / zh / ja / zh-TW）
scripts/    CI 自动化 — 站点地图通知 + llms-full.txt 生成器
i18n/       glossary.md — 翻译漂移参考
.github/    部署 workflow + GSC 站点地图通知 + 配置指南
```

一次性 Google Search Console 自动化配置见 [`.github/SETUP_GSC_AUTOMATION.md`](.github/SETUP_GSC_AUTOMATION.md)。

## 配套 Skill

在这个 hub 之上叠加特定场景的专精 skill：

- [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) — ATS 深度优化
- [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) — LinkedIn 主页优化
- [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) — Anthropic 官方面试准备
- [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) — Lenny 的职业转型框架

## License

MIT — 与 skill 本体相同。

---

<sub>Built with [Meridian](https://github.com/lordmos/meridian) · open-source ops toolkit for Agent projects</sub>
