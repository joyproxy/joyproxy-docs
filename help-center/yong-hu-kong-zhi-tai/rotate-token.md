# 主用户与自动化 Token

JoyProxy 有多种 Token，**不可混用**。界面说明见网页抓取控制台内 **JoyProxy Token 类型说明**（`unblocker.tokenGuideTitle`）及各产品复制面板。

---

## Token 对照表

| 名称 | 现网标题 | 用途 | 在哪里复制 / 轮换 |
| --- | --- | --- | --- |
| 主用户 Token | **主用户 Token** | 账户管理、购买、订单 OpenAPI；**不能**提取 IP、AI、网页抓取 | **我的账户** → **资料** |
| API Token | **API Token** | 代理 IP 提取（如 `/v2/extract`）；URL 中 `token=` | **提取** 页复制的 **API URL** |
| AI Token | **AI Token** | AI 辅助提取代理 | 提取相关 AI 面板 |
| Scraping API Token | **Scraping API Token** | 仅 `/v1/fetch` 等网页抓取 API | **网页抓取** → **API 中心** |

主用户 Token 脚注（`settingsPage.masterTokenNote`）：**用于账户管理与购买（OpenAPI 下单、余额等）。不能提取代理 IP、不能使用 AI、不能调用网页抓取 API。**

Scraping 说明（`tokenUnblockerDesc`）：**仅用于网页抓取 API（/v1/fetch），购买 Credits 后在 API 中心显示。**

完整 HTTP 说明：[OpenAPI 中心](../best-practices/openapi-center.md)

---

## 轮换主用户 Token

1. **我的账户** → **资料** → **主用户 Token**。
2. 点击 **轮换**（`settingsPage.rotate`）。
3. 确认：**确定立即轮换主用户 Token？现有 Token 将失效，使用它的脚本需更新后才能继续。**
4. 复制新 Token（**复制** / **显示 Token**）。

---

## 轮换提取 API Token

在对应网络控制台 **提取** 页重新生成或轮换；**旧 API URL 立即失效**，请整体替换脚本中的 URL。

---

## 轮换 Scraping API Token

1. [网页抓取控制台](https://www.joyproxy.com/admin-web-unblocker.html?view=playground) → **API 中心**。
2. 在 **Scraping API Token** 区域点击 **轮换**（`pgTokenRotate`）。
3. 确认：**确定轮换 Scraping API Token？旧 Token 将立即失效。**

---

## 轮换后检查

在 [OpenAPI 中心](https://www.joyproxy.com/admin-openapi.html) 或抓取 **API 中心** 试一次请求。若返回 `401`，搜索配置中是否仍残留旧 Token 或旧 API URL。
