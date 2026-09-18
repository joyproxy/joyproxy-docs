# 状态码

先分清是 **JoyProxy 代理层**拒绝，还是**目标网站**拒绝。静态使用该线路的专用 `host:port`。

```bash
curl -v -x "http://USER:PASS@HOST:PORT" "https://api.ipify.org"
```

| 码 | 处理建议 |
| --- | --- |
| **407** | 检查 Username/Password，或将本机**公网 IPv4** 加入白名单。见 <a href="authorization.md" target="_blank" rel="noopener noreferrer">认证</a>。 |
| **401** | 目标站要求自己的登录；代理认证通常已通过。 |
| **403** | 隧道多半已建立。先确认出口 IP，再看 <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">受限目标</a>。 |
| **429** | 降低请求频率。 |
| **502** / **503** / **504** | 重试；确认订单有效；可先试 HTTP 再试 SOCKS5。 |
| 连接被拒 | 使用端点生成页**最新** host:port，不是 Exit IP。 |

SOCKS5 用应答码而非 HTTP 状态，可用 <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">代理检测工具</a> 验证。

## 下一步

<a href="authorization.md" target="_blank" rel="noopener noreferrer">认证</a> · <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>
