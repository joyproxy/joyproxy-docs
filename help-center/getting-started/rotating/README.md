# 轮换代理

轮换走 JoyProxy 的**共享网关**：主机、端口始终一样，国家和地区写在**生成的用户名**里。每次请求可以换新出口，也可以开**粘性会话**（1–30 分钟），让同一用户名暂时钉住同一个 IP。

住宅、移动、商业 / ISP 都有轮换。如果要连续几天、几个月用同一个 `host:port`，改用 <a href="../static/README.md" target="_blank" rel="noopener noreferrer">静态</a> 或 <a href="../custom/README.md" target="_blank" rel="noopener noreferrer">定制</a>。

## 怎么连

```text
你的程序  →  gate.joyproxy.com:9001  →  所选地区的出口 IP
                 ▲
                 └── 用户名 = 端点生成的一长串（含地区 + 会话）
                     密码 = 用户与白名单里设的密码
```

| 项目 | 说明 |
| --- | --- |
| 网关 | `gate.joyproxy.com`，端口 `9001` |
| 协议 | HTTP 或 SOCKS5，两种都能访问 HTTPS 网站。见 <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> |
| 用户名 | 在 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成</a> 整段复制，不要改 |
| 密码 | 在 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单</a> 的 Username/Password 里创建 |
| 计费 | 按流量 GB，套餐有效期内可用 |

## 本章目录

建议第一次按顺序看，之后从侧栏跳。

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">快速开始</a>
2. <a href="purchase.md" target="_blank" rel="noopener noreferrer">选网络、买流量</a>
3. <a href="auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">自动买流量</a>
4. <a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a>
5. <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">生成端点</a>
6. <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">选国家 / 城市</a>
7. <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">粘性会话</a>
8. <a href="first-request.md" target="_blank" rel="noopener noreferrer">发第一条请求</a>
9. <a href="code-examples.md" target="_blank" rel="noopener noreferrer">代码示例</a>
10. <a href="apps-and-browsers.md" target="_blank" rel="noopener noreferrer">接到应用和浏览器</a>
11. <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>
12. <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">不能访问的站点</a>
13. <a href="response-codes.md" target="_blank" rel="noopener noreferrer">状态码</a>
14. <a href="usage-and-orders.md" target="_blank" rel="noopener noreferrer">用量和订单</a>

## 已经有用户名和密码时

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

返回一个公网 IP，说明网关已经认了这组账号。要换国家，在端点生成里**重新生成用户名**，不要手改旧的那串。

## 三种网络

| 网络 | 适合 | 产品页 |
| --- | --- | --- |
| 住宅 | 日常采集、要家宽出口 | <a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">住宅</a> |
| 移动 | 4G/5G、测 App 和广告 | <a href="https://www.joyproxy.com/products/proxy-mobile.html" target="_blank" rel="noopener noreferrer">移动</a> |
| 商业 / ISP | 商务站点、ISP 网段 | <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">商业 / ISP</a> |

操作步骤一样，只是 <a href="https://www.joyproxy.com/admin-purchase.html?tab=short-term" target="_blank" rel="noopener noreferrer">购买</a> 和端点生成里选的网络不同。每 GB 价格各算各的，见 <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价</a>。

## 相关

- <a href="quick-start.md" target="_blank" rel="noopener noreferrer">快速开始</a>
- <a href="auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">自动买流量</a> · <a href="usage-and-orders.md" target="_blank" rel="noopener noreferrer">用量和订单</a>
- <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> · <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">不能访问的站点</a> · <a href="response-codes.md" target="_blank" rel="noopener noreferrer">状态码</a>
- <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价</a> · <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>
- 控制台：<a href="../../user-console/residential-proxies.md" target="_blank" rel="noopener noreferrer">住宅</a> · <a href="../../user-console/mobile-proxies.md" target="_blank" rel="noopener noreferrer">移动</a> · <a href="../../user-console/business-isp-proxies.md" target="_blank" rel="noopener noreferrer">商业 / ISP</a>
