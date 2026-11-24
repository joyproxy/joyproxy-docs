# ISP（静态住宅）代理

**ISP（静态住宅）代理**（ISP Proxies）由正规运营商 ISP 专线提供固定独享静态住宅出口，兼具真实住宅 ISP 信誉与专线级稳定低延迟。按「IP 数量 × 购买周期」计费，**有效期内不限流量与并发**，系统分配专属固定 `host:port`（如 `isp.joyproxy.com:端口`），100% 单人独享。

---

## 核心特性

| 特性 | 说明 |
| :--- | :--- |
| **产品形态** | 静态独享代理（按 IP × 周期计费，有效期内**不限流量、不限并发**） |
| **IP 来源** | 运营商 ISP 专线静态住宅 IP（非机房 ASN，支持下单时指定城市与运营商/ASN） |
| **参考带宽** | 单线路常规约 10–100 Mbps（高并发长连接稳定） |
| **连接方式** | 固定专属 `host:port`（HTTP / HTTPS / SOCKS5），支持账密认证与 IP 白名单免密 |
| **更换 IP** | 地区下单锁定；有效期内支持在控制台免费点击「更换 IP」获取同地区新出口 |
| **参考价格** | 月付 `$3.00/IP/月` 起，批量低至 `$2.40/IP/月`；支持 1/7/30/90/180/365 天（[查看完整价目](https://www.joyproxy.com/pricing.html?network_type=isp)） |
| **典型场景** | 跨境电商店铺与支付防关联、指纹浏览器长期固定环境、B2B 企业门户与海外财税接口 |

---

## 快速导航

- 首次上手：[ISP（静态住宅）代理快速开始](quick-start.md)
- 控制台入口：[ISP 代理控制台](https://www.joyproxy.com/admin-proxy-isp.html) · [控制台功能说明](../../user-console/isp-proxies.md)
- 通用操作指南（适用 ISP 与数据中心静态独享代理）：
  - [购买独享线路](../static/purchase.md) · [查看已购线路](../static/view-lines.md) · [自动续费](../static/auto-renew.md)
  - [设置代理账密与白名单](../static/authentication.md) · [提取代理 IP](../static/extract-ip.md) · [更换出口 IP](../static/refresh-ip.md)
  - [发起代理请求](../static/first-request.md) · [响应码](../static/response-codes.md) · [受限目标](../static/restricted-targets.md) · [支付记录与凭证](../static/payments-and-invoices.md)
