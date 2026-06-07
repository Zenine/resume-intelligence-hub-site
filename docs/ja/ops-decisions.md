# 運用決定

このページは、将来の再生成で失われてはいけないサイト層の運用決定を記録します。

## LLM / GEO Discovery

サイトはロケールごとに短い `llms.txt` を提供します。

- `/llms.txt`
- `/zh/llms.txt`
- `/ja/llms.txt`
- `/zh-TW/llms.txt`

各ページは `transformHead` で現在の言語に対応する `llms.txt` discovery link を出力します。4 つのロケールドキュメントから生成した多言語 `llms-full.txt` も保持し、単一の展開済みテキストソースを好む agent 向けに提供します。

## IndexNow

IndexNow は任意の自動化として有効化されています。リポジトリ secret `INDEXNOW_KEY` が存在する場合だけ、workflow が URL を送信します。

デプロイ workflow は key ファイルを GitHub Pages artifact の `/{base}/{key}.txt` に一時的に書き込みます。通知 workflow は `/resume-intelligence-hub-site/` 配下の URL だけを送信し、`keyLocation` はデプロイ済み key ファイルを指します。

IndexNow key はリポジトリにコミットしません。

## リンクチェック

`scripts/verify.sh` は `scripts/check-links.py` を実行し、Markdown と public text asset 内の内部リンクを決定的にチェックします。外部リンクはデフォルト検証から外し、外部サイトの一時的な障害で CI が不安定になることを避けます。

## Lighthouse

Lighthouse 監査は別の pull request / 定期 workflow で実行します。しきい値は保守的に設定しています。

- Performance: 0.5 未満で warning
- Accessibility: 0.9 未満で error
- Best practices: 0.9 未満で error
- SEO: 0.9 未満で error

これにより、hard failure はアクセシビリティ、ベストプラクティス、SEO に集中し、性能低下は warning として可視化します。

## ランタイム SVG インライン化

現在のランタイム SVG インライン化戦略を維持します。テーマ化されたアイコンスタイルを実現し、fetch や解析に失敗した場合は `<img>` fallback を残せます。すべてをビルド時インライン SVG に変えるには、VitePress の feature icon と Markdown アイコン画像の出力を変える必要があり、この静的サイトでは利益が限定的です。

Lighthouse や視覚テストで明確な layout shift、アイコン flash、fetch overhead が見えた場合に再評価します。

## 将来の Skill 抽象化

再利用可能な `meridian-vitepress-ops` skill は、このサイトリポジトリの外で設計します。抽象化された skill は次をパラメータ化するべきです。

- repository owner/name
- site URL と base path
- brand name と project type
- accent color と logo assets
- locales
- GSC と IndexNow enablement
- `llms.txt` / `llms-full.txt` generation policy
- i18n glossary と drift-check rules
- checkpoint structure

このリポジトリは参照実装として残し、抽象 skill package そのものにはしません。
