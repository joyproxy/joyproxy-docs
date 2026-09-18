# 静态代理

静态代理在套餐有效期内给你**固定的 host 与端口**。客户端始终连这个 `host:port`，直到订单到期。出口 IP 变了可以在「我的代理」里用 **New IP** 更换；**购买时选的国家/地区不变**。

适用于 **住宅**、**商业 / ISP**、**数据中心**。

## 和轮换的区别

| | 轮换 | 静态 |
| --- | --- | --- |
| 连接地址 | `gate.joyproxy.com:9001` | 每条线路独立的 `host:port`（如 `us-ca.edge.joyproxy.com:10001`） |
| 地域 | 写在生成用户名里 | 下单时选定 |
| 认证 | 生成用户名 + Username/Password | 短用户名/密码，或 IP 白名单 |
| 计费 | 按 GB 流量 | 按 IP × 时长 |

> **重要**
>
> 请连接**端点生成页给出的 host 与 port**，不要拿订单卡片上的 **Exit IP** 当代理地址。Exit IP 是网站看到的出口；host:port 才是 JoyProxy 入口。

## 本章目录

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">快速开始</a>
2. <a href="purchase.md" target="_blank" rel="noopener noreferrer">购买独享线路</a>
3. <a href="auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a>
4. <a href="authorization.md" target="_blank" rel="noopener noreferrer">用户名密码或白名单</a>
5. <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">生成端点</a>
6. <a href="first-request.md" target="_blank" rel="noopener noreferrer">首次请求</a>
7. <a href="code-examples.md" target="_blank" rel="noopener noreferrer">代码示例</a>
8. <a href="refresh-ip.md" target="_blank" rel="noopener noreferrer">更换 IP</a>
9. <a href="clients.md" target="_blank" rel="noopener noreferrer">Windows、Chrome 与手机</a>
10. <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a>
11. <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">受限目标</a>
12. <a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码</a>

## 请求长什么样

```bash
curl -x http://USER:PASS@HOST:PORT https://api.ipify.org
```

若本机 IP 已在白名单，多数客户端可省略 `USER:PASS`。

## 产品页

<a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">住宅</a> · <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">商业 / ISP</a> · <a href="https://www.joyproxy.com/products/proxy-datacenter.html" target="_blank" rel="noopener noreferrer">数据中心</a> · <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价</a>
