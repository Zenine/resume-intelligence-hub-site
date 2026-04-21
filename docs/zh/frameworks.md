<!--
  Translation status:
  Source file : docs/frameworks.md
  Source commit: bfc4697
  Translated  : 2026-04-21
  Status      : up-to-date
-->

# 引用的方法论

Skill 里的工作流都建在成熟方法论之上。AI 指导你时会**点出名字**——既给你一个搜索关键词往下深挖，也让这些方法看起来不是 AI 瞎编的。

## 简历写作

### Google XYZ 公式

来自 Laszlo Bock，前 Google 人力副总裁。写简历要点时按这个结构：

> "Accomplished [X] as measured by [Y], by doing [Z]"
>
> 做到了 X，用 Y 来量化，靠 Z 实现的

每条要点都回答三件事：做到了什么、用什么指标能证明、具体做了什么动作。这是简历质量最大的一个杠杆——换成这个写法，信息密度直接翻倍。

### 一要点一数字

每条简历要点必须带至少一个数字（人数、百分比、金额、时间、规模都行）。没数字的要点在复盘时直接删——不是你没做，是没量化就没说服力。

### CAR / PAR / STAR

XYZ 在短要点里太啰嗦时，用这几个简化版：CAR（挑战-行动-结果）、PAR（问题-行动-结果）、STAR（情境-任务-行动-结果）。最常用的是 STAR，在 `profiles/stories.md` 里全程使用。

## 面试

### BEI（行为事件访谈）

David McClelland，哈佛心理学家发明的。"讲一次你……的时候"这种问法的理论基础。核心假设：**过去的行为比嘴上说的更能预测未来行为**。所以面试官不问"你会怎么办"，而是要你讲具体过往案例。

准备时一定用具体事件，不要泛泛说"我一般会……"——那种答法在 BEI 里根本过不了关。

### STAR

行为面试回答的主流结构：情境（Situation）→ 任务（Task）→ 行动（Action）→ 结果（Result）。`profiles/stories.md` 里每个故事都按这个写。

## 课题 / 基金申报

### Heilmeier 九问

George Heilmeier，前 DARPA 局长总结的——任何科研申报都该回答的九个问题。就算申报模板没直接问，答完也更有说服力：

1. 你到底要做什么？（别用行话）
2. 现在的做法是什么？瓶颈在哪？
3. 你的新方法是什么？为什么能成？
4. 谁会从中受益？做成了意味着什么？
5. 风险和回报各是什么？
6. 要花多少钱？
7. 要花多长时间？
8. 中期和终期怎么衡量成功？
9. 最坏情况下怎么退出？

`workflows/grant-application.md` 里"研究基础"那段就按这九问组织的。

## 职业定位

### T 型 / π 型 / M 型人才

McKinsey 和 IDEO 推广的说法：一个领域有深度 + 相邻领域有广度 = T 型。资深岗位常常需要 π 型（两个深度柱）甚至 M 型（多个深度柱）。自己讲"我的独特价值在哪"时用这个框架解释。

### 职业资本

Cal Newport 在《优秀到不能被忽视》里提出的概念——**稀有且有价值的技能**才是你的真正杠杆。做能力差距分析时，别问"我缺什么"，换个问法：**"我手上有什么筹码？往下该投资哪些能放大它？"**

## 求职策略

### 拉伸目标启发式（1-2 级，1.2-3 倍薪，70% 匹配）

换工作时用的标准启发式：

- **职级**：瞄准比当前**高 1-2 级**的岗位。同级平跳换工作成本太高，3 级以上除非创业否则不现实
- **薪酬**：外跳总包至少 **1.2-1.5 倍**起（外部招聘自带溢价，低于这个数换工作没意义）；如果同时还发生"公司类型跨越"（大厂 → 高速成长 startup），**2-3 倍**也合理
- **匹配门槛**：**70% 符合就投**，不等 100%。资深岗位雇主就是准备让你边做边成长的
- **渠道**：**内推的转化率是冷投的 10 倍以上**——先把网络激活了再考虑海投

**例外**：纯粹职业转型（降薪正常）、主动降速求生活、已经到行业天花板、早期职业（倍数天然更小）。这是 `workflows/jd-sourcing.md` 的底层逻辑。

## 投递前尽调

### 三角验证

每条承重声明都要在至少 **2 个独立公开来源**得到确认才算过关。这是定性研究的标准做法，挪过来用于投递前自查——面试官和评审会 Google，你先 Google 过自己一遍。`workflows/verification.md` 的底座。

## 目标设定

### SMART

Specific（具体）、Measurable（可衡量）、Achievable（可达成）、Relevant（相关）、Time-bound（有期限）。`todo.md` 里含糊条目会被 AI 改写成这五个维度齐全的版本。

---

## 想深挖可以读

- **Laszlo Bock**，*Work Rules!* — Google 招聘哲学和 XYZ 公式的原始出处
- **David McClelland**，*"Testing for Competence Rather Than for Intelligence"*（American Psychologist, 1973）— BEI 的奠基论文
- **Cal Newport**，*So Good They Can't Ignore You*（中译《优秀到不能被忽视》）— 职业资本和深度工作
- **George Heilmeier**，[DARPA 官网 Heilmeier Catechism 页面](https://www.darpa.mil/about-us/heilmeier-catechism)
- **Keith Ferrazzi**，*Never Eat Alone* — 网络激活 / warm intro 的操作手册
