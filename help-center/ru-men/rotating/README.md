# 动态代理（Rotating Proxies）

动态代理按流量（GB）计费，所有请求统一连接 JoyProxy 共享网关 `gate.joyproxy.com:9001`。每次请求可自动随机更换出口 IP，也可以按需启用粘性会话保持同一个 IP 1–30 分钟。

动态代理覆盖三类网络：**动态住宅代理（Rotating Residential Proxies）**、**动态移动代理（Rotating Mobile Proxies）** 以及 **动态商业 / ISP 代理（Rotating Business / ISP Proxies）**。如果你的业务需要长期固定不变的专用 `host:port`，请参考 [静态独享代理](../static/README.md) 或 [自定义独享代理](../custom/README.md)。

## 工作原理

```text
你的程序 / 客户端  →  gate.joyproxy.com:9001  →  目标网站
                      ▲
                      ├── 连接用户名：在“提取”页面生成的完整长字符串（写有地域与会话）
                      └── 连接密码：在“用户与白名单”中设置的代理密码
```

- **统一网关（Unified Gateway）**：无论切换哪个国家或城市，代理主机（Host）始终为 `gate.joyproxy.com`，端口（Port）始终为 `9001`。
- **参数编码（Param Encoding）**：目标国家、省市、会话模式等均编码在生成的连接用户名中，无需修改主机与端口。
- **协议兼容（Protocols）**：同时支持 HTTP 与 SOCKS5 协议，两种协议均可安全访问 HTTPS 目标网站。

## 本章内容

建议首次使用时按顺序阅读：

1. [快速开始](quick-start.md) — 4 步极简接入指南
2. [网络类型](network-types.md) — 住宅、移动、商业/ISP 网络选型对比
3. [购买流量](purchase.md) — 选择网络类型与购买 GB 流量包
4. [查看已购流量](view-traffic.md) — 在控制台查看生效订单与剩余 GB
5. [自动购买流量](auto-buy-traffic.md) — 流量不足时从余额自动扣费续包
6. [设置代理账密与白名单](authentication.md) — 配置代理用户名密码与 IP 白名单
7. [提取代理 IP](extract-ip.md) — Web 提取、API 提取与 AI 提取
8. [高级提取参数](extraction-parameters.md) — 国家/州/市/ASN 定向、会话控制与格式
9. [发起代理请求](first-request.md) — 常用编程语言示例与客户端配置
10. [响应码](response-codes.md) — 407、403、502 等常见报错快速排查
11. [受限目标](restricted-targets.md) — 合规拦截与禁止访问范围说明
12. [查询用量](usage.md) — 查看流量消耗明细与趋势图表
13. [查询支付记录与下载凭证](payments-and-invoices.md) — 交易流水与 PDF 收据下载
