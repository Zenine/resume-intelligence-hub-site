<!--
  Translation status:
  Source file : docs/quick-start.md
  Source commit: b5a3649
  Translated  : 2026-04-21
  Status      : up-to-date
-->

# クイックスタート

3 ステップでキャリアインテリジェンスハブを起動する。

## 1. Skill のインストール

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

または直接 clone：

```bash
git clone https://github.com/Zenine/resume-intelligence-hub ~/.claude/skills/resume-intelligence-hub
```

## 2. ハブの初期化

お使いの AI IDE（Claude Code、Cursor、Codex、Cline、Windsurf、または `AGENTS.md` を読める任意の IDE）を開く。ハブを置きたい場所に `cd`——**必ずプライベートな場所**、公開される予定のリポジトリは避ける。そして次のように言う：

> **build my career repo**

エージェントが 7 問インタビューで進める：

1. **言語** — 中国語か英語、どちらか 1 つ（混在不可）
2. **既存資料** — 手元に履歴書 / CV があれば先に渡す（以降の質問すべてが正確になる）
3. **業界 / 分野** — ソフトウェア、医療、デザイン、法律、学術など
4. **ターゲットシニアリティ** — エントリーから VP / 創業者 / PI まで
5. **リサーチトラック？** — 助成金・研究費応募を行う場合のみ有効化
6. **履歴書出力言語** — 中国語、英語、または両方
7. **リポジトリ場所** — ディスク上のパス

続いてエージェントがディレクトリをスキャフォールドし、`AGENTS.md` にポジショニングを書き込み、既存の履歴書をアーカイブに取り込み、`todo.md` に「次のステップ」パンチリストを書き出す。

## 3. ハブの使用

初期化後、エージェントが 6 つのワークフローを処理する。自然言語で呼び出す：

| 言い方 | ワークフロー |
|--------|-------------|
| 目標ポジションとのギャップを分析して | [キャリアプランニング & ギャップ分析](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/career-planning.md) — 初期化直後に最初に実行し、その後は四半期ごとに再実行 |
| この JD に合わせて履歴書を作って | [JD カスタム履歴書](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/jd-tailored-resume.md) |
| 私に合いそうな求人を探して | [アクティブ JD ソーシング](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/jd-sourcing.md) |
| この面接の準備をして | [面接準備](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/interview-prep.md) |
| 応募前に検証して | [検証](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/verification.md) |
| XX 助成金の申請書類を作って | [研究課題申請](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/grant-application.md)（リサーチトラック） |

## トラブルシューティング

**「AI が私の AGENTS.md を読まない」**

- Claude Code：`CLAUDE.md` しか読まない古いバージョンなら、シンボリックリンク：`ln -s AGENTS.md CLAUDE.md`
- Cursor：`AGENTS.md` の内容を `.cursor/rules/agents.mdc` にコピーまたはシンボリックリンク
- Windsurf：`.windsurfrules` を使用
- GitHub Copilot：`.github/copilot-instructions.md` を使用
- その他の IDE：各 IDE のコンテキストファイル規約を参照

**「既存のハブがある — 移行できる？」**

はい。既存の散らばった履歴書（`简历/` など）の場所をエージェントに指し、「これを resume-intelligence-hub の構造に移行して」と言う。初期化フローが統合を処理する。

**「別の言語が必要」**

現在：中国語と英語のテンプレート。コントリビューション歓迎——[GitHub リポジトリ](https://github.com/Zenine/resume-intelligence-hub) を参照。
