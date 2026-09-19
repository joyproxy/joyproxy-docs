# 静态独享代理（Static Dedicated Proxies）

静态独享代理按固定线路（IP）与购买时长（日/月/年套餐）计费。在套餐有效期内，系统会为你分配专属固定的代理主机与端口（如 `us-ca.edge.joyproxy.com:10001`），且该 IP 100% 专属于你使用，绝不与他人共享。

静态独享代理覆盖三类网络：**静态住宅代理（Static Residential Proxies）**、**静态商业 / ISP 代理（Static Business / ISP Proxies）** 以及 **静态数据中心代理（Static Datacenter Proxies）**。如果你的业务需要频繁轮换 IP 或按 GB 计费，请参考 [动态代理](../rotating/README.md)；如果需要随时切换端口国家或设置定时轮换，请参考 [自定义独享代理](../custom/README.md)。

## 工作原理

```text
你的程序 / 客户端  →  us-ca.edge.joyproxy.com:10001  →  目标网站
                      ▲
                      ├── 代理用户名：在“用户与白名单”中设置的代理 Username
                      └── 代理密码：在“用户与白名单”中设置的代理 Password（或开启 IP 白名单免密）
```

- **专属固定 host:port**：下单购买时指定目标国家/地区，开通后即获得专属连接地址。
- **直连认证**：直接填入在 [用户与白名单] 中设置的短 Username 与 Password，无需拼接长用户名。
- **支持更换出口 IP**：套餐有效期内如果 IP 遭到封禁或需要刷新，支持在控制台手动点击 [更换 IP]。

## 本章内容

建议按顺序阅读：

1. [快速开始](quick-start.md) — 4 步极简接入指南
2. [网络类型](network-types.md) — 住宅、商业/ISP、数据中心独享线路选型对比
3. [购买独享线路](purchase.md) — 按国家/地区与数量下单购买
4. [查看已购线路](view-lines.md) — 查看生效线路、端口与到期时间
5. [自动续费](auto-renew.md) — 到期前从账户余额自动扣费续订
6. [设置代理账密与白名单](authentication.md) — 配置代理用户名密码与 IP 白名单
7. [提取代理 IP](extract-ip.md) — 提取专属固定 host:port 列表
8. [更换出口 IP](refresh-ip.md) — 在控制台手动刷新替换出口 IP
9. [发起代理请求](first-request.md) — 代码示例与客户端/指纹浏览器配置
10. [响应码](response-codes.md) — 407、403、502 等常见报错快速排查
11. [受限目标](restricted-targets.md) — 合规拦截与禁止访问范围说明
12. [查询支付记录与下载凭证](payments-and-invoices.md) — 交易明细与 PDF 收据下载
