# Windows 11 系统代理设置

开启系统代理后，Windows 会把**支持代理的应用**流量转发出去。适合 JoyProxy **静态**或**定制**的 host:port；轮换网关在同一处填 `gate.joyproxy.com` 和端口 `9001`。

## 开始之前

1. 在<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成/提取中心</a> 生成端点。
2. 选定认证方式：
   - **白名单** — 从已加入 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> 的 IP 连接。
   - **用户名/密码** — Windows 或应用会提示输入，或在应用内配置。

> **安全**
>
> 系统代理会影响所有遵循 Windows 代理设置的应用（浏览器、不少 SDK）。测完记得关闭，或改用<a href="../getting-started/software/browser-extension.md" target="_blank" rel="noopener noreferrer">浏览器扩展</a>做隔离测试。

## 配置代理（Windows 11）

1. **设置** → **网络和 Internet** → **代理**。
2. **手动设置代理** 里把 **使用代理服务器** 设为 **开**。
3. **地址** = 端点 host（如 `us-ca.edge.joyproxy.com` 或 `gate.joyproxy.com`）。
4. **端口** = 端点 port（如 `10001` 或 `9001`）。
5. 保存。

若系统或应用要凭据：静态/定制填 Users & Whitelist 用户名密码；轮换填生成用户名 + 对应密码。

## Windows 上的 Edge 与 Chrome

Windows 上 Chromium 内核浏览器默认走**系统代理**。开启上述代理后，用 Edge 或 Chrome 打开 IP 检测站确认出口。

只想**浏览器**走代理、不动系统设置时，优先用 <a href="../getting-started/software/browser-extension.md" target="_blank" rel="noopener noreferrer">JoyProxy 扩展</a>。

## 验证与排查

| 检查 | 操作 |
| --- | --- |
| 国家不对 | 轮换重新生成用户名；静态核对分配地域 |
| 认证失败 | 重输密码；白名单 IP 与服务器上看到的公网 IP 一致 |
| 部分应用不走代理 | 用<a href="../getting-started/software/proxy-server.md" target="_blank" rel="noopener noreferrer">代理服务器</a>开本地端口，或在应用里单独填代理 |

## 相关

- <a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">静态代理指南</a>
- <a href="chrome-static-proxy.md" target="_blank" rel="noopener noreferrer">Chrome 静态代理</a>
