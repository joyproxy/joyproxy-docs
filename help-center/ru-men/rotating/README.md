# 轮换代理

轮换代理通过 JoyProxy **共享网关**转发流量。主机与端口不变。**国家、城市与会话**编码在较长的**生成用户名**中。每次请求可使用新出口 IP，或启用**粘性会话**（1–30 分钟）使多次请求共享同一 IP。

适用于**住宅**、**移动**与**商业 / ISP**。若需要持续数天或数月的专用 `host:port`，请使用[静态](../static/)或[定制](../custom/)。

## 工作原理

```
你的程序  →  gate.joyproxy.com:9001  →  所选地区的出口 IP
                 ▲
                 └── 用户名 = 端点生成的一长串（含地域 + 会话）
                     密码 = 用户与白名单里的 Username/Password
```

| 组成部分  | 说明                                                                                                 |
| ----- | -------------------------------------------------------------------------------------------------- |
| 网关    | 始终为 `gate.joyproxy.com` 端口 `9001`                                                                  |
| 协议    | HTTP 与 SOCKS5。任一协议均可打开 **HTTPS 网站**。详情：[协议](protocols.md)。                                         |
| 生成用户名 | 从 [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html) 复制。请勿修改。                   |
| 密码    | 在 [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html) 创建的 **Username/Password** |
| 计费    | 按流量 **GB**，在套餐有效期内                                                                                 |

## 本章内容

首次请按顺序阅读。之后可从侧栏跳转。

1. [快速开始](quick-start.md)
2. [选择网络并购买流量](purchase.md)
3. [自动购买流量](auto-buy-traffic.md)
4. [认证方式](authentication.md)
5. [生成端点](generate-endpoints.md)
6. [地域定向](location-targeting.md)
7. [粘性会话](sticky-sessions.md)
8. [发起首次请求](first-request.md)
9. [代码示例](code-examples.md)
10. [在应用与浏览器中使用](apps-and-browsers.md)
11. [协议](protocols.md)
12. [受限目标](restricted-targets.md)
13. [响应码](response-codes.md)
14. [用量与订单](usage-and-orders.md)

## 首次请求（已有用户与密码后）

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

响应中的公网 IP 表示网关已接受凭据。要更改国家，请在 Endpoints **生成新用户名**——不要手工改写旧字符串。

## 网络

| 网络       | 典型用途                 | 产品                                                                |
| -------- | -------------------- | ----------------------------------------------------------------- |
| 住宅       | 日常采集、账号类网站、灵活地域      | [住宅](https://www.joyproxy.com/products/proxy-residential.html)    |
| 移动       | 运营商 4G/5G 出口、应用与广告校验 | [移动](https://www.joyproxy.com/products/proxy-mobile.html)         |
| 商业 / ISP | ISP 品牌 ASN、B2B 门户    | [商业 / ISP](https://www.joyproxy.com/products/proxy-business.html) |

**控制台步骤相同**。仅 [购买](https://www.joyproxy.com/admin-purchase.html?tab=short-term) 与 Endpoints 中的网络类型不同。各网络有独立每 GB 价格 — 请在 [定价](https://www.joyproxy.com/pricing.html) 对比。

## 相关

* [快速开始](quick-start.md) — 网关、示例代码、控制台 walkthrough
* [自动购买流量](auto-buy-traffic.md) · [用量与订单](usage-and-orders.md)
* [协议](protocols.md) · [受限目标](restricted-targets.md) · [响应码](response-codes.md)
* [定价](https://www.joyproxy.com/pricing.html) · [OpenAPI Center](../../zui-jia-shi-jian/openapi-center.md)
* 控制台页签：[住宅](../../yong-hu-kong-zhi-tai/residential-proxies.md) · [移动](../../yong-hu-kong-zhi-tai/mobile-proxies.md) · [商业 / ISP](../../yong-hu-kong-zhi-tai/business-isp-proxies.md)
