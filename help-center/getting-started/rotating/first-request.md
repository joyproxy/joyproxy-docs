# 发起首次请求

本页假设您已具备：

1. 生效的轮换套餐 — <a href="purchase.md" target="_blank" rel="noopener noreferrer">购买</a>
2. 已配置认证 — <a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a>
3. 已生成用户名 — <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">生成端点</a>

在将生产爬虫指向网关前请先测试。当响应为非公网 IP 时，表示代理可用。

## cURL（最快检查）

使用 **HTTP** 代理协议打开 **HTTPS** 网站：

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

SOCKS5：

```bash
curl -x socks5h://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

输出为单个 IPv4/IPv6 表示网关已认证并分配出口 IP。

## 其他工具填写方式

| 工具中的标签 | JoyProxy 值 |
| --- | --- |
| 代理类型 | HTTP 或 SOCKS5（均可打开 HTTPS 网站） |
| 服务器 / 主机 | `gate.joyproxy.com` |
| 端口 | `9001` |
| 用户名 | 完整生成用户名 |
| 密码 | Users & Whitelist → Username/Password |

URI 形式：

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

Endpoints 页可粘贴 cURL、Python、Node.js、PHP 或 Go 就绪片段，已包含上次生成的用户名。

## 若请求失败

按顺序排查：

1. **407 / Proxy Authentication Required** — 密码须为 Username/Password 密钥。用户名须为 **生成**字符串，而非控制台邮箱或短 User/Pass 名。修改密码后重试。见 <a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a>。完整表：<a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码</a>。
2. **超时** — 确认 `gate.joyproxy.com` 与端口 `9001`。先试 HTTP 代理类型。见 <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>。
3. **国家错误** — 在 Endpoints 选择国家后生成新用户名。勿编辑旧用户名。
4. **订单未生效** — 在 <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a> 或用量页签查看剩余 GB。

仍无法解决？<a href="../../support/live-chat.md" target="_blank" rel="noopener noreferrer">在线客服</a>并提供**已打码**的 curl（切勿发送真实密码）。

## 下一步

复制您语言的片段：<a href="code-examples.md" target="_blank" rel="noopener noreferrer">代码示例</a>。协议选择：<a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>。仅测 Chrome 请用<a href="../software/browser-extension.md" target="_blank" rel="noopener noreferrer">浏览器扩展</a>。
