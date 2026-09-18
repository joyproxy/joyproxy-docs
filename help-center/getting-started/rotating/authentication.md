# 认证方式

轮换使用 **Username/Password**。打开 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a>（住宅 / 移动 / 商业控制台同一页面）。

网站登录与代理登录**不同**。重置控制台密码**不会**改变代理密码 — <a href="../../user-console/forgot-password.md" target="_blank" rel="noopener noreferrer">忘记密码</a> 仅用于网站。

## Username/Password（推荐）

这是轮换客户端使用的方式。请先在 **Username/Password** 页签创建。

### 凭据模式

| Users & Whitelist 上的模式 | 效果 |
| --- | --- |
| **Shared** | 账户下所有产品共用一个 User/Pass |
| **Per product** | 每个网络类型（Residential、Mobile、Business、Datacenter）各一个 User/Pass |

一个密钥足够时选 Shared。各网络需独立密钥时选 Per product。

### 创建 User/Pass

1. 打开 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> → **Username/Password**。
2. 选择 **Shared** 或 **Per product**。
3. 创建凭据：
   - 用户名：以**字母**开头，仅小写 **a–z** 与 **0–9**，**最多 16** 字符。
   - 密码：**至少 6** 字符。
4. 保存。将**密码**复制到密码管理器或 `.env`。

此页用户名是 **User/Pass 名称**。应用发往轮换网关的字符串是 Endpoints 的**长生成用户名**。

### 客户端填写（轮换）

| 客户端字段 | 值 |
| --- | --- |
| 代理主机 | `gate.joyproxy.com` |
| 代理端口 | `9001` |
| 代理类型 | HTTP 或 SOCKS5（均可打开 HTTPS 网站） |
| 代理用户名 | <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">Endpoints</a> 的**生成用户名** |
| 代理密码 | Username/Password 的密码 |

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

> **重要**
>
> 勿将短 Users & Whitelist 名称填入轮换用户名字段。请粘贴 Endpoints 生成的字符串。

### 修改密码

在 Username/Password 行使用 **Edit** 设置新密码，然后更新所有客户端中的 `YOUR_PASS`。生成的轮换用户名可保持不变。

### 407 Proxy Authentication Required

1. 密码为 **Username/Password** 密钥 — 非网站登录密码。
2. 用户名为 Endpoints 的**完整生成字符串**。
3. 不确定时请编辑密码后重试：

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

其他跳与提取错误：<a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码</a>。

## 静态 / 定制填写（User/Pass）

专用线路中 **Users & Whitelist 用户名**即为代理用户。无第二段网关生成用户。

```text
http://USER:PASS@us-ca.edge.joyproxy.com:10001
```

walkthrough：<a href="../static/authorization.md" target="_blank" rel="noopener noreferrer">静态授权</a>。

## IP 白名单

当客户端有稳定公网 IPv4 时，在同一 Users & Whitelist 页面的 **IP Whitelist** 页签用于静态与定制 `host:port`。

1. 查询该机器的**公网 IPv4**。
2. **Users & Whitelist → IP Whitelist** → 输入地址与备注 → **Add IP**。
3. 在客户端使用 Endpoints 的 `host:port`。

白名单的是**发起**代理连接的 IP，而非订单卡上的出口 IP。为每条记录命名以便区分预发与生产。

## 下一步

<a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">生成端点</a> — 生成携带地域与会话的轮换用户名。
