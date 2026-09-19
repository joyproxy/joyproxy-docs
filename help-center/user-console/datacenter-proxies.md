# 数据中心代理控制台

数据中心代理（Datacenter Proxies）基于全球顶级数据中心基础设施构建。其核心优势在于极具竞争力的超低采购成本、千兆不限流吞吐带宽以及毫秒级网络响应延迟，是无需对抗严苛反爬验证的高吞吐海量数据下载、网络连通性测速与市场情报监测的最佳方案。

在控制台左侧菜单的 **代理** 分组中点击 **数据中心** 即可直达控制台：

<a href="https://www.joyproxy.com/admin-proxy-datacenter.html" target="_blank" rel="noopener noreferrer">直接打开数据中心控制台</a> · <a href="https://www.joyproxy.com/products/proxy-datacenter.html" target="_blank" rel="noopener noreferrer">查看数据中心产品详情</a>

---

## 产品形态与业务特点

数据中心网络专注于长效、高并发、独享型的专用端口形态。为了保证每条线路具备充沛的带宽资源，**控制台不提供动态轮换形态，默认聚焦于以下两种长效独享模式**：

1. **静态独享数据中心线路**：  
   独享固定的机房 ASN 节点出口，专享千兆带宽通道，按月续租。支持随时在后台一键发起出口更换。  
   - 购买指南：<a href="../getting-started/static/purchase.md" target="_blank" rel="noopener noreferrer">购买静态机房独享线路</a>
   - 端口查看：<a href="../getting-started/static/view-lines.md" target="_blank" rel="noopener noreferrer">查看已购独享线路状态</a>
   - 出口更换：<a href="../getting-started/static/refresh-ip.md" target="_blank" rel="noopener noreferrer">在线申请更换出口 IP</a>
2. **自定义多端口机房集群**：  
   适合需要同时管理几十至数百个独立机房端口的企业客户。每个端口映射一条独立专享链路，可按业务模块批量分组分派给不同的采集器使用。  
   - 批量管理：<a href="../getting-started/custom/view-ports.md" target="_blank" rel="noopener noreferrer">查看与管理自定义端口</a>
   - 续费说明：<a href="../getting-started/custom/auto-renew.md" target="_blank" rel="noopener noreferrer">自定义端口自动续费配置</a>

> **选型建议**：如果你的业务场景涉及严格识别机房 IP 的目标网站（如 Google 搜索验证、Instagram、Facebook 等），建议优先选用 <a href="residential-proxies.md" target="_blank" rel="noopener noreferrer">住宅代理控制台</a> 或 <a href="business-isp-proxies.md" target="_blank" rel="noopener noreferrer">商业 / ISP 代理控制台</a>；若仅用于常规公开网站、API 监控、竞品比价等场景，数据中心代理能为你节省超过 70% 的代理预算。

---

## 常用操作指引

- **开通线路**：进入「购买」页签选择所需的目标数据中心属地（如美西机房、法兰克福机房等）以及租用周期完成付款。
- **配置免密白名单**：在「账密与白名单」中将你的爬虫服务器 IP 加入白名单，即可通过标准 SOCKS5 或 HTTP 协议免认证极速建立网络连接。
- **提取连接端点**：在「提取」页签选择静态独享模式，即可直接复制生成的端口直连列表或导出格式化文本。
