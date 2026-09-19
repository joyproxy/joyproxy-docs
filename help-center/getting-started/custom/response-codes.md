# 响应码与常见报错

在使用自定义独享代理建立连接或发起请求时，可能会遇到各种 HTTP 状态码报错。以下是常见报错原因分析与排查指南：

---

## 常见报错速查表

| HTTP 状态码 | 报错含义 | 主要原因 | 排查解决步骤 |
| --- | --- | --- | --- |
| **407 Proxy Authentication Required** | 代理认证失败 | Username/Password 错误或白名单 IP 未添加 | 检查 <a href="authentication.md" target="_blank" rel="noopener noreferrer">账密与白名单</a> 设置与代码账密拼写。 |
| **403 Forbidden** | 目标拒绝访问 / IP 被封禁 | 目标网站风控屏蔽了该出口 IP | 在 [已购] 页面点击 **<a href="rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">更换 IP</a>** 手动刷新端口出口 IP。 |
| **502 Bad Gateway** | 网关无响应 / 地区未分配 | 端口尚未分配目标国家，或线路正在重连 | 确认该端口已在 <a href="assign-region.md" target="_blank" rel="noopener noreferrer">分配地区</a> 中完成国家分配。 |
| **504 Gateway Timeout** | 代理网关超时 | 代理节点网络波动或目标网站无响应 | 重新发起请求，若持续超时可执行手动换 IP 操作。 |

---

## 深入诊断步骤

### 1. 如何确认是代理故障还是目标网站屏蔽？
先在终端执行通用 IP 检测命令：
```bash
curl -x http://USER:PASS@us-ca.edge.joyproxy.com:20001 https://api.ipify.org
```
- 如果能够成功返回 IP 地址，说明 **代理线路与认证完全正常**，访问特定网站返回 403 / 503 是目标网站基于行为或 IP 的封禁，请手动点击 **<a href="rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">更换 IP</a>**。
- 如果直接返回 407，说明是 Username / Password 凭据错误，请检查认证配置。
- 如果直接返回 502，请检查端口是否处于 `Pending 未分配` 状态。
