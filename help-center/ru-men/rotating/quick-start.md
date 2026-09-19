# 快速开始

轮换代理走 JoyProxy 的**共享网关**：主机和端口固定，**国家、城市、会话**都写在一串**生成用户名**里。每次请求换一个出口 IP，也可以粘住同一个 IP 用 1–30 分钟。

适合**住宅**、**移动**、**商业 / ISP**。要长期固定的 `host:port`，见 [静态](../static/quick-start.md) 或 [定制](../custom/quick-start.md)；只想拿页面内容、不想自己管代理，见 [网页抓取 API](../scraping-api/quick-start.md)。

已经有流量和密码？跳到 [发一条测试请求](quick-start.md#发一条测试请求)。还没有？按 [在控制台配置](quick-start.md#在控制台配置) 走一遍。

## 端点长什么样

换国家不用换主机。主机和端口永远是这两样：

| 字段 | 值 |
| --- | --- |
| 主机 | `gate.joyproxy.com` |
| 端口 | `9001` |
| 协议 | HTTP 或 SOCKS5，都能开 HTTPS 网站 |
| 用户名 | [端点生成](https://www.joyproxy.com/admin-ip-extraction-center.html) 里**整段复制**的那串 |
| 密码 | [用户与白名单](https://www.joyproxy.com/admin-authorization.html) → **Username/Password** 的密码 |

国家、城市、是否粘性，全在**生成用户名**里。主机端口别动。

## 发一条测试请求

把 `GENERATED_USER` 和 `YOUR_PASS` 换成你的值。返回的 IP 不是你家 / 公司出口，就说明代理通了。

{% tabs %}
{% tab title="cURL" %}
```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

PROXY = "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"
proxies = {"http": PROXY, "https": PROXY}
print(requests.get("https://api.ipify.org", proxies=proxies, timeout=30).text)
```
{% endtab %}

{% tab title="Node.js" %}
```javascript
const { HttpsProxyAgent } = require("https-proxy-agent");

const agent = new HttpsProxyAgent(
  "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"
);
const res = await fetch("https://api.ipify.org", { agent });
console.log(await res.text());
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
$ch = curl_init("https://api.ipify.org");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_PROXY, "gate.joyproxy.com:9001");
curl_setopt($ch, CURLOPT_PROXYUSERPWD, "GENERATED_USER:YOUR_PASS");
echo curl_exec($ch);
curl_close($ch);
```
{% endtab %}

{% tab title="Go" %}
```go
package main

import (
  "io"
  "log"
  "net/http"
  "net/url"
)

func main() {
  proxyURL, err := url.Parse("http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001")
  if err != nil {
    log.Fatal(err)
  }
  client := &http.Client{
    Transport: &http.Transport{Proxy: http.ProxyURL(proxyURL)},
  }
  resp, err := client.Get("https://api.ipify.org")
  if err != nil {
    log.Fatal(err)
  }
  defer resp.Body.Close()
  b, _ := io.ReadAll(resp.Body)
  log.Println(string(b))
}
```
{% endtab %}

{% tab title="Java" %}
```java
import java.net.*;
import java.io.*;
import java.util.Scanner;

public class ProxyTest {
  public static void main(String[] args) throws Exception {
    Proxy proxy = new Proxy(Proxy.Type.HTTP,
        new InetSocketAddress("gate.joyproxy.com", 9001));
    Authenticator.setDefault(new Authenticator() {
      protected PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication(
            "GENERATED_USER", "YOUR_PASS".toCharArray());
      }
    });
    URLConnection conn = new URL("https://api.ipify.org").openConnection(proxy);
    try (Scanner scanner = new Scanner(conn.getInputStream())) {
      System.out.println(scanner.nextLine());
    }
  }
}
```
{% endtab %}
{% endtabs %}

SOCKS5 版本：

```bash
curl -x socks5h://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

更多语言见 [代码示例](code-examples.md)。

## 在控制台配置

新用户：[注册](https://www.joyproxy.com/register.html) · [定价](https://www.joyproxy.com/pricing.html) · [购买](https://www.joyproxy.com/admin-purchase.html)

> **提示**
>
> 新账户有 **$5 赠金**，结账时能抵首个套餐或抓取积分。

### 1. 买轮换流量

1. 打开 [购买 → 轮换](https://www.joyproxy.com/admin-purchase.html?tab=short-term)。
2. 选 **住宅**（或 **移动** / **商业 / ISP**，看场景）。
3. 选流量包。三类网络每 GB 价格不同，以 [定价页](https://www.joyproxy.com/pricing.html) 为准。
4. 结账：银行卡、Apple Pay、Google Pay、PayPal、微信、UPI、USDT（TRC20）或余额。
5. 在 [我的代理](https://www.joyproxy.com/admin-my-orders.html) 确认订单生效。

细节见 [选择网络并购买流量](purchase.md)。

### 2. 配好代理认证

**网站登录密码**和**代理密码**是两回事。

1. 打开 [用户与白名单](https://www.joyproxy.com/admin-authorization.html)。
2. 在 **Username/Password** 下建一组 User/Pass（字母开头，a–z 与 0–9，最长 16 位；密码至少 6 位）。
3. **记下密码**。等下要把它和**长生成用户名**配对——不是用这里的短用户名。

完整说明见 [认证方式](authentication.md)。

### 3. 生成端点

打开 [端点生成](https://www.joyproxy.com/admin-ip-extraction-center.html) → **Rotating**：

1. **Location** — 选国家，需要再选州/城市。见 [地域定向](location-targeting.md)。
2. **Session type** — **Sticky**（1–30 分钟）或 **Rotating**。见 [粘性会话](sticky-sessions.md)。
3. **Output format** — Endpoint:port、HTTP 或 SOCKS5；主机端口仍是 `gate.joyproxy.com:9001`。
4. 设条数 → **Generate**。

> **重要**
>
> **生成用户名整段粘贴**，手改会出错地区或认证失败。

### 4. 复制代理信息

从结果表复制四段字段，或整段 URI：

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

| 复制 | 别改 |
| --- | --- |
| 主机 `gate.joyproxy.com` | 不要自编「某国专用主机」 |
| 端口 `9001` | 不要混用静态线的 `*.edge.joyproxy.com` 端口 |
| 完整生成用户名 | 不要用 Users & Whitelist 里的短用户名 |
| Username/Password 的密码 | 不要用网站登录密码 |

### 5. 验证出口 IP

拿 [发一条测试请求](quick-start.md#发一条测试请求) 跑一遍。看到**代理出口 IP**，就可以接到爬虫、浏览器或其它工具了。

## 接到你的工具

| 需求 | 文档 |
| --- | --- |
| 只给 Chrome / Edge 用 | [浏览器扩展](../software/browser-extension.md) |
| 批量测 HTTP / SOCKS | [代理测试工具](../software/proxy-tester.md) |
| 本机 `127.0.0.1` 给命令行 | [代理服务器](../software/proxy-server.md) |
| 桌面爬虫、RPA | [第三方软件](../../best-practices/third-party-static-proxies.md) |
| AI Agent / MCP | [在 AI 中集成代理](../../best-practices/integrate-proxies-in-ai.md) |

## 剩余流量

在住宅 / 移动 / 商业控制台的 **Usage** 标签页看。快见底时去 [购买 → 轮换](https://www.joyproxy.com/admin-purchase.html?tab=short-term) 续购，**不用**换用户名。

## 常见问题

| 现象 | 先查 |
| --- | --- |
| **407** Proxy Authentication Required | 密码来自 Users & Whitelist → Username/Password；用户名是**生成的那串**，不是邮箱或短 User/Pass |
| 超时 | 主机 `gate.joyproxy.com`、端口 `9001`；有防火墙先试 HTTP 再试 SOCKS5 |
| 国家不对 | 在端点生成里**重新生成**，别手改旧串 |
| 订单无效 / 没流量 | [我的代理](https://www.joyproxy.com/admin-my-orders.html) 或 Usage 里的剩余 GB |

还不行？[在线客服](../../support/live-chat.md)（curl 请打码，**别发真实密码**）。

## 接下来

| 任务 | 页面 |
| --- | --- |
| 流量见底自动买包 | [自动购买流量](auto-buy-traffic.md) |
| Usage 与订单 | [用量与订单](usage-and-orders.md) |
| 新建或重置代理用户 | [认证方式](authentication.md) |
| 国家 / 城市定向 | [地域定向](location-targeting.md) |
| 几分钟内固定同一 IP | [粘性会话](sticky-sessions.md) |
| 更多语言示例 | [代码示例](code-examples.md) |
| HTTP 与 SOCKS5 | [协议](protocols.md) |
| 407 / 403 等 | [响应码](response-codes.md) |
| Chrome、Windows、RPA | [在应用与浏览器中使用](apps-and-browsers.md) |
