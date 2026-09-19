# 网页抓取 API（Web Scraping API）

网页抓取 API（Web Scraping API / Web Unblocker）是 JoyProxy 提供的托管式数据采集服务。你只需要提交**目标 URL**，系统会在云端自动为你完成真实浏览器伪装、150+ 国家代理 IP 轮换、JavaScript 脚本渲染以及复杂的反爬虫/验证码绕过，并直接返回干净的 HTML 网页源码或结构化 JSON 数据。

与传统的 <a href="../rotating/README.md" target="_blank" rel="noopener noreferrer">动态代理</a> 或 <a href="../static/README.md" target="_blank" rel="noopener noreferrer">静态独享代理</a> 不同，网页抓取 API **无需你自己维护代理 IP 池、请求头（User-Agent）及无头浏览器（Headless Browser）集群**，且采用**仅成功才扣积分（0 扣费保障）**的计费模式。

---

## 代理 IP vs 网页抓取 API 对比

| 对比维度 | 代理 IP（动态 / 静态 / 自定义） | 网页抓取 API（Web Scraping API） |
| --- | --- | --- |
| **交付产物** | 代理连接地址 `Host:Port` | 托管 HTTP 接口返回的目标页面 HTML / JSON |
| **运维成本** | 需自行维护 Cookie、User-Agent、Playwright/Puppeteer 浏览器集群 | **零运维**，JoyProxy 平台自动处理渲染、重试与反爬 |
| **计费方式** | 按 GB 流量或 IP 端口包时计费 | **按成功积分计费**，抓取失败/超时/硬拦截 **0 扣费** |
| **适用场景** | 已有成熟爬虫框架、只需网络出口 | 想免去浏览器集群运维、快速获取网页内容或结构化数据 |

---

## 核心优势

1. **仅成功才扣积分（0 扣款保证）**：请求只有返回 HTTP Status 2xx 且 Body 包含有效内容时才扣除积分。若目标站点报错、超时或拦截，本次请求不扣除任何积分。
2. **托管 JS 渲染与高级反爬绕过**：只需在请求参数中传入 `render=true` 即可启用云端 Headless 浏览器渲染；传入 `super=true` 可绕过 Cloudflare 等顶级 WAF 验证。
3. **结构化数据插件（Plugins）**：提供 Amazon、Google Search、Google Maps、YouTube 等平台专属插件，直接返回格式化的 JSON 数据。
4. **支持同步与异步队列（Async API）**：支持毫秒级同步请求，也支持百万级大批量抓取任务的异步队列提交与轮询。

---

## 本章内容导览

建议按顺序阅读以下指南：

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">快速开始</a> — 4 步极简接入指南与 API Token 说明
2. <a href="buy-credits.md" target="_blank" rel="noopener noreferrer">购买积分包与并发限制</a> — 积分购买规则与并发限制（Concurrency Rules）
3. <a href="first-fetch.md" target="_blank" rel="noopener noreferrer">在控制台 API 中心测试抓取</a> — 控制台 Playground 可视化调试与代码生成
4. <a href="parameters.md" target="_blank" rel="noopener noreferrer">抓取参数与积分消耗标准</a> — 详解 render/super/geoCode 参数与 1/5/10/25 积分扣费
5. <a href="plugins.md" target="_blank" rel="noopener noreferrer">结构化数据插件 API</a> — 电商与搜索引擎专用 JSON 插件接口
6. <a href="async-api.md" target="_blank" rel="noopener noreferrer">异步队列任务 API</a> — 大批量/耗时长任务的 Async API 提交与轮询
7. <a href="usage.md" target="_blank" rel="noopener noreferrer">查看用量与抓取日志</a> — 控制台用量看板与实时请求日志（Request Logs）
8. <a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码与常见报错</a> — 401/402/429/502 常见报错排查与 0 扣费验证
9. <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">受限目标与合规说明</a> — 高风险禁止抓取目标合规规约
10. <a href="payments-and-invoices.md" target="_blank" rel="noopener noreferrer">查询支付记录与下载凭证</a> — 交易明细与 PDF 收据下载
