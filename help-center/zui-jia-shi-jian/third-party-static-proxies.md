# 第三方软件配合静态代理

许多桌面工具——爬虫、RPA、社交管理、SEO 套件——暴露相同代理表单：**类型、主机、端口、用户名、密码**。JoyProxy 对**轮换网关**与**专用静态/定制**线路的填写方式不同。

## 轮换（共享网关）

订单为住宅、移动或商业 **轮换**时使用。

| 软件标签 | 填写                                                                             |
| ---- | ------------------------------------------------------------------------------ |
| 类型   | HTTP 或 SOCKS5（均可打开 HTTPS 网站）                                                   |
| 主机   | `gate.joyproxy.com`                                                            |
| 端口   | `9001`                                                                         |
| 用户名  | [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html) 返回的完整字符串 |
| 密码   | 来自 [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html)      |

URI 示例：

```
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

> **重要**
>
> 请勿缩短或修改生成的用户名。地域与会话编码在该字符串内。

## 静态或定制（专用主机）

使用 **静态**或**定制**生成器的 host 与 port——常为 `*.edge.joyproxy.com` 与固定端口。

| 字段          | 来源                                           |
| ----------- | -------------------------------------------- |
| Host / Port | 端点生成器输出                                      |
| 认证          | 白名单（从所列服务器 IP 连接）**或**您创建的 username/password |

```
http://USER:PASS@us-ca.edge.joyproxy.com:10001
```

## 场景：Multilogin 浏览器 + 静态住宅

1. 在目标国家购买[静态住宅](../ru-men/static/)。
2. 将运行器公网 IP 加入白名单**或**创建凭据。
3. 按工具要求格式为每个配置文件生成一个端点。
4. 若软件将身份 1:1 映射到线路，为每个配置文件分配**唯一**端口。

## 场景：轮换上的高频爬虫

1. 购买有足够余量的轮换流量（监控[用量](https://www.joyproxy.com/admin-overview.html)）。
2. 登录步骤用**粘性**会话，目录爬取用**轮换会话**。
3. 更改地域时在 Endpoints 重新生成用户名——无需新购套餐。

## 场景：由提取 API 驱动的工具

部分工具从 URL 拉取 `host:port` 列表。指向 [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) 文档中的 JoyProxy 提取 API，或粘贴网页生成器行。

## 页面仍拦截时

* 仅抓取工作负载可试[网页抓取 API](../ru-men/scraping-api/)。
* 提交[支持工单](../fu-wu-yu-zhi-chi/tickets.md)并说明目标域名与请求模式（切勿分享终端用户密码）。
