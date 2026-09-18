# 自动购买流量

轮换**网络线路**（住宅、移动或商业 / ISP）的剩余 GB 跌到你在 **Buy when remaining is at or below** 设的阈值时，JoyProxy 会按你选的套餐从**账户余额**扣款买一包。随时可以关。

记得余额要够付下一包。套餐价格在 <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价</a> 对比。

## 怎么开

| 步骤 | 操作 |
| --- | --- |
| 1 | 在对应网络（住宅 / 移动 / 商业）打开 <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">我的代理（My Proxies）</a> |
| 2 | 打开 **Auto-buy traffic** |
| 3 | 选 **Pack to buy each time**（每次买的套餐） |
| 4 | 设 **Buy when remaining is at or below**（剩余 GB 触发线） |
| 5 | 看清预估金额，点 **Turn on auto purchase** |

如果当前剩余已经 ≤ 触发值，弹窗会有 **Enable and buy now**——会立刻扣费并给这条线路加上对应 GB。

## 弹窗字段

| 字段 | 含义 |
| --- | --- |
| Pack to buy each time | 这条网络在目录里的套餐 |
| Buy when remaining is at or below | **本线路**剩余 GB 到多少时自动买 |
| Current remaining | 这条线路现在还剩多少 GB |
| Current balance | 用来扣款的账户余额 |
| Per-day count | 这条线路每天最多自动买几次（弹窗里会写） |

每条网络线路各有一套自动购买规则；住宅、移动、商业 / ISP 要分别设。

## 关闭

点 **Turn off auto purchase**。已经买的流量不会动。

## 下一步

在 <a href="usage-and-orders.md" target="_blank" rel="noopener noreferrer">用量与订单</a> 盯着剩余 GB，或继续配 <a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a>。
