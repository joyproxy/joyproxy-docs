# 发起首次请求

本页默认你已经：

1. 有可用的轮换套餐 — <a href="purchase.md" target="_blank" rel="noopener noreferrer">购买</a>
2. 配好认证 — <a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a>
3. 生成过用户名 — <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">生成端点</a>

正式爬虫指到网关之前，先测一遍。返回的不是你本机公网 IP，就说明代理通了。

## cURL（最快）

用 **HTTP** 代理协议访问 **HTTPS** 网站：

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

SOCKS5：

```bash
curl -x socks5h://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

输出一个 IPv4/IPv6，表示网关已认证并分配了出口 IP。

## 其它工具怎么填

| 工具里的标签 | JoyProxy 填什么 |
| --- | --- |
| 代理类型 | HTTP 或 SOCKS5（都能打开 HTTPS 网站） |
| 服务器 / 主机 | `gate.joyproxy.com` |
| 端口 | `9001` |
| 用户名 | 完整生成用户名 |
| 密码 | 用户与白名单 → Username/Password |

URI 形式：

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

端点生成页可以复制已带好上次用户名的 cURL、Python、Node.js、PHP 或 Go 片段。

## 请求失败时

按这个顺序查：

| 顺序 | 现象 / 处理 |
| --- | --- |
| 1 | **407 / Proxy Authentication Required** — 密码要用 Username/Password 密钥；用户名要用**生成串**，不是控制台邮箱或短 User/Pass。改密码后重试。见 <a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a>、<a href="response-codes.md" target="_blank" rel="noopener noreferrer">状态码</a> |
| 2 | **超时** — 核对 `gate.joyproxy.com`、`9001`；代理类型先试 HTTP。见 <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> |
| 3 | **国家不对** — 在端点生成选好国家后**重新生成**用户名，不要改旧串 |
| 4 | **订单没生效** — <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">我的代理（My Proxies）</a> 或 Usage 看剩余 GB |

还是不行？<a href="../../support/live-chat.md" target="_blank" rel="noopener noreferrer">在线客服</a>，附上**打码后的** curl（**不要**发真实密码）。

## 下一步

按语言复制片段：<a href="code-examples.md" target="_blank" rel="noopener noreferrer">代码示例</a>。协议细节：<a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>。只测 Chrome：<a href="../software/browser-extension.md" target="_blank" rel="noopener noreferrer">浏览器扩展</a>。
