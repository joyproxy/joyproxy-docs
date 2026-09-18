# 协议

在客户端选**代理协议**即可；网关始终是 `gate.joyproxy.com:9001`。静态、定制用端点生成给出的专用 `host:port`，同样支持 HTTP 和 SOCKS5。

在 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成（Endpoints）</a> → **Output format**，可选 **Endpoint:port**、**HTTP**、**SOCKS5**。任选一种都能打开 **HTTPS 网站**。

把 `GENERATED_USER` / `YOUR_PASS` 换成生成用户名和 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单</a> **Username/Password** 密码。

## HTTP

```bash
curl -x "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001" "https://api.ipify.org"
```

多数 HTTP 库认 `http://user:pass@host:port` 这种代理 URL。目标是 HTTPS 时，客户端会通过 HTTP 代理建 **CONNECT** 隧道。

## SOCKS5

```bash
curl -x "socks5h://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001" "https://api.ipify.org"
```

`socks5h://` 里的 `h` 表示**域名在代理侧解析**，不是在你本机解析。

工具要求 SOCKS5，或需要 UDP 时用这条。 <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">代理测试器</a> 能在同一 `host:port` 测 **SOCKS5 TCP** 和 **SOCKS5 UDP**。

粘性会话跟端点生成里选的 **Session type** 一致；换 HTTP/SOCKS5 不用换主机。见 <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">粘性会话</a>。

## HTTPS 网站

目标 URL 可以是 `https://…`，代理类型仍选 **HTTP** 或 **SOCKS5**。

```bash
curl -x "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001" "https://api.ipify.org"
```

产品文案里的 HTTP / HTTPS / SOCKS5：这里的 HTTPS 指**网站**，经 HTTP 或 SOCKS5 代理隧道出去。

## 静态与定制

协议用法一样，粘贴端点生成里的专用 host、port：

```bash
curl -x "http://USER:PASS@HOST:PORT" "https://api.ipify.org"
curl -x "socks5h://USER:PASS@HOST:PORT" "https://api.ipify.org"
```

本机 IP 已加白名单时，可以省略 `USER:PASS@`。

## 下一步

<a href="code-examples.md" target="_blank" rel="noopener noreferrer">代码示例</a> · <a href="response-codes.md" target="_blank" rel="noopener noreferrer">状态码</a>
