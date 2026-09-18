# 移动代理

**移动**产品提供运营商（4G/5G）出口，用于应用商店、移动网页与广告验证。JoyProxy 移动仅提供**轮换**模式，按 GB 计费。

[移动产品页](https://www.joyproxy.com/products/proxy-mobile.html) · [定价](https://www.joyproxy.com/pricing.html)

## 购买

1. [购买 → 轮换](https://www.joyproxy.com/admin-purchase.html?tab=short-term)。
2. 网络类型选 **Mobile**。
3. 选择流量套餐并支付。

## My Proxies

监控剩余 GB 与有效期。开启[自动购买流量](../ru-men/rotating/auto-buy-traffic.md)，在剩余 GB 达到触发值时从账户余额购买下一包。

## Users & Whitelist

为轮换网关创建用户名/密码——规则与住宅轮换相同（[轮换代理指南](../ru-men/rotating/)）。

## Endpoints

针对 `gate.joyproxy.com:9001` 生成用户名。移动订单出现在同一 Endpoints UI；筛选时选择 **Mobile** / 您的移动订单。

## 用量

移动轮换的**流量**配额与**订单**。详情：[用量与订单](../ru-men/rotating/usage-and-orders.md)。

## API Center

用 Endpoints **API URL** 自动化提取 — [OpenAPI Center](../zui-jia-shi-jian/openapi-center.md)。

## 设备端测试

将云移动线路与 [Android 客户端](../ru-men/software/android-client.md) 配合，或在其他场景使用静态式端点时参考[最佳实践](../zui-jia-shi-jian/mobile-static-proxy.md)中的 Wi‑Fi 代理指南。
