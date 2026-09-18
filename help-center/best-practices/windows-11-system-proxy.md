# Windows 11 系统代理设置

启用系统级设置后，Windows 可将**所有兼容应用**的流量经代理发出。适用于 JoyProxy **静态**或**定制** host:port；轮换网关在同一字段使用 `gate.joyproxy.com` 与端口 `9001`。

## 开始之前

1. 在<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成/提取中心</a>生成端点。
2. 决定认证方式：
   - **白名单** — 从已加入 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> 的 IP 发起连接。
   - **用户名/密码** — Windows 会提示或由应用内嵌凭据。

> **安全**
>
> 系统代理影响所有遵循 Windows 代理设置的应用（浏览器、许多 SDK）。完成后请关闭，或使用<a href="../getting-started/software/browser-extension.md" target="_blank" rel="noopener noreferrer">浏览器扩展</a>做隔离测试。

## 配置代理（Windows 11）

1. **设置** → **网络和 Internet** → **代理**。
2. 在 **手动设置代理** 下将 **使用代理服务器** 设为 **开**。
3. **地址** = 端点 host（如 `us-ca.edge.joyproxy.com` 或 `gate.joyproxy.com`）。
4. **端口** = 端点 port（如 `10001` 或 `9001`）。
5. 保存。

若 Windows 或应用提示凭据，输入 Users & Whitelist 用户名与密码（静态/定制）或生成用户 + 密码（轮换）。

## Windows 上的 Edge 与 Chrome

Windows 上 Chromium 浏览器遵循**系统代理**。启用上述代理后打开 Edge 或 Chrome，访问 IP 检测站点确认出口。

若只需**浏览器级**路由而不改系统设置，请优先使用 <a href="../getting-started/software/browser-extension.md" target="_blank" rel="noopener noreferrer">JoyProxy 扩展</a>。

## 验证与故障排查

| 检查 | 操作 |
| --- | --- |
| 国家错误 | 重新生成用户名（轮换）或确认静态分配地域 |
| 认证错误 | 重输密码；确认白名单 IP 与服务器上 <a href="https://www.joyproxy.com" target="_blank" rel="noopener noreferrer">whatismyip</a> 一致 |
| 部分应用忽略代理 | 使用<a href="../getting-started/software/proxy-server.md" target="_blank" rel="noopener noreferrer">代理服务器</a>本地端口或应用专属代理字段 |

## 相关

- <a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">静态代理指南</a>
- <a href="chrome-static-proxy.md" target="_blank" rel="noopener noreferrer">Chrome 静态代理</a>
