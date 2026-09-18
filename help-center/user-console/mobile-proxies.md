# 移动代理（控制台）

**移动**产品提供运营商（4G/5G）出口，用于应用商店、移动网页与广告验证。JoyProxy 移动仅提供**轮换**模式，按 GB 计费。

<a href="https://www.joyproxy.com/products/proxy-mobile.html" target="_blank" rel="noopener noreferrer">移动产品页</a> · <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价</a>

## 购买

1. <a href="https://www.joyproxy.com/admin-purchase.html?tab=short-term" target="_blank" rel="noopener noreferrer">购买 → 轮换</a>。
2. 网络类型选 **Mobile**。
3. 选择流量套餐并支付。

## My Proxies

监控剩余 GB 与有效期。开启<a href="../getting-started/rotating/auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">自动购买流量</a>，在剩余 GB 达到触发值时从账户余额购买下一包。

## Users & Whitelist

为轮换网关创建用户名/密码——规则与住宅轮换相同（<a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">轮换代理指南</a>）。

## Endpoints

针对 `gate.joyproxy.com:9001` 生成用户名。移动订单出现在同一 Endpoints UI；筛选时选择 **Mobile** / 您的移动订单。

## 用量

移动轮换的**流量**配额与**订单**。详情：<a href="../getting-started/rotating/usage-and-orders.md" target="_blank" rel="noopener noreferrer">用量与订单</a>。

## API Center

用 Endpoints **API URL** 自动化提取 — <a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>。

## 设备端测试

将云移动线路与 <a href="../getting-started/software/android-client.md" target="_blank" rel="noopener noreferrer">Android 客户端</a> 配合，或在其他场景使用静态式端点时参考<a href="../best-practices/mobile-static-proxy.md" target="_blank" rel="noopener noreferrer">最佳实践</a>中的 Wi‑Fi 代理指南。
