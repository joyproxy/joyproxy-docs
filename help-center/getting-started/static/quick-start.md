# 快速开始

静态线在套餐期内用**固定的 host 和 port**；国家/地区下单时选好。连 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成（Endpoints）</a> 里的 `host:port`，**不要**用订单上的 Exit IP。

已经有分配？直接看 [发测试请求](#发测试请求)。

每次请求都要换 IP？看 <a href="../rotating/quick-start.md" target="_blank" rel="noopener noreferrer">轮换快速开始</a>。要按端口定不同地区： <a href="../custom/quick-start.md" target="_blank" rel="noopener noreferrer">定制快速开始</a>。

## 连接参数

| 字段 | 取值 |
| --- | --- |
| 主机 | <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成（Endpoints）</a> 显示，如 `us-ca.edge.joyproxy.com` |
| 端口 | 同上，如 `10001` |
| 协议 | HTTP、SOCKS5，都能访问 **HTTPS 网站**。见 <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> |
| 认证 | <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单（Users &amp; Whitelist）</a> 的 Username/Password **和/或** IP 白名单 |

> **重要**
>
> Exit IP 是目标站看到的地址。客户端只能填**生成出来的 host 和 port**。

## 发测试请求

把 `USER`、`PASS`、`HOST`、`PORT` 换成你的值。本机在白名单时可以去掉 `USER:PASS@`。

{% tabs %}
{% tab title="cURL" %}
```bash
curl -x http://USER:PASS@HOST:PORT https://api.ipify.org
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

PROXY = "http://USER:PASS@HOST:PORT"
proxies = {"http": PROXY, "https": PROXY}
print(requests.get("https://api.ipify.org", proxies=proxies, timeout=30).text)
```
{% endtab %}

{% tab title="Node.js" %}
```javascript
const { HttpsProxyAgent } = require("https-proxy-agent");

const agent = new HttpsProxyAgent("http://USER:PASS@HOST:PORT");
const res = await fetch("https://api.ipify.org", { agent });
console.log(await res.text());
```
{% endtab %}
{% endtabs %}

更多语言：<a href="code-examples.md" target="_blank" rel="noopener noreferrer">代码示例</a>。

## 在控制台配置

新用户：<a href="https://www.joyproxy.com/register.html" target="_blank" rel="noopener noreferrer">注册</a> · <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价</a>

> **提示**
>
> 新账户可领 **$5 注册赠金**，首单符合条件时可在结账使用。

### 1. 购买静态线路

| 步骤 | 操作 |
| --- | --- |
| 1 | 打开 <a href="https://www.joyproxy.com/admin-purchase.html?tab=long-term" target="_blank" rel="noopener noreferrer">购买 → 静态</a> |
| 2 | 选 **住宅**、**商业 / ISP** 或 **数据中心** |
| 3 | 选**国家**（有则选省/市）。该地域在订单周期内**锁定** |
| 4 | 选时长与数量，结账（卡、Apple Pay、Google Pay、PayPal、微信、UPI、USDT 或余额） |
| 5 | 在 <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">我的代理（My Proxies）</a> 等到分配生效 |

见 <a href="purchase.md" target="_blank" rel="noopener noreferrer">购买独享线路</a>。

### 2. 认证

在 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单（Users &amp; Whitelist）</a> 配置 **Username/Password**（推荐）：

- **Username/Password** — 字母开头，a–z 与 0–9，最长 16；密码至少 6 位。静态线下，这个用户名**就是**代理用户名。
- **IP 白名单** — 填会发起连接的机器的公网 IPv4，客户端只填 `host:port`。

见 <a href="authorization.md" target="_blank" rel="noopener noreferrer">用户名密码或白名单</a>、<a href="../rotating/authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a>。

### 3. 生成端点

| 步骤 | 操作 |
| --- | --- |
| 1 | <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成（Endpoints）</a> → **Static Proxies → Web generator** |
| 2 | 选订单 → **Generate now** |
| 3 | 复制 **host**、**port**（未用白名单时连同账号密码） |

见 <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">生成端点</a>。

### 4. 确认出口

跑上面的示例，返回 IP 应接近你购买的地域。

## 常见问题

| 现象 | 先查 |
| --- | --- |
| **407** / 认证失败 | 短用户名密码，或把本机**公网 IPv4** 加入白名单 |
| 超时 / 连接被拒 | 端点生成页最新 host:port；订单是否仍有效 |
| VPS 能用、家里不行 | 家里 IP 未加白名单 — 加 IP 或改用账号密码 |
| 连到了 Exit IP | 用生成的 host:port，不是订单卡片上的 Exit IP |

## 接下来

| 任务 | 页面 |
| --- | --- |
| 自动续费（Auto-renew） | <a href="auto-renew.md" target="_blank" rel="noopener noreferrer">自动续费</a> |
| 更换出口 IP | <a href="refresh-ip.md" target="_blank" rel="noopener noreferrer">更换 IP</a> |
| Windows / Chrome / 手机 | <a href="clients.md" target="_blank" rel="noopener noreferrer">客户端配置</a> |
| HTTP / SOCKS5 | <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> |
| 407 / 403 | <a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码</a> |
| 更多代码 | <a href="code-examples.md" target="_blank" rel="noopener noreferrer">代码示例</a> |
