# 响应码与常见报错（Response Codes）

在连接静态独享代理时，常见报错与排查建议如下：

## 1. 407 代理认证失败（Proxy Authentication Required）

- **排查**：确认在客户端中填写的 Username 和 Password 与 **[用户与白名单](authentication.md)** 里设定的完全一致；若使用白名单模式，确认本机公网 IPv4 已添加。

## 2. 403 目标拒绝访问（Forbidden）

- **排查**：先运行 `curl -x ... https://api.ipify.org`。若 ipify 能正常返回 IP，说明代理连通正常，报错系目标网站 WAF 防护拦截。建议使用 **[更换 IP](refresh-ip.md)** 刷新该线路的出口 IP。

## 3. 502 / 504 连接超时（Gateway Timeout）

- **排查**：检查代理 Host 与 Port 是否正确；确认线路订单在 **[我的代理](view-lines.md)** 中处于生效状态且未到期。
