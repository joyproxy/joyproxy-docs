# 动态代理

动态代理通过 JoyProxy 的统一**共享网关**进行流量转发。在此模式下，接入的域名/主机地址（Host）与端口（Port）固定不变，您无需频繁更换节点配置。具体的国家、城市及会话时长等参数均已直接编码在系统生成的长格式用户名中。

您可以设置每次请求自动更换全新出口 IP，也可以启用粘性会话（可维持 1–30 分钟），让连续的多次请求共享同一个出口 IP。

适用网络：**住宅代理**、**移动代理**、**商业 / ISP 代理**。若您需要持续使用数天或数月不变的独享 `host:port`，请使用[静态独享代理](../static/)或[自定义独享代理](../custom/)。

## 工作原理

```
你的程序  →  gate.joyproxy.com:9001  →  所选地区的出口 IP
                 ▲
                 └── 用户名 = [提取](generate-endpoints.md)模块生成的编码字符串
                     密码 = [账密与白名单](authentication.md)模块中配置的 Username/Password
```

| 组成部分  | 说明                                                                                                 |
| ----- | -------------------------------------------------------------------------------------------------- |
| 网关    | 统一为 `gate.joyproxy.com` 端口 `9001`                                                                  |
| 协议    | 支持 HTTP 与 SOCKS5（均可正常代理访问 HTTPS 目标网站，详见[协议](protocols.md))                        |
| 代理用户名 | 从控制台 [提取](https://www.joyproxy.com/admin-ip-extraction-center.html) 模块直接复制生成，请勿手动拼接修改              |
| 代理密码    | 在 [账密与白名单](https://www.joyproxy.com/admin-authorization.html) 模块创建的账户密码 |
| 计费    | 按实际消耗的**流量（GB）**扣费，在套餐有效期内随时使用                                    |

## 首次请求（已有用户与密码后）

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```
若返回的公网 IP 与您本地不同，即代表代理已成功接通。如需切换目标国家或地区，请直接在控制台[提取](https://www.joyproxy.com/admin-ip-extraction-center.html) 模块重新生成用户名，请勿直接在旧用户名字符串中手动修改代码。

## 网络

| 网络       | 典型用途                 | 产品                                                                |
| -------- | -------------------- | ----------------------------------------------------------------- |
| 住宅       | 适合日常数据采集、多账号管理及对地理位置要求灵活的场景      | [住宅代理](https://www.joyproxy.com/products/proxy-residential.html)    |
| 移动       | 基于运营商 4G/5G 出口，适合 App 端测试、高风控校验及广告合规审查 | [移动代理](https://www.joyproxy.com/products/proxy-mobile.html)         |
| 商业 / ISP | 具备原生 ISP 资质与品牌 ASN，适合 B2B 门户访问及跨境业务对接    | [商业 / ISP 代理](https://www.joyproxy.com/products/proxy-business.html) |

各网络类型独立按 **GB** 计费，具体单价请参考[定价](https://www.joyproxy.com/pricing.html) 。

