# 在应用与浏览器中使用轮换

网关字段在各客户端相同。仅表单标签不同。

## 填写表

| 软件标签 | 填写 |
| --- | --- |
| 类型 | HTTP 或 SOCKS5（均可打开 HTTPS 网站）。见 <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>。 |
| 主机 / 服务器 | `gate.joyproxy.com` |
| 端口 | `9001` |
| 用户名 | Endpoints 生成的用户名 |
| 密码 | Users & Whitelist → Username/Password — 见 <a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a> |

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

## 浏览器（仅本 Chrome / Edge）

1. 安装 <a href="../software/browser-extension.md" target="_blank" rel="noopener noreferrer">JoyProxy 浏览器扩展</a>。
2. 粘贴上方 HTTP URI，运行 **Test**，再 **Apply**。
3. 系统代理保持不变。

## 整台电脑（Windows）

使用 <a href="../../best-practices/windows-11-system-proxy.md" target="_blank" rel="noopener noreferrer">Windows 11 系统代理</a>，主机 `gate.joyproxy.com`、端口 `9001`。完成后关闭 — 遵循 Windows 代理的应用都会走网关。

## 桌面爬虫与 RPA

轮换与静态字段映射见<a href="../../best-practices/third-party-static-proxies.md" target="_blank" rel="noopener noreferrer">第三方软件</a>。轮换始终用**共享网关**，而非 `*.edge.joyproxy.com` 主机。

## AI Agent

从 <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill</a> 或 <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">AI MCP</a> 生成用户名，再用相同 user/password 连接。AI Access Token **不能**替代网关密码。详情：<a href="../../integration/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">在 AI 中集成代理</a>。

## 本地转发代理

若工具只接受 `127.0.0.1`，运行 <a href="../software/proxy-server.md" target="_blank" rel="noopener noreferrer">代理服务器</a> 并将上游指向本网关。

## 批量测试线路

上线前可用 <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">代理测试器</a> 测试 HTTP 与 SOCKS5。

## 返回章节目录

<a href="README.md" target="_blank" rel="noopener noreferrer">轮换代理</a>
