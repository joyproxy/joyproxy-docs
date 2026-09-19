# 商业 / ISP 控制台

侧栏显示 **商业 / ISP**；页内产品标题为 **企业专线 / ISP 代理**。支持 **动态**、**静态独享**、**自定义独享**（与住宅控制台页签结构相同）。

| 项目 | 说明 |
| --- | --- |
| 控制台页顶 | **企业专线 / ISP 代理** — 写字楼与企业 ISP 专线 IP（如 AT&T Business、电信企业专线等）。 |
| 地址 | <a href="https://www.joyproxy.com/admin-proxy-business.html" target="_blank" rel="noopener noreferrer">https://www.joyproxy.com/admin-proxy-business.html</a> |
| 产品页 | <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">https://www.joyproxy.com/products/proxy-business.html</a> |

左侧 **代理** 分组下进入本网络；子项右侧 **购买** 图标会直接打开 **购买** 页签。

---

## 页签一览

| 页签 | 副标题 |
| --- | --- |
| **购买** | 套餐与支付 |
| **已购** | 在途与库存 |
| **账密与白名单** | 用户名密码与白名单 |
| **提取** | 提取代理地址 |
| **用量** | 流量与订单 |
| **API 中心** | 在新窗口打开 OpenAPI 中心 |

购买、已购、提取等页内可切换 **动态**、**静态独享**、**自定义独享**；本网络支持：

| 模式 | 产品文档 |
| --- | --- | --- |
| **动态** | <a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">动态代理</a> |
| **静态独享** | <a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">静态独享代理</a> |
| **自定义独享** | <a href="../getting-started/custom/README.md" target="_blank" rel="noopener noreferrer">自定义独享代理</a> |

---

## 购买

副标题：**套餐与支付**。

在 **购买** 页切换 **动态** / **静态独享** / **自定义独享** 后进入嵌入购买流程（国家、套餐、支付）。

| 模式 | 产品与服务 |
| --- | --- |
| 动态 | <a href="../getting-started/rotating/purchase.md" target="_blank" rel="noopener noreferrer">购买流量</a> |
| 静态独享 | <a href="../getting-started/static/purchase.md" target="_blank" rel="noopener noreferrer">购买独享线路</a> |
| 自定义独享 | <a href="../getting-started/custom/purchase.md" target="_blank" rel="noopener noreferrer">购买端口</a> |

支付渠道、下单步骤与发票说明见 **产品与服务** 对应章节，本篇只说明控制台入口与页签分工。

---

## 已购

副标题：**在途与库存**。

查看本网络下各模式的生效订单、剩余流量或独享端口有效期。常见操作（以页面按钮为准）：

- 动态：<a href="../getting-started/rotating/auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">自动购买流量</a>
- 静态：<a href="../getting-started/static/auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a>、<a href="../getting-started/static/refresh-ip.md" target="_blank" rel="noopener noreferrer">更换出口 IP</a>
- 自定义：<a href="../getting-started/custom/auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a>、<a href="../getting-started/custom/rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">定时轮换与更换 IP</a>

---

## 账密与白名单

副标题：**用户名密码与白名单**。

页头提示：**提取代理前请先完成授权** — 动态、静态和自定义代理使用前需先完成授权。创建账密或添加 IP 白名单，任选其一即可开始。

- **快速设置**：**将当前 IP 加入白名单** 或 **自动生成账密**。
- **账密或白名单 — 任选一种方式**；动态线路须在 **提取** 前完成至少一种授权。
- 手动 **创建账密**、**已加入白名单的 IP** 列表管理。

详见 <a href="../getting-started/rotating/authentication.md" target="_blank" rel="noopener noreferrer">设置代理账密与白名单</a>。

- 独享线路支持 **账密** 与 **IP 白名单**（从已加白 IP 连接时可免账密，以产品规则为准）。

详见 <a href="../getting-started/static/authentication.md" target="_blank" rel="noopener noreferrer">静态独享 — 认证</a> · <a href="../getting-started/custom/authentication.md" target="_blank" rel="noopener noreferrer">自定义独享 — 认证</a>。

---

## 提取

副标题：**提取代理地址**。

- 选择 **动态** 后使用网页生成器或 **API URL** 获取 `host:port` 与用户名。
- <a href="../getting-started/rotating/extract-ip.md" target="_blank" rel="noopener noreferrer">提取代理 IP</a> · <a href="../getting-started/rotating/extraction-parameters.md" target="_blank" rel="noopener noreferrer">高级提取参数</a>

- 选择 **静态独享** 或 **自定义独享**（视本网络支持的模式），生成连接地址与 **API URL**。
- <a href="../getting-started/static/extract-ip.md" target="_blank" rel="noopener noreferrer">静态提取</a> · <a href="../getting-started/custom/extract-ip.md" target="_blank" rel="noopener noreferrer">自定义提取</a>

提取 URL 中的 Token 为 **API Token**（代理提取用），不是 **主用户 Token**。类型说明见 <a href="rotate-token.md" target="_blank" rel="noopener noreferrer">主用户与自动化 Token</a>。

---

## 用量

副标题：**流量与订单**。

- 动态：**总量 / 已用 / 剩余 GB**，订单列表。
- <a href="../getting-started/rotating/view-traffic.md" target="_blank" rel="noopener noreferrer">查看已购流量</a> · <a href="../getting-started/rotating/usage.md" target="_blank" rel="noopener noreferrer">查询用量</a>

- 独享：端口、到期、续费状态。
- <a href="../getting-started/static/view-lines.md" target="_blank" rel="noopener noreferrer">查看已购线路</a> · <a href="../getting-started/custom/view-ports.md" target="_blank" rel="noopener noreferrer">查看与管理端口</a> · <a href="../getting-started/static/auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a>

账单页的 **流量使用** 页签提供按小时汇总；与本页 **用量** 互补，见 <a href="invoices.md" target="_blank" rel="noopener noreferrer">账单与交易记录</a>。

---

## API 中心

点击 **API 中心** 会在新标签页打开 <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>，可在线调试订单、余额等接口。代理 IP 提取请使用 **提取** 页复制的 **API URL**。

详见 <a href="../zui-jia-shi-jian/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>。

---

## 控制台内文档链接

代理控制台页眉区域提供 **帮助中心** 外链，可跳转到本站文档对应产品章节。
