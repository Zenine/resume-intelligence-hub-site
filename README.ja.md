<!--
  Translation status:
  Source file : README.md
  Translated  : 2026-04-21
  Status      : up-to-date
-->

> **言語 / Language**: [English](README.md) · [简体中文](README.zh.md) · **日本語** · [繁體中文](README.zh-TW.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Stars](https://img.shields.io/github/stars/Zenine/resume-intelligence-hub-site?style=flat-square&color=gold)](https://github.com/Zenine/resume-intelligence-hub-site/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/Zenine/resume-intelligence-hub-site?style=flat-square)](https://github.com/Zenine/resume-intelligence-hub-site/commits/main)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Zenine/resume-intelligence-hub-site/pulls)
[![Docs](https://img.shields.io/badge/Docs-online-4a9eff?style=flat-square&logo=vitepress&logoColor=white)](https://zenine.github.io/resume-intelligence-hub-site/ja/)
[![Powered by Meridian](https://img.shields.io/badge/Powered%20by-Meridian-8b5cf6?style=flat-square)](https://github.com/lordmos/meridian)

<div align="center">
  <img src=".github/assets/hero.svg" alt="Resume Intelligence Hub" width="120" />
</div>

# resume-intelligence-hub-site

[**resume-intelligence-hub**](https://github.com/Zenine/resume-intelligence-hub) スキルのランディングページ・VitePress ドキュメントサイト・CI 自動化——個人キャリアインテリジェンスハブを構築する AI エージェント。

## クイックスタート

> 完全なドキュメント → [zenine.github.io/resume-intelligence-hub-site/ja/](https://zenine.github.io/resume-intelligence-hub-site/ja/)

**スキルのインストール：**

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

**AI IDE で一言：**

> **キャリアリポジトリを作って**

AI が 8 つの質問に答えてもらい、プライベートなキャリアハブを構築します。あなたがやること：① 質問に答える → ② 生成されたハブを確認 → ③ 使い始める。

**中断後の再開** → AI に伝える：`続きを教えて`

## 主な機能

- **信頼できる唯一の情報源** — `profiles/` が権威ある情報源。生成された履歴書はすべて派生物
- **キャリアコンパス** — 1〜2 レベル上のストレッチターゲットを `AGENTS.md` に固定し、四半期ごとにギャップ分析
- **マルチトラック対応** — 求人応募、研究費申請、資格・昇進書類を分けて管理
- **提出前検証** — 重要な主張を応募前に公開情報源でクロスチェック
- **帰属境界** — 個人の責任、チーム成果、会社指標、見積、パイプライン、予測、確定売上を区別
- **クロス IDE 対応** — AGENTS.md 経由で Claude Code・Cursor・Codex・Cline・Windsurf・GitHub Copilot に対応
- **実績あるフレームワーク** — Google XYZ、STAR、BEI、Heilmeier Catechism、ストレッチターゲット、三角検証

## 他の履歴書スキルとの違い

ほとんどの履歴書スキルは一度きりのジェネレーターです。JD を貼り付けて履歴書を得るだけです。このスキルは**持続的なプライベートリポジトリ**を構築し、数ヶ月にわたる就職活動・面接・研究費申請・資格/昇進書類を通じて反復改善できます。AI は各セッションでリポジトリを読み込み、ポジショニングロックに基づいて出力を偏らせます。

## ディレクトリ構造

```
docs/       VitePress ソース（4 言語：en / zh / ja / zh-TW）
scripts/    CI 自動化 — verify、リンクチェック、サイトマップ / IndexNow 通知、llms-full.txt ジェネレーター
i18n/       glossary.md — 翻訳ドリフト参照
.github/    デプロイ workflow + GSC / IndexNow / Lighthouse 自動化 + セットアップガイド
```

一度だけ行う Google Search Console 自動化設定は [`.github/SETUP_GSC_AUTOMATION.md`](.github/SETUP_GSC_AUTOMATION.md) を参照してください。
LLM discovery、IndexNow、リンクチェック、Lighthouse、SVG インライン化、将来の skill 抽象化に関する運用決定は [`docs/ja/ops-decisions.md`](docs/ja/ops-decisions.md) を参照してください。

## 補完スキル

このハブの上に、特定の一度きりの用途向けスキルを組み合わせられます。

- [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) — ATS 最適化
- [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) — LinkedIn プロフィール
- [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) — Anthropic 公式面接準備
- [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) — キャリアチェンジフレームワーク

## ライセンス

MIT — スキル本体と同じです。

---

<sub>Built with [Meridian](https://github.com/lordmos/meridian) · open-source ops toolkit for Agent projects</sub>
