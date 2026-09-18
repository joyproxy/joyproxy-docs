# 自动续费（Auto-renew）

静态线按 **IP × 时长** 计费。开启自动续费后，到期前从**账户余额**扣款，同一 `host:port` 可继续使用，随时可关闭。

记得保持余额足够覆盖下一期，套餐对比见 <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价</a>。

## 如何开启

| 步骤 | 操作 |
| --- | --- |
| 1 | <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">我的代理（My Proxies）</a> → 静态 |
| 2 | 在订单上打开 **Auto-renew** |
| 3 | 选择 **Renewal period**（日/周/月/季/半年/年等，以弹窗为准） |
| 4 | 确认预估金额与下次扣款日 → **Enable auto-renew** |

若剩余时间已进入提前扣款窗口，弹窗可能出现 **Enable and charge now**，会立即续期。

## 扣款时间

弹窗会显示 **Next charge** 与 **Current expiry**。提前量示例：

| 套餐类型 | 扣款时机 |
| --- | --- |
| 日套餐 | 到期前 12 小时 |
| 周套餐 | 到期前 2 天 |
| 更长周期 | 到期前 7 天 |

扣款成功后有效期顺延，**host:port** 与购买地域不变。

已开自动续费时若手动续费，会立刻延长；下次自动扣款按新的到期日计算。

## 如何关闭

点 **Turn off auto-renew**。当前周期内线路仍可用至原到期时间。

## 下一步

<a href="authorization.md" target="_blank" rel="noopener noreferrer">用户名密码或白名单</a> · <a href="refresh-ip.md" target="_blank" rel="noopener noreferrer">更换 IP</a>
