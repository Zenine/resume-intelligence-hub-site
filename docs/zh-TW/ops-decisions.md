# 運維決策

本頁記錄站點層運維決策，避免未來再生成時遺失上下文。

## LLM / GEO 發現性

站點為每個語言提供一份簡短 `llms.txt`：

- `/llms.txt`
- `/zh/llms.txt`
- `/ja/llms.txt`
- `/zh-TW/llms.txt`

每個頁面都會在 `transformHead` 中輸出按目前語言匹配的 `llms.txt` discovery link。站點也保留一份多語言 `llms-full.txt`，從四套語言文件生成，供偏好單一擴展文本來源的 agent 使用。

## IndexNow

IndexNow 作為可選自動化啟用。只有倉庫 secret `INDEXNOW_KEY` 存在時，workflow 才會提交 URL。

部署 workflow 會把 key 檔案臨時寫入 GitHub Pages artifact 的 `/{base}/{key}.txt`。通知 workflow 只提交 `/resume-intelligence-hub-site/` 下的 URL，並把 `keyLocation` 指向已部署的 key 檔案。

IndexNow key 不提交進倉庫。

## 連結檢查

`scripts/verify.sh` 會執行 `scripts/check-links.py`，以確定性方式檢查 Markdown 和 public text asset 裡的內部連結。預設驗證路徑不檢查外部連結，避免 CI 因外部網站短暫不可用而抖動。

## Lighthouse

Lighthouse 審計放在單獨的 pull request 和定時 workflow 中。閾值刻意保持保守：

- Performance：低於 0.5 時警告
- Accessibility：低於 0.9 時報錯
- Best practices：低於 0.9 時報錯
- SEO：低於 0.9 時報錯

這樣 hard failure 集中在可訪問性、最佳實踐和 SEO，同時仍能暴露效能回歸。

## 執行時 SVG 內聯

目前保留執行時 SVG 內聯策略。它能支援主題化圖示樣式，並在 fetch 或解析失敗時保留 `<img>` fallback。改成全部建置期內聯需要改變 VitePress feature icon 和 Markdown 圖示圖片的輸出方式，對目前靜態站點收益有限。

如果 Lighthouse 或視覺測試顯示明顯 layout shift、圖示閃爍或 fetch 開銷，再重新評估。

## 未來 Skill 抽象

可重用的 `meridian-vitepress-ops` skill 應在站點倉庫外設計。抽象後的 skill 應參數化：

- repository owner/name
- site URL 和 base path
- brand name 和 project type
- accent color 和 logo assets
- locales
- GSC 和 IndexNow enablement
- `llms.txt` / `llms-full.txt` generation policy
- i18n glossary 和 drift-check rules
- checkpoint structure

本倉庫保留為參考實作，而不是抽象 skill package 本身。
