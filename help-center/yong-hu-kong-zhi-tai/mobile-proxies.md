# 移动代理控制台

**移动代理**（`sidebar.proxyMobile`）提供运营商（4G / 5G）出口。现网以 **动态** 预付流量为主（`overview.mobileDescShort`：**4G / 5G 运营商 IP，按流量计费**）。

[进入控制台](https://www.joyproxy.com/admin-proxy-mobile.html) · [产品介绍](https://www.joyproxy.com/products/proxy-mobile.html)

控制台页顶标题为 **代理控制台**；左侧主导航在 **代理** 分组下进入本网络。各页签名称与副标题与现网 `zh-CN` 界面一致。

---

## 页签说明

### 购买（Buy）

副标题：**套餐与支付**。

在 **购买** 页签选择 **动态** 流量套餐，网络类型为移动（Mobile）。

详见 [动态代理](../getting-started/rotating/README.md) 与 [网络类型](../getting-started/rotating/network-types.md) 中的移动说明。

操作步骤与支付渠道见「产品与服务」对应章节，不在本篇重复教程。

### 已购

副标题：**在途与库存**。

查看当前生效订单、分配状态、剩余流量或独享端口有效期。可在此进入续费、自动续费或更换出口 IP 等操作（以页面按钮为准）。

- [自动购买流量](../getting-started/rotating/auto-buy-traffic.md)
- [查看已购流量](../getting-started/rotating/view-traffic.md)

### 账密与白名单（Users & Whitelist）

副标题：**用户名密码与白名单**。

- 创建代理连接用的 **用户名 / 密码**（动态线路提取前须先完成此步；界面提示：**提取 IP 前须先创建代理账密**）。
- 静态 / 自定义独享可配置 **IP 白名单**，从已加白 IP 连接时可免账密（以产品规则为准）。

详见：[设置代理账密与白名单](../getting-started/rotating/authentication.md)（动态）· [静态](../getting-started/static/authentication.md) · [自定义独享](../getting-started/custom/authentication.md)

### 提取（Endpoints）

副标题：**提取代理地址**。

使用网页生成器选择 **动态**、**静态独享** 或 **自定义独享**（视本网络支持的模式而定），生成 `host:port`、完整用户名与可复制 **API URL**。

详见：[提取代理 IP](../getting-started/rotating/extract-ip.md) 及各网络产品文档中的「提取」章节。

### 用量（Usage）

副标题：**流量与订单**。

查看本网络下的流量消耗、订单列表与剩余额度。动态产品展示预付流量包的已用 / 剩余 GB；独享产品展示端口与到期状态。

详见：[查看已购流量](../getting-started/rotating/view-traffic.md) · [查看已购线路](../getting-started/static/view-lines.md) · [查看与管理端口](../getting-started/custom/view-ports.md)

### API 中心（API Center）

副标题：**OpenAPI 与在线调试**。

在新窗口打开 [OpenAPI 中心](https://www.joyproxy.com/admin-openapi.html)，调试提取、订单等 HTTP 接口。提取类接口使用 **Endpoints** 页复制的 **API URL** 中的 Token，勿与 **主用户 Token** 混用。

详见：[OpenAPI 中心](../best-practices/openapi-center.md)

---

## 侧栏快捷购买

在 **代理** 子菜单中，各网络名称右侧有 **购买** 图标按钮（`sidebar.proxyQuickBuy`），等同于进入本控制台并打开 **购买** 页签（URL 参数 `?view=buy`）。
