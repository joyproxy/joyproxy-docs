# 住宅代理（动态）

**住宅代理**（Residential Proxies）出口 IP 来源于全球 200+ 国家和地区、25,000+ 城市的真实家庭宽带网络（如 Comcast、AT&T、Verizon 等），按实际消耗流量（GB）计费且**流量永久不过期**。所有请求统一连接 JoyProxy 动态共享网关 `gate.joyproxy.com:9001`，支持每次请求自动轮换 IP 或 1–1440 分钟粘性会话保持。

---

## 核心特性

| 特性 | 说明 |
| :--- | :--- |
| **产品形态** | 动态代理（按 GB 流量计费，流量无有效期） |
| **IP 来源** | 真实家庭宽带网络，目标站点风控信任度极高 |
| **接入网关** | 统一共享网关 `gate.joyproxy.com:9001`（HTTP / HTTPS / SOCKS5） |
| **地区定向** | 支持精确指定国家、省份/州、城市与运营商/ASN |
| **参考价格** | 1 GB 起购 `$3.50/GB`，大流量包低至 `$1.00/GB`（[查看完整价目](https://www.joyproxy.com/pricing.html?network_type=residential)） |
| **典型场景** | 电商比价与商品采集、搜索引擎抓取、社媒多账号验证、本地化价格/广告监测 |

---

## 快速导航

- 首次上手：[住宅代理快速开始](quick-start.md)
- 控制台入口：[住宅代理控制台](https://www.joyproxy.com/admin-proxy-residential.html) · [控制台功能说明](../../user-console/residential-proxies.md)
- 通用操作指南（适用住宅与移动动态代理）：
  - [购买流量](../rotating/purchase.md) · [查看已购流量](../rotating/view-traffic.md) · [自动购买流量](../rotating/auto-buy-traffic.md)
  - [设置代理账密与白名单](../rotating/authentication.md) · [提取代理 IP](../rotating/extract-ip.md) · [高级提取参数](../rotating/extraction-parameters.md)
  - [发起代理请求](../rotating/first-request.md) · [响应码](../rotating/response-codes.md) · [受限目标](../rotating/restricted-targets.md) · [查询用量](../rotating/usage.md) · [支付记录与凭证](../rotating/payments-and-invoices.md)
