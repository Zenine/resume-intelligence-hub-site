---
layout: home
title: 給 AI IDE 用的 career skill

hero:
  name: "Resume Intelligence Hub"
  text: "給 AI IDE 用的 career skill"
  tagline: "一句話在你的 AI IDE 裡搭起私人職涯中樞——履歷客製、面試準備、研究計畫申報、職稱/資質材料，全在同一個 Git 儲存庫裡。"
  image:
    src: /hero.svg
    alt: Resume Intelligence Hub
  actions:
    - theme: brand
      text: 快速開始 →
      link: /zh-TW/quick-start
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/Zenine/resume-intelligence-hub

features:
  - icon:
      src: /icons/compass.svg
      width: 48
      height: 48
    title: 單一事實來源
    details: 所有履歷事實只在 profiles/ 裡寫一份。每份履歷、求職信、申報書都是當場依它衍生的——不用維護七八個版本的履歷。

  - icon:
      src: /icons/target.svg
      width: 48
      height: 48
    title: 職涯羅盤
    details: 鎖定向上 1–2 級的 stretch 目標，寫在 AGENTS.md 最上面，之後每份履歷都按這個走。每一季按四維框架（技能 / 範圍 / 背書 / 人脈）攤開落差，轉成這一季能跑的 SMART 計畫。

  - icon:
      src: /icons/fork.svg
      width: 48
      height: 48
    title: 多軌分離
    details: 求職履歷、研究計畫申報書、職稱/資質/晉升材料的格式、語氣、證據要求完全不同。資料來源和工作流程分開，避免口徑互相污染。

  - icon:
      src: /icons/shield.svg
      width: 48
      height: 48
    title: 投遞前查核
    details: 衝高階職、申報研究計畫或做職稱/資質審查前，把材料裡每條聲明（學歷、職稱、計畫編號、數字）逐條在公開來源過一遍，把風險項提前改掉。

  - icon:
      src: /icons/globe.svg
      width: 48
      height: 48
    title: 跨 IDE 通用
    details: 核心指令檔案走 AGENTS.md 這個跨 IDE 標準。Claude Code、Cursor、Codex、Cline、Windsurf、GitHub Copilot 都能讀，換工具不用重搭。

  - icon:
      src: /icons/book.svg
      width: 48
      height: 48
    title: 成熟方法論背書
    details: Google XYZ 公式、STAR、BEI、Heilmeier 9 問、stretch target、三角驗證——每一條都點出處，方便你想深入時自己順藤摸瓜。
---

<!--
  Translation status:
  Source file : docs/index.md
  Source commit: 9a75a0b
  Translated  : 2026-04-21
  Status      : up-to-date
-->

<div class="vp-doc" style="max-width: 960px; margin: 48px auto 96px; padding: 0 24px;">

## 安裝

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

然後在你常用的 AI IDE 裡說任意一句：

```
> 幫我搭個履歷庫                           # 從零開一個 hub
> 幫我針對這個 JD 生成履歷                 # 客製履歷
> 看看有什麼合適的機會                     # 讓 AI 主動搜職缺
> 針對這個職位幫我準備面試                 # 模擬面試 + 準備故事
> 投遞前幫我核查一下公開資料               # 公開資料交叉驗證
> 幫我準備職稱 / 資質 / 晉升材料           # 證據矩陣 + 申報敘事
```

## 它和其他履歷 skill 不一樣在哪

市面上多數履歷類 skill 是一次性工具——貼 JD、出履歷，用完就散。這個不是。它會讓你把幾個月的求職、面試、（如果要的話）研究計畫申報和職稱/資質/晉升材料都沉澱在同一個私人 Git 儲存庫裡，Agent 每次對話先讀這個儲存庫，產出會被你之前寫下的定位一直約束著。完整邏輯寫在 [SKILL.md](https://github.com/Zenine/resume-intelligence-hub/blob/main/SKILL.md)。

## 搭配使用的專精 skill

具體某一次的細活可以疊加生態圈裡的小工具：

- [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) — ATS 關鍵字深度最佳化
- [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) — LinkedIn 檔案打磨
- [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) — Anthropic 官方面試準備
- [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) — Lenny 的職涯轉型框架

</div>
