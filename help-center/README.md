# JoyProxy 文档

JoyProxy 帮助团队为网页抓取、自动化、应用测试与数据采集选择合适的出口 IP。您可以购买**代理 IP 线路**（住宅、移动、商业/ISP、数据中心），在需要托管抓取时调用**网页抓取 API**，通过 **AI 工具**用自然语言生成端点，并使用**免费客户端软件**在桌面、浏览器或 Android 上应用代理。

本指南面向希望从注册到生产流量有清晰路径的运营与开发人员。

## 产品族一览

### 代理 IP（自行管理端点）

您将获得 **主机、端口与认证**（或 IP 白名单服务器），并集成到您的技术栈中。

| 网络 | JoyProxy 上的模式 | 典型用途 |
| --- | --- | --- |
| <a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">住宅</a> | 轮换 · 静态 · 定制 | 消费者 ISP 出口、灵活地域、账号类网站 |
| <a href="https://www.joyproxy.com/products/proxy-mobile.html" target="_blank" rel="noopener noreferrer">移动</a> | 轮换 | 运营商 4G/5G 出口、移动应用与广告验证 |
| <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">商业 / ISP</a> | 轮换 · 静态 · 定制 | ISP 品牌线路、B2B 门户、供应商控制台 |
| <a href="https://www.joyproxy.com/products/proxy-datacenter.html" target="_blank" rel="noopener noreferrer">数据中心</a> | 静态 · 定制 | 高流量、高速、按线路可预测成本 |

**轮换** — 共享网关 `gate.joyproxy.com:9001`，地域与会话编码在生成的用户名中。  
**静态** — 套餐有效期内专用 host:port。  
**定制** — 按端口指定地域与可选轮换计时器，随后每个端口对应稳定端点。

<a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">查看代理定价</a> · <a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">在控制台购买</a>

### 网页抓取 API（托管抓取）

提交 URL，获取 HTML 或 JSON。JoyProxy 为您处理代理、重试、渲染及多种反爬步骤。按**积分**计费，且仅对**成功**的抓取计费。

- <a href="https://www.joyproxy.com/products/web-unblocker.html" target="_blank" rel="noopener noreferrer">产品概览</a>
- <a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">控制台</a>
- <a href="https://www.joyproxy.com/pricing.html?network_type=smart-fetch" target="_blank" rel="noopener noreferrer">定价（积分）</a>

### 软件（下载）

与 JoyProxy 云线路或您自建的代理服务器配合使用的开源免费工具：

| 工具 | 作用 |
| --- | --- |
| <a href="https://www.joyproxy.com/products/browser-extension.html" target="_blank" rel="noopener noreferrer">浏览器扩展</a> | 为单个 Chromium 浏览器设置代理 |
| <a href="https://www.joyproxy.com/products/tester.html" target="_blank" rel="noopener noreferrer">代理测试器</a> | 上线前验证 HTTP/SOCKS |
| <a href="https://www.joyproxy.com/products/proxy-server.html" target="_blank" rel="noopener noreferrer">代理服务器</a> | 在 VPS 或 PC 上的本地 HTTP/SOCKS 网关 |
| <a href="https://www.joyproxy.com/products/android-client.html" target="_blank" rel="noopener noreferrer">代理客户端（Android）</a> | 按应用或全局移动路由 |

<a href="https://www.joyproxy.com/products/software.html" target="_blank" rel="noopener noreferrer">软件中心</a>

### AI 模块

在 IDE 或聊天集成中生成轮换端点、查询余额并获得配置帮助：

- <a href="https://www.joyproxy.com/products/openclaw-skill.html" target="_blank" rel="noopener noreferrer">OpenClaw Skill</a>
- <a href="https://www.joyproxy.com/products/ai-mcp.html" target="_blank" rel="noopener noreferrer">AI MCP</a>
- <a href="https://www.joyproxy.com/products/ai-customer-service.html" target="_blank" rel="noopener noreferrer">AI Assistant</a>

参见 <a href="integration/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">集成 → 在 AI 中集成代理</a>。

## 选择入门路径

| 若您需要… | 从这里开始 |
| --- | --- |
| 轮换（共享网关） | <a href="getting-started/rotating/quick-start.md" target="_blank" rel="noopener noreferrer">轮换 → 快速开始</a> |
| 固定 host:port | <a href="getting-started/static/quick-start.md" target="_blank" rel="noopener noreferrer">静态 → 快速开始</a> |
| 按端口地域 + 轮换 | <a href="getting-started/custom/quick-start.md" target="_blank" rel="noopener noreferrer">定制 → 快速开始</a> |
| URL 进、页面出 | <a href="getting-started/scraping-api/quick-start.md" target="_blank" rel="noopener noreferrer">网页抓取 API → 快速开始</a> |
| Chrome / Edge / 测试器 / Android | <a href="getting-started/software/quick-start.md" target="_blank" rel="noopener noreferrer">软件 → 快速开始</a> |
| 用户名/密码或 IP 白名单 | <a href="getting-started/rotating/authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a> |

> **提示**
>
> 新账户可获得 **$5 注册赠金**，可用于首个代理套餐或抓取积分。<a href="https://www.joyproxy.com/register.html" target="_blank" rel="noopener noreferrer">创建账户</a>并打开<a href="https://www.joyproxy.com/admin-overview.html" target="_blank" rel="noopener noreferrer">控制台概览</a>。

## 文档地图

- **入门** — 轮换 / 静态 / 定制 / 网页抓取 API / 软件；各产品以**快速开始**起，再接操作指南。
- **最佳实践** — AI、第三方工具、Windows / Chrome / 移动端配置模式。
- **用户控制台** — 注册、账户设置、控制台中各产品区域。
- **集成** — AI 与 <a href="integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>。
- **服务与支持** — 在线客服、工单、节点地域、定价。
- **FAQ** — <a href="faq/README.md" target="_blank" rel="noopener noreferrer">常见问题</a>。

## 快速链接

- <a href="https://www.joyproxy.com/login.html" target="_blank" rel="noopener noreferrer">登录</a> · <a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">购买</a>
- <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成/提取中心</a>
- <a href="https://www.joyproxy.com/admin-transactions.html" target="_blank" rel="noopener noreferrer">交易与订单</a> · <a href="https://www.joyproxy.com/admin-support.html" target="_blank" rel="noopener noreferrer">支持</a>
- <a href="https://www.joyproxy.com/terms.html" target="_blank" rel="noopener noreferrer">服务条款</a> · <a href="https://www.joyproxy.com/privacy.html" target="_blank" rel="noopener noreferrer">隐私政策</a>
