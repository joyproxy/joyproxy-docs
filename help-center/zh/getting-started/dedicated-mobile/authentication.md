# 代理认证与连接格式

真机独享 4G/5G 代理采用 **端口级独立用户名/密码认证（Username / Password）**，无需绑定本机出口 IP 白名单，无论您在办公室、家庭宽带、云服务器还是移动设备上使用，均可随时直连。

## 连接凭据字段说明

在 **我的代理** 列表中，每个已开通端口均提供以下固定连接参数：

- **Host**：代理服务器地址
- **HTTP 端口**：用于 HTTP / HTTPS 协议代理
- **SOCKS5 端口**：用于 SOCKS5 协议代理
- **Username / Password**：该端口专属的独立鉴权账号与密码

## 常用一键复制格式

| 目标客户端 | 标准格式示例 |
| :--- | :--- |
| **HTTP / HTTPS URL** | `http://username:password@host:http_port` |
| **SOCKS5 URL** | `socks5://username:password@host:socks5_port` |
| **AdsPower / 比特浏览器 / HubStudio** | `host:http_port:username:password`（或 SOCKS5 对应端口） |

> **安全提示**：请妥善保管端口账密，避免在公开代码仓库或日志中明文泄露。如怀疑凭据外泄，请通过工单联系技术支持处理。
