# 受限目标

请在**中国大陆以外**的网络使用 JoyProxy，访问范围要符合产品目录和平台政策。<a href="https://www.joyproxy.com/terms.html" target="_blank" rel="noopener noreferrer">服务条款</a> 里有完整的禁止用途说明。

## 中国大陆

与官网 FAQ 一致：

- 不提供中国大陆出口 IP，购买页也不会出现这类线路。
- 位于中国大陆的网络**连不上** JoyProxy 代理。
- 代理出口**不能访问**中国大陆境内的网站。

测试（cURL、<a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">代理检测工具</a>、浏览器）请在大陆以外做，目标站也选境外。国家 / 州 / 城市以端点生成页当天库存为准，见 <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">地域定向</a>、<a href="../../support/proxy-locations.md" target="_blank" rel="noopener noreferrer">代理节点地域</a>。

## 高风险站点类别

出于合规和防滥用，下面几类站点通常**不能**或**限制**经 JoyProxy 访问（轮换、静态、定制、数据中心，以及适用的网页抓取 API 都一样）：

| 类别 | 说明（举例，不是完整名单） |
| --- | --- |
| **银行与金融机构** | 银行网银、支付机构、证券 / 交易平台等受监管的金融服务 |
| **政府网站** | 各级政务门户、公共部门统一认证及相关官方系统 |
| **邮件与即时通讯** | 网页邮箱、邮箱服务商，以及经代理批量登录、群发或未授权访问邮件系统 |

未经授权登录他人账户、绕过访问控制、发垃圾邮件，都违反 <a href="https://www.joyproxy.com/terms.html#acceptable" target="_blank" rel="noopener noreferrer">可接受使用</a>，可能导致账号停用。

## 可接受使用（摘要）

不能把 JoyProxy 用于违法或未授权行为、侵权、垃圾邮件与恶意软件、未授权入侵、欺诈、骚扰或侵犯隐私等。全文见 <a href="https://www.joyproxy.com/terms.html#acceptable" target="_blank" rel="noopener noreferrer">条款 → 可接受使用</a>。

## 网站返回 403 时

如果对 `api.ipify.org` 这类检测 URL 已经能看到代理出口 IP，业务 URL 仍是 **403**，多半是**目标站或 WAF** 拦了，不一定是代理密码错了；也可能踩了上表的受限类别。怎么区分见 <a href="response-codes.md" target="_blank" rel="noopener noreferrer">状态码</a>。

## 有合规业务需求时

如果你有正当、能说明的业务，需要访问当前被平台拦截的 URL，可以通过 <a href="../../support/live-chat.md" target="_blank" rel="noopener noreferrer">在线客服</a> 或 <a href="../../support/tickets.md" target="_blank" rel="noopener noreferrer">工单</a> 提交：

- 完整目标 URL（**不要**附真实密码）
- 用途说明，以及为什么需要走代理
- 公司名称、预估用量（如有）

由合规团队评估，**不保证**一定放行。

## 下一步

<a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> · <a href="response-codes.md" target="_blank" rel="noopener noreferrer">状态码</a>
