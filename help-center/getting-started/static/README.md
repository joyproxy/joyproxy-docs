# 静态独享代理（Static Dedicated Proxies）

静态独享代理按固定线路（IP）与购买时长（日/月/年套餐）计费。在套餐有效期内，系统会为你分配专属固定的代理主机与端口（如 `us-ca.edge.joyproxy.com:10001`），且该 IP 100% 专属于你使用，绝不与他人共享。

静态独享代理覆盖三类网络：**静态住宅代理（Static Residential Proxies）**、**静态商业 / ISP 代理（Static Business / ISP Proxies）** 以及 **静态数据中心代理（Static Datacenter Proxies）**。如果你的业务需要频繁轮换 IP 或按 GB 计费，请参考 <a href="../rotating/README.md" target="_blank" rel="noopener noreferrer">动态代理</a>；如果需要随时切换端口国家或设置定时轮换，请参考 <a href="../custom/README.md" target="_blank" rel="noopener noreferrer">自定义独享代理</a>。

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

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">快速开始</a> — 4 步极简接入指南
2. <a href="network-types.md" target="_blank" rel="noopener noreferrer">网络类型</a> — 住宅、商业/ISP、数据中心独享线路选型对比
3. <a href="purchase.md" target="_blank" rel="noopener noreferrer">购买独享线路</a> — 按国家/地区与数量下单购买
4. <a href="view-lines.md" target="_blank" rel="noopener noreferrer">查看已购线路</a> — 查看生效线路、端口与到期时间
5. <a href="auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a> — 到期前从账户余额自动扣费续订
6. <a href="authentication.md" target="_blank" rel="noopener noreferrer">设置代理账密与白名单</a> — 配置代理用户名密码与 IP 白名单
7. <a href="extract-ip.md" target="_blank" rel="noopener noreferrer">提取代理 IP</a> — 提取专属固定 host:port 列表
8. <a href="refresh-ip.md" target="_blank" rel="noopener noreferrer">更换出口 IP</a> — 在控制台手动刷新替换出口 IP
9. <a href="first-request.md" target="_blank" rel="noopener noreferrer">发起代理请求</a> — 代码示例与客户端/指纹浏览器配置
10. <a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码</a> — 407、403、502 等常见报错快速排查
11. <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">受限目标</a> — 合规拦截与禁止访问范围说明
12. <a href="payments-and-invoices.md" target="_blank" rel="noopener noreferrer">查询支付记录与下载凭证</a> — 交易明细与 PDF 收据下载
