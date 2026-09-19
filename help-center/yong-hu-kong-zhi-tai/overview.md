# 概览（Overview）

**概览**是登录后的默认主页，对应 [admin-overview.html](https://www.joyproxy.com/admin-overview.html)。侧栏第一项文案为 **概览**（`sidebar.overview`）。

页头区域常见文案：**JoyProxy 控制台**（`overview.kicker`）、**欢迎**（`overview.welcome`），说明文字：**住宅 / 移动 / Business / 数据中心 — 统一管理入口。**（`overview.welcomeDesc`）

---

## 账户余额与充值

- **账户余额**（`overview.accountBalance`）：显示可用余额；提示 **点击余额查看账本 · 充值享阶梯赠送**（`overview.balanceHint`）。
- **账户充值**（`overview.rechargeAccount`）：从支付流程为余额充值。
- 赠送说明（`overview.rechargeBonusNote`）：**满 $100 +10%，满 $1,000 +20%，满 $10,000 +30%（付款成功后计入余额）。**

点击余额通常进入 **我的账户** 的 **账单** Tab 或账单筛选页，查看 **余额变动** 与 PDF 下载。详见 [账单与交易记录](invoices.md)。

---

## 用量一览

区块标题 **用量一览**（`overview.usageTitle`），说明 **按四大产品线查看动态流量与独享库存。**（`overview.usageDesc`）

常见卡片与标签：

| 区域 | 现网关键词 | 含义 |
| --- | --- | --- |
| 动态代理 | **动态代理**、**总量 GB** / **已用 GB** / **剩余 GB** | 住宅、移动等预付流量包 |
| 独享代理 | **独享代理**、**静态与定制** | 静态 + 自定义独享端口库存 |
| 网页抓取 API | **网页抓取 API**、**积分** | Credits 余额与套餐状态 |

各产品线详细订单与流量请在对应 **代理网络控制台** 的 **已购**、**用量** 页签查看，不要依赖已下线的全站汇总页。

---

## 代理网络

标题 **代理网络**（`overview.networkFamilies`），说明 **进入对应控制台：购买、管理、授权与提取。**（`overview.networkFamiliesDesc`）

从卡片或侧栏 **代理** 进入：

| 控制台 | 侧栏名称 | 文档 |
| --- | --- | --- |
| 住宅 | **住宅代理** | [住宅代理控制台](residential-proxies.md) |
| 移动 | **移动代理** | [移动代理控制台](mobile-proxies.md) |
| 商业 / ISP | **商业 / ISP** | [商业 / ISP 控制台](business-isp-proxies.md) |
| 数据中心 | **数据中心** | [数据中心控制台](datacenter-proxies.md) |
| 网页抓取 | **网页抓取** | [网页抓取控制台](web-scraping-api.md) |

快捷按钮示例：**购买家庭动态**、**购买移动动态**、**独享静态**、**独享自定义**、**进入控制台 →**（`overview.openConsole`）。

---

## 软件与扩展入口

概览底部常推广开源工具（文案以页面为准）：

- **浏览器扩展** — **在 Chrome 或 Edge 中应用代理**
- **代理测试器** — **批量验证 HTTP 与 SOCKS5 端点**

详见 [软件工具](../getting-started/software/README.md)。

---

## 获取帮助

侧栏 **帮助中心**：

- **提交工单**（`supportPage.submitTicket`）
- **实时聊天**（`supportPage.liveChat`）

文档：[工单系统](../support/tickets.md) · [在线客服](../support/live-chat.md)
