# 移动代理（动态）

**移动代理**（Mobile Proxies）出口 IP 来源于全球真实移动运营商的 4G/5G 蜂窝网络，天然具备运营商级 CGNAT 高信任度，按实际消耗流量（GB）计费且**流量永久不过期**。所有请求统一连接动态网关 `gate.joyproxy.com:9001`，适合高并发移动端采集与广告验证。

> **选型提示**：如果您需要**单人 100% 独享的物理手机 SIM 卡槽、无限流量、默认静态稳定且按需一键换 IP**（如 AI 账号长期防封、TikTok/社媒矩阵、跨境店铺），请选择静态产品 **[真机独享 4G/5G 代理](../dedicated-mobile/)**。

---

## 核心特性

| 特性 | 说明 |
| :--- | :--- |
| **产品形态** | 动态代理（按 GB 流量计费，流量无有效期） |
| **IP 来源** | 全球真实 4G/5G 移动运营商蜂窝网络（CGNAT 高防封权重） |
| **接入网关** | 统一共享网关 `gate.joyproxy.com:9001`（HTTP / HTTPS / SOCKS5） |
| **地区定向** | 支持精确指定国家、城市与移动运营商/ASN |
| **参考价格** | 1 GB 起购 `$4.00/GB`，大流量包低至 `$1.20/GB`（[查看完整价目](https://www.joyproxy.com/pricing.html?network_type=cellular)） |
| **典型场景** | 移动端 App 接口抓取、移动广告投放合规验证、高风控网页采集与批量测活 |

---

## 快速导航

- 首次上手：[移动代理快速开始](quick-start.md)
- 控制台入口：[移动代理控制台](https://www.joyproxy.com/admin-proxy-mobile.html) · [控制台功能说明](../../user-console/mobile-proxies.md)
- 通用操作指南（适用住宅与移动动态代理）：
  - [购买流量](../rotating/purchase.md) · [查看已购流量](../rotating/view-traffic.md) · [自动购买流量](../rotating/auto-buy-traffic.md)
  - [设置代理账密与白名单](../rotating/authentication.md) · [提取代理 IP](../rotating/extract-ip.md) · [高级提取参数](../rotating/extraction-parameters.md)
  - [发起代理请求](../rotating/first-request.md) · [响应码](../rotating/response-codes.md) · [受限目标](../rotating/restricted-targets.md) · [查询用量](../rotating/usage.md) · [支付记录与凭证](../rotating/payments-and-invoices.md)
