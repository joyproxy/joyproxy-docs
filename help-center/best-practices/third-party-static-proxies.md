# 第三方软件使用静态与轮换代理

很多桌面工具——爬虫、RPA、社媒管理、SEO 套件——都有同一套代理表单：**类型、主机、端口、用户名、密码**。JoyProxy 的**轮换网关**与**专用静态/定制**线路，填写方式不同。

## 轮换（共享网关）

订单是住宅、移动或商业 **轮换** 时用这一套。

| 软件标签 | 填写 |
| --- | --- |
| 类型 | HTTP 或 SOCKS5（都能访问 HTTPS 站点） |
| 主机 | `gate.joyproxy.com` |
| 端口 | `9001` |
| 用户名 | <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> 返回的完整字符串 |
| 密码 | <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> 里创建的密码 |

URI 示例：

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

> **重要**
>
> 不要缩短或改写生成的用户名，地域与会话信息都编码在这串里。

## 静态或定制（专用主机）

用 **静态** 或 **定制** 生成器给出的 host、port，常见为 `*.edge.joyproxy.com` 加固定端口。

| 字段 | 来源 |
| --- | --- |
| Host / Port | 端点生成器输出 |
| 认证 | 白名单（从已登记的服务器 IP 连接）**或** 你创建的用户名/密码 |

```text
http://USER:PASS@us-ca.edge.joyproxy.com:10001
```

## 场景：Multilogin 浏览器 + 静态住宅

1. 在目标国家购买<a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">静态住宅</a>。
2. 把运行器公网 IP 加入白名单，**或** 创建用户名密码。
3. 按工具要求，每个配置文件生成一个端点。
4. 若软件把身份 1:1 绑线路，每个配置文件用**不同**端口。

## 场景：轮换上的高频爬虫

1. 购买余量足够的轮换流量（在<a href="https://www.joyproxy.com/admin-overview.html" target="_blank" rel="noopener noreferrer">概览</a>看用量）。
2. 登录步骤用**粘性**会话，扫目录用**轮换**会话。
3. 换地域时在 Endpoints 重新生成用户名即可，不必新购套餐。

## 场景：由提取 API 驱动的工具

部分工具从 URL 拉 `host:port` 列表。可对接 <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> 里的 JoyProxy 提取 API，或直接粘贴网页生成器输出。

## 页面仍被拦

- 纯抓取负载可试<a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">网页抓取 API</a>。
- 提交<a href="../support/tickets.md" target="_blank" rel="noopener noreferrer">支持工单</a>，说明目标域名与请求模式（不要分享终端用户密码）。
