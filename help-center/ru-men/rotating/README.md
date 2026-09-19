# 动态代理

动态代理通过 JoyProxy 的统一共享网关进行流量转发。在此模式下，接入的域名/主机地址（Host）与端口（Port）固定不变，您无需频繁更换节点配置。具体的国家、城市及会话时长等参数均已直接编码在系统生成的长格式用户名中。

您可以设置每次请求自动更换全新出口 IP，也可以启用粘性会话（可维持 1–30 分钟），让连续的多次请求共享同一个出口 IP。

适用网络：**住宅代理**、**移动代理**、**商业 / ISP 代理**。若您需要持续使用数天或数月不变的独享 `host:port`，请使用[静态独享代理](../static/)或[自定义独享代理](../custom/)。

各网络类型独立按流量（**GB**）计费，具体单价请参考[定价](https://www.joyproxy.com/pricing.html) 。

## 工作原理

```
客户端 / 程序  →  gate.joyproxy.com:9001  →  目标地区出口 IP
                 ▲
                 └── 用户名 = [提取]模块生成的连接用户名
                     密码 = [提取]模块显示的连接密码
```

| 组成部分  | 说明                                                                                                 |
| ----- | -------------------------------------------------------------------------------------------------- |
| 网关    | 统一为 `gate.joyproxy.com` 端口 `9001`                                                                  |
| 协议    | 支持 HTTP 与 SOCKS5（均可正常代理访问 HTTPS 目标网站，详见[协议](protocols.md))                        |
| 代理用户名 | 从控制台 [提取](https://www.joyproxy.com/admin-ip-extraction-center.html) 模块直接复制生成，请勿手动拼接修改              |
| 代理密码    | 在 [账密与白名单](https://www.joyproxy.com/admin-authorization.html) 模块创建的账户密码，在[提取](https://www.joyproxy.com/admin-ip-extraction-center.html) 模块也有显示 |
| 计费    | 按实际消耗的流量（GB），从购买的流量包中抵扣                                    |

## 首次请求

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```
若返回的公网 IP 与您本地不同，即代表代理已成功接通。如需切换目标国家或地区，请直接在控制台[提取](https://www.joyproxy.com/admin-ip-extraction-center.html) 模块重新生成连接用户名，请勿直接在旧连接字符串中手动修改。
