# 在应用与浏览器中使用轮换

网关字段在各客户端都一样，只是表单标签叫法不同。

## 填写对照

| 软件里的标签 | 填什么 |
| --- | --- |
| 类型 | HTTP 或 SOCKS5（都能打开 HTTPS 网站）。见 <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> |
| 主机 / 服务器 | `gate.joyproxy.com` |
| 端口 | `9001` |
| 用户名 | 端点生成给出的生成用户名 |
| 密码 | 用户与白名单 → Username/Password。见 <a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a> |

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

## 浏览器（只影响本机 Chrome / Edge）

| 步骤 | 操作 |
| --- | --- |
| 1 | 安装 <a href="../software/browser-extension.md" target="_blank" rel="noopener noreferrer">JoyProxy 浏览器扩展</a> |
| 2 | 粘贴上面的 HTTP URI，点 **Test**，再 **Apply** |
| 3 | 系统代理不用动 |

## 整台 Windows

按 <a href="../../best-practices/windows-11-system-proxy.md" target="_blank" rel="noopener noreferrer">Windows 11 系统代理</a> 设主机 `gate.joyproxy.com`、端口 `9001`。用完记得关——走系统代理的应用都会经过网关。

## 桌面爬虫与 RPA

字段怎么映射轮换和静态，看 <a href="../../best-practices/third-party-static-proxies.md" target="_blank" rel="noopener noreferrer">第三方软件</a>。轮换永远用**共享网关** `gate.joyproxy.com`，不是 `*.edge.joyproxy.com` 那种专用主机。

## AI Agent

从 <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill</a> 或 <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">AI MCP</a> 生成用户名，再用同一套 user/password 连网关。AI Access Token **不能**代替网关密码。详情：<a href="../../integration/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">在 AI 中集成代理</a>。

## 本机转发代理

工具只认 `127.0.0.1` 时，跑 <a href="../software/proxy-server.md" target="_blank" rel="noopener noreferrer">代理服务器</a>，上游指到本网关。

## 批量测线路

上线前可用 <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">代理测试器</a> 测 HTTP 和 SOCKS5。

## 返回章节目录

<a href="README.md" target="_blank" rel="noopener noreferrer">轮换代理</a>
