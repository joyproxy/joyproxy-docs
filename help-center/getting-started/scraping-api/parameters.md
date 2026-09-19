# 抓取参数与积分消耗标准（Parameters & Billing Rules）

在网页抓取 API 中，你可以通过传递不同的控制参数来开启 JS 渲染、高级反爬绕过或指定国家出口。不同的功能配置对应不同的云端算力与积分扣费阶梯。

---

## 常用抓取参数详解

在请求 `https://api.joyproxy.com/v1/fetch` 时，支持以下控制参数（支持 GET Query 参数或 POST JSON 字段）：

| 参数名（Parameter） | 类型 | 默认值 | 作用与说明 |
| --- | --- | --- | --- |
| `url` | String | **必填** | 需要抓取的目标网页 URL（使用 GET 请求时务必对 URL 进行 URL-Encode 编码）。 |
| `token` | String | **必填** | 你的账户专属 **Scraping API Token**。 |
| `render` | Boolean | `false` | 是否开启云端 Headless 动态 JavaScript 渲染。抓取 SPA 单页应用或依赖动态加载的页面时需开启。 |
| `super` | Boolean | `false` | 是否开启 **Super 住宅/移动出口**。路由至真实家庭宽带或移动网络出口，适合高风控目标网站。 |
| `geoCode` | String | 随机 | 指定出口代理 IP 国家代码（ISO 2 字母代码，如 `us` 美国、`jp` 日本、`de` 德国）。 |
| `customHeaders`| Object/JSON | 无 | 自定义透传到目标网站的 HTTP 请求头（如 Cookie、User-Agent 等，JSON 格式）。 |
| `sessionId` | String | 无 | 黏性会话 ID。相同 sessionId 将在约 10 分钟窗口期内复用同一出口 IP。 |
| `regionalGeoCode` | String | 无 | 区域定向代码，支持 `eu`（欧洲）、`na`（北美）、`as`（亚洲）、`sa`（南美）、`af`（非洲）、`oc`（大洋洲）。 |
| `waitUntil` | String | 无 | 渲染等待条件，支持 `load`、`domcontentloaded`、`networkidle0`、`networkidle2`。 |
| `waitSelector` | String | 无 | 等待页面中指定 CSS 选择器元素出现后再返回 HTML。 |
| `customWait` | Integer | 无 | 页面加载完成后的额外等待时间（毫秒），如 `2000`。 |

---

## 积分消耗标准（仅成功才扣积分）

JoyProxy 严格遵循 **“只有抓取成功才扣积分（0 扣费保证）”** 原则。

### 1. 0 扣费判定条件
当且仅当 API 返回 HTTP 状态码 **2xx** 且 Body 成功获取到有效内容时才扣除积分。如果出现目标网站 5xx、网络超时、连接被阻断或 API 返回 400/401/429/502 时，**本次请求一律 0 扣费（不扣任何积分）**。

### 2. 积分扣费阶梯明细表

| 抓取模式与参数组合 | 成功扣除积分 | 适用场景说明 |
| --- | --- | --- |
| **标准静态抓取（Standard Fetch）** | **1 积分** | 普通 HTML 网页、静态 API 接口、无复杂防护站点（数据中心出口）。 |
| **开启 JS 渲染（`render=true`）** | **5 积分** | 需执行 JavaScript 脚本渲染的 Vue / React / Angular 单页应用。 |
| **Super 住宅/移动出口（`super=true`）** | **10 积分** | 使用高信任度真实住宅/移动出口 IP 抓取高风控站点。 |
| **JS 渲染 + Super 出口（`super=true & render=true`）** | **25 积分** | 真实住宅/移动出口 + 云端 Headless JS 完整动态渲染。 |

---

## 响应头积分明细透传

每次抓取成功后，系统会在 HTTP 响应 Header 中返回本次消费明细：
- `X-JoyProxy-Fetch-Credits-Used`：本次请求实际消耗的积分数（如 `5`）。
- `X-JoyProxy-Fetch-Credits-Remaining`：扣除后账户剩余的总积分数。

建议在代码中优先使用标准模式（1 积分）；只有当页面出现空白或动态数据未加载时再开启 `render=true`，以获得最优的性价比。
