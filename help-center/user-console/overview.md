# 控制台总览

**控制台概览**是登录 JoyProxy 后的默认主工作台。页面聚合了账户资产、实时流量用量监控、网络控制台快捷入口以及实用开源工具，帮助你一站式掌握当前系统的运行状况。

<a href="https://www.joyproxy.com/admin-overview.html" target="_blank" rel="noopener noreferrer">直接打开控制台概览</a>

---

## 账户资产与充值

概览顶部展示你的核心资产看板：

- **可用余额**：实时显示当前账户中可自由支配的美元余额，可直接用于购买所有代理套餐、独享端口或网页抓取积分。点击余额数值即可快速跳转至账本明细。
- **账户充值**：点击可唤起聚合收银台（Payment Hub），支持 PayPal、国际信用卡、微信支付、UPI 及 USDT（TRC20）等多种支付方式。
- **阶梯充值赠送福利**：系统提供大额充值自动加赠机制：
  - 单笔充值满 **$100**：额外加赠 **10%** 余额；
  - 单笔充值满 **$1,000**：额外加赠 **20%** 余额；
  - 单笔充值满 **$10,000**：额外加赠 **30%** 余额。  
  加赠金额在支付成功后自动实时计入账户可用余额。

---

## 实时用量与资产一览

中央面板对你名下的各类代理资源进行了分类汇总，无需逐个翻查订单即可直观了解剩余额度：

- **动态代理流量**：汇总统计住宅、移动及商业网络的预付流量包，清晰呈现 **总量 GB**、**已用 GB** 与 **剩余 GB**。
- **独享长效代理**：显示当前正在生效中的静态 ISP 独享线路与自定义定制端口总数，并对即将到期和已过期的资源进行预警标记。
- **网页抓取 API（Web Scraping API）**：显示当前剩余可调用的 Credits 积分余额以及最高并发限制。

> **提示**：若需查看各批次订单的详细过期时间、具体 IP 地址或按小时划分的流量消耗趋势，请进入对应代理网络的专用控制台进行深入查看。

---

## 代理网络控制台入口

在概览中部的 **代理网络** 卡片区域，你可以直达五大产品线的专用控制台：

| 代理网络类型 | 业务特点与典型应用场景 | 快速入口 |
| :--- | :--- | :--- |
| **住宅代理** | 真实家庭宽带出口，海量轮换 IP 池，穿透力最强，适合电商风控、舆情采集与多账号运营 | <a href="residential-proxies.md" target="_blank" rel="noopener noreferrer">进入住宅控制台</a> |
| **移动代理** | 纯净 4G/5G 移动蜂窝基站出口，移动端高信任权重，适合 TikTok、Instagram 等移动业务 | <a href="mobile-proxies.md" target="_blank" rel="noopener noreferrer">进入移动控制台</a> |
| **商业 / ISP 代理** | 写字楼及企业专线真实 ISP，兼备住宅信用与专线级低延迟稳定带宽 | <a href="business-isp-proxies.md" target="_blank" rel="noopener noreferrer">进入商业控制台</a> |
| **数据中心代理** | 托管机房 ASN 出口，千兆超大吞吐带宽与极低成本，适合无严格反爬的高速批量爬取 | <a href="datacenter-proxies.md" target="_blank" rel="noopener noreferrer">进入数据中心控制台</a> |
| **网页抓取 API** | 开箱即用的智能抓取接口，内置全自动 JavaScript 动态渲染、验证码绕过与代理调度 | <a href="web-scraping-api.md" target="_blank" rel="noopener noreferrer">进入网页抓取 API 控制台</a> |

---

## 开源软件与技术支持

概览底部整合了 JoyProxy 官方维护的开源配套工具下载入口，包括：
- **浏览器扩展插件**：一键在 Chrome、Edge 等浏览器中切换代理与配置伪装指纹；
- **代理检测工具（Proxy Tester）**：桌面端跨协议批量检测 IP 连通性、出口属地与延迟；
- **自建代理服务端 / Android 客户端**：适合团队自建集群或移动设备环境部署。

如果在日常使用中遇到疑难问题，可通过左侧菜单底部的 **帮助中心** 随时发起 <a href="live-chat.md" target="_blank" rel="noopener noreferrer">实时聊天</a> 或提交技术 <a href="tickets.md" target="_blank" rel="noopener noreferrer">支持工单</a>。
