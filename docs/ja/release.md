# リリース / バージョン対応

このページは、公開サイトレイヤーが `resume-intelligence-hub` skill リポジトリとどう対応しているかを記録する。これはドキュメント上の基準であり、ローカルの作業ツリーがクリーンであることや、このマシンに skill リポジトリがチェックアウトされていることを意味しない。

## リポジトリの関係

`resume-intelligence-hub-site` はサイトレイヤーである。VitePress ドキュメント、多言語コンテンツ、CI 自動化、SEO/GEO アセット、GitHub Pages 公開サポートを含む。

skill 本体は別リポジトリの [`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) にある。そのリポジトリが `SKILL.md`、`templates/`、`workflows/` を所有し、ユーザーが AI IDE でインストールして実行する動作を定義する。

## 現在の対応

| レイヤー | ソース | バージョン基準 | 注記 |
| --- | --- | --- | --- |
| サイトレイヤー | [`Zenine/resume-intelligence-hub-site`](https://github.com/Zenine/resume-intelligence-hub-site) | `1b344c2` | ローカルの `git rev-parse --short HEAD` による値。現在の作業ツリーには未コミット変更があるため、これはコミット済み基準のみを示す。 |
| skill リポジトリ | [`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) | リモート `main` / 公開済み tag | 現在のマシンコンテキストでは skill リポジトリはローカルにチェックアウトされていない。ローカル skill commit を推測または捏造せず、リモートリポジトリとリリース tag を単一の信頼できる情報源とする。 |

## 再生成ポリシー

次のいずれかの入力が変わった場合、サイトを再生成またはレビューする。

- skill リポジトリの動作変更：[`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) の `SKILL.md`、`templates/`、または `workflows/` が変わった場合。
- サイトの多言語コンテンツ変更：英語、簡体字中国語、日本語、繁体字中国語のいずれかの docs ページが変わった場合。用語は `i18n/glossary.md` に照らして確認する。
- SEO/GEO アセット変更：`llms.txt`、`llms-full.txt`、sitemap 関連自動化、robots メタデータ、Open Graph アセット、または discovery links が変わった場合。

再生成が必要な場合は、サイトドキュメントを同期更新し、`llms-full.txt` を再生成し、同じリリースサイクルで完了した変更を `CHANGELOG.md` に記録する。

## 検証メモ

このページは「サイトドキュメントは、これからインストールする skill バージョンと一致しているか？」という問いに答えるために使う。

正確に判断するには、現在のサイト commit と [`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) の現在のリモート `main` またはリリース tag を比較する。skill リポジトリに新しい動作変更があり、それがサイトにまだ反映されていない場合は、ドキュメントを現行版として扱う前にサイトを再生成する。
