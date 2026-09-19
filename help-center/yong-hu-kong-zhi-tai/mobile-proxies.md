# 移动代理控制台

移动代理（Mobile Proxies）底层依托遍布全球的真实 4G / 5G 移动蜂窝网络基站出口构建。移动运营商 IP 具备极高的反爬豁免权重，天然不易触发人机验证码，特别适合 Instagram、TikTok 等移动端社交平台运营、移动端应用广告反作弊以及本地化移动搜索采集。

在左侧导航的 **代理** 分组中点击 **移动代理** 即可打开本控制台：

<a href="https://www.joyproxy.com/admin-proxy-mobile.html" target="_blank" rel="noopener noreferrer">直接打开移动代理控制台</a> · <a href="https://www.joyproxy.com/products/proxy-mobile.html" target="_blank" rel="noopener noreferrer">查看移动代理产品详情</a>

---

## 纯动态轮换形态说明

与住宅网络不同，移动蜂窝网络的底层技术特性决定了其出口 IP 随移动基站随时动态变化。因此，**移动代理控制台全系采用纯动态按流量计费（GB）模式**，不提供长效固定端口独享选项：

- 计费方式：购买预付流量包，按实际发起的代理网络流量精准扣除 GB 额度，用完为止；
- 接入架构：通过全球高可用移动网关统一调度，支持指定国家与城市，支持按请求自动轮换或黏性保持出口。

---

## 常用操作指引

### 1. 购买移动流量包
在控制台顶部选择 **购买** 页签，根据业务吞吐量挑选所需的移动数据流量套餐。移动网络的详细参数说明可参考 <a href="../getting-started/rotating/network-types.md" target="_blank" rel="noopener noreferrer">移动网络类型与计费</a>。

### 2. 配置认证方式
进入 **账密与白名单** 页签完成前置授权。支持添加常用的公网 IP 白名单实现免密直连，也支持创建带密码的账密组。详细配置规则见 <a href="../getting-started/rotating/authentication.md" target="_blank" rel="noopener noreferrer">设置代理账密与白名单</a>。

### 3. 生成与提取连接地址
在 **提取** 页签中挑选你所需要的目标运营商属地，系统会自动为你拼接好包含国家指令的网关连接地址与对应的自动化提取链接（API URL），详见 <a href="../getting-started/rotating/extract-ip.md" target="_blank" rel="noopener noreferrer">提取代理 IP 教程</a>。

### 4. 实时监控流量余量
在 **用量** 页签可随时查询移动流量包的已消耗额度与剩余额度。如果你的业务属于长期持续性采集，推荐在 **已购** 页签开启 <a href="../getting-started/rotating/auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">自动购买流量</a> 功能，当剩余流量低于设定安全值时系统会自动使用账户余额续费补足，防止业务因断流受阻。
