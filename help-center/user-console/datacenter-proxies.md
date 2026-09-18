# 数据中心代理（控制台）

**数据中心**代理侧重托管 ASN 出口的**吞吐与成本**。JoyProxy 数据中心支持**静态**与**定制**两种模式。

<a href="https://www.joyproxy.com/products/proxy-datacenter.html" target="_blank" rel="noopener noreferrer">产品页</a>

## 模式

| 模式 | 适合场景 |
| --- | --- |
| 静态 | 固定 IP、长期高流量爬虫 |
| 定制 | 多地域或按端口设置轮换计时 |

需要共享 `gate.joyproxy.com` 的轮换网关时，选住宅、移动或商业/ISP 网络，而不是数据中心轮换。

## 控制台页签

- **购买** — 选 **Datacenter**，再选静态或定制
- **My Proxies** — 查看生效分配；<a href="../getting-started/static/auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a>、<a href="../getting-started/static/refresh-ip.md" target="_blank" rel="noopener noreferrer">新 IP</a>（定制见<a href="../getting-started/custom/new-ip.md" target="_blank" rel="noopener noreferrer">新 IP</a>）
- **Users & Whitelist** — 服务器 IP 白名单或用户名密码
- **Endpoints** — 生成 `host:port` 列表
- **用量** — 在适用场景下查看监控
- **API Center** — 静态/定制线路复制提取 **API URL**；HTTP 细节见 <a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>

操作指南：<a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">静态</a> · <a href="../getting-started/custom/README.md" target="_blank" rel="noopener noreferrer">定制</a>

## 规划提示

- 静态线路购买时即绑定地域，换地区通常要新订单。
- 云运行器 IP 建议走白名单，少在配置文件里写密码。
- 目标站更吃渲染而不是纯速度时，可配合<a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">网页抓取 API</a>。
