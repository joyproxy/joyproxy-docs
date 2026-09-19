# 自定义独享代理（Custom Dedicated Proxies）

自定义独享代理（Custom Dedicated Proxies）按**专属端口数量（Ports Count）**与购买时长（日/周/月/季/年套餐）计费。每个购买的端口在套餐有效期内 100% 由你独享，且支持**随时自由分配与切换目标国家/省市**，并可按端口独立**设置定时自动轮换 IP** 或手动即时更换 IP。

如果你需要批量购买独享代理端口，且希望每个端口能灵活配置不同的地理位置或按设定频率自动更换出口 IP，自定义独享代理是最佳选择。如果你的业务固定只需要某一个国家且无需频繁更换 IP，请参考 <a href="../static/README.md" target="_blank" rel="noopener noreferrer">静态独享代理</a>；如果需要按 GB 流量按需提取数百万池化 IP，请参考 <a href="../rotating/README.md" target="_blank" rel="noopener noreferrer">动态代理</a>。

---

## 工作原理

```text
你的程序 / 客户端  →  us-ca.edge.joyproxy.com:20001  →  目标网站（按端口分配的国家出口）
                      ▲
                      ├── 端口在控制台中绑定国家/地区（可随时在控制台中切换）
                      ├── 支持按端口开启定时自动换 IP（如每 5 分钟、10 分钟、30 分钟换一次 IP）
                      └── 代理用户名/密码或 IP 白名单鉴权（在「用户与白名单」中统一管理）
```

- **按端口独立配置**：单笔订单最多支持购买 200 个端口。每一个端口都可以独立指定所在的国家、省/州或城市。
- **灵活的 IP 变更策略**：既支持设定自动轮换周期（如每 5 分钟自动更换出口 IP），也支持在控制台中随时手动点击 [更换 IP] 立即刷新出口。
- **100% 独享无共享**：在套餐有效期内，端口和对应使用的出口 IP 绝不与任何其他用户共享。
- **标准协议与直连认证**：支持 HTTP、HTTPS 与 SOCKS5 协议，直接填入在 [用户与白名单] 中设置的 Username 与 Password（或绑定 IP 白名单免密）。

---

## 典型应用场景

1. **多账号 / 多地区业务并行运营**：社媒矩阵运营、跨境卖家多店铺管理，为不同账号配置分配不同国家/城市的独享端口。
2. **多国家 localized 业务采集与监控**：需要同时在多个不同国家进行竞品价格监控或 SERP 抓取，每个端口固定代表一个目标国家。
3. **定时防封 IP 轮换**：既需要端口地址（Host:Port）保持不变以方便程序接入，又希望出口 IP 定时刷新以规避目标网站风控封禁。

---

## 本章内容导览

建议按顺序阅读以下指南：

1. <a href="quick-start.md" target="_blank" rel="noopener noreferrer">快速开始</a> — 4 步极简接入指南
2. <a href="network-types.md" target="_blank" rel="noopener noreferrer">网络类型与选型指南</a> — 住宅、商业/ISP 与数据中心自定义端口包对比
3. <a href="purchase.md" target="_blank" rel="noopener noreferrer">购买端口</a> — 选择网络类型、端口数量与预分配选项下单
4. <a href="view-ports.md" target="_blank" rel="noopener noreferrer">查看与管理端口</a> — 查看已购端口列表、生效状态与到期时间
5. <a href="assign-region.md" target="_blank" rel="noopener noreferrer">分配地区</a> — 为端口分配或随时切换目标国家、省/州与城市
6. <a href="rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">设置定时轮换与手动更换 IP</a> — 配置自动轮换频率与手动换 IP
7. <a href="auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a> — 端口套餐余额自动扣费续订说明
8. <a href="authentication.md" target="_blank" rel="noopener noreferrer">设置代理账密与白名单</a> — 配置代理用户名密码与 IP 白名单
9. <a href="extract-ip.md" target="_blank" rel="noopener noreferrer">提取代理 IP</a> — 在控制台提取自定义端口端点列表及 API 引流
10. <a href="first-request.md" target="_blank" rel="noopener noreferrer">发起代理请求</a> — Python、Node.js、Go、cURL 代码示例与第三方软件配置
11. <a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码与常见报错</a> — 407、403、502 等常见报错快速排查
12. <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">受限目标与合规说明</a> — 合规拦截与禁止访问范围说明
13. <a href="payments-and-invoices.md" target="_blank" rel="noopener noreferrer">查询支付记录与下载凭证</a> — 交易明细与 PDF 收据下载
