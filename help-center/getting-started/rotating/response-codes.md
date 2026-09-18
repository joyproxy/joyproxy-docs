# 响应码

经代理的状态可能来自 **JoyProxy**（跳）或**网站**。修改产品与目标前先修复凭据与 host:port。

以下说明与在线 <a href="https://www.joyproxy.com/faq.html" target="_blank" rel="noopener noreferrer">FAQ</a>（Whitelist & Users 与 API · Troubleshooting）一致。HTTP 提取错误见 <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>。

## 读取跳（cURL verbose）

```bash
curl -v -x "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001" "https://api.ipify.org"
```

输出中的 **407** 表示代理索要认证。 body 中的公网 IP 表示跳成功。

静态 / 定制：使用该线路的 `host:port` 而非 `gate.joyproxy.com:9001`。

## 代理连接

| 码 | 通常来源 | 检查项 |
| --- | --- | --- |
| **407** Proxy Authentication Required | 代理 | 轮换：完整**生成**用户名 + <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> Username/Password。非邮箱、非短 User/Pass 名。静态 / 定制：user/pass 或将本机**公网** IPv4 加入白名单。 |
| **401** | 目标站 | 网站要*其*登录。代理认证已成功。 |
| **403** | 目标站（或 WAF） | 隧道常已成功。先确认出口 IP（`api.ipify.org`）。策略拦截与敏感目标见 <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">受限目标</a>。 |
| **429** | 任一方 | 降速。若极小 IP 检测 URL 也 429，可能是账户或跳计数；仅目录 URL 429 则多为站点。 |
| **502** / **503** / **504** | 代理或上游 | 重试；确认订单生效且协议匹配。504 为超时 — 防火墙场景可先试 HTTP 再试 SOCKS5。 |
| 连接被拒 / 超时 | 客户端 ↔ 代理 | 轮换：`gate.joyproxy.com:9001`。静态 / 定制：Endpoints 最新 host:port，订单在有效期内。剩余 GB 见 <a href="usage-and-orders.md" target="_blank" rel="noopener noreferrer">用量与订单</a>。 |
| SOCKS5 失败 | SOCKS 层 | SOCKS5 用**回复码**而非 HTTP 状态。同一 host:port 确认 `socks5h://`。用 <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">代理测试器</a> 测试。 |

调试真实页面前先用小 IP URL 证明跳可用。

失败的<a href="../scraping-api/README.md" target="_blank" rel="noopener noreferrer">网页抓取 API</a> 调用通常不扣积分。字段不清时请把完整错误 body 发给<a href="../../support/live-chat.md" target="_blank" rel="noopener noreferrer">在线客服</a>。

## 下一步

<a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a> · <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> · <a href="../../support/live-chat.md" target="_blank" rel="noopener noreferrer">在线客服</a>
