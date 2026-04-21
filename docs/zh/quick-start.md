<!--
  Translation status:
  Source file : docs/quick-start.md
  Source commit: b5a3649
  Translated  : 2026-04-21
  Status      : up-to-date
-->

# 快速开始

三步把你的职业 hub 跑起来。

## 1. 装 skill

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

或者直接 clone 下来：

```bash
git clone https://github.com/Zenine/resume-intelligence-hub ~/.claude/skills/resume-intelligence-hub
```

## 2. 初始化你自己的 hub

打开你用的 AI IDE（Claude Code、Cursor、Codex、Cline、Windsurf，只要能读 `AGENTS.md` 都行），`cd` 到你打算放 hub 的文件夹——**一定选私有位置**，别放在将来会公开的 repo 里。然后说：

> **帮我搭个简历库**

AI 会问你 7 个问题：

1. **语言** — 中文或英文，选一个，别混着来
2. **现有材料** — 手头有旧简历/CV 就先发给它，下面几个问题都会因此更准
3. **行业** — 软件、医疗、设计、法律、学术……什么都行
4. **目标职级** — 初级、资深 IC、一线经理、总监、VP、创始人、PI，按自己情况说
5. **要不要科研那条线** — 只在申课题 / 基金时需要开
6. **简历输出语言** — 中文、英文或双语都行
7. **仓库放哪** — 硬盘上的绝对路径

答完 AI 会：把目录结构搭好 → 把定位写进 `AGENTS.md` → 把你给的旧简历归档 → 在 `todo.md` 里写一份"接下来要做什么"的清单。

## 3. 平时怎么用

Hub 搭好之后，直接用中文和 AI 说想做什么就行：

| 你说 | 触发的工作流 |
|------|--------------|
| 盘一下我跟目标座位的差距 | [职业规划 & 差距盘点](https://github.com/Zenine/resume-intelligence-hub-site/blob/main/workflows/career-planning.md) — 初始化后第一个跑，之后每季度再跑一次 |
| 帮我针对这个 JD 生成简历 | [JD 定制简历](https://github.com/Zenine/resume-intelligence-hub-site/blob/main/workflows/jd-tailored-resume.md) |
| 看看有什么合适的机会 | [主动搜岗位](https://github.com/Zenine/resume-intelligence-hub-site/blob/main/workflows/jd-sourcing.md) |
| 针对这个职位帮我准备面试 | [面试准备](https://github.com/Zenine/resume-intelligence-hub-site/blob/main/workflows/interview-prep.md) |
| 投递前帮我核查公开资料 | [投递前自查](https://github.com/Zenine/resume-intelligence-hub-site/blob/main/workflows/verification.md) |
| 帮我生成国自然的申报简历 | [课题申报](https://github.com/Zenine/resume-intelligence-hub-site/blob/main/workflows/grant-application.md)（只在科研线开启时） |

## 常见问题

**AI 没读到我的 AGENTS.md**

- Claude Code 老版本只认 `CLAUDE.md`：`ln -s AGENTS.md CLAUDE.md` 建个软链接就行
- Cursor：把 `AGENTS.md` 内容复制到 `.cursor/rules/agents.mdc`，或者软链
- Windsurf：用 `.windsurfrules`
- GitHub Copilot：用 `.github/copilot-instructions.md`
- 别的 IDE：查一下它自己的上下文文件约定

**我已经有一堆散的简历了，能直接用这个整起来吗？**

可以。把 AI 指到那些简历所在的目录，让它"把这些整合进 resume-intelligence-hub 的结构"就行。初始化流程会帮你合并。

**我想用别的语言（日文、韩文……）**

目前只有中英文模板，其它语言欢迎去 [GitHub](https://github.com/Zenine/resume-intelligence-hub) 提 PR。
