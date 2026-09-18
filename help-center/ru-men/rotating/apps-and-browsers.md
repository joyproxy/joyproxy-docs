# 在应用与浏览器中使用

网关字段在各客户端相同。仅表单标签不同。

## 填写表

| 软件标签     | 填写                                                                  |
| -------- | ------------------------------------------------------------------- |
| 类型       | HTTP 或 SOCKS5（均可打开 HTTPS 网站）。见 [协议](protocols.md)。                  |
| 主机 / 服务器 | `gate.joyproxy.com`                                                 |
| 端口       | `9001`                                                              |
| 用户名      | Endpoints 生成的用户名                                                    |
| 密码       | Users & Whitelist → Username/Password — 见 [认证方式](authentication.md) |

```
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

## 浏览器（仅本 Chrome / Edge）

1. 安装 [JoyProxy 浏览器扩展](../software/browser-extension.md)。
2. 粘贴上方 HTTP URI，运行 **Test**，再 **Apply**。
3. 系统代理保持不变。

## 整台电脑（Windows）

使用 [Windows 11 系统代理](../../zui-jia-shi-jian/windows-11-system-proxy.md)，主机 `gate.joyproxy.com`、端口 `9001`。完成后关闭 — 遵循 Windows 代理的应用都会走网关。

## 桌面爬虫与 RPA

轮换与静态字段映射见[第三方软件](../../zui-jia-shi-jian/third-party-static-proxies.md)。轮换始终用**共享网关**，而非 `*.edge.joyproxy.com` 主机。

## AI Agent

从 [OpenClaw Skill](https://www.joyproxy.com/products/openclaw-skill.html) 或 [AI MCP](https://www.joyproxy.com/products/ai-mcp.html) 生成用户名，再用相同 user/password 连接。AI Access Token **不能**替代网关密码。详情：[在 AI 中集成代理](../../ji-cheng/integrate-proxies-in-ai.md)。

## 本地转发代理

若工具只接受 `127.0.0.1`，运行 [代理服务器](../software/proxy-server.md) 并将上游指向本网关。

## 批量测试线路

上线前可用 [代理测试器](../software/proxy-tester.md) 测试 HTTP 与 SOCKS5。

## 返回章节目录

[轮换代理](./)
