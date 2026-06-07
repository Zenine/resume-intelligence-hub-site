# 發布 / 版本映射

本頁記錄公共站點層如何對應 `resume-intelligence-hub` skill 儲存庫。它是文件基線，不表示目前本機工作樹乾淨，也不表示這台機器已經檢出了 skill 儲存庫。

## 儲存庫關係

`resume-intelligence-hub-site` 是站點層。它包含 VitePress 文件、多語言內容、CI 自動化、SEO/GEO 資產，以及 GitHub Pages 發布支援。

skill 本體位於獨立的 [`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) 儲存庫。該儲存庫負責 `SKILL.md`、`templates/` 和 `workflows/`；這些檔案定義使用者在 AI IDE 中安裝和執行的行為。

## 目前映射

| 層 | 來源 | 版本基線 | 說明 |
| --- | --- | --- | --- |
| 站點層 | [`Zenine/resume-intelligence-hub-site`](https://github.com/Zenine/resume-intelligence-hub-site) | `1b344c2` | 來自本機 `git rev-parse --short HEAD`。目前工作樹有未提交改動，所以這裡只表示已提交基線。 |
| skill 儲存庫 | [`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) | 遠端 `main` / 已發布 tag | 目前機器上下文中沒有本機檢出 skill 儲存庫。不要推斷或編造本機 skill commit；以遠端儲存庫和發布 tag 作為單一事實來源。 |

## 再生成策略

以下任一輸入變化時，都應重新生成或複核站點：

- skill 儲存庫行為變化：[`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) 中的 `SKILL.md`、`templates/` 或 `workflows/` 發生變化。
- 站點多語言內容變化：英文、簡體中文、日文或繁體中文任一 docs 頁面發生變化，並按 `i18n/glossary.md` 核對術語。
- SEO/GEO 資產變化：`llms.txt`、`llms-full.txt`、sitemap 相關自動化、robots metadata、Open Graph 資產或 discovery links 發生變化。

需要再生成時，應同步更新站點文件，重新生成 `llms-full.txt`，並在同一發布週期把已完成變更記錄到 `CHANGELOG.md`。

## 核查說明

使用本頁回答一個問題：「站點文件是否匹配我準備安裝的 skill 版本？」

要得到精確答案，應把目前站點 commit 與 [`Zenine/resume-intelligence-hub`](https://github.com/Zenine/resume-intelligence-hub) 目前遠端 `main` 或發布 tag 對比。如果 skill 儲存庫已有新的行為變化，而站點尚未反映這些變化，應先重新生成站點，再把文件視為目前版本。
