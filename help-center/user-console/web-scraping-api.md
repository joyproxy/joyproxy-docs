# 网页抓取 API 控制台（Web Scraping API）

网页抓取 API 控制台是面向企业开发者打造的现代化开箱即用型抓取管理平台。它彻底将底层的代理轮换管理、无头浏览器动态 JavaScript 渲染、Cloudflare 等验证码自动破解以及防指纹探测逻辑封装为一行标准 REST API，极大降低了复杂网站数据提取的工程门槛。

在左侧主导航点击 **网页抓取** 即可打开专属控制台：

<a href="https://www.joyproxy.com/admin-web-unblocker.html" target="_blank" rel="noopener noreferrer">直接打开网页抓取 API 控制台</a> · <a href="https://www.joyproxy.com/products/web-unblocker.html" target="_blank" rel="noopener noreferrer">查看抓取产品特性</a>

---

## 独特的计费模式说明

网页抓取服务采用按请求结果计费的 **Credits（积分点数）** 计费体系，永久有效，不设过期时间限制：
- **请求失败绝不扣费**：仅当我们的底层服务成功绕过防护并返回有效页面响应时才会扣除对应的 Credits；若因目标站不可达或服务端异常导致的失败请求，不计入任何费用。
- **差异化扣点规则**：纯 HTML 静态请求仅消耗基础点数，启用无头浏览器 JavaScript 动态渲染或调用住宅高纯度出口时会按标准加收少量点数。完整计费细则请参考 <a href="../getting-started/scraping-api/parameters.md" target="_blank" rel="noopener noreferrer">抓取参数与积分消耗标准</a>。

---

## 四大核心页签功能

### 1. 购买（积分流量包）
支持根据阶段性业务需求选购不同规模的 Credits 流量包（从几美元的入门微包到面向企业海量生产的规模与旗舰档位）：
- 支持直接使用账户可用余额支付，购买后积分即时到账；
- 购买更高规格的积分包不仅能获得更优惠的单千次调用成本，还能同步解锁更高的系统并发调用上限（最高可达 200+ 专属并发线程）。详细购买指引见 <a href="../getting-started/scraping-api/buy-credits.md" target="_blank" rel="noopener noreferrer">购买积分包与并发限制说明</a>。

### 2. API 中心（在线试玩沙盒与多语言集成）
内置交互式调试测试台，无需编写任何代码即可在浏览器内检验抓取效果：
- **沙盒试跑**：输入目标网页 URL，可一键开关 **JavaScript 渲染**、开启 **Super（住宅/移动）** 出口或指定出口国家代码，点击 **发送请求** 即可实时预览返回的页面 HTML 与状态码；
- **Scraping API Token 管理**：专门用于调用公网 `/v1/fetch` 接口的唯一密钥，支持直接查看、复制或安全轮换；
- **多语言代码一键生成**：沙盒右侧会根据你当前勾选的参数实时生成可直接运行的 **cURL**、**Python（requests）** 与 **Node.js（axios）** 代码范例。上手教程见 <a href="../getting-started/scraping-api/first-fetch.md" target="_blank" rel="noopener noreferrer">在控制台 API 中心测试抓取</a>。

### 3. 使用明细（实时监控看板）
用于追踪和排查团队近期的抓取健康度：
- 提供 **今天**、**近 7 天**、**近 30 天** 以及自定义日期的快速筛选；
- 统计所选周期内的 **请求总数**、**请求成功率** 与 **累计消耗 Credits**；
- 下方请求明细日志表格记录了每一笔调用的具体时间、目标域名、返回的 HTTP 状态以及所耗点数。排查指南见 <a href="../getting-started/scraping-api/usage.md" target="_blank" rel="noopener noreferrer">查看用量与抓取日志</a>。

### 4. 文档
直接跳转至官方在线 API 参数字典页面（<a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">打开完整接口文档</a>），系统罗列了公网调用 `/v1/fetch` 时所支持的全部请求头、高级参数及响应体规范。
