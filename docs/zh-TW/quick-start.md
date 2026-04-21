<!--
  Translation status:
  Source file : docs/quick-start.md
  Source commit: b5a3649
  Translated  : 2026-04-21
  Status      : up-to-date
-->

# 快速開始

三步把你的職涯 hub 跑起來。

## 1. 裝 skill

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

或者直接 clone 下來：

```bash
git clone https://github.com/Zenine/resume-intelligence-hub ~/.claude/skills/resume-intelligence-hub
```

## 2. 初始化你自己的 hub

打開你用的 AI IDE（Claude Code、Cursor、Codex、Cline、Windsurf，只要能讀 `AGENTS.md` 都行），`cd` 到你打算放 hub 的資料夾——**一定選私人位置**，別放在將來會公開的 repo 裡。然後說：

> **幫我搭個履歷庫**

AI 會問你 7 個問題：

1. **語言** — 中文或英文，選一個，別混著來
2. **現有資料** — 手頭有舊履歷 / CV 就先發給它，下面幾個問題都會因此更準
3. **產業** — 軟體、醫療、設計、法律、學術……什麼都行
4. **目標職級** — 初級、資深 IC、一線經理、總監、VP、創辦人、PI，按自己情況說
5. **要不要研究那條線** — 只在申報研究計畫 / 研究補助時需要開
6. **履歷輸出語言** — 中文、英文或雙語都行
7. **儲存庫放哪** — 硬碟上的絕對路徑

答完 AI 會：把目錄結構搭好 → 把定位寫進 `AGENTS.md` → 把你給的舊履歷封存 → 在 `todo.md` 裡寫一份「接下來要做什麼」的清單。

## 3. 平時怎麼用

Hub 搭好之後，直接用中文和 AI 說想做什麼就行：

| 你說 | 觸發的工作流程 |
|------|--------------|
| 盤一下我跟目標位子的落差 | [職涯規劃 & 差距盤點](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/career-planning.md) — 初始化後第一個跑，之後每季再跑一次 |
| 幫我針對這個 JD 生成履歷 | [JD 客製履歷](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/jd-tailored-resume.md) |
| 看看有什麼合適的機會 | [主動搜職缺](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/jd-sourcing.md) |
| 針對這個職位幫我準備面試 | [面試準備](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/interview-prep.md) |
| 投遞前幫我核查公開資料 | [投遞前自查](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/verification.md) |
| 幫我生成國科會（NSTC）研究計畫的申報履歷 | [研究計畫申報](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/grant-application.md)（只在研究線開啟時） |

## 常見問題

**AI 沒讀到我的 AGENTS.md**

- Claude Code 舊版本只認 `CLAUDE.md`：`ln -s AGENTS.md CLAUDE.md` 建個軟連結就行
- Cursor：把 `AGENTS.md` 內容複製到 `.cursor/rules/agents.mdc`，或者軟連結
- Windsurf：用 `.windsurfrules`
- GitHub Copilot：用 `.github/copilot-instructions.md`
- 別的 IDE：查一下它自己的上下文檔案約定

**我已經有一堆散的履歷了，能直接用這個整起來嗎？**

可以。把 AI 指到那些履歷所在的目錄，讓它「把這些整合進 resume-intelligence-hub 的結構」就行。初始化流程會幫你合併。

**我想用別的語言（日文、韓文……）**

目前只有中英文範本，其它語言歡迎去 [GitHub](https://github.com/Zenine/resume-intelligence-hub) 提 PR。
