# 住宅代理控制台

住宅代理（Residential Proxies）基于全球真实家庭宽带 IP 构建，具备极高的反爬绕过率与商业信誉，特别适合大规模跨境电商数据抓取、社媒多账号防关联运营以及搜索引擎结果抓取。

在控制台左侧主导航的 **代理** 分组中，点击 **住宅代理** 即可直达控制台：

<a href="https://www.joyproxy.com/admin-proxy-residential.html" target="_blank" rel="noopener noreferrer">直接打开住宅代理控制台</a> · <a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">查看住宅产品特性</a>

---

## 六大功能页签一览

住宅代理控制台由六个核心工作区构成，覆盖从选购到生产部署的全流程：

| 功能页签 | 核心功能定位与使用说明 |
| :--- | :--- |
| **购买** | 根据业务需求挑选住宅产品形态（动态流量包 / 静态独享线路 / 自定义端口定制），在线选定规格完成支付。 |
| **已购** | 资产库存面板。查看已购动态流量包剩余 GB 数与有效期，管理静态线路与自定义端口的运行状态、续费及出口 IP 更换。 |
| **账密与白名单** | 认证授权配置。提供生成端点前的前置安全绑定，支持快速加白本地 IP 或创建自动化认证账密。 |
| **提取** | 生产部署入口。可视化的代理地址生成器，按国家、地区、时效与协议快速生成 `host:port` 直连地址或自动化 API 提取链接。 |
| **用量** | 实时消耗报表。查看动态流量预付包的消耗进度以及各个独享端口的实际在线流量。 |
| **API 中心** | 在新标签页中打开独立的 OpenAPI 在线调试工作台，方便开发团队快速测试各项管理接口。 |

---

## 住宅网络支持的三种产品形态

住宅网络针对不同业务架构提供了三种截然不同的产品模式，你可以在控制台各个页签的顶部随时切换：

1. **动态住宅代理（按流量计费）**：  
   接入官方统一高可用网关（`gate.joyproxy.com:9001`），支持按国家、州省、城市甚至运营商指定出口，可随时按需轮换或保持最长数十分钟的黏性会话。  
   - 购买指南：<a href="../getting-started/rotating/purchase.md" target="_blank" rel="noopener noreferrer">动态代理购买指南</a>
   - 提取参数详解：<a href="../getting-started/rotating/extraction-parameters.md" target="_blank" rel="noopener noreferrer">高级提取参数配置</a>
2. **静态独享住宅代理（按月/独享 IP）**：  
   专为你独家分配的固定国家固定住宅 IP，端口长期稳定不换，适合海外电商店铺日常运营、广告投放等严禁出口变动的场景。  
   - 线路购买：<a href="../getting-started/static/purchase.md" target="_blank" rel="noopener noreferrer">静态独享线路选购</a>
   - 出口更换：<a href="../getting-started/static/refresh-ip.md" target="_blank" rel="noopener noreferrer">静态线路更换出口 IP</a>
3. **自定义独享住宅代理（多端口定制集群）**：  
   支持开通多个专属端口映射，不仅能自定义每个端口的所属国家与机房，还支持在后台设定按固定时长自动轮换底层出口 IP。  
   - 端口管理：<a href="../getting-started/custom/view-ports.md" target="_blank" rel="noopener noreferrer">自定义独享端口管理</a>
   - 定时轮换：<a href="../getting-started/custom/rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">配置定时轮换与手动换 IP</a>

---

## 推荐的标准上手工作流

如果你是首次使用住宅代理，建议按照以下顺序快速开始：

1. **第一步：购买所需规格**  
   在 **购买** 页签切换到所需产品形态，挑选国家与套餐额度并使用可用余额或在线付款完成开通。
2. **第二步：配置使用授权（关键）**  
   切换到 **账密与白名单** 页签。系统会友好提醒：**提取代理前请先完成授权**。如果你的脚本运行在固定服务器上，点击 **将当前 IP 加入白名单** 最为快捷；如果是运行在动态 IP 网络或第三方手机端，直接点击 **自动生成账密** 即可生成一组高强度的代理用户名密码。
3. **第三步：生成与提取节点**  
   切换到 **提取** 页签，挑选目标出口地区（如美国、日本等），点击生成，页面会即时返回可直接配置在工具软件中的代理连接地址。若需要在爬虫程序中自动化批量提取，直接复制页面生成的 **API URL** 即可。
4. **第四步：发起请求与查看用量**  
   将生成的代理信息填入你的代码或浏览器扩展中发起请求。日常可通过 **用量** 页签监控套餐的剩余流量，若需按每小时查看消费曲线，可联动参考 <a href="invoices.md" target="_blank" rel="noopener noreferrer">账单与交易记录</a> 中的动态流量明细报表。
