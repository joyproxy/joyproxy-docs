# JoyProxy 文档

JoyProxy 旨在为团队在自动化流程、网页采集、应用测试及数据抓取等场景下，提供高效、稳定的出口 IP 解决方案。我们提供四大核心能力：代理 IP 线路（住宅、移动、商业ISP、数据中心）、网页抓取 API 以及全平台免费客户端。

无论您是初次注册还是准备接入生产环境，本指南都将为您提供清晰的配置路径。

## 我们提供什么

### 代理 IP

系统将为您分配标准的域名形式主机地址（Host）、端口（Port）与鉴权凭证，您可以无缝集成至现有工具或开发环境中。

| 网络类型 | 代理产品 | 适合做什么 |
| --- | --- | --- |
| <a href="https://www.joyproxy.com/products/proxy-residential.html" target="blank">住宅</a> | 动态 · 静态独享 · 自定义独享 | 家庭宽带出口，地区可选范围大，防多账号关联 |
| <a href="https://www.joyproxy.com/products/proxy-mobile.html" target="blank">移动</a> | 动态 | 4G/5G 运营商出口，移动端 App 测试、广告合规校验 |
| <a href="https://www.joyproxy.com/products/proxy-business.html" target="blank">商业 / ISP</a> | 动态 · 静态独享 · 自定义独享 | 具备 ISP 资质的纯净线路、偏向于 B2B 门户访问、对接供应商系统 |
| <a href="https://www.joyproxy.com/products/proxy-datacenter.html" target="blank">数据中心</a> | 静态独享 · 自定义独享 | 高并发、极速响应、性价比之选 |

四种网络类型的区别：

- **住宅**：家庭宽带 IP。
- **移动**：4G/5G 运营商 IP。
- **商业 / ISP**：写字楼、商业 IP。
- **数据中心**：数据中心 IP。

三种代理产品的区别：

- **动态**：流量计费，共享网关 `gate.joyproxy.com:9001`，可在生成的连接用户名中指定目标地区与会话保持时间。
- **静态独享**：包时计费，有效期内固定 `host:port`，可手动更换出口 IP。
- **自定义独享**：包时计费，有效期内固定 `host:port`，可随时更换地区，可定时更换出口 IP。

<a href="https://www.joyproxy.com/pricing.html" target="_blank">定价</a> · <a href="https://www.joyproxy.com/admin-purchase.html" target="_blank">可选地区</a>

### 网页抓取 API

只需提交目标 URL，即可直接获取渲染后的 HTML 或 JSON 数据。JoyProxy 自动为您处理 IP 轮换、请求重试、JavaScript 动态渲染及各类反爬验证。
网页抓取 API 产品按积分计费，**成功响应才计费**，失败不扣费。

- <a href="https://www.joyproxy.com/products/web-unblocker.html" target="_blank" rel="noopener noreferrer">产品介绍</a>
- <a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">控制台</a>
- <a href="https://www.joyproxy.com/pricing.html?network_type=smart-fetch" target="_blank" rel="noopener noreferrer">定价</a>

### 配套工具

可与 JoyProxy 代理 IP 产品无缝配合使用，也可作为独立的本地代理客户端与非 JoyProxy 提供的代理 IP 结合使用，软件全部开源免费。

| 工具 | 干什么 |
| --- | --- |
| <a href="https://www.joyproxy.com/products/browser-extension.html" target="_blank" rel="noopener noreferrer">浏览器扩展</a> | 支持 Chrome / Edge 的浏览器代理 IP 插件 |
| <a href="https://www.joyproxy.com/products/tester.html" target="_blank" rel="noopener noreferrer">代理检测工具</a> | 快速验证 HTTP/SOCKS5 连通性与延迟 |
| <a href="https://www.joyproxy.com/products/proxy-server.html" target="_blank" rel="noopener noreferrer">代理服务器</a> | 在 VPS 或本地电脑部署 HTTP/SOCKS 代理 IP 网关 |
| <a href="https://www.joyproxy.com/products/android-client.html" target="_blank" rel="noopener noreferrer">Android 客户端</a> | 支持分应用代理或全局代理的移动应用 |

<a href="https://www.joyproxy.com/products/software.html" target="_blank" rel="noopener noreferrer">软件下载</a>

### AI 智能集成

直接在 Cursor / VS Code / OpenClaw 中通过自然语言使用代理 IP 。

参考： <a href="integration/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">在 AI 里集成代理服务</a>。

## 快速接入指南

根据您的具体需求，选择最适合的起点：

| 您要做的事 | 从这里开始 |
| --- | --- |
| 需要每次请求更换 IP | <a href="getting-started/rotating/quick-start.md" target="_blank" rel="noopener noreferrer">动态代理 · 快速开始</a> |
| 需要每隔 1 - 30 分钟更换一次 IP | <a href="getting-started/rotating/quick-start.md" target="_blank" rel="noopener noreferrer">动态代理 · 快速开始</a> |
| 需要同时发起 200 次请求，并使用不同的 IP | <a href="getting-started/rotating/quick-start.md" target="_blank" rel="noopener noreferrer">动态代理 · 快速开始</a> |
| 需要长期固定某个地区的代理 IP | <a href="getting-started/static/quick-start.md" target="_blank" rel="noopener noreferrer">静态独享 · 快速开始</a> |
| 需要长期固定某个地区的代理 IP + 自定义频率轮换 | <a href="getting-started/custom/quick-start.md" target="_blank" rel="noopener noreferrer">自定义独享 · 快速开始</a> |
| 需要长期固定某个地区的代理 IP + 随时切换地区 | <a href="getting-started/custom/quick-start.md" target="_blank" rel="noopener noreferrer">自定义独享 · 快速开始</a> |
| 需要直接传入 URL 返回数据 | <a href="getting-started/scraping-api/quick-start.md" target="_blank" rel="noopener noreferrer">网页抓取 API · 快速开始</a> |
