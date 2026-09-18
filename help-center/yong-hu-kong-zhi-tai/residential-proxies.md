# 住宅代理

**住宅**分区涵盖家庭 ISP 风格出口，支持**轮换**、**静态**与**定制**模式。

登录后从左侧菜单进入。产品背景：[住宅代理](https://www.joyproxy.com/products/proxy-residential.html)。

## 页签与作用

### 购买

购买新流量或线路。

* **轮换** — 流量套餐；在[购买 → 轮换](https://www.joyproxy.com/admin-purchase.html?tab=short-term)结账，网络选 **Residential**
* **静态** — 锁定国家线路；[购买 → 静态](https://www.joyproxy.com/admin-purchase.html?tab=long-term)
* **定制** — 按端口套餐；[购买 → 定制](https://www.joyproxy.com/admin-purchase.html?tab=custom-ip)

### My Proxies

查看生效与过期订单、剩余流量、有效期及定制端口分配（[分配地域](../ru-men/custom/assign-region.md)、[轮换](../ru-men/custom/rotation.md)）。

* 轮换 — [自动购买流量](../ru-men/rotating/auto-buy-traffic.md)
* 静态 — [自动续费](../ru-men/static/auto-renew.md)与[新 IP](../ru-men/static/refresh-ip.md)
* 定制 — [自动续费](../ru-men/custom/auto-renew.md)与[新 IP](../ru-men/custom/new-ip.md)

### Users & Whitelist

在本页签创建**用户名/密码**。静态与定制也可使用 **IP 白名单**条目。

[Users & Whitelist](https://www.joyproxy.com/admin-authorization.html)

### Endpoints

网页生成器与快捷复制：

* 轮换 → `gate.joyproxy.com:9001`
* 静态 / 定制 → 专用 `host:port`

指南：[轮换](../ru-men/rotating/) · [静态](../ru-men/static/) · [定制](../ru-men/custom/)

### 用量

所选网络的**流量**与**订单**。轮换配额（已用 / 剩余 GB）与订单列表：[用量与订单](../ru-men/rotating/usage-and-orders.md)。

### API Center

快捷复制 Endpoints **API URL** 并打开 playground。完整 HTTP 参考：[OpenAPI Center](../ji-cheng/openapi-center.md)。

## 快速决策

| 需求          | 模式 |
| ----------- | -- |
| 大量 IP、共享网关  | 轮换 |
| 固定身份数周以上    | 静态 |
| 按端口地域 + 计时器 | 定制 |
