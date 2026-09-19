# 响应码与常见报错（Response Codes）

- **407 代理认证失败（Proxy Authentication Required）**：核对 [用户与白名单](authentication.md) 设置的代理账密或白名单 IP。
- **403 目标拒绝访问（Forbidden）**：目标网站防护拦截，可在我的代理中使用 **[更换 IP](rotation-and-refresh.md)** 刷新端口出口 IP。
- **502 / 504 连接超时（Gateway Timeout）**：确认端口在 [我的代理](view-ports.md) 中已分配地区且未到期。
