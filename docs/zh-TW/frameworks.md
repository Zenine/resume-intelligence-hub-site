<!--
  Translation status:
  Source file : docs/frameworks.md
  Source commit: bfc4697
  Translated  : 2026-04-21
  Status      : up-to-date
-->

# 引用的方法論

Skill 裡的工作流程都建在成熟方法論之上。AI 指導你時會**點出名字**——既給你一個搜尋關鍵字往下深挖，也讓這些方法看起來不是 AI 亂編的。

## 履歷撰寫

### Google XYZ 公式

來自 Laszlo Bock，前 Google 人資副總裁。寫履歷要點時按這個結構：

> "Accomplished [X] as measured by [Y], by doing [Z]"
>
> 做到了 X，用 Y 來量化，靠 Z 實現的

每條要點都回答三件事：做到了什麼、用什麼指標能證明、具體做了什麼動作。這是履歷品質最大的一個槓桿——換成這個寫法，資訊密度直接翻倍。

### 一要點一數字

每條履歷要點必須帶至少一個數字（人數、百分比、金額、時間、規模都行）。沒數字的要點在復盤時直接刪——不是你沒做，是沒量化就沒說服力。

### CAR / PAR / STAR

XYZ 在短要點裡太囉嗦時，用這幾個簡化版：CAR（挑戰-行動-結果）、PAR（問題-行動-結果）、STAR（情境-任務-行動-結果）。最常用的是 STAR，在 `profiles/stories.md` 裡全程使用。

## 面試

### BEI（行為事件訪談）

David McClelland，哈佛心理學家發明的。「講一次你……的時候」這種問法的理論基礎。核心假設：**過去的行為比嘴上說的更能預測未來行為**。所以面試官不問「你會怎麼辦」，而是要你講具體過往案例。

準備時一定用具體事件，不要泛泛說「我一般會……」——那種答法在 BEI 裡根本過不了關。

### STAR

行為面試回答的主流結構：情境（Situation）→ 任務（Task）→ 行動（Action）→ 結果（Result）。`profiles/stories.md` 裡每個故事都按這個寫。

## 研究計畫申報

### Heilmeier 九問

George Heilmeier，前 DARPA 局長總結的——任何研究申報都該回答的九個問題。就算申報範本沒直接問，答完也更有說服力：

1. 你到底要做什麼？（別用行話）
2. 現在的做法是什麼？瓶頸在哪？
3. 你的新方法是什麼？為什麼能成？
4. 誰會從中受益？做成了意味著什麼？
5. 風險和回報各是什麼？
6. 要花多少錢？
7. 要花多長時間？
8. 中期和終期怎麼衡量成功？
9. 最壞情況下怎麼退出？

`workflows/grant-application.md` 裡「研究基礎」那段就按這九問組織的。

## 職涯定位

### T 型 / π 型 / M 型人才

McKinsey 和 IDEO 推廣的說法：一個領域有深度 + 相鄰領域有廣度 = T 型。資深職位常常需要 π 型（兩個深度柱）甚至 M 型（多個深度柱）。自己講「我的獨特價值在哪」時用這個框架解釋。

### 職涯資本

Cal Newport 在《優秀到不能被忽視》裡提出的概念——**稀有且有價值的技能**才是你的真正槓桿。做能力差距分析時，別問「我缺什麼」，換個問法：**「我手上有什麼籌碼？往下該投資哪些能放大它？」**

## 求職策略

### 延伸目標啟發式（1-2 級，1.2-3 倍薪，70% 匹配）

換工作時用的標準啟發式：

- **職級**：瞄準比目前**高 1-2 級**的職位。同級平跳換工作成本太高，3 級以上除非創業否則不現實
- **薪酬**：外跳總包至少 **1.2-1.5 倍**起（外部招聘自帶溢價，低於這個數換工作沒意義）；如果同時還發生「公司類型跨越」（大廠 → 高速成長 startup），**2-3 倍**也合理
- **匹配門檻**：**70% 符合就投**，不等 100%。資深職位雇主就是準備讓你邊做邊成長的
- **管道**：**內推的轉化率是冷投的 10 倍以上**——先把人脈啟用了再考慮海投

**例外**：純粹職涯轉型（減薪正常）、主動降速求生活、已經到產業天花板、早期職涯（倍數天然更小）。這是 `workflows/jd-sourcing.md` 的底層邏輯。

## 投遞前盡調

### 三角驗證

每條承重聲明都要在至少 **2 個獨立公開來源**得到確認才算過關。這是定性研究的標準做法，挪過來用於投遞前自查——面試官和評審會 Google，你先 Google 過自己一遍。`workflows/verification.md` 的基礎。

## 目標設定

### SMART

Specific（具體）、Measurable（可衡量）、Achievable（可達成）、Relevant（相關）、Time-bound（有期限）。`todo.md` 裡含糊條目會被 AI 改寫成這五個維度齊全的版本。

---

## 延伸閱讀

- **Laszlo Bock**，*Work Rules!* — Google 招聘哲學和 XYZ 公式的原始出處
- **David McClelland**，*"Testing for Competence Rather Than for Intelligence"*（American Psychologist, 1973）— BEI 的奠基論文
- **Cal Newport**，*So Good They Can't Ignore You*（中譯《優秀到不能被忽視》）— 職涯資本和深度工作
- **George Heilmeier**，[DARPA 官網 Heilmeier Catechism 頁面](https://www.darpa.mil/about-us/heilmeier-catechism)
- **Keith Ferrazzi**，*Never Eat Alone* — 人脈啟用 / warm intro 的操作手冊
