<!--
  Translation status:
  Source file : README.md
  Translated  : 2026-04-21
  Status      : up-to-date
-->

> **語言 / Language**: [English](README.md) · [简体中文](README.zh.md) · [日本語](README.ja.md) · **繁體中文**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Stars](https://img.shields.io/github/stars/Zenine/resume-intelligence-hub-site?style=flat-square&color=gold)](https://github.com/Zenine/resume-intelligence-hub-site/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/Zenine/resume-intelligence-hub-site?style=flat-square)](https://github.com/Zenine/resume-intelligence-hub-site/commits/main)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Zenine/resume-intelligence-hub-site/pulls)
[![Docs](https://img.shields.io/badge/文件-線上閱讀-4a9eff?style=flat-square&logo=vitepress&logoColor=white)](https://zenine.github.io/resume-intelligence-hub-site/zh-TW/)
[![Powered by Meridian](https://img.shields.io/badge/Powered%20by-Meridian-8b5cf6?style=flat-square)](https://github.com/lordmos/meridian)

<div align="center">
  <img src=".github/assets/hero.svg" alt="Resume Intelligence Hub" width="120" />
</div>

# resume-intelligence-hub-site

[**resume-intelligence-hub**](https://github.com/Zenine/resume-intelligence-hub) skill 的落地頁、VitePress 文件站與 CI 自動化——一個幫你搭起個人職涯發展中樞的 AI agent。

## 快速開始

> 完整文件 → [zenine.github.io/resume-intelligence-hub-site/zh-TW/](https://zenine.github.io/resume-intelligence-hub-site/zh-TW/)

**安裝 skill：**

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

**然後在 AI IDE 裡說：**

> **幫我建職涯庫**

AI 會問你 7 個問題，然後搭好你的私有職涯 hub。你只需要：① 回答問卷 → ② 審閱生成的 hub → ③ 開始使用。

**中斷後恢復** → 告訴 AI：`繼續完善我的檔案`

## 核心功能

- **單一事實來源** — `profiles/` 是權威資料層；生成的履歷都是衍生物，從不手動編輯
- **職涯指南針** — 把高 1-2 級的挑戰目標鎖在 `AGENTS.md` 頂部，每季盤一次四維度差距
- **雙軌分離** — 求職投遞和課題申報資料來源徹底分開；初始化時可選是否開啟科研軌
- **投遞前查核** — 高風險投遞前對每一條承重聲明做公開資料三角驗證
- **跨 IDE 通用** — 透過 AGENTS.md 支援 Claude Code、Cursor、Codex、Cline、Windsurf、GitHub Copilot
- **有方法論支撐** — Google XYZ 公式、STAR、BEI、Heilmeier 九問、挑戰目標啟發式、三角驗證

## 和其他履歷 skill 的不同

大多數履歷 skill 是一次性生成器——貼 JD 出履歷。這個 skill 搭建的是一個**持久化的私有儲存庫**，讓你在數個月的求職、面試、課題申報過程中持續迭代。

## 目錄結構

```
docs/       VitePress 站點源碼（四語言：en / zh / ja / zh-TW）
scripts/    CI 自動化 — 站點地圖通知 + llms-full.txt 生成器
i18n/       glossary.md — 翻譯漂移參考
.github/    部署 workflow + GSC 站點地圖通知 + 設定指南
```

## 配套 Skill

- [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) — ATS 深度優化
- [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) — LinkedIn 主頁優化
- [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) — Anthropic 官方面試準備
- [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) — Lenny 的職涯轉型框架

## 授權條款

MIT — 與 skill 本體相同。

---

<sub>Built with [Meridian](https://github.com/lordmos/meridian) · open-source ops toolkit for Agent projects</sub>
