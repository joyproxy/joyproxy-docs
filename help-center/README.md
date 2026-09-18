# JoyProxy 文档

JoyProxy 提供代理 IP、网页抓取 API、AI 接入和免费客户端。按业务选出口，接到脚本、浏览器或 App 里就能用。

## 能买到什么

### 代理 IP

自己拿 `host:port`（或白名单）接到现有工具里。

| 网络 | 模式 | 适合做什么 |
| --- | --- | --- |
| <a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">住宅</a> | 轮换 · 静态 · 定制 | 家宽出口，地区可选范围大 |
| <a href="https://www.joyproxy.com/products/proxy-mobile.html" target="_blank" rel="noopener noreferrer">移动</a> | 轮换 | 4G/5G 运营商出口，测 App、广告 |
| <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">商业 / ISP</a> | 轮换 · 静态 · 定制 | ISP 线路，偏商务站点 |
| <a href="https://www.joyproxy.com/products/proxy-datacenter.html" target="_blank" rel="noopener noreferrer">数据中心</a> | 静态 · 定制 | 量大、要速度，成本好算 |

三种模式：

- **轮换**：统一走 `gate.joyproxy.com:9001`，国家和地区写在生成的用户名里。
- **静态**：下单时选定地区，套餐期内独占一个 `host:port`。
- **定制**：按端口自己指定地区，也可以定时换出口 IP。

<a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价</a> · <a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">去控制台购买</a>

### 网页抓取 API

把目标网址交给 JoyProxy，返回 HTML 或 JSON。代理、重试、渲染都在平台侧做。按**积分**计费，**抓成功才扣**。

- <a href="https://www.joyproxy.com/products/web-unblocker.html" target="_blank" rel="noopener noreferrer">产品介绍</a>
- <a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">控制台</a>
- <a href="https://www.joyproxy.com/pricing.html?network_type=smart-fetch" target="_blank" rel="noopener noreferrer">积分定价</a>

### 软件

免费开源，配合云端线路或你自己的代理用。

| 工具 | 干什么 |
| --- | --- |
| <a href="https://www.joyproxy.com/products/browser-extension.html" target="_blank" rel="noopener noreferrer">浏览器扩展</a> | 只给当前 Chrome / Edge 走代理 |
| <a href="https://www.joyproxy.com/products/tester.html" target="_blank" rel="noopener noreferrer">代理检测</a> | 上线前测 HTTP / SOCKS |
| <a href="https://www.joyproxy.com/products/proxy-server.html" target="_blank" rel="noopener noreferrer">代理服务器</a> | 本机开一个 HTTP/SOCKS 入口 |
| <a href="https://www.joyproxy.com/products/android-client.html" target="_blank" rel="noopener noreferrer">Android 客户端</a> | 手机按应用走代理 |

<a href="https://www.joyproxy.com/products/software.html" target="_blank" rel="noopener noreferrer">软件下载</a>

### AI

在 IDE 或对话里生成线路、查余额：

- <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill</a>
- <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">AI MCP</a>
- <a href="https://www.joyproxy.com/products/ai-customer-service.html" target="_blank" rel="noopener noreferrer">AI 助手</a>

写法见 <a href="integration/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">在 AI 里接代理</a>。

## 从哪一页开始

| 你要做的事 | 打开这一页 |
| --- | --- |
| 轮换，共用一个网关 | <a href="getting-started/rotating/quick-start.md" target="_blank" rel="noopener noreferrer">轮换 · 快速开始</a> |
| 固定 `host:port` | <a href="getting-started/static/quick-start.md" target="_blank" rel="noopener noreferrer">静态 · 快速开始</a> |
| 按端口选地区 | <a href="getting-started/custom/quick-start.md" target="_blank" rel="noopener noreferrer">定制 · 快速开始</a> |
| 只要页面内容，不管代理 | <a href="getting-started/scraping-api/quick-start.md" target="_blank" rel="noopener noreferrer">网页抓取 API · 快速开始</a> |
| 扩展 / 检测工具 / Android | <a href="getting-started/software/quick-start.md" target="_blank" rel="noopener noreferrer">软件 · 快速开始</a> |
| 用户名密码或 IP 白名单 | <a href="getting-started/rotating/authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a> |

> **提示**
>
> 新账号有 **$5 赠金**，买代理或抓取积分都能用。<a href="https://www.joyproxy.com/register.html" target="_blank" rel="noopener noreferrer">注册</a>后进 <a href="https://www.joyproxy.com/admin-overview.html" target="_blank" rel="noopener noreferrer">控制台</a> 即可。

## 文档怎么分

- **入门**：轮换、静态、定制、网页抓取 API、软件，每条线都有「快速开始」。
- **最佳实践**：AI、第三方软件、Windows / Chrome / 手机怎么设代理。
- **用户控制台**：注册、账户、各产品后台。
- **集成**：AI 和 <a href="integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>。
- **服务与支持**：在线客服、工单、节点、价格。
- **FAQ**：<a href="faq/README.md" target="_blank" rel="noopener noreferrer">常见问题</a>。

## 常用入口

- <a href="https://www.joyproxy.com/login.html" target="_blank" rel="noopener noreferrer">登录</a> · <a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">购买</a>
- <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成</a>
- <a href="https://www.joyproxy.com/admin-transactions.html" target="_blank" rel="noopener noreferrer">交易与订单</a> · <a href="https://www.joyproxy.com/admin-support.html" target="_blank" rel="noopener noreferrer">支持</a>
- <a href="https://www.joyproxy.com/terms.html" target="_blank" rel="noopener noreferrer">服务条款</a> · <a href="https://www.joyproxy.com/privacy.html" target="_blank" rel="noopener noreferrer">隐私政策</a>
