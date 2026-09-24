---
title: "JoyProxy 瀏覽器擴充元件：換 IP 只改 Chrome，不動系統代理"
description: "貼上代理字串、一鍵測試出口 IP 與延遲、僅對當前瀏覽器生效——Windows 與 macOS 全域網絡保持原樣。"
category: getting-started
legacyUrl: https://www.joyproxy.com/blog/joyproxy-browser-extension_tw.html
---

# JoyProxy 瀏覽器擴充元件：換 IP 只改 Chrome，不動系統代理

許多開發者與跨境營運人員都遇過這種困擾：為了在 Chrome 裡模擬海外家庭寬頻造訪特定網頁，在 Windows 或 macOS 系統設定中開啟了全域代理。結果網頁剛打開，Slack 斷線了、Git 程式碼拉取失敗，背景正在執行的各類辦公軟體全都被迫繞道海外機房。切回直連後，瀏覽器內的測試環境又隨之失效。

這正是全域系統代理的缺點：整台電腦的所有網絡連線都會被無差別轉發。但多數時候，您只需要**某一個瀏覽器視窗走海外代理，其餘所有辦公軟體維持直連** 。

[JoyProxy 瀏覽器擴充元件](https://www.joyproxy.com/products/browser-extension.html) 就是為此打造的輕巧工具。貼上代理、即時測試出口 IP 與延遲，然後僅套用於當前的 Chrome、Edge 或 Brave，作業系統底層網絡絲毫不受干擾。

20 秒功能速覽：貼上節點、一鍵測試連線品質、即刻套用，操作介面與 Chrome 線上應用程式商店一致。

該擴充功能**完全免費且開源** 。您可以搭配任何第三方代理使用，原始碼已公開於 [GitHub](https://github.com/joyproxy/joyproxy-extension)；若登入了 JoyProxy 帳號，還可在擴充元件中直接同步已購買的代理節點。

## 它能為您做什麼？

  * **智慧解析各類格式：** 支援直接貼上 `host:port`、`user:pass@host:port`、`http://`、`socks5://` 或擷取連結，無需手動拆分欄位。
  * **先測後用，失敗不覆蓋：** 點擊「測試」按鈕可即時取得節點的真實出口 IP、國家地區以及往返延遲。若節點失效，盡量不覆蓋當前正在使用的可用設定。
  * **瀏覽器級別隔離：** 代理僅在當前 Chromium 瀏覽器行程生效，不會修改作業系統的網絡配置，通訊軟體與本機開發服務一切如常。
  * **多組設定快捷切換：** 支援儲存多組常用地區或帳號的代理設定，一鍵平滑切換，告別每日重複複製貼上。



## 適用族群與典型場景

**跨境電商店鋪管理：** 單一瀏覽器視窗登入海外店鋪，電腦上的其他工作流程繼續保持本機高速直連；

**廣告與行銷素材審查：** 迅速以目標國家使用者的網絡身分預覽廣告到達頁展示效果，無需將整機連線切換過去；

**前端開發與地域適配驗證：** 測試多語言網站的 GeoIP 自動跳轉與 CDN 路由邏輯，測完一鍵恢復直連。

_備註：本工具專注於網絡連線的快速分流，不提供底層硬體指紋偽裝。若有嚴格的帳號防關聯需求，請搭配專業防關聯瀏覽器使用。_

## 支援環境與安裝方式

擴充功能基於 Manifest V3 標準開發，支援 Chrome 114+、Microsoft Edge、Brave 等所有 Chromium 核心瀏覽器。您可以直接從 [Chrome 線上應用程式商店](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng) 安裝並釘選在工具列，享受輕量高效的代理切換體驗。

免費 Chromium 擴充元件：貼上、測試、套用，更好地告別全域代理衝突。

[前往 Chrome 商店取得](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng)
