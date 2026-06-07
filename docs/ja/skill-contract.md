<!--
  Translation status:
  Source file : docs/skill-contract.md
  Source commit: pending
  Translated  : 2026-06-07
  Status      : up-to-date
-->

# Skill Contract

このページは `resume-intelligence-hub` skill の長期的な運用契約を説明する。ハブのリポジトリは**プライベートなキャリア hub**であり、キャリア上の事実、ポジショニング、下書き、検証ログ、四半期計画を保存する。このサイトは**ドキュメント層**であり、方法論を公開して説明するが、ユーザーのプライベートなキャリア資料を置く場所ではない。

## リポジトリとサイトの境界

- `resume-intelligence-hub` skill は、1 人のためのプライベートリポジトリをスキャフォールドし運用する。
- ハブは、履歴書、JD カスタム応募、面接準備、リサーチトラックが有効な場合の研究課題申請、資格 / 昇進書類トラックが有効な場合の書類、応募前検証の単一の信頼できる情報源である。
- 生成された履歴書やカバーレターは派生物である。長期的なソースは `profiles/` と `AGENTS.md` のポジショニングロックである。
- 公開サイトは契約、ワークフロー、例、セットアップガイドを説明する。プライベートな履歴書、実在する ID、給与証明、契約書、証明書、ローカルマシンのパスを含めてはならない。
- ハブはプライベート Git remote で同期できるが、公開リポジトリへ push してはならない。

## 初期化後のディレクトリ構造

フォルダ名の言語は初期化時の言語によって変わるが、構造は安定している：

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

任意フォルダはユーザーが必要とする場合だけ作成される：

- `research.md` と `research-archive/` はリサーチトラック用。
- `credential-applications/` は専門職称、ライセンス、board certification、昇進書類用。
- `assessments/` は 360 フィードバックや性格検査など、面接準備で参照できる任意資料を保存する。

## コアファイルの責務

| ファイルまたはフォルダ | 責務 |
|---|---|
| `AGENTS.md` | ポジショニングロック：目標ロール、シニアリティ、分野、強調点、弱める点、有効なトラック、AI エージェントの運用ルール。 |
| `profiles/master.md` | 採用向けのキャリア事実ソース：職歴、スコープ、成果、指標、プロジェクト、学歴、公開リンク。 |
| `profiles/skills.md` | 能力マトリクス。T 型 / π 型の深さ、目標ポジションとの差分、ツール、ドメイン、資格を含む。 |
| `profiles/stories.md` | 面接用 STAR ストーリー。事実データとは分離し、証拠を書き換えずにナラティブを再利用できるようにする。 |
| `profiles/research.md` | リサーチトラックのソース：論文、特許、資金獲得プロジェクト、標準、研究方向、学術サービス、メンタリング。 |
| `jobs/market-watch/` | 目標企業、ライブ JD ショートリスト、リファラル経路、ギャップ計画スナップショット。 |
| `jobs/applications/` | 応募ごとに日付付きフォルダを 1 つ置く。例：`company-role-2026-06-07/`。JD、生成履歴書、カバーレター、面接準備を保存する。 |
| `verification/references.md` | 機密原本のパス参照インデックス。証拠の場所を記録するが、証拠自体を Git にコピーしない。 |
| `verification/{date}-web-check.md` | 重要な主張の公開情報源クロスチェックログ。 |
| `credential-applications/` | 資格、ライセンス、board、昇進応募のエビデンスマトリクスとライティングパケット。 |
| `resumes-archive/` | 古い履歴書と変換済み Markdown コピー。アーカイブ専用であり、古い履歴書を事実ソースとして編集し続けない。 |
| `todo.md` | 未完了の作業だけを置く。特に今四半期の SMART アクションと未解決の証拠ギャップ。 |
| `changelog.md` | 完了した作業を日付付き・逆時系列で記録する。完了項目は `[x]` として `todo.md` に残さず、ここへ移す。 |

## ワークフローの入力と出力

### 1. キャリアプランニングとギャップ分析

| 入力 | 出力 |
|---|---|
| `profiles/master.md`、`profiles/skills.md`、`profiles/stories.md`、`AGENTS.md`、最近の `changelog.md`、3-5 件の目標レベル JD または研究課題公募。 | `AGENTS.md` の更新済みポジショニングブロック、日付付き `jobs/market-watch/{date}-gap-plan.md`、`todo.md` に入る 2-4 件の SMART 四半期項目。 |

初期化直後に最初に実行し、その後は四半期ごと、または大きなキャリアイベント後に再実行する。

### 2. JD ソーシングと市場調査

| 入力 | 出力 |
|---|---|
| `profiles/master.md`、`profiles/skills.md`、`AGENTS.md` のポジショニングロック、地域、シニアリティ、目標 title、チャネル制約。 | 3-5 件の機会を順位付けしたショートリスト、`jobs/market-watch/{date}-{theme}.md` の watchlist、フィットメモ、見える場合はリファラル経路。 |

このワークフローは、履歴書を特定の JD に合わせる前に、正しいポジションを探す。

### 3. JD カスタム履歴書

| 入力 | 出力 |
|---|---|
| テキスト、URL、PDF の JD；`profiles/master.md`；`profiles/skills.md`；`AGENTS.md`；関連する検証参照。 | `jobs/applications/{company}-{role}-{date}/jd.md`、`resume.md`、任意の `cover.md`、初期版 `prep.md`。 |

履歴書はソースプロフィールデータから再生成し、古い履歴書を書き換えて作らない。

### 4. 面接準備

| 入力 | 出力 |
|---|---|
| JD または目標ロール、利用可能なら生成済み `resume.md`、`profiles/stories.md`、`profiles/skills.md`、任意の `assessments/`。 | `jobs/applications/{company}-{role}-{date}/prep.md`。予想質問、STAR 回答アウトライン、トピック復習リスト、面接官への質問、リスクポイント、任意の模擬面接メモを含む。 |

ストーリーライブラリが薄い場合、ワークフローはそのギャップを示すべきであり、場当たりでストーリーを作ってはならない。

### 5. 応募前検証

| 入力 | 出力 |
|---|---|
| 提出予定の履歴書、提案書、書類、その他高ステークス文書；`verification/references.md`；公開情報源；重要な主張のリスト。 | `verification/{date}-web-check.md`。確認済み主張、公開証拠が不足する項目、高リスク項目、より安全な言い換え、必要な補足証拠を記録する。 |

シニアロール応募、研究課題申請、資格 / 昇進書類、重要な主張の初回使用前に実行する。

### 6. 研究課題申請プロフィール

| 入力 | 出力 |
|---|---|
| 有効化済みリサーチトラック、助成金または資金タイプ、公募要件、研究方向、`profiles/research.md`、`profiles/master.md`、検証ソース。 | 方向で絞り込んだプロフィールを `research-archive/{year}-{grant-type}-{direction}.md` に保存し、外部検証可能な主張にはより厳格な検証ログを作る。 |

リサーチトラックが有効でない場合、このワークフローは完全にスキップする。

### 7. 資格 / 昇進書類

| 入力 | 出力 |
|---|---|
| 公式ルールブックまたは eligibility 文書、既存の資格フォルダ、`profiles/master.md`、関連する場合の `profiles/research.md`、`verification/references.md`、`todo.md`、`changelog.md`。 | `credential-applications/{credential-name}/` のエビデンスマトリクス、ライティングパケット、リスクログ、審査者向け簡潔版、`todo.md` の未解決証拠、`changelog.md` の完了作業。 |

ルールは、エビデンスマトリクスを先に作り、洗練された文章は後で書くこと。

## 機密ファイル戦略

機密原本は Git に入れない。例：ID、パスポート、契約書、給与明細、任命書、証明書、卒業証明、医療またはライセンス文書、非公開推薦状。

`verification/references.md` にパス参照を記録する：

```markdown
| 証拠 | 場所 | メモ |
|---|---|---|
| 学位証明書 | secure-drive:/career-documents/education/degree-certificate.pdf | 学歴検証のみに使用。 |
| 雇用レター | private-vault:/employment/company-a/appointment-letter.pdf | title と在籍期間を確認する。 |
```

ハブは要約、主張の文言、検証ログを保存できる。ユーザーがプライベートリポジトリを適切な保管場所だと明示的に判断した場合を除き、機密原本をハブに置かない。

## 中断からの復旧

各セッションはまず次を読む：

1. `AGENTS.md`
2. `todo.md`
3. `changelog.md`
4. `jobs/applications/{company}-{role}-{date}/` など、ワークフロー固有のフォルダ
5. 高ステークスな主張を扱う場合は最新の検証ログ

セッションが途中で止まった場合：

- 未解決項目は `todo.md` に残し、次のアクションとブロッカーを書く。
- 完了し検証済みの作業は `changelog.md` に移す。
- 生成下書きは日付付きの応募フォルダまたは書類フォルダに保存する。
- 再開時はチャット履歴ではなく、ハブの状態から続けるようエージェントに依頼する。

## 古い履歴書の移行

古い履歴書は有用な入力だが、運用ソースとして残すべきではない。

1. 古い履歴書を `resumes-archive/` に置く。
2. PDF、DOCX、貼り付け履歴書を、それぞれ同じ場所の Markdown コピーへ変換する。
3. 事実として使える主張を `profiles/master.md` に統合する。
4. 面接向きのストーリーを `profiles/stories.md` に移す。
5. リサーチトラックが有効な場合だけ、研究成果を `profiles/research.md` に移す。
6. 不確実または裏付け不足の主張を `todo.md` または `verification/references.md` に記録する。
7. 新しい履歴書は `profiles/master.md` と具体的な JD から生成する。

アーカイブは履歴を保存する。`profiles/` が単一の信頼できる情報源になる。

## 四半期レビューのリズム

デフォルトの戦略リズムは四半期ごと：

- キャリアプランニングとギャップ分析を再実行する。
- 前回の `jobs/market-watch/{date}-gap-plan.md` を読み直す。
- 目標ポジション、報酬レンジ、地域、生活上の制約が変わったか確認する。
- スキル、スコープ、資格、ネットワーク、タイミングのギャップを再確認する。
- 完了したアクションを `changelog.md` に移す。
- `todo.md` には有効な四半期 SMART 項目だけを残す。
- 目標が実質的に変わった場合、`AGENTS.md` のポジショニングロックを更新する。

週次リズムは戦術的で、応募、証拠収集、面接準備、market-watch メモを更新する。四半期リズムは戦略的で、ハブがまだ正しいポジションを向いているか判断する。
