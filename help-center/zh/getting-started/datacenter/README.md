# 数据中心代理（静态）

**数据中心代理**（Datacenter Proxies）出口位于高速企业级机房 ASN，具备超低延迟、大带宽与极高性价比。按「IP 数量 × 购买周期」计费，**有效期内不限流量与并发**，系统分配专属固定 `host:port`（如 `dc.joyproxy.com:端口`），100% 单人独享。

---

## 核心特性

| 特性 | 说明 |
| :--- | :--- |
| **产品形态** | 静态独享代理（按 IP × 周期计费，有效期内**不限流量、不限并发**） |
| **IP 来源** | 企业级数据中心机房独享静态 IP |
| **参考带宽** | 单线路常规约 20–300 Mbps（高吞吐、低延迟） |
| **连接方式** | 固定专属 `host:port`（HTTP / HTTPS / SOCKS5），支持账密认证与 IP 白名单免密 |
| **更换 IP** | 地区下单锁定；有效期内支持在控制台免费点击「更换 IP」获取同地区新出口 |
| **参考价格** | 月付 `$2.00/IP/月` 起，100 条起低至 `$1.00/IP/月`；支持 1/7/30/90/180/365 天（[查看完整价目](https://www.joyproxy.com/pricing.html?network_type=hosting)） |
| **典型场景** | 大规模公开数据监控、API 转发中转、搜索引擎监测、性能与压力测试 |

---

## 快速导航

- 首次上手：[数据中心代理快速开始](quick-start.md)
- 控制台入口：[数据中心代理控制台](https://www.joyproxy.com/admin-proxy-datacenter.html) · [控制台功能说明](../../user-console/datacenter-proxies.md)
- 通用操作指南（适用 ISP 与数据中心静态独享代理）：
  - [购买独享线路](../static/purchase.md) · [查看已购线路](../static/view-lines.md) · [自动续费](../static/auto-renew.md)
  - [设置代理账密与白名单](../static/authentication.md) · [提取代理 IP](../static/extract-ip.md) · [更换出口 IP](../static/refresh-ip.md)
  - [发起代理请求](../static/first-request.md) · [响应码](../static/response-codes.md) · [受限目标](../static/restricted-targets.md) · [支付记录与凭证](../static/payments-and-invoices.md)
