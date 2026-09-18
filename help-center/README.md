# 概览

JoyProxy 旨在为团队在自动化流程、网页采集、应用测试及数据抓取等场景下，提供高效、稳定的出口 IP 解决方案。我们提供四大核心能力：代理 IP 线路（住宅、移动、商业ISP、数据中心）、网页抓取 API 以及全平台免费客户端。无论您是初次注册还是准备接入生产环境，本指南都将为您提供清晰的配置路径。

## 我们提供什么

### 代理 IP

系统将为您分配标准的域名形式主机地址（Host）、端口（Port）与鉴权凭证，您可以无缝集成至现有工具或开发环境中。

| 网络类型 | 代理产品 | 适合做什么 |
| ---------| -------- | ---------- |
| [住宅](https://www.joyproxy.com/products/proxy-residential.html)    | 动态 · 静态独享 · 自定义独享 | 社媒账号多身份管理、电商数据采集与竞品分析、跨区域内容解锁与SEO监测、演唱会/限量商品抢购 |
| [移动](https://www.joyproxy.com/products/proxy-mobile.html)         | 动态                | 移动端 App 自动化与测试、移动广告合规与反欺诈校验、极高风控场景重试 |
| [商业 / ISP](https://www.joyproxy.com/products/proxy-business.html) | 动态 · 静态独享 · 自定义独享 | B2B 门户与企业系统对接、高价值长效账号运营、大文件传输与持续数据同步 |
| [数据中心](https://www.joyproxy.com/products/proxy-datacenter.html)   | 静态独享 · 自定义独享      | 大规模无风控数据抓取、搜索引擎与公开信息批量监测、性能/压力测试 |

**四种网络类型的区别：**

* **住宅**：源自真实的家庭宽带网络（如 Comcast、AT&T 等），IP 地址由真实 ISP 分配给终端用户。具有极高隐蔽性与高信任度，目标服务器会将其识别为普通真实访客，极难被封禁或触发验证码（CAPTCHA）。
* **移动**：通过移动运营商（如 Verizon、Vodafone 等） 4G/5G 网络蜂窝基站分配 IP。具有天然免封禁属性，由于移动网络采用 CGNAT（ Carrier-Grade NAT）技术，成千上万的真实手机共用同一个蜂窝 IP。目标网站绝不敢轻易封禁移动 IP，否则会误伤大量正常手机用户。
* **商业 / ISP**：部署在写字楼、机房，但直接向实体运营商申请了商业宽带 /ISP 资质接入。兼具机房的高速稳定与住宅 IP 的高信任度，既不像普通机房 IP 那样容易被 ASN 识别拦截，又具备高带宽、低延迟、长久静态固定的特点。
* **数据中心**：由 AWS、谷歌云等企业级机房数据中心直接提供。极高并发、超低延迟，拥有最高的传输吞吐量和性价比，但由于 IP 段公开发布在机房 ASN 列表中，隐蔽性较低。

**三种代理产品的区别：**

* **动态**：流量计费，共享网关 `gate.joyproxy.com:9001`，可在生成的连接用户名中指定目标地区与会话保持时间。
* **静态独享**：包时计费，有效期内固定 `host:port`，可手动更换出口 IP。
* **自定义独享**：包时计费，有效期内固定 `host:port`，可随时更换地区，可定时更换出口 IP。

* [可选地区](https://www.joyproxy.com/admin-purchase.html)
* [定价](https://www.joyproxy.com/pricing.html)

### 网页抓取 API

只需提交目标 URL，即可直接获取渲染后的 HTML 或 JSON 数据。JoyProxy 自动为您处理 IP 轮换、请求重试、JavaScript 动态渲染及各类反爬验证。 网页抓取 API 产品按积分计费，**成功响应才计费**，失败不扣费。

* [产品介绍](https://www.joyproxy.com/products/web-unblocker.html)
* [控制台](https://www.joyproxy.com/admin-web-unblocker.html)
* [定价](https://www.joyproxy.com/pricing.html?network_type=smart-fetch)

### 配套工具

可与 JoyProxy 代理 IP 产品无缝配合使用，也可作为独立的本地代理客户端与非 JoyProxy 提供的代理 IP 结合使用，软件全部开源免费。

| 工具 | 作用 |
| -------------------------------------------------------------------- | --------------------------------- |
| [浏览器扩展](https://www.joyproxy.com/products/browser-extension.html) | 支持 Chrome / Edge 的浏览器代理 IP 插件 |
| [代理检测工具](https://www.joyproxy.com/products/tester.html)          | 快速验证 HTTP/SOCKS5 连通性与延迟 |
| [代理服务器](https://www.joyproxy.com/products/proxy-server.html)       | 在 VPS 或本地电脑部署 HTTP/SOCKS 代理 IP 网关 |
| [Android 客户端](https://www.joyproxy.com/products/android-client.html) | 支持分应用代理或全局代理的移动应用 |

### AI 智能集成

直接在 Cursor / VS Code / OpenClaw 中通过自然语言使用代理 IP 。

[在 AI 里集成代理服务](ji-cheng/integrate-proxies-in-ai.md)。

## 快速接入指南

根据您的具体需求，选择最适合的起点：

| 您要做的事 | 从这里开始 |
| ---------- | ---------- |
| 需要每次请求更换 IP | [动态代理 · 快速开始](ru-men/rotating/quick-start.md) |
| 需要每隔 1 - 30 分钟更换一次 IP | [动态代理 · 快速开始](ru-men/rotating/quick-start.md) |
| 需要同时发起 200 次请求，并使用不同的 IP | [动态代理 · 快速开始](ru-men/rotating/quick-start.md) |
| 需要长期固定某个地区的代理 IP | [静态独享 · 快速开始](ru-men/static/quick-start.md) |
| 需要长期固定某个地区的代理 IP + 自定义频率轮换 | [自定义独享 · 快速开始](ru-men/custom/quick-start.md) |
| 需要长期固定某个地区的代理 IP + 随时切换地区  | [自定义独享 · 快速开始](ru-men/custom/quick-start.md) |
| 需要直接传入 URL 返回数据 | [网页抓取 API · 快速开始](ru-men/scraping-api/quick-start.md) |
