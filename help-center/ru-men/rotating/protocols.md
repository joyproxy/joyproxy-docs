# 协议

在客户端选择**代理协议**。网关保持 `gate.joyproxy.com:9001`。静态与定制使用 Endpoints 的专用 `host:port` — 同样两种协议。

在 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> → **Output format**，可用按钮为 **Endpoint:port**、**HTTP**、**SOCKS5**。任一协议均可打开 **HTTPS 网站**。

将 `GENERATED_USER` / `YOUR_PASS` 替换为生成用户名与 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> Username/Password。

## HTTP

```bash
curl -x "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001" "https://api.ipify.org"
```

多数 HTTP 库接受 `http://user:pass@host:port` 代理 URL。HTTPS 目标时，客户端经此 HTTP 代理建立 **CONNECT** 隧道。

## SOCKS5

```bash
curl -x "socks5h://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001" "https://api.ipify.org"
```

`socks5h://` 中的 `h` 表示**主机名在代理侧解析**，而非本机。

工具要求 SOCKS5 或需要 UDP 时使用。 <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">代理测试器</a> 可在同一 host:port 测试 **SOCKS5 TCP** 与 **SOCKS5 UDP**。

粘性会话仍使用 Endpoints 所选会话。切换协议无需换主机。见 <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">粘性会话</a>。

## HTTPS 网站

目标 URL 可为 `https://…`。代理类型仍选 **HTTP** 或 **SOCKS5**。

```bash
curl -x "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001" "https://api.ipify.org"
```

产品与 FAQ 所称 HTTP / HTTPS / SOCKS5：此处的 HTTPS 指**网站**，经 HTTP 或 SOCKS5 代理隧道。

## 静态与定制

协议相同。粘贴 Endpoints 的专用 host 与 port：

```bash
curl -x "http://USER:PASS@HOST:PORT" "https://api.ipify.org"
curl -x "socks5h://USER:PASS@HOST:PORT" "https://api.ipify.org"
```

若本机在 IP 白名单上，可省略 `USER:PASS@`。

## 下一步

<a href="code-examples.md" target="_blank" rel="noopener noreferrer">代码示例</a> · <a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码</a>
