# 住宅代理（控制台）

**住宅**分区涵盖家庭 ISP 风格出口，支持**轮换**、**静态**与**定制**模式。

登录后从左侧菜单进入。产品背景：<a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">住宅代理</a>。

## 页签与作用

### 购买

购买新流量或线路。

- **轮换** — 流量套餐；在<a href="https://www.joyproxy.com/admin-purchase.html?tab=short-term" target="_blank" rel="noopener noreferrer">购买 → 轮换</a>结账，网络选 **Residential**
- **静态** — 锁定国家线路；<a href="https://www.joyproxy.com/admin-purchase.html?tab=long-term" target="_blank" rel="noopener noreferrer">购买 → 静态</a>
- **定制** — 按端口套餐；<a href="https://www.joyproxy.com/admin-purchase.html?tab=custom-ip" target="_blank" rel="noopener noreferrer">购买 → 定制</a>

### My Proxies

查看生效与过期订单、剩余流量、有效期及定制端口分配（<a href="../getting-started/custom/assign-region.md" target="_blank" rel="noopener noreferrer">分配地域</a>、<a href="../getting-started/custom/rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">轮换</a>）。

- 轮换 — <a href="../getting-started/rotating/auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">自动购买流量</a>
- 静态 — <a href="../getting-started/static/auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a>与<a href="../getting-started/static/refresh-ip.md" target="_blank" rel="noopener noreferrer">新 IP</a>
- 定制 — <a href="../getting-started/custom/auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a>与<a href="../getting-started/custom/rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">新 IP</a>

### Users & Whitelist

在本页签创建**用户名/密码**。静态与定制也可使用 **IP 白名单**条目。

<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a>

### Endpoints

网页生成器与快捷复制：

- 轮换 → `gate.joyproxy.com:9001`
- 静态 / 定制 → 专用 `host:port`

指南：<a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">轮换</a> · <a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">静态</a> · <a href="../getting-started/custom/README.md" target="_blank" rel="noopener noreferrer">定制</a>

### 用量

所选网络的**流量**与**订单**。轮换配额（已用 / 剩余 GB）与订单列表：<a href="../getting-started/rotating/view-traffic.md" target="_blank" rel="noopener noreferrer">用量与订单</a>。

### API Center

快捷复制 Endpoints **API URL** 并打开 playground。完整 HTTP 参考：<a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>。

## 快速决策

| 需求 | 模式 |
| --- | --- |
| 大量 IP、共享网关 | 轮换 |
| 固定身份数周以上 | 静态 |
| 按端口地域 + 计时器 | 定制 |
