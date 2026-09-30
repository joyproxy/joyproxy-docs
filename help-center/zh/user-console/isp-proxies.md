# ISP 代理控制台

ISP 代理提供运营商 ISP 专线固定出口，形态为 **静态独享** 与 **自定义独享**。适合需要长期同一 `host:port` 的 B2B 门户、企业系统对接与稳定会话。

在左侧导航的 **代理** 分组中点击 **ISP 代理** 即可打开本控制台：

<a href="https://www.joyproxy.com/admin-proxy-isp.html" target="_blank" rel="noopener noreferrer">直接打开 ISP 代理控制台</a> · <a href="https://www.joyproxy.com/products/proxy-isp.html" target="_blank" rel="noopener noreferrer">查看 ISP 代理产品详情</a>

需要按 GB 轮换的商业宽带出口，请使用 <a href="business-proxies.md" target="_blank" rel="noopener noreferrer">商业代理控制台</a>。

---

## 产品形态

ISP 代理不提供动态流量包，控制台包含两种独享形态：

1. **静态独享**：  
   独占一条固定 ISP 出口，有效期内接入地址不变，可在控制台申请更换出口 IP。  
   - 购买：<a href="../getting-started/static/purchase.md" target="_blank" rel="noopener noreferrer">购买静态独享线路</a>
   - 查看：<a href="../getting-started/static/view-lines.md" target="_blank" rel="noopener noreferrer">查看已购线路</a>
   - 更换出口：<a href="../getting-started/static/refresh-ip.md" target="_blank" rel="noopener noreferrer">更换出口 IP</a>
2. **自定义独享**：  
   按端口交付，可按端口分配国家/城市，并支持定时或手动更换出口 IP。  
   - 端口管理：<a href="../getting-started/custom/view-ports.md" target="_blank" rel="noopener noreferrer">查看与管理端口</a>
   - 自动续费：<a href="../getting-started/custom/auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a>

---

## 常用操作指引

- **开通线路**：在 **购买** 页签选择 ISP 属地与租用周期后付款。
- **白名单**：在 **账密与白名单** 添加办公室或爬虫服务器公网 IP 后，静态独享与自定义独享可免密连接；详见 <a href="../getting-started/static/authentication.md" target="_blank" rel="noopener noreferrer">账密与白名单</a>。
- **自动续费**：到期前在 **已购** 开启 <a href="../getting-started/static/auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a>，以免专线中断。
