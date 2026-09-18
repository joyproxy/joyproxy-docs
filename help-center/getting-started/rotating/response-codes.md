# 状态码

经代理返回的状态，可能来自 **JoyProxy 网关**，也可能来自**目标网站**。先修好凭据和 `host:port`，再改爬虫或目标站。

说明与在线 <a href="https://www.joyproxy.com/faq.html" target="_blank" rel="noopener noreferrer">FAQ</a>（用户与白名单、API · 故障排查）一致。提取接口报错见 <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>。

## 看代理层返回什么（cURL verbose）

```bash
curl -v -x "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001" "https://api.ipify.org"
```

输出里出现 **407** 表示代理还在要认证。响应 body 里是公网 IP，说明代理隧道已经建好。

静态 / 定制：用该线路的 `host:port`，不要用 `gate.joyproxy.com:9001`。

## 代理连接

| 码 | 通常是谁返回 | 先查什么 |
| --- | --- | --- |
| **407** Proxy Authentication Required | 代理 | 轮换：完整**生成**用户名 + <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单</a> **Username/Password**。不是邮箱、不是短 User/Pass。静态 / 定制：user/pass，或把本机**公网** IPv4 加进白名单 |
| **401** | 目标站 | 网站要它自己的登录。代理这边已经认证过了 |
| **403** | 目标站（或 WAF） | 隧道多半已经通了。先用 `api.ipify.org` 看出口 IP。策略拦截和敏感目标见 <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">受限目标</a> |
| **429** | 代理或目标站 | 先降速。很小的 IP 检测 URL 也 429，可能是账户或网关限流；只有业务目录 URL 429，多半是站点限流 |
| **502** / **503** / **504** | 代理或上游 | 重试；确认订单有效、协议选对。504 是超时——有防火墙可先 HTTP 再 SOCKS5 |
| 连接被拒 / 超时 | 客户端 ↔ 代理 | 轮换：`gate.joyproxy.com:9001`。静态 / 定制：端点生成里最新的 host:port，订单在有效期内。剩余 GB 见 <a href="usage-and-orders.md" target="_blank" rel="noopener noreferrer">用量与订单</a> |
| SOCKS5 失败 | SOCKS 层 | SOCKS5 用**回复码**，不是 HTTP 状态码。同一 host:port 用 `socks5h://` 再试。可用 <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">代理测试器</a> |

调试真实页面之前，先用小的 IP 检测 URL 确认代理是通的。

<a href="../scraping-api/README.md" target="_blank" rel="noopener noreferrer">网页抓取 API</a> 调用失败通常不扣积分。错误 body 看不懂，把完整内容发给 <a href="../../support/live-chat.md" target="_blank" rel="noopener noreferrer">在线客服</a>（记得打码）。

## 下一步

<a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a> · <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> · <a href="../../support/live-chat.md" target="_blank" rel="noopener noreferrer">在线客服</a>
