<!--
  Translation status:
  Source file : docs/skill-contract.md
  Source commit: pending
  Translated  : 2026-06-07
  Status      : up-to-date
-->

# Skill Contract

本页说明 `resume-intelligence-hub` skill 的长期运行契约。Hub 仓库是一个**私人职业 hub**：它保存职业事实、定位、草稿、核查记录和季度计划。本站是**文档层**：它公开说明方法，但不保存用户的私人职业资料。

## 仓库和站点边界

- `resume-intelligence-hub` skill 会为一个人搭建并运行一个私人仓库。
- Hub 是简历、JD 定制申请、面试准备、科研线开启时的课题申报、职称 / 资质 / 晋升材料线开启时的申报包，以及投递前核查的单一事实来源。
- 生成出来的简历和求职信都是派生物。长期可靠的来源是 `profiles/` 和 `AGENTS.md` 里的定位锁。
- 公开站点只说明契约、工作流、示例和设置方式。它不应包含私人简历、真实证件、薪资证据、合同、证书或本机路径。
- Hub 可以通过私人 Git remote 同步，但绝不要推到公开仓库。

## 初始化后目录结构

文件夹名称会随初始化语言变化，但结构保持稳定：

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

可选目录只在用户需要时创建：

- `research.md` 和 `research-archive/` 用于科研线。
- `credential-applications/` 用于职称、执业资质、board certification 或晋升材料。
- `assessments/` 保存 360 反馈、性格测评等可选材料，面试准备时可引用。

## 核心文件职责

| 文件或目录 | 职责 |
|---|---|
| `AGENTS.md` | 定位锁：目标岗位、职级、领域、强调点、弱化点、已开启轨道，以及 AI agent 的运行规则。 |
| `profiles/master.md` | 招聘用职业事实来源：岗位、职责范围、成就、指标、项目、教育经历和公开链接。 |
| `profiles/skills.md` | 能力矩阵，包括 T 型 / π 型深度、目标座位差距、工具、领域和证书。 |
| `profiles/stories.md` | 面试用 STAR 故事。它和事实档案分开，方便复用叙事而不重写证据。 |
| `profiles/research.md` | 科研线来源：论文、专利、课题、标准、研究方向、学术服务和指导经历。 |
| `jobs/market-watch/` | 目标公司、实时 JD shortlist、内推路径和差距计划快照。 |
| `jobs/applications/` | 每次投递一个带日期的文件夹，例如 `company-role-2026-06-07/`，保存 JD、生成简历、求职信和面试准备。 |
| `verification/references.md` | 敏感原件的路径引用索引。它记录证据在哪里，但不把证据复制进 Git。 |
| `verification/{date}-web-check.md` | 承重声明的公开资料交叉核查记录。 |
| `credential-applications/` | 职称、执业资质、board 或晋升申报的证据矩阵和写作包。 |
| `resumes-archive/` | 旧简历和转换后的 Markdown 版本。只归档，不再把旧简历当事实来源继续改。 |
| `todo.md` | 只放未完成事项，尤其是本季度 SMART 行动和未解决的证据缺口。 |
| `changelog.md` | 已完成事项，按日期倒序记录。完成事项应移到这里，而不是作为 `[x]` 留在 `todo.md`。 |

## 工作流输入和输出

### 1. 职业规划和差距分析

| 输入 | 输出 |
|---|---|
| `profiles/master.md`、`profiles/skills.md`、`profiles/stories.md`、`AGENTS.md`、近期 `changelog.md`，以及 3-5 个目标层级 JD 或课题指南。 | `AGENTS.md` 中刷新的定位块、带日期的 `jobs/market-watch/{date}-gap-plan.md`，以及写入 `todo.md` 的 2-4 个 SMART 季度事项。 |

初始化后先跑它，之后每季度或重大职业事件后重跑。

### 2. JD 搜寻和市场研究

| 输入 | 输出 |
|---|---|
| `profiles/master.md`、`profiles/skills.md`、`AGENTS.md` 中的定位锁、地区、职级、目标 title 和渠道约束。 | 3-5 个机会的排序 shortlist、`jobs/market-watch/{date}-{theme}.md` watchlist、匹配度备注，以及可见时的内推路径。 |

这个工作流先找对目标座位，再让 hub 针对其中一个岗位生成简历。

### 3. JD 定制简历

| 输入 | 输出 |
|---|---|
| 文本、URL 或 PDF 格式的 JD；`profiles/master.md`；`profiles/skills.md`；`AGENTS.md`；以及相关核查引用。 | `jobs/applications/{company}-{role}-{date}/jd.md`、`resume.md`、可选的 `cover.md`，以及初版 `prep.md`。 |

简历从源档案重新生成，不从旧简历改写。

### 4. 面试准备

| 输入 | 输出 |
|---|---|
| JD 或目标岗位、已有时的 `resume.md`、`profiles/stories.md`、`profiles/skills.md`，以及可选的 `assessments/`。 | `jobs/applications/{company}-{role}-{date}/prep.md`，包含预测问题、STAR 答案提纲、复习清单、反问面试官的问题、风险点和可选 mock interview 记录。 |

如果故事库太薄，工作流应直接暴露缺口，而不是现场编故事。

### 5. 投递前核查

| 输入 | 输出 |
|---|---|
| 即将投递的简历、proposal、申报材料或其他高风险文本；`verification/references.md`；公开资料；以及承重声明列表。 | `verification/{date}-web-check.md`，记录已确认声明、公开证据不足事项、高风险事项、更稳妥改写和所需补充证据。 |

投高级岗位、课题申报、职称 / 资质 / 晋升材料，以及第一次使用任何承重声明前，都应运行它。

### 6. 课题 / 科研申报简历

| 输入 | 输出 |
|---|---|
| 已开启的科研线、课题或基金类型、申报指南、研究方向、`profiles/research.md`、`profiles/master.md` 和核查来源。 | 按方向筛选后的申报档案，保存到 `research-archive/{year}-{grant-type}-{direction}.md`；当声明可外部核查时，生成更严格的核查记录。 |

未开启科研线时，完全跳过这个工作流。

### 7. 职称 / 资质 / 晋升申报

| 输入 | 输出 |
|---|---|
| 官方规则或资格文件、已有申报文件夹、`profiles/master.md`、相关时的 `profiles/research.md`、`verification/references.md`、`todo.md` 和 `changelog.md`。 | `credential-applications/{credential-name}/` 下的证据矩阵、写作包、风险记录、面向评审的精简版，`todo.md` 中更新的未解决证据，以及 `changelog.md` 中记录的已完成事项。 |

规则是先做证据矩阵，再写漂亮文案。

## 敏感文件策略

敏感原件不进 Git。例子包括身份证件、护照、合同、薪资单、任命书、证书、学历证明、医疗或执业资质文件、私人推荐信。

用 `verification/references.md` 记录路径引用：

```markdown
| 证据 | 位置 | 备注 |
|---|---|---|
| 学位证书 | secure-drive:/career-documents/education/degree-certificate.pdf | 只用于教育经历核查。 |
| 任命书 | private-vault:/employment/company-a/appointment-letter.pdf | 证明 title 和任职日期。 |
```

Hub 可以保存摘要、声明措辞和核查记录。除非用户明确决定私人仓库就是合适的存放位置，否则不要把敏感原件放进 hub。

## 中断恢复

每个会话开始时应先读：

1. `AGENTS.md`
2. `todo.md`
3. `changelog.md`
4. 工作流相关目录，例如 `jobs/applications/{company}-{role}-{date}/`
5. 涉及高风险声明时，还要读最新核查记录

如果会话中途停止：

- 把未解决事项留在 `todo.md`，写清楚下一步和阻塞原因。
- 把已完成、已验证的事项移入 `changelog.md`。
- 生成草稿保留在带日期的投递或申报文件夹里。
- 恢复时让 AI 从 hub 状态继续，而不是凭聊天记忆继续。

## 旧简历迁移

旧简历是有价值的输入，但不应继续作为运行来源。

1. 把旧简历放进 `resumes-archive/`。
2. 将每个 PDF、DOCX 或粘贴版简历转换成同目录 Markdown 副本。
3. 把事实声明合并进 `profiles/master.md`。
4. 把适合面试的故事移入 `profiles/stories.md`。
5. 只有开启科研线时，才把科研产出移入 `profiles/research.md`。
6. 把不确定或缺少支撑的声明记录到 `todo.md` 或 `verification/references.md`。
7. 后续根据 `profiles/master.md` 和具体 JD 重新生成新简历。

Archive 保存历史。`profiles/` 成为单一事实来源。

## 季度复盘节奏

默认战略节奏是每季度一次：

- 重新运行职业规划和差距分析。
- 重新阅读上一次 `jobs/market-watch/{date}-gap-plan.md`。
- 检查目标座位、薪酬区间、地区或生活约束是否改变。
- 重新盘点技能、范围、职称 / 资质、网络和时间差距。
- 把已完成事项写进 `changelog.md`。
- `todo.md` 只保留仍然活跃的本季度 SMART 事项。
- 如果目标发生实质变化，刷新 `AGENTS.md` 里的定位锁。

每周节奏是战术性的：更新投递、证据收集、面试准备和 market-watch 笔记。季度节奏是战略性的：判断 hub 是否仍然指向正确的目标座位。
