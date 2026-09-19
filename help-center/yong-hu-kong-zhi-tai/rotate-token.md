# 主用户与自动化 Token

JoyProxy 有多种 Token，用途不同，**不要混用**。网页抓取控制台内有 **JoyProxy Token 类型说明** 可查阅。

---

## 分别用在哪

| Token | 用途 | 在哪里 |
| --- | --- | --- |
| **主用户 Token** | 账户管理、购买、订单 API；不能提取 IP、不能用 AI、不能调网页抓取 | **我的账户** → **安全与 API** |
| **API Token** | 代理 IP 提取（在 **提取** 页复制的 API URL 里） | 各代理控制台 **提取** |
| **AI Token** | AI 辅助提取 | 提取相关 AI 功能 |
| **Scraping API Token** | 仅网页抓取公网 API | **网页抓取** → **API 中心** |

主用户 Token 说明：**用于账户管理与购买。不能提取代理 IP、不能使用 AI、不能调用网页抓取 API。**

抓取 Token 说明：**仅用于公网抓取 API，不能提取代理、不能管理账户。**

技术细节：<a href="../zui-jia-shi-jian/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>

---

## 轮换主用户 Token

**我的账户** → **安全与 API** → **主用户 Token** → **轮换**，确认后复制新 Token。旧 Token 立即失效。

---

## 轮换提取 Token

在对应网络 **提取** 页重新生成链接，并整体替换程序里的旧 API URL。

---

## 轮换 Scraping API Token

<a href="web-scraping-api.md" target="_blank" rel="noopener noreferrer">网页抓取控制台</a> → **API 中心** → **Scraping API Token** → **轮换**。未购买积分时会提示 **请先购买 Credits**。

---

## 轮换后

在 OpenAPI 或抓取 **API 中心** 试一次；若返回未授权，检查配置里是否仍使用旧 Token。
