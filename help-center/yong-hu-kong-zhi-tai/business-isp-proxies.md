# 商业 / ISP 控制台

侧栏为 **商业 / ISP**，页内标题为 **企业专线 / ISP 代理**。支持 **动态**、**静态独享**、**自定义独享**（与住宅控制台结构相同）。

<a href="https://www.joyproxy.com/admin-proxy-business.html" target="_blank" rel="noopener noreferrer">打开控制台</a> · <a href="https://www.joyproxy.com/products/proxy-business.html" target="_blank" rel="noopener noreferrer">产品介绍</a>

在左侧 **代理** 菜单进入本网络；名称右侧的 **购买** 图标会直接打开 **购买** 页签。

---

## 页签说明

| 页签 | 说明 |
| --- | --- |
| **购买** | 选套餐并完成支付 |
| **已购** | 查看在途订单与库存 |
| **账密与白名单** | 配置用户名密码或 IP 白名单 |
| **提取** | 生成代理地址与提取链接 |
| **用量** | 查看流量消耗与订单 |
| **API 中心** | 在新窗口打开 OpenAPI 调试页 |

支持三种形态：

| 形态 | 文档 |
| --- | --- |
| 动态 | <a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">动态代理</a> |
| 静态独享 | <a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">静态独享代理</a> |
| 自定义独享 | <a href="../getting-started/custom/README.md" target="_blank" rel="noopener noreferrer">自定义独享代理</a> |

---

## 购买

在 **购买** 页选择产品形态后，按页面指引选国家、套餐并付款。详细步骤见 **产品与服务**：

| 形态 | 购买指南 |
| --- | --- |
| 动态 | <a href="../getting-started/rotating/purchase.md" target="_blank" rel="noopener noreferrer">购买流量</a> |
| 静态独享 | <a href="../getting-started/static/purchase.md" target="_blank" rel="noopener noreferrer">购买线路</a> |
| 自定义独享 | <a href="../getting-started/custom/purchase.md" target="_blank" rel="noopener noreferrer">购买端口</a> |

---

## 已购

查看当前生效的订单、剩余流量或独享端口有效期，并可进行续费、自动续费等操作（以页面上显示的按钮为准）。

- 动态：<a href="../getting-started/rotating/auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">自动购买流量</a>
- 静态 / 自定义：见静态与自定义产品文档中的续费与 IP 更换

---

## 账密与白名单

使用前须先完成授权。页头会提示：**提取代理前请先完成授权**。你可以 **将当前 IP 加入白名单**，或 **自动生成账密**，两种方式任选其一；也可手动 **创建账密**、管理 **已加入白名单的 IP**。

动态代理认证详见 <a href="../getting-started/rotating/authentication.md" target="_blank" rel="noopener noreferrer">设置代理账密与白名单</a>。
独享线路详见 <a href="../getting-started/static/authentication.md" target="_blank" rel="noopener noreferrer">静态认证</a>、<a href="../getting-started/custom/authentication.md" target="_blank" rel="noopener noreferrer">自定义认证</a>。

---

## 提取

在 **提取** 页选择对应产品形态，用生成器得到连接地址，或复制 **API URL** 供程序调用。提取链接里的是 **API Token**，不是 **我的账户** 里的 **主用户 Token**。详见 <a href="rotate-token.md" target="_blank" rel="noopener noreferrer">主用户与自动化 Token</a>。

同住宅控制台 **提取** 页，按形态选择生成器。

---

## 用量

同住宅控制台 **用量** 页，按形态查看流量或端口。

如需按小时查看动态流量汇总，可到 <a href="invoices.md" target="_blank" rel="noopener noreferrer">账单与交易记录</a> 的 **流量使用** 页签。

---

## API 中心

点击 **API 中心** 在新标签页打开 <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>，可调试订单、余额等接口。提取代理 IP 请使用本控制台 **提取** 页的链接。更多说明见 <a href="../zui-jia-shi-jian/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI 中心</a>。

页眉 **帮助中心** 链接可跳转到本站产品文档。
