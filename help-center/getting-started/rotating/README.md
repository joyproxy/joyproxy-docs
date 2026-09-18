# 轮换代理

轮换代理通过 JoyProxy **共享网关**转发流量。主机与端口不变。**国家、城市与会话**编码在较长的**生成用户名**中。每次请求可使用新出口 IP，或启用**粘性会话**（1–30 分钟）使多次请求共享同一 IP。

适用于**住宅**、**移动**与**商业 / ISP**。若需要持续数天或数月的专用 `host:port`，请使用<a href="../static/README.md" target="_blank" rel="noopener noreferrer">静态</a>或<a href="../custom/README.md" target="_blank" rel="noopener noreferrer">定制</a>。

## 工作原理

```text
你的程序  →  gate.joyproxy.com:9001  →  所选地区的出口 IP
                 ▲
                 └── 用户名 = 端点生成的一长串（含地域 + 会话）
                     密码 = 用户与白名单里的 Username/Password
```

| 组成部分 | 说明 |
| --- | --- |
| 网关 | 始终为 `gate.joyproxy.com` 端口 `9001` |
| 协议 | HTTP 与 SOCKS5。任一协议均可打开 **HTTPS 网站**。详情：<a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>。 |
| 生成用户名 | 从 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> 复制。请勿修改。 |
| 密码 | 在 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> 创建的 **Username/Password** |
| 计费 | 按流量 **GB**，在套餐有效期内 |

## 本章内容

首次请按顺序阅读。之后可从侧栏跳转。

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">快速开始</a>
2. <a href="purchase.md" target="_blank" rel="noopener noreferrer">选择网络并购买流量</a>
3. <a href="auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">自动购买流量</a>
4. <a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a>
5. <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">生成端点</a>
6. <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">地域定向</a>
7. <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">粘性会话</a>
8. <a href="first-request.md" target="_blank" rel="noopener noreferrer">发起首次请求</a>
9. <a href="code-examples.md" target="_blank" rel="noopener noreferrer">代码示例</a>
10. <a href="apps-and-browsers.md" target="_blank" rel="noopener noreferrer">在应用与浏览器中使用</a>
11. <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>
12. <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">受限目标</a>
13. <a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码</a>
14. <a href="usage-and-orders.md" target="_blank" rel="noopener noreferrer">用量与订单</a>

## 首次请求（已有用户与密码后）

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

响应中的公网 IP 表示网关已接受凭据。要更改国家，请在 Endpoints **生成新用户名**——不要手工改写旧字符串。

## 网络

| 网络 | 典型用途 | 产品 |
| --- | --- | --- |
| 住宅 | 日常采集、账号类网站、灵活地域 | <a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">住宅</a> |
| 移动 | 运营商 4G/5G 出口、应用与广告校验 | <a href="https://www.joyproxy.com/products/proxy-mobile.html" target="_blank" rel="noopener noreferrer">移动</a> |
| 商业 / ISP | ISP 品牌 ASN、B2B 门户 | <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">商业 / ISP</a> |

**控制台步骤相同**。仅 <a href="https://www.joyproxy.com/admin-purchase.html?tab=short-term" target="_blank" rel="noopener noreferrer">购买</a> 与 Endpoints 中的网络类型不同。各网络有独立每 GB 价格 — 请在 <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价</a> 对比。

## 相关

- <a href="quick-start.md" target="_blank" rel="noopener noreferrer">快速开始</a> — 网关、示例代码、控制台 walkthrough
- <a href="auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">自动购买流量</a> · <a href="usage-and-orders.md" target="_blank" rel="noopener noreferrer">用量与订单</a>
- <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> · <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">受限目标</a> · <a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码</a>
- <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价</a> · <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>
- 控制台页签：<a href="../../user-console/residential-proxies.md" target="_blank" rel="noopener noreferrer">住宅</a> · <a href="../../user-console/mobile-proxies.md" target="_blank" rel="noopener noreferrer">移动</a> · <a href="../../user-console/business-isp-proxies.md" target="_blank" rel="noopener noreferrer">商业 / ISP</a>
