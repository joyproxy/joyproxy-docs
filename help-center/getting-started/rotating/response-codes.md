# 响应码与常见报错

在连接动态代理网关 `gate.joyproxy.com:9001` 时，如果遇到异常状态码，可按以下指南快速定位并解决：

---

## 1. 407 代理认证失败

- **原因**：网关无法校验你的代理凭据。
- **快速排查**：
  1. **密码检查**：确认填入的是在 **<a href="authentication.md" target="_blank" rel="noopener noreferrer">账密与白名单</a>** 中设置的代理密码，而不是 JoyProxy 官网的登录密码。
  2. **用户名检查**：确认代理用户名字段填入的是在 **<a href="extract-ip.md" target="_blank" rel="noopener noreferrer">提取</a>** 页面生成的**完整长字符串**（如 `user-zone-res-region-us-...`），请勿手动截断或拼错字符。
  3. **确认鉴权方式**：动态代理网关（`gate.joyproxy.com:9001`）目前仅支持账密认证，不支持 IP 白名单免密连接，请务必在客户端配置正确的长用户名与代理密码。

---

## 2. 403 目标拒绝访问

- **原因**：请求已被目标网站的防爬风控机制拦截，或目标网站属于受限屏蔽范围。
- **快速排查**：
  1. 先运行测试命令 `curl -x http://...@gate.joyproxy.com:9001 https://api.ipify.org`。如果能正常返回代理出口 IP，说明 JoyProxy 代理网关本身完全正常通畅。
  2. 如果仅针对特定业务目标网站返回 403，说明拦截发生在目标网站服务端（目标针对该 IP 段或 Header 实行了风控）。
  3. 检查目标网站是否属于 **<a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">受限目标</a>**（如金融银行、政务系统或中国大陆境内网站）。

---

## 3. 502 Bad Gateway / 504 Gateway Timeout（网关超时）

- **原因**：代理网关与上游节点通信超时，或本地网络无法到达 JoyProxy 代理网关。
- **快速排查**：
  1. 核对代理主机名必须为 `gate.joyproxy.com`，端口必须为 `9001`。
  2. 检查本地防火墙是否封禁了 9001 端口出站流量。
  3. 尝试在代理连接中将协议由 HTTP 切换为 SOCKS5 重试。

---

## 4. 429 请求过多（Too Many Requests）

- **原因**：短时间内并发连接数或请求频次超出了当前限制。
- **排查建议**：适当调大请求重试间隔或降低多线程并发数。
