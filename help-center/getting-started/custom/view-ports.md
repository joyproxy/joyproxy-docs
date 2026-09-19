# 查看与管理端口（View Ports）

购买成功后，你可以在控制台的 **[我的代理（My Proxies）](https://www.joyproxy.com/admin-my-orders.html)** 页面中统一查看与管理所有自定义独享端口。

---

## 页面展示与字段说明

进入 **[我的代理（My Proxies）](https://www.joyproxy.com/admin-my-orders.html)** 页面并切到 **自定义独享代理（Custom Dedicated Proxies）** 区域，列表包含以下信息：

| 字段名称 | 说明 |
| --- | --- |
| **端口 ID（Port ID / Allocation ID）** | 端口在系统中的唯一标识符号。 |
| **专属连接地址（Host:Port）** | 客户端程序建立连接时填入的地址与端口（如 `us-ca.edge.joyproxy.com:20001`）。 |
| **出口 IP（Exit IP）** | 当前该端口绑定的公网出口 IP 地址。 |
| **分配地区（Location）** | 当前端口绑定的国家/省州/城市（若未分配则显示 `未分配 Pending`）。 |
| **定时轮换状态（Rotation）** | 当前端口的自动换 IP 策略（如 `不轮换` 或 `每 10 分钟轮换`）。 |
| **到期时间（Expires At）** | 该端口套餐的到期时间戳。 |
| **自动续费（Auto-Renew）** | 该端口套餐是否已开启余额自动续费开关。 |

---

## 支持的操作列表

在列表每行的操作栏中，你可以执行以下管理动作：

1. **[分配地区（Assign Region）](assign-region.md)**：点击更改或首次为该端口绑定目标国家与城市。
2. **[设置轮换（Set Rotation）](rotation-and-refresh.md)**：设置该端口自动定时更换出口 IP 的频率（如 5分钟/10分钟/1小时）。
3. **[更换 IP（Refresh IP）](rotation-and-refresh.md)**：立即手动刷新该端口的出口 IP（同国家同网络下重配全新 IP）。
4. **[自动续费开关（Auto-Renew Switch）](auto-renew.md)**：开启或关闭该端口订单的到期自动扣费续订。
5. **[复制端点（Copy Endpoint）]**：快速复制 `host:port` 格式代理地址。
