<!--
  Translation status:
  Source file : docs/skill-contract.md
  Source commit: pending
  Translated  : 2026-06-07
  Status      : up-to-date
-->

# Skill Contract

本頁說明 `resume-intelligence-hub` skill 的長期運行契約。Hub 儲存庫是**私人職涯 hub**：它保存職涯事實、定位、草稿、查核紀錄和季度計畫。本站是**文件層**：它公開說明方法，但不保存使用者的私人職涯資料。

## 儲存庫和站點邊界

- `resume-intelligence-hub` skill 會為一個人搭建並運行一個私人儲存庫。
- Hub 是履歷、JD 客製申請、面試準備、研究軌開啟時的研究計畫申報、職稱 / 資質 / 晉升材料線開啟時的申報包，以及投遞前查核的單一事實來源。
- 生成出來的履歷和求職信都是衍生物。長期可靠的來源是 `profiles/` 和 `AGENTS.md` 裡的定位鎖。
- 公開站點只說明契約、工作流程、範例和設定方式。它不應包含私人履歷、真實證件、薪資證據、合約、證書或本機路徑。
- Hub 可以透過私人 Git remote 同步，但絕不要推到公開儲存庫。

## 初始化後目錄結構

資料夾名稱會隨初始化語言變化，但結構保持穩定：

```text
career-hub/
├── profiles/
│   ├── master.md
│   ├── skills.md
│   ├── stories.md
│   └── research.md
├── jobs/
│   ├── templates/
│   ├── market-watch/
│   └── applications/
├── verification/
│   ├── references.md
│   └── credentials/
├── credential-applications/
├── resumes-archive/
├── research-archive/
├── assessments/
├── AGENTS.md
├── readme.md
├── todo.md
└── changelog.md
```

可選目錄只在使用者需要時建立：

- `research.md` 和 `research-archive/` 用於研究軌。
- `credential-applications/` 用於職稱、執業資質、board certification 或晉升材料。
- `assessments/` 保存 360 回饋、性格測評等可選資料，面試準備時可引用。

## 核心檔案職責

| 檔案或目錄 | 職責 |
|---|---|
| `AGENTS.md` | 定位鎖：目標職位、職級、領域、強調點、弱化點、已開啟軌道，以及 AI agent 的運行規則。 |
| `profiles/master.md` | 招聘用職涯事實來源：職位、職責範圍、成就、指標、專案、教育經歷和公開連結。 |
| `profiles/skills.md` | 能力矩陣，包括 T 型 / π 型深度、目標位子差距、工具、領域和證書。 |
| `profiles/stories.md` | 面試用 STAR 故事。它和事實檔案分開，方便重複使用敘事而不重寫證據。 |
| `profiles/research.md` | 研究軌來源：論文、專利、研究計畫、標準、研究方向、學術服務和指導經歷。 |
| `jobs/market-watch/` | 目標公司、即時 JD shortlist、內推路徑和差距計畫快照。 |
| `jobs/applications/` | 每次投遞一個帶日期的資料夾，例如 `company-role-2026-06-07/`，保存 JD、生成履歷、求職信和面試準備。 |
| `verification/references.md` | 敏感原件的路徑引用索引。它記錄證據在哪裡，但不把證據複製進 Git。 |
| `verification/{date}-web-check.md` | 承重聲明的公開資料交叉查核紀錄。 |
| `credential-applications/` | 職稱、執業資質、board 或晉升申報的證據矩陣和寫作包。 |
| `resumes-archive/` | 舊履歷和轉換後的 Markdown 版本。只封存，不再把舊履歷當事實來源繼續改。 |
| `todo.md` | 只放未完成事項，尤其是本季度 SMART 行動和未解決的證據缺口。 |
| `changelog.md` | 已完成事項，按日期倒序紀錄。完成事項應移到這裡，而不是作為 `[x]` 留在 `todo.md`。 |

## 工作流程輸入和輸出

### 1. 職涯規劃和差距分析

| 輸入 | 輸出 |
|---|---|
| `profiles/master.md`、`profiles/skills.md`、`profiles/stories.md`、`AGENTS.md`、近期 `changelog.md`，以及 3-5 個目標層級 JD 或研究計畫指南。 | `AGENTS.md` 中刷新的定位區塊、帶日期的 `jobs/market-watch/{date}-gap-plan.md`，以及寫入 `todo.md` 的 2-4 個 SMART 季度事項。 |

初始化後先跑它，之後每季度或重大職涯事件後重跑。

### 2. JD 搜尋和市場研究

| 輸入 | 輸出 |
|---|---|
| `profiles/master.md`、`profiles/skills.md`、`AGENTS.md` 中的定位鎖、地區、職級、目標 title 和渠道約束。 | 3-5 個機會的排序 shortlist、`jobs/market-watch/{date}-{theme}.md` watchlist、匹配度備註，以及可見時的內推路徑。 |

這個工作流程先找對目標位子，再讓 hub 針對其中一個職位生成履歷。

### 3. JD 客製履歷

| 輸入 | 輸出 |
|---|---|
| 文字、URL 或 PDF 格式的 JD；`profiles/master.md`；`profiles/skills.md`；`AGENTS.md`；以及相關查核引用。 | `jobs/applications/{company}-{role}-{date}/jd.md`、`resume.md`、可選的 `cover.md`，以及初版 `prep.md`。 |

履歷從源檔案重新生成，不從舊履歷改寫。

### 4. 面試準備

| 輸入 | 輸出 |
|---|---|
| JD 或目標職位、已有時的 `resume.md`、`profiles/stories.md`、`profiles/skills.md`，以及可選的 `assessments/`。 | `jobs/applications/{company}-{role}-{date}/prep.md`，包含預測問題、STAR 答案提綱、複習清單、反問面試官的問題、風險點和可選 mock interview 紀錄。 |

如果故事庫太薄，工作流程應直接暴露缺口，而不是現場編故事。

### 5. 投遞前查核

| 輸入 | 輸出 |
|---|---|
| 即將投遞的履歷、proposal、申報材料或其他高風險文字；`verification/references.md`；公開資料；以及承重聲明列表。 | `verification/{date}-web-check.md`，紀錄已確認聲明、公開證據不足事項、高風險事項、更穩妥改寫和所需補充證據。 |

投高階職位、研究計畫申報、職稱 / 資質 / 晉升材料，以及第一次使用任何承重聲明前，都應運行它。

### 6. 研究計畫申報履歷

| 輸入 | 輸出 |
|---|---|
| 已開啟的研究軌、研究補助或資金類型、申報指南、研究方向、`profiles/research.md`、`profiles/master.md` 和查核來源。 | 按方向篩選後的申報檔案，保存到 `research-archive/{year}-{grant-type}-{direction}.md`；當聲明可外部查核時，生成更嚴格的查核紀錄。 |

未開啟研究軌時，完全跳過這個工作流程。

### 7. 職稱 / 資質 / 晉升申報

| 輸入 | 輸出 |
|---|---|
| 官方規則或資格文件、已有申報資料夾、`profiles/master.md`、相關時的 `profiles/research.md`、`verification/references.md`、`todo.md` 和 `changelog.md`。 | `credential-applications/{credential-name}/` 下的證據矩陣、寫作包、風險紀錄、面向評審的精簡版，`todo.md` 中更新的未解決證據，以及 `changelog.md` 中紀錄的已完成事項。 |

規則是先做證據矩陣，再寫漂亮文案。

## 敏感檔案策略

敏感原件不進 Git。例子包括身分證件、護照、合約、薪資單、任命書、證書、學歷證明、醫療或執業資質文件、私人推薦信。

用 `verification/references.md` 紀錄路徑引用：

```markdown
| 證據 | 位置 | 備註 |
|---|---|---|
| 學位證書 | secure-drive:/career-documents/education/degree-certificate.pdf | 只用於教育經歷查核。 |
| 任命書 | private-vault:/employment/company-a/appointment-letter.pdf | 證明 title 和任職日期。 |
```

Hub 可以保存摘要、聲明措辭和查核紀錄。除非使用者明確決定私人儲存庫就是合適的存放位置，否則不要把敏感原件放進 hub。

## 中斷恢復

每個會話開始時應先讀：

1. `AGENTS.md`
2. `todo.md`
3. `changelog.md`
4. 工作流程相關目錄，例如 `jobs/applications/{company}-{role}-{date}/`
5. 涉及高風險聲明時，還要讀最新查核紀錄

如果會話中途停止：

- 把未解決事項留在 `todo.md`，寫清楚下一步和阻塞原因。
- 把已完成、已驗證的事項移入 `changelog.md`。
- 生成草稿保留在帶日期的投遞或申報資料夾裡。
- 恢復時讓 AI 從 hub 狀態繼續，而不是憑聊天記憶繼續。

## 舊履歷遷移

舊履歷是有價值的輸入，但不應繼續作為運行來源。

1. 把舊履歷放進 `resumes-archive/`。
2. 將每個 PDF、DOCX 或貼上版履歷轉換成同目錄 Markdown 副本。
3. 把事實聲明合併進 `profiles/master.md`。
4. 把適合面試的故事移入 `profiles/stories.md`。
5. 只有開啟研究軌時，才把研究產出移入 `profiles/research.md`。
6. 把不確定或缺少支撐的聲明紀錄到 `todo.md` 或 `verification/references.md`。
7. 後續根據 `profiles/master.md` 和具體 JD 重新生成新履歷。

Archive 保存歷史。`profiles/` 成為單一事實來源。

## 季度複盤節奏

預設戰略節奏是每季度一次：

- 重新運行職涯規劃和差距分析。
- 重新閱讀上一次 `jobs/market-watch/{date}-gap-plan.md`。
- 檢查目標位子、薪酬區間、地區或生活約束是否改變。
- 重新盤點技能、範圍、職稱 / 資質、網路和時間差距。
- 把已完成事項寫進 `changelog.md`。
- `todo.md` 只保留仍然活躍的本季度 SMART 事項。
- 如果目標發生實質變化，刷新 `AGENTS.md` 裡的定位鎖。

每週節奏是戰術性的：更新投遞、證據收集、面試準備和 market-watch 筆記。季度節奏是戰略性的：判斷 hub 是否仍然指向正確的目標位子。
