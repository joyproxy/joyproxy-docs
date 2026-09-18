# 用户名密码或白名单

在 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单</a> 配置 **Username/Password**（建议先生成端点前完成）。也可添加 **IP 白名单**，按工具能力二选一或组合使用。

静态线下，Users & Whitelist 里的短用户名**就是**代理登录名。通用说明见 <a href="../rotating/authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a>。

## Username/Password（推荐）

适合笔记本、浏览器、出口 IP 不固定的工具。

1. 打开 **Username/Password**。
2. 新建 User/Pass：
   - 用户名：**字母开头**，小写 **a–z** 与 **0–9**，**最多 16** 位。
   - 密码：**至少 6** 位。
3. 在客户端填写：

| 字段 | 取值 |
| --- | --- |
| 主机 | 端点生成页，如 `us-ca.edge.joyproxy.com` |
| 端口 | 如 `10001` |
| 用户名 | 刚创建的 User/Pass 用户名 |
| 密码 | 对应密码 |

```text
http://USER:PASS@us-ca.edge.joyproxy.com:10001
```

### 407 Proxy Authentication Required

在 Users & Whitelist 核对密码，确认没有误用网站登录密码。不要把轮换的「长生成用户名」配到静态的 `*.edge.joyproxy.com` 主机上。

## IP 白名单

适合出口公网 IP 固定的爬虫服务器。

1. 在**将要发起连接**的机器上查询其**公网 IPv4**。
2. **IP Whitelist** → 填 IP 与备注 → **Add IP**。
3. 客户端只填端点生成页的 `host:port`。

白名单填的是**发起连接**的 IP，不是订单上的 Exit IP。备注写清环境（测试/生产），便于维护。

## 下一步

<a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">生成端点</a>
