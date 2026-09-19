# 主用户与自动化 Token

JoyProxy 有多种 Token，**不可混用**。网页抓取控制台内另有 **JoyProxy Token 类型说明**。

---

## 对照表

| 名称 | 用途 | 在哪里管理 |
| --- | --- | --- |
| **主用户 Token** | 账户管理、购买、订单 OpenAPI；**不能**提取 IP、AI、网页抓取 | **我的账户** → **安全与 API** |
| **API Token** | 代理 IP 提取（如 `/v2/extract`），在 **API URL** 的 `token=` | 各网络 **提取** 页 |
| **AI Token** | AI 辅助提取代理 | 提取相关 AI 面板 |
| **Scraping API Token** | 仅 `/v1/fetch` 等网页抓取 API | **网页抓取** → **API 中心** |

主用户说明：**用于账户管理与购买（OpenAPI 下单、余额等）。不能提取代理 IP、不能使用 AI、不能调用 网页抓取 API。**

Scraping 说明：**仅用于公网 API，不能提取代理、不能使用 AI、不能管理账户。**

HTTP 细节：<a href="../zui-jia-shi-jian/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>

---

## 轮换主用户 Token

1. **我的账户** → **安全与 API** → **主用户 Token**。
2. **显示 Token** / **隐藏 Token**、**复制**、**轮换**。
3. 确认：**确定立即轮换主用户 Token？现有 Token 将失效，使用它的脚本需更新后才能继续。**

---

## 轮换提取 API Token

在对应网络 **提取** 页重新生成；**旧 API URL 立即失效**，请整体替换脚本中的 URL。

---

## 轮换 Scraping API Token

1. <a href="web-scraping-api.md" target="_blank" rel="noopener noreferrer">网页抓取控制台</a> → **API 中心** 页签。
2. **Scraping API Token** → **轮换**。
3. 确认：**确定轮换 Scraping API Token？旧 Token 将立即失效。**

未购买 Credits 时占位：**请先购买 Credits**。

---

## 轮换后检查

在 <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a> 或抓取 **API 中心** 试请求；`401` 时搜索配置中残留的旧 Token。
