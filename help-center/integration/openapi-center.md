# OpenAPI 中心

<a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> 是 JoyProxy 的**统一 HTTP API 文档**：在浏览器里试调接口、复制示例、上线前核对 Token。各产品「入门」章节只讲控制台操作；**路径、请求参数与错误码以本文为准**。

**Base URL：** `https://api.joyproxy.com`

## 认证

JoyProxy 使用**三种不同密钥**。混用会导致 `401` / `invalid_token`。

| 凭据 | 用于 | 复制位置 |
| --- | --- | --- |
| 提取 Token（在 **API URL** 内，`token=` 查询参数） | 端点生成、白名单、凭据、地域参考 | <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> — 复制 **API URL** 框 |
| **Master User Token** | 余额、订单、续费、资料 API | <a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">账户设置</a> |
| **Scraping API Token** | 网页抓取 API 抓取与积分/用量 API | 网页抓取 API → <a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">API Center</a> |

登录后 OpenAPI Center 可在 **Authorize** 中预填提取与主用户 Token。提取 Token **不要**从账户设置复制。

> **重要**
>
> 将每个 Token 与完整 API URL 视为机密。若泄露请通过<a href="../user-console/rotate-token.md" target="_blank" rel="noopener noreferrer">轮换 Token</a>轮换。

## 轮换端点 — `GET /v2/extract`

根据与 `network_type` 匹配的生效轮换流量，生成 `gate.joyproxy.com:9001` 用户名（及可直接使用的字符串）。

**最简路径：** 在 Endpoints 设置地域、会话、格式与数量，然后复制 **API URL**（Token 已在查询中）。

```bash
curl "PASTE_THE_COPIED_API_URL"
```

示例结构（复制时 Token 已填入）：

```text
https://api.joyproxy.com/v2/extract?token=...&network_type=residential&count=5&duration=5m&format=json
```

| 查询参数 | 含义 |
| --- | --- |
| `token` | 复制 API URL 时已包含 |
| `network_type` | `residential`、`cellular`（别名 `mobile`）或 `business` — 须与所购套餐一致 |
| `count` | 返回用户名数量（单次最多 **200**） |
| `duration` | 粘性时长，如 `5m` 或 `30m`。省略则为轮换会话 |
| `protocol` | 输出提示：`http`、`https` 或 `socks5` |
| `format` | `json`、`crlf` 及 OpenAPI Center 中显示的其他值 |
| `country_geoname_id`, `state_geoname_id`, `city_geoname_id` | 与网页生成器相同定向 — 用 **Geo Reference** 操作解析 ID |

套餐 → `network_type`：

| 所购套餐 | `network_type` |
| --- | --- |
| Residential | `residential` |
| Mobile | `cellular`（别名 `mobile`） |
| Business / ISP | `business` |

将返回的用户名**原样**粘贴到客户端。控制台流程见<a href="../getting-started/rotating/extract-ip.md" target="_blank" rel="noopener noreferrer">生成端点</a>。

### 提取 JSON `error` 值

失败的提取调用返回带 `error` 字段的 JSON（非 HTTP 代理状态码）：

| `error` | 含义 |
| --- | --- |
| `missing_token`, `invalid_token`, `api_token_required` | 提取 Token 错误或缺失 — 使用 Endpoints 的 URL，而非 Master User Token |
| HTTP **429** | 提取调用过多；请降速 |
| `no_short_orders`, `short_traffic_exhausted` | 无生效轮换套餐或流量用尽 |
| `invalid_country`, `no_ip_for_geo` | 地域筛选与当前库存不符 |
| `Invalid protocol` | `protocol` 须为 `http`、`https` 或 `socks5` |

## 静态端点 — `GET /v2/extract-long`

返回静态分配的专用 `host:port` 行。

```text
https://api.joyproxy.com/v2/extract-long?token=...&allocation_id=ID&format=crlf
```

`allocation_id` / `order_id` 来自 My Proxies 或 **List Purchased Orders**。控制台流程：<a href="../getting-started/static/generate-endpoints.md" target="_blank" rel="noopener noreferrer">静态 → 生成端点</a>。

## 定制端点 — `GET /v2/extract-custom`

定制分配相同模式：

```text
https://api.joyproxy.com/v2/extract-custom?token=...&allocation_id=ID&format=crlf
```

控制台流程：<a href="../getting-started/custom/authorize-and-generate.md" target="_blank" rel="noopener noreferrer">定制 → 授权与生成</a>。

## 授权 API（提取 Token）

| 操作 | 路径 |
| --- | --- |
| 白名单列表 / 添加 / 移除 | `GET /v2/whitelist/list`, `POST /v2/whitelist/add`, `POST /v2/whitelist/remove` |
| 凭据列表 / 添加 / 移除 | `GET /v2/credentials/list`, `POST /v2/credentials/add`, `POST /v2/credentials/remove` |

轮换自动化今日使用 Users & Whitelist 的 **Username/Password**；白名单 API 适用于静态、定制与数据中心线路。

## 地域参考（提取 Token）

| 操作 | 路径 |
| --- | --- |
| 列出国家 | `GET /v2/geo/countries` |
| 列出州/省 | `GET /v2/geo/states` |
| 列出城市 | `GET /v2/geo/cities` |

自动化地域定向时，在 `/v2/extract` 查询参数中使用这些 ID。

## 订单与余额（Master User Token）

发送 `Authorization: Bearer YOUR_MASTER_USER_TOKEN`。

**列出生效轮换订单：**

```bash
curl -X POST "https://api.joyproxy.com/v2/orders/list" \
  -H "Authorization: Bearer YOUR_MASTER_USER_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"product_type\":\"short-term\",\"network_type\":\"residential\",\"status_valid\":\"valid\",\"limit\":100}"
```

| 体字段 | 示例 | 含义 |
| --- | --- | --- |
| `product_type` | `short-term` | 轮换。静态：`long-term`。定制：`custom-ip` |
| `network_type` | `residential` | `residential`、`cellular` 或 `business` |
| `status_valid` | `valid` | 生效套餐。`all` 含已过期 |

轮换行含 `traffic_gb`。已用/剩余 GB 亦在控制台 **Usage** 下显示。静态与定制行使用 `port_count`。

**账户余额：**

```bash
curl "https://api.joyproxy.com/v2/balance" \
  -H "Authorization: Bearer YOUR_MASTER_USER_TOKEN"
```

OpenAPI Center 还文档化 **Create Order** 与 **Renew Order**（API 结账用 `payment_method: balance`）。控制台等价：<a href="../getting-started/rotating/view-traffic.md" target="_blank" rel="noopener noreferrer">用量与订单</a>。

## 网页抓取 API（Scraping API Token）

托管抓取 — JoyProxy 运行代理、重试与可选渲染。积分**仅在成功抓取时**扣费。

| 操作 | 路径（方法以 OpenAPI Center 当前文档为准） |
| --- | --- |
| 抓取 URL | OpenAPI 中记为 **Fetch URL**（playground 与生产一致） |
| 抓取积分 | `GET /v2/fetch/credits` |
| 用量历史 | `GET /v2/fetch/usage` |

从 API Center 复制 **Scraping API Token**。常见查询标志（`url`、`render`、`super`、`geoCode` 等）见<a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">控制台 API 文档</a>与<a href="../getting-started/scraping-api/parameters.md" target="_blank" rel="noopener noreferrer">参数与积分成本</a>。

产品概览：<a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">网页抓取 API</a>。

## 典型工作流

1. 打开 <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> 并选择操作组。
2. 用正确 Token 类型 **Authorize**。
3. 填写参数（或粘贴复制的提取 API URL）。
4. 执行、检查 JSON 并导出代码示例。

## OpenAPI 仍不够时

- 代理配置 walkthrough：<a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">入门</a>
- AI 驱动生成：<a href="integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">在 AI 中集成代理</a>
- 目标站策略：<a href="../getting-started/rotating/restricted-targets.md" target="_blank" rel="noopener noreferrer">受限目标</a>
