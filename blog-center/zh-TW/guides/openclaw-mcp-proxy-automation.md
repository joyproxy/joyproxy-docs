---
title: "利用 OpenClaw 與 AI MCP 自動化產生代理端點"
description: "為 Cursor、VS Code 和 Claude Desktop 的 AI 程式設計智慧體賦予動態擷取海外代理端點的能力，實現測試與爬蟲的自然語言調度。"
category: guides
legacyUrl: https://www.joyproxy.com/blog/openclaw-mcp-proxy-automation_tw.html
---

# 利用 OpenClaw 與 AI MCP 自動化產生代理端點

隨著 AI Coding Agent（如 Cursor Agent、Claude Desktop、VS Code Copilot 等）在日常開發流程中的深度普及，開發者越來越多地要求智慧體能夠**直接與真實網絡基礎設施互動** ——例如在撰寫跨國 API 單元測試時，讓 AI 自動擷取一個美國加州的住宅代理並完成驗證；或者在編寫爬蟲腳本時，讓智慧體即時查詢帳戶當前可用流量。

為此，JoyProxy 正式開放了兩大面向 AI 智慧體的連接標準：**OpenClaw Skill** （面向自然語言對話代理）以及 **AI MCP（Model Context Protocol）** （面向現代 IDE 結構化工具呼叫）。

## 兩大整合模式的核心共通點

  * **專屬 AI Access Token：** 在主控台一鍵產生獨立的 AI 造訪權杖，與主帳戶管理密碼分離；
  * **嚴格的安全唯讀邊界：** 支援端點產生、餘額查詢、流量消耗統計，預設阻斷高風險的儲值扣款或修改關鍵帳戶設定動作；
  * **與底層 API 邏輯完全一致：** AI 呼叫的端點產生器與人工在主控台操作的介面完全統一，無效能耗損或特權限制。



## 1\. OpenClaw Skill 整合

服務接入位址：`https://api.joyproxy.com/Skill`。完成 Token 綁定後，您可以在 OpenClaw 或各類基於 LangChain、AutoGPT 的任務機器人中直接用自然語言下達指令，例如： _「幫我產生 3 個英國倫敦的 SOCKS5 動態端點並注入環境變數」_ 。

詳情可參閱產品頁面：[OpenClaw Skill](https://www.joyproxy.com/products/openclaw-skill.html)。

## 2\. AI MCP（Model Context Protocol）工具集

MCP 服務位址：`https://api.joyproxy.com/Mcp`。基於 Anthropic 推出的開放通訊協定，您可以將配置 JSON 直接貼到 **Cursor Settings、VS Code Roo Code 或 Claude Desktop** 的 MCP 設定檔中。設定生效後，AI 側邊欄會自動出現 `joyproxy_extract_endpoint` 等標準化工具，支援智慧體在編寫程式碼的同時自主執行工具呼叫並取得最新節點。

詳情可參閱產品頁面：[AI MCP](https://www.joyproxy.com/products/ai-mcp.html)。

## 生產安全最佳實踐

  1. **專金專用：** 為不同的測試智慧體分配獨立的 AI Token，測試完畢後可隨時在主控台單向撤銷；
  2. **嚴禁提交版本庫：** 妥善透過 `.env` 或本地環境變數載入 Token，切勿將明文設定檔 Push 到 GitHub 等公開程式碼庫中；
  3. **前置斷言檢驗：** 在生產爬蟲排程大規模使用 Agent 擷取的節點前，建議在腳本首層加入簡易連線探測。
