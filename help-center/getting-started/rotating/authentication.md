# 认证方式

轮换走 **Username/Password**。打开 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单（Users &amp; Whitelist）</a>（住宅 / 移动 / 商业控制台是同一页）。

网站登录和代理登录**不是一套**。在控制台改网站密码**不会**改代理密码——<a href="../../user-console/forgot-password.md" target="_blank" rel="noopener noreferrer">忘记密码</a> 只管网站账号。

## Username/Password（推荐）

轮换客户端就用这种方式。先在 **Username/Password** 页签里建好。

### 凭据模式

| 用户与白名单上的模式 | 效果 |
| --- | --- |
| **Shared** | 账户下所有产品共用一组 User/Pass |
| **Per product** | 每个网络类型（Residential、Mobile、Business、Datacenter）各一组 User/Pass |

一个密钥够用就选 Shared；各网络要分开管就选 Per product。

### 创建 User/Pass

| 步骤 | 操作 |
| --- | --- |
| 1 | 打开 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单</a> → **Username/Password** |
| 2 | 选 **Shared** 或 **Per product** |
| 3 | 新建凭据：用户名**字母开头**，仅小写 **a–z** 与 **0–9**，**最多 16** 位；密码**至少 6** 位 |
| 4 | 保存后把**密码**抄到密码管理器或 `.env` |

这页上的用户名是 **User/Pass 短名**。真正连网关时，用户名要用端点生成出来的**长串生成用户名**。

### 客户端怎么填（轮换）

| 客户端字段 | 值 |
| --- | --- |
| 代理主机 | `gate.joyproxy.com` |
| 代理端口 | `9001` |
| 代理类型 | HTTP 或 SOCKS5（都能打开 HTTPS 网站） |
| 代理用户名 | <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">端点生成</a> 里**整段复制**的生成用户名 |
| 代理密码 | Username/Password 里设的密码 |

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

> **重要**
>
> 轮换的用户名字段**不要**填用户与白名单里的短名。请粘贴端点生成给出的整串。

### 改密码

在 Username/Password 那一行点 **Edit** 设新密码，然后所有客户端里的 `YOUR_PASS` 一起更新。生成用户名可以不动。

### 407 Proxy Authentication Required

1. 密码要用 **Username/Password** 那把密钥，不是网站登录密码。
2. 用户名要用端点生成页上的**完整生成串**。
3. 还不确定就先改密码再测：

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

其它代理层、提取相关错误见 <a href="response-codes.md" target="_blank" rel="noopener noreferrer">状态码</a>。

## 静态 / 定制怎么填（User/Pass）

专用线路上，**用户与白名单里的用户名**就是代理用户名，没有第二段「网关生成用户」。

```text
http://USER:PASS@us-ca.edge.joyproxy.com:10001
```

步骤说明：<a href="../static/authorization.md" target="_blank" rel="noopener noreferrer">静态授权</a>。

## IP 白名单

客户端有固定公网 IPv4 时，在同一页 **IP Whitelist** 页签给静态、定制 `host:port` 用。

| 步骤 | 操作 |
| --- | --- |
| 1 | 查清这台机器的**公网 IPv4** |
| 2 | **用户与白名单 → IP Whitelist** → 填地址和备注 → **Add IP** |
| 3 | 客户端里用端点生成给出的 `host:port` |

白名单的是**发起代理连接**的那台机器 IP，不是订单卡片上的出口 IP。每条记录起个名，方便区分预发和生产。

## 下一步

<a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">生成端点</a>——生成带地域和会话策略的轮换用户名。
