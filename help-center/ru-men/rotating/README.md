# 动态代理

动态代理按流量（GB）计费，所有请求统一连接 JoyProxy 共享网关 `gate.joyproxy.com:9001`。每次请求可自动随机更换出口 IP，也可按需保持同一个 IP 1–30 分钟。

适用于**动态住宅**、**动态移动**与**动态商业 / ISP**。如果需要长期固定不换的 `host:port`，请使用[静态代理](../static/README.md)或[定制代理](../custom/README.md)。

## 工作原理

```text
你的程序  →  gate.joyproxy.com:9001  →  目标网站
             ▲
             ├── 用户名：在提取页面生成的完整长字符串（写有地域与会话）
             └── 密码：在“用户与白名单”中设置的代理密码
```

## 本章内容

建议首次按顺序阅读：

1. [快速开始](quick-start.md) — 4 步极简接入指南
2. [购买流量](purchase.md) — 选择网络与购买流量包
3. [查看已购流量](view-traffic.md) — 查看生效订单与剩余 GB
4. [自动购买流量](auto-buy-traffic.md) — 流量不足时自动扣费续包
5. [设置代理账密与白名单](authentication.md) — 配置代理用户名密码与 IP 白名单
6. [提取代理 IP](extract-ip.md) — Web 提取、API 提取与 AI 提取
7. [高级提取参数](extraction-parameters.md) — 国家/州/市/ASN 定向、会话与协议
8. [发起代理请求](first-request.md) — 常用代码示例与客户端连接
9. [响应码](response-codes.md) — 407、403、502 等常见报错排查
10. [受限目标](restricted-targets.md) — 合规拦截与禁止访问范围
11. [查询用量](usage.md) — 流量消耗与趋势分析
12. [查询支付记录与下载凭证](payments-and-invoices.md) — 交易明细与发票凭证
