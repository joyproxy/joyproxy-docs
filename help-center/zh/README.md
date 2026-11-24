# 概览

JoyProxy 旨在为团队在自动化流程、网页采集、应用测试及数据抓取等场景下，提供高效、稳定的出口 IP 解决方案。我们提供三大核心能力：五大代理 IP 产品线、网页抓取 API 以及全平台免费开源客户端。

无论您是初次注册还是准备接入生产环境，本指南都将为您提供清晰的配置路径。

## 我们提供什么

### 五大代理 IP 产品

系统将为您分配标准的域名形式主机地址、端口与鉴权凭证，您可以无缝集成至现有工具或开发环境中。

| 分类 | 代理产品 | 计费与形态 | 适合做什么 | 帮助文档 |
| --- | --- | --- | --- | --- |
| **动态** | [住宅代理](https://www.joyproxy.com/products/proxy-residential.html) | 按 GB 计费，流量不过期，共享网关 `gate.joyproxy.com:9001` | 家庭宽带出口，200+ 国家地区精准定向，电商采集与通用爬虫 | [住宅代理指南](getting-started/residential/) |
| **动态** | [移动代理](https://www.joyproxy.com/products/proxy-mobile.html) | 按 GB 计费，流量不过期，共享网关 `gate.joyproxy.com:9001` | 真实 4G/5G 蜂窝网络出口，移动端 App 采集与广告验证 | [移动代理指南](getting-started/mobile/) |
| **静态** | [真机独享 4G/5G 代理](https://www.joyproxy.com/products/proxy-mobile-dedicated.html) | 按端口 × 租期（2/7/14/30 天），**无限流量**，独享物理 SIM 卡槽 | 最高级运营商 CGNAT 防封，支持按需一键换 IP；AI 稳号、海外社媒、高风控跨境电商 | [真机独享 4G/5G 指南](getting-started/dedicated-mobile/) |
| **静态** | [ISP（静态住宅）代理](https://www.joyproxy.com/products/proxy-isp.html) | 按 IP × 周期（1–365 天），**无限流量**，专属固定 `host:port` | 运营商 ISP 专线静态住宅 IP，指纹浏览器多账号防关联、长期稳定会话 | [ISP 代理指南](getting-started/isp/) |
| **静态** | [数据中心代理](https://www.joyproxy.com/products/proxy-datacenter.html) | 按 IP × 周期（1–365 天），**无限流量**，专属固定 `host:port` | 高带宽、低延迟、高性价比，公开数据监控、API 中转与压力测试 | [数据中心代理指南](getting-started/datacenter/) |

[定价](https://www.joyproxy.com/pricing.html) · [对比全部产品](https://www.joyproxy.com/proxy-products.html)

### 网页抓取 API

只需提交目标 URL，即可直接获取渲染后的 HTML 或 JSON 数据。JoyProxy 自动为您处理 IP 轮换、请求重试、JavaScript 动态渲染及各类反爬验证。网页抓取 API 按积分计费，**成功响应才计费**，失败不扣费。

* [产品介绍](https://www.joyproxy.com/products/web-unblocker.html) · [控制台](https://www.joyproxy.com/admin-web-unblocker.html) · [定价](https://www.joyproxy.com/pricing.html?network_type=smart-fetch) · [使用指南](getting-started/scraping-api/)

### 配套工具

可与 JoyProxy 代理 IP 产品无缝配合使用，也可作为独立的本地代理客户端与第三方代理结合使用，软件全部开源免费。

| 工具 | 干什么 |
| --- | --- |
| [浏览器扩展](https://www.joyproxy.com/products/browser-extension.html) | 支持 Chrome / Edge 的浏览器代理 IP 插件 |
| [代理检测工具](https://www.joyproxy.com/products/tester.html) | 快速验证 HTTP/SOCKS5 连通性与延迟 |
| [代理服务器](https://www.joyproxy.com/products/proxy-server.html) | 在 VPS 或本地电脑部署 HTTP/SOCKS 代理 IP 网关 |
| [Android 客户端](https://www.joyproxy.com/products/android-client.html) | 支持分应用代理或全局代理的移动应用 |

[软件下载](https://www.joyproxy.com/products/software.html)

### AI 智能集成

直接在 Cursor / VS Code / OpenClaw 中通过自然语言使用代理 IP。参考：[在 AI 里集成代理服务](best-practices/developer/ai.md)。

## 快速接入指南

根据您的具体需求，选择最适合的起点：

| 您要做的事 | 从这里开始 |
| --- | --- |
| 需要海量家庭宽带 IP 按请求轮换或粘性采集 | [住宅代理 · 快速开始](getting-started/residential/quick-start.md) |
| 需要按流量计费的 4G/5G 移动网络做采集或广告验证 | [移动代理 · 快速开始](getting-started/mobile/quick-start.md) |
| 需要真机 4G/5G 独享静态移动 IP（无限流量、高防封、按需换 IP） | [真机独享 4G/5G 代理 · 快速开始](getting-started/dedicated-mobile/quick-start.md) |
| 需要长期固定住宅信誉 IP（指纹浏览器防关联 / B2B 门户） | [ISP（静态住宅）代理 · 快速开始](getting-started/isp/quick-start.md) |
| 需要高带宽低延迟、高性价比的固定机房 IP | [数据中心代理 · 快速开始](getting-started/datacenter/quick-start.md) |
| 需要直接传入 URL 返回渲染后的页面或结构化数据 | [网页抓取 API · 快速开始](getting-started/scraping-api/quick-start.md) |
