---
layout: home
title: 给 AI IDE 用的 career skill

hero:
  name: "Resume Intelligence Hub"
  text: "给 AI IDE 用的 career skill"
  tagline: "一句话在你的 AI IDE 里搭起私人职业中枢——简历定制、面试准备、课题申报，全在同一个 Git 仓库里。跨 Claude Code、Cursor、Windsurf 等主流 IDE 通用。"
  image:
    src: /hero.svg
    alt: Resume Intelligence Hub
  actions:
    - theme: brand
      text: 快速开始 →
      link: /zh/quick-start
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/Zenine/resume-intelligence-hub

features:
  - icon:
      src: /icons/compass.svg
      width: 48
      height: 48
    title: 单一事实来源
    details: 所有履历事实只在 profiles/ 里写一份。每份简历、求职信、申报书都是当场根据它派生的——不用维护七八个版本的简历。

  - icon:
      src: /icons/target.svg
      width: 48
      height: 48
    title: 职业罗盘
    details: 定位向上 1-2 级的 stretch 目标，锁在 AGENTS.md 最上面，之后每份简历都按这个偏置。每季度按四维差距（技能 / 范围 / 背书 / 人脉）复盘一次，转成这季度的 SMART 计划。

  - icon:
      src: /icons/fork.svg
      width: 48
      height: 48
    title: 双轨分离
    details: 招聘简历和基金申报书格式、语气、侧重完全不一样。两边数据源分开，只在需要时开启科研那条线。

  - icon:
      src: /icons/shield.svg
      width: 48
      height: 48
    title: 投递前核查
    details: 冲高阶岗或报课题前，把简历里每条声明（学历、头衔、项目号、数字）逐条在公开来源过一遍，把风险项提前改掉，而不是等对方查到。

  - icon:
      src: /icons/globe.svg
      width: 48
      height: 48
    title: 跨 IDE 通用
    details: 核心指令文件走 AGENTS.md 这个跨 IDE 标准。Claude Code、Cursor、Codex、Cline、Windsurf、GitHub Copilot 都能读，换工具不用重搭。

  - icon:
      src: /icons/book.svg
      width: 48
      height: 48
    title: 成熟方法论背书
    details: Google XYZ 公式、STAR、BEI、Heilmeier 9 问、stretch target、三角验证——每一条都点出出处，方便你想深入时自己顺藤摸瓜。
---

<!--
  Translation status:
  Source file : docs/index.md
  Source commit: 9a75a0b
  Translated  : 2026-04-21
  Status      : up-to-date
-->

<div class="vp-doc" style="max-width: 960px; margin: 48px auto 96px; padding: 0 24px;">

## 安装

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

然后在你常用的 AI IDE 里说任意一句：

```
> 帮我搭个简历库                           # 从零开一个 hub
> 帮我针对这个 JD 生成简历                 # 定制简历
> 看看有什么合适的机会                     # 让 AI 主动搜岗位
> 针对这个职位帮我准备面试                 # 模拟面试 + 准备故事
> 投递前帮我核查一下公开资料               # 公开资料交叉验证
```

## 它和其他简历 skill 不一样在哪

市面上大多数简历类 skill 是一次性工具——贴 JD、出简历，用完就散。这个不是。它会让你把几个月的求职、面试、（如果要的话）课题申报都沉淀在同一个私人 Git 仓库里，Agent 每次对话先读这个仓库，产出会被你之前写下的定位一直约束着。完整逻辑写在 [SKILL.md](https://github.com/Zenine/resume-intelligence-hub/blob/main/SKILL.md)。

## 搭配使用的专精 skill

具体某一次的细活可以叠加生态里的小工具：

- [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) — ATS 关键词深度优化
- [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) — LinkedIn 档案打磨
- [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) — Anthropic 官方面试准备
- [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) — Lenny 的职业转型框架

</div>
