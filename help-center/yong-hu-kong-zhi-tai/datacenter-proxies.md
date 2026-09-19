# 数据中心控制台

托管 ASN 高吞吐出口；现网仅 **静态独享** 与 **自定义独享**（默认打开静态模式）。动态轮换请用住宅、移动或商业网络。

| 项目 | 说明 |
| --- | --- |
| 侧栏入口 | **数据中心控制台**（`sidebar.proxyDatacenter`） |
| 控制台页顶 | **数据中心代理** — 数据中心托管 ASN IP — 高速静态或自定义多端口。 |
| 页眉 kicker | **代理控制台**（`proxyConsole.kicker`） |
| 地址 | <a href="https://www.joyproxy.com/admin-proxy-datacenter.html" target="_blank" rel="noopener noreferrer">https://www.joyproxy.com/admin-proxy-datacenter.html</a> |
| 产品页 | <a href="https://www.joyproxy.com/products/proxy-datacenter.html" target="_blank" rel="noopener noreferrer">https://www.joyproxy.com/products/proxy-datacenter.html</a> |

左侧 **代理** 分组下进入本网络；子项右侧 **购买** 图标（`sidebar.proxyQuickBuy`）等价于打开本页 **购买** 页签（`?view=buy`）。

---

## 页签一览

各页签主标题与副标题与现网 `proxyConsole.*` 一致：

| 页签 | 主标题 | 副标题 | URL 参数 `view=` |
| --- | --- | --- | --- |
| 购买 | **购买** | 套餐与支付 | `buy` |
| 已购 | **已购** | 在途与库存 | `orders` |
| 账密与白名单 | **账密与白名单** | 用户名密码与白名单 | `auth` |
| 提取 | **提取** | 提取代理地址 | `extract` |
| 用量 | **用量** | 流量与订单 | `usage` |
| API 中心 | **API 中心** | OpenAPI 与在线调试 | 新窗口打开 OpenAPI 中心 |

购买 / 已购 / 提取等页内还可通过 **动态**、**静态独享**、**自定义独享**（`proxyConsole.modeRotating` / `modeStatic` / `modeCustom`）切换产品形态；本网络支持的模式如下：

| 模式 | 文案 | 产品文档 |
| --- | --- | --- |
| 静态独享 | **静态独享** | <a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">静态独享代理</a> |
| 自定义独享 | **自定义独享** | <a href="../getting-started/custom/README.md" target="_blank" rel="noopener noreferrer">自定义独享代理</a> |

---

## 购买

副标题：**套餐与支付**。

在 **购买** 页选择 **静态独享** 或 **自定义独享**。

| 模式 | 文档 |
| --- | --- |
| 静态独享 | <a href="../getting-started/static/purchase.md" target="_blank" rel="noopener noreferrer">购买独享线路</a> |
| 自定义独享 | <a href="../getting-started/custom/purchase.md" target="_blank" rel="noopener noreferrer">购买端口</a> |

支付渠道、下单步骤与发票说明见 **产品与服务** 对应章节，本篇只说明控制台入口与页签分工。

---

## 已购

副标题：**在途与库存**。

<a href="../getting-started/static/view-lines.md" target="_blank" rel="noopener noreferrer">查看已购线路</a> · <a href="../getting-started/custom/view-ports.md" target="_blank" rel="noopener noreferrer">查看与管理端口</a> · <a href="../getting-started/static/auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a>

---

## 账密与白名单

副标题：**用户名密码与白名单**。

页头说明（`authPageV2.heroTitle` / `heroDesc`）：**提取代理前请先完成授权** — 动态、静态和自定义代理使用前需先完成授权。创建账密或添加 IP 白名单，任选其一即可开始。

- 独享线路支持 **账密** 与 **IP 白名单**（从已加白 IP 连接时可免账密，以产品规则为准）。

详见 <a href="../getting-started/static/authentication.md" target="_blank" rel="noopener noreferrer">静态独享 — 认证</a> · <a href="../getting-started/custom/authentication.md" target="_blank" rel="noopener noreferrer">自定义独享 — 认证</a>。

---

## 提取

副标题：**提取代理地址**。

仅 **静态独享** / **自定义独享** 生成器（无动态）。

- 选择 **静态独享** 或 **自定义独享**（视本网络支持的模式），生成连接地址与 **API URL**。
- <a href="../getting-started/static/extract-ip.md" target="_blank" rel="noopener noreferrer">静态提取</a> · <a href="../getting-started/custom/extract-ip.md" target="_blank" rel="noopener noreferrer">自定义提取</a>

提取 URL 中的 Token 为 **API Token**（代理提取用），不是 **主用户 Token**。类型说明见 <a href="rotate-token.md" target="_blank" rel="noopener noreferrer">主用户与自动化 Token</a>。

---

## 用量

副标题：**流量与订单**。

- 独享：端口、到期、续费状态。
- <a href="../getting-started/static/view-lines.md" target="_blank" rel="noopener noreferrer">查看已购线路</a> · <a href="../getting-started/custom/view-ports.md" target="_blank" rel="noopener noreferrer">查看与管理端口</a> · <a href="../getting-started/static/auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a>

账单页的 **流量使用** Tab 提供按小时汇总；与本页 **用量** 互补，见 <a href="invoices.md" target="_blank" rel="noopener noreferrer">账单与交易记录</a>。

---

## API 中心

点击 **API 中心** 会在新标签页打开 <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>，可在线调试订单、余额等接口。代理 IP 提取请使用 **提取** 页复制的 **API URL**。

详见 <a href="../zui-jia-shi-jian/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>。

---

## 控制台内文档链接

代理控制台页眉区域提供 **帮助中心** 外链（`pages.helpCenter`），可跳转到本站文档对应产品章节。
