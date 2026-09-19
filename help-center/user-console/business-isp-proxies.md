# 商业 / ISP 代理控制台

商业 / ISP 代理（Business / ISP Proxies）整合了海外知名企业专线（如 AT&T Business、CenturyLink Enterprise 等优质机房专线光纤）的出口资源。它兼具了真实 ISP 网络的极高商业信誉度与数据中心机房级别的低延迟、高带宽和全天候高可用性。

在控制台左侧的 **代理** 菜单中点击 **商业 / ISP** 进入专属控制台：

<a href="https://www.joyproxy.com/admin-proxy-business.html" target="_blank" rel="noopener noreferrer">直接打开商业 / ISP 控制台</a> · <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">查看商业 ISP 产品介绍</a>

---

## 为什么选择商业 / ISP 代理？

很多大型目标平台对纯机房数据中心 IP（Hosting ASN）有着非常严厉的风控拦截，而普通民用家庭宽带在高峰期有时会出现波动。商业 ISP 专线完美平衡了这两者：

1. **信誉权重高**：IP 在各大商业风控数据库中均登记为商业公司专线或固网宽带，极不易被平台识别为代理；
2. **连接稳定性极佳**：机房级骨干光纤接入，上下行对称大带宽，不会出现民用宽带常见的掉线或延迟陡增；
3. **支持全形态部署**：支持动态按量轮换、静态固定专线独享以及按端口定制的多集群调度。

---

## 支持的三种产品模式

商业 / ISP 控制台同样具备完整的六大页签结构（购买、已购、账密与白名单、提取、用量、API 中心【OpenAPI】），并支持在顶部灵活切换业务形态：

- **动态专线流量包**：通过统一接入网关调度全网商业专线 IP，适合需要高信誉出口但目标数量庞大的轮换式抓取。操作流程同 <a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">动态代理指南</a>。
- **静态独享专线（推荐）**：独家租用一条固定的商业专线出口，IP 长期绑定，适合海外公司企业级系统对接、跨境商铺长期养号。开通与管理见 <a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">静态独享专线指南</a>。
- **自定义多端口集群**：分配独立端口映射，支持批量配置各端口对应的国家和机房专线，按需一键更换出口。详细配置见 <a href="../getting-started/custom/README.md" target="_blank" rel="noopener noreferrer">自定义独享管理</a>。

---

## 快速管理指引

- **白名单配置**：在「账密与白名单」中添加你的爬虫集群或办公室公网 IP，静态与自定义独享专线即可实现极速免密连接；动态商业专线则需使用账密连接。
- **自动续费机制**：独享静态线路到期前，可以在「已购」页面开启 <a href="../getting-started/static/auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费功能</a>，系统将在到期当天自动从可用余额扣除当月租金，确保持久保留同一专线 IP。
