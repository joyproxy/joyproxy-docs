# 数据中心代理（控制台）

**数据中心**代理以托管 ASN 出口优先**吞吐与成本效率**。JoyProxy 为数据中心网络提供**静态**与**定制**模式。

<a href="https://www.joyproxy.com/products/proxy-datacenter.html" target="_blank" rel="noopener noreferrer">产品页</a>

## 模式

| 模式 | 最适合 |
| --- | --- |
| 静态 | 固定 IP 的长期高流量爬虫 |
| 定制 | 多地域或按端口轮换计时器 |

轮换网关流量适用于住宅、移动与商业/ISP——需要共享 `gate.joyproxy.com` 流程时请选这些网络。

## 控制台页签

- **购买** — 选 **Datacenter**，再选静态或定制
- **My Proxies** — 生效分配。<a href="../getting-started/static/auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a>与<a href="../getting-started/static/refresh-ip.md" target="_blank" rel="noopener noreferrer">新 IP</a>（定制：<a href="../getting-started/custom/new-ip.md" target="_blank" rel="noopener noreferrer">新 IP</a>）
- **Users & Whitelist** — 服务器 IP 白名单或凭据
- **Endpoints** — 生成 `host:port` 列表
- **用量** — 在适用处监控
- **API Center** — 为静态/定制线路复制提取 **API URL**；见 <a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>

操作指南：<a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">静态</a> · <a href="../getting-started/custom/README.md" target="_blank" rel="noopener noreferrer">定制</a>

## 规划建议

- 静态线路在购买时匹配地域——变更可能需要新订单。
- 将云运行器 IP 加入白名单，避免在配置文件中嵌入密码。
- 当目标更需要渲染而非纯速度时，可搭配<a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">网页抓取 API</a>。
