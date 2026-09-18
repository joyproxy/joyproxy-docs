# 状态码

先判断是 **JoyProxy** 拒绝还是**网站**拒绝。定制使用该端口的专用 `host:port`。

```bash
curl -v -x "http://USER:PASS@HOST:PORT" "https://api.ipify.org"
```

| 码 | 处理建议 |
| --- | --- |
| **407** | Username/Password，或白名单本机**公网 IPv4**。同 <a href="../static/authorization.md" target="_blank" rel="noopener noreferrer">静态认证</a>。 |
| **401** | 目标站自己的登录。 |
| **403** | 先确认出口 IP，再看 <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">受限目标</a>。 |
| **429** | 降速。 |
| **502** / **503** / **504** | 重试；订单有效；可先 HTTP 后 SOCKS5。 |
| 连接被拒 | 端点生成页最新 host:port，不是 Exit IP。是否已 <a href="assign-region.md" target="_blank" rel="noopener noreferrer">分配地区</a>？ |

SOCKS5 用应答码，可用 <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">代理检测工具</a>。

## 下一步

<a href="authorize-and-generate.md" target="_blank" rel="noopener noreferrer">授权与生成</a> · <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>
