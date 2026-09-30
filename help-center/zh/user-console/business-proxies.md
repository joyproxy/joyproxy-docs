# 商业代理控制台

商业代理（Business Proxies）使用写字楼办公网络与商业宽带出口，按流量（GB）计费，通过统一网关轮换 IP。适合 B2B 门户、商务账号与需要商业 ASN、同时要频繁更换出口的采集任务。

在左侧导航的 **代理** 分组中点击 **商业代理** 即可打开本控制台：

<a href="https://www.joyproxy.com/admin-proxy-business.html" target="_blank" rel="noopener noreferrer">直接打开商业代理控制台</a> · <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">查看商业代理产品详情</a>

需要固定 `host:port` 的 ISP 专线，请使用 <a href="isp-proxies.md" target="_blank" rel="noopener noreferrer">ISP 代理控制台</a>。

---

## 仅动态代理形态

商业代理控制台只提供动态代理（按 GB 计费），不提供静态独享或自定义独享端口：

- 计费方式：购买预付流量包，按实际代理流量扣除 GB，用完为止；
- 接入架构：通过统一网关调度商业宽带 IP 池，可指定国家与城市，支持按请求轮换或粘性会话。

操作流程与 <a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">动态代理指南</a>相同。

---

## 常用操作指引

### 1. 购买商业代理流量
在控制台顶部选择 **购买** 页签，挑选流量套餐。网络说明见 <a href="../getting-started/rotating/network-types.md" target="_blank" rel="noopener noreferrer">网络类型与选型</a>。

### 2. 配置认证方式
进入 **账密与白名单** 页签完成授权。商业代理网关使用账密连接。详细规则见 <a href="../getting-started/rotating/authentication.md" target="_blank" rel="noopener noreferrer">设置代理账密与白名单</a>。

### 3. 生成与提取连接地址
在 **提取** 页签选择目标地区，生成网关地址与 API URL，详见 <a href="../getting-started/rotating/extract-ip.md" target="_blank" rel="noopener noreferrer">提取代理 IP</a>。

### 4. 监控流量余量
在 **用量** 页签查看已用与剩余 GB。长期任务可在 **已购** 开启 <a href="../getting-started/rotating/auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">自动购买流量</a>。
