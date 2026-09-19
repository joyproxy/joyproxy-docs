# 控制台导读

本章说明 [JoyProxy 控制台](https://www.joyproxy.com/admin-overview.html) 的导航结构，以及帮助文档与界面的对应关系。按钮、页签名称以控制台 **简体中文** 界面为准，必要时附英文原文。

---

## 登录后左侧菜单（普通用户）

| 顺序 | 菜单文案 | 说明 |
| --- | --- | --- |
| 1 | **概览** | 账户余额、用量一览、各代理网络入口卡片 |
| 2 | **代理** ▾ | **住宅代理**、**移动代理**、**商业 / ISP**、**数据中心**、**网页抓取**；每项可点名称进入控制台，或点右侧 **购买** 快捷进入购买页签 |
| 3 | **帮助中心** ▾ | **提交工单**、**实时聊天**（详见 [服务与支持](../support/tickets.md)） |
| 4 | **我的账户** | 资料与账单（`admin-settings.html`） |
| 5 | **退出登录** | 结束当前会话 |

> 购买、已购库存、账密、提取、用量均在**各网络自己的控制台**内完成，不再有全站统一的「购买代理 / 我的代理」总页作为主线。

---

## 本章目录（左侧导航均在本章下）

### 账户与登录

- [注册](register.md)
- [邮箱激活](email-activation.md)
- [登录](login.md)
- [找回密码](forgot-password.md)

### 控制台总览

- [概览（Overview）](overview.md)

### 代理网络控制台

- [住宅代理控制台](residential-proxies.md)
- [移动代理控制台](mobile-proxies.md)
- [商业 / ISP 控制台](business-isp-proxies.md)
- [数据中心控制台](datacenter-proxies.md)
- [网页抓取控制台](web-scraping-api.md)

### 我的账户（My Account）

- [我的账户总览](my-account.md)
- [界面语言](interface-language.md)
- [修改密码](change-password.md)
- [无操作退出时间](idle-sign-out.md)
- [主用户与自动化 Token](rotate-token.md)
- [账单与交易记录](invoices.md)
- [注销账户](delete-account.md)

---

## 本章文档怎么读

| 你想做的事 | 先看 | 操作细节去哪 |
| --- | --- | --- |
| 注册、登录、找回密码 | 上表 **账户与登录** | — |
| 看余额与进各产品线 | [概览（Overview）](overview.md) | — |
| 买套餐、提取 IP、看订单 | **代理网络控制台** 对应一篇 | [产品与服务](../getting-started/rotating/README.md) 等 |
| 改密码、语言、Token、账单 | [我的账户总览](my-account.md) | 上表 **我的账户** |
| 调 HTTP API | [OpenAPI 中心](../best-practices/openapi-center.md) | 控制台 **API 中心** 外链 |

---

## 与「产品与服务」的分工

- **用户控制台**：界面在哪、页签叫什么、点进去管什么。
- **产品与服务**：怎么买、怎么配账密、怎么发请求、响应码与支付说明。

两者通过文内链接衔接，避免同一操作维护两套正文。
