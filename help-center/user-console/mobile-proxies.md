# 移动代理（控制台）

**移动**产品提供运营商（4G/5G）出口，用于应用商店、移动网页、广告验证等。JoyProxy 移动仅**轮换**模式，按 GB 计费。

<a href="https://www.joyproxy.com/products/proxy-mobile.html" target="_blank" rel="noopener noreferrer">移动产品页</a> · <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价</a>

## 购买

1. 打开<a href="https://www.joyproxy.com/admin-purchase.html?tab=short-term" target="_blank" rel="noopener noreferrer">购买 → 轮换</a>。
2. 网络类型选 **Mobile**。
3. 选流量包并支付。

## My Proxies

查看剩余 GB 与有效期。可开启<a href="../getting-started/rotating/auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">自动购买流量</a>，在剩余 GB 到阈值时从余额自动续购。

## Users & Whitelist

为轮换网关创建用户名/密码，规则与住宅轮换相同（见<a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">轮换代理指南</a>）。

## Endpoints

生成面向 `gate.joyproxy.com:9001` 的用户名。移动订单在同一 Endpoints 界面；筛选时选 **Mobile** 或对应移动订单。

## 用量

移动轮换的**流量**配额与**订单**详情：<a href="../getting-started/rotating/usage-and-orders.md" target="_blank" rel="noopener noreferrer">用量与订单</a>。

## API Center

用 Endpoints **API URL** 做提取自动化 — <a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>。

## 设备端测试

云侧移动线路可配合 <a href="../getting-started/software/android-client.md" target="_blank" rel="noopener noreferrer">Android 客户端</a>；其他场景参考<a href="../best-practices/mobile-static-proxy.md" target="_blank" rel="noopener noreferrer">最佳实践</a>里的 Wi‑Fi 代理说明。
