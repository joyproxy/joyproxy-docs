# 快速开始

轮换代理永远连**同一个网关**。JoyProxy 会从你买的池子里（住宅、移动或商业 / ISP）挑一台出口，把每次请求转出去。

```text
gate.joyproxy.com:9001
```

已有流量包和密码？直接看 [发一条测试请求](#发一条测试请求)。还没有就先按 [在控制台完成配置](#在控制台完成配置) 走一遍。

要独享 `host:port`？看 <a href="../static/quick-start.md" target="_blank" rel="noopener noreferrer">静态</a>、<a href="../custom/quick-start.md" target="_blank" rel="noopener noreferrer">定制</a>。不想自己管代理客户端、只要页面内容：<a href="../scraping-api/quick-start.md" target="_blank" rel="noopener noreferrer">网页抓取 API</a>。

## 端点是怎么组成的

**端点**就是进 IP 池的入口。换国家时**不用**换主机名。

| 字段 | 取值 |
| --- | --- |
| 主机 | `gate.joyproxy.com` |
| 端口 | `9001` |
| 协议 | HTTP、SOCKS5 都行；两种都能打开 **HTTPS 网站** |
| 用户名 | 在 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成（Endpoints）</a> 里**整段复制**的生成用户名 |
| 密码 | <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单（Users &amp; Whitelist）</a> → **Username/Password** 里设好的密码 |

国家、城市、是否粘性会话，都写在**生成用户名**里；主机和端口始终不变。

## 发一条测试请求

把 `GENERATED_USER`、`YOUR_PASS` 换成你的值。返回的公网 IP **不是**你家或办公室出口，就说明代理在工作。

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

cURL 走 SOCKS5：

```bash
curl -x socks5h://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

更多语言见 <a href="code-examples.md" target="_blank" rel="noopener noreferrer">代码示例</a>。

## 在控制台完成配置

新用户：<a href="https://www.joyproxy.com/register.html" target="_blank" rel="noopener noreferrer">注册</a> · <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价</a> · <a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">购买</a>

> **提示**
>
> 新账户可领 **$5 注册赠金**，结账时可用于首个代理套餐或抓取积分。

### 1. 购买轮换流量

1. 打开 <a href="https://www.joyproxy.com/admin-purchase.html?tab=short-term" target="_blank" rel="noopener noreferrer">购买 → 轮换</a>。
2. 选 **住宅**（或场景需要的 **移动** / **商业 / ISP**）。
3. 选流量包。三类网络单价不同，以 <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">定价页</a> 为准。
4. 结账：银行卡、Apple Pay、Google Pay、PayPal、微信支付、UPI、USDT（TRC20）或账户余额。
5. 在 <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">我的代理（My Proxies）</a> 确认订单已生效。

细节见 <a href="purchase.md" target="_blank" rel="noopener noreferrer">选择网络并购买流量</a>。

### 2. 配置代理认证

**网站登录密码**和**代理密码**是两回事。

1. 打开 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">用户与白名单</a>。
2. 在 **Username/Password** 下新建一组 User/Pass（字母开头，a–z 与 0–9，最长 16 位；密码至少 6 位）。
3. **记下密码**。下一步要把它和**长长的生成用户名**配对——不是用这里的短用户名。

完整说明：<a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a>。

### 3. 在端点生成里出线路

打开 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">端点生成</a> → **Rotating**：

1. **Location** — 选国家，需要时再选州/省、城市。见 <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">地域定向</a>。
2. **Session type** — **Sticky session**（1–30 分钟）或 **Rotating session**。见 <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">粘性会话</a>。
3. **Output format** — Endpoint:port、HTTP 或 SOCKS5；主机端口仍是 `gate.joyproxy.com:9001`。
4. 设置条数 → **Generate**。

> **重要**
>
> **生成用户名要整段粘贴**，手改可能导致地区错误或认证失败。

### 4. 复制代理信息

从结果表复制四段字段或整段 URI：

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

| 要复制 | 不要改 |
| --- | --- |
| 主机 `gate.joyproxy.com` | 不要自编「某国专用主机」 |
| 端口 `9001` | 不要混用静态线的 `*.edge.joyproxy.com` 端口 |
| 完整生成用户名 | 不要用用户与白名单里的短用户名 |
| Username/Password 里的密码 | 不要用网站登录密码 |

### 5. 确认出口 IP

用 [发一条测试请求](#发一条测试请求) 里的示例跑一遍。看到**代理出口 IP** 后，就可以接到爬虫、浏览器或其它工具。

## 接到你的工具链

| 需求 | 文档 |
| --- | --- |
| 只给 Chrome / Edge 用 | <a href="../software/browser-extension.md" target="_blank" rel="noopener noreferrer">浏览器扩展</a> |
| 批量测 HTTP / SOCKS | <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">代理检测工具</a> |
| 本机 `127.0.0.1` 给命令行 | <a href="../software/proxy-server.md" target="_blank" rel="noopener noreferrer">代理服务器</a> |
| 桌面爬虫、RPA | <a href="../../best-practices/third-party-static-proxies.md" target="_blank" rel="noopener noreferrer">第三方软件</a> |
| AI Agent / MCP | <a href="../../integration/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">在 AI 中集成代理</a> |

## 查看剩余流量

在住宅 / 移动 / 商业控制台打开 **Usage** 标签页。流量见底时在 <a href="https://www.joyproxy.com/admin-purchase.html?tab=short-term" target="_blank" rel="noopener noreferrer">购买 → 轮换</a> 续购即可，**不用**每次换用户名。

## 常见问题

| 现象 | 先查什么 |
| --- | --- |
| **407** Proxy Authentication Required | 密码来自用户与白名单 → Username/Password；用户名是**生成的那串**，不是邮箱或短 User/Pass 名 |
| 超时 | 主机 `gate.joyproxy.com`、端口 `9001`；有防火墙时可先试 HTTP 再试 SOCKS5 |
| 国家不对 | 在端点生成里**重新生成**用户名，不要手改旧串 |
| 订单无效 / 没流量 | <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">我的代理</a> 或 Usage 里的剩余 GB |

还是搞不定？<a href="../../support/live-chat.md" target="_blank" rel="noopener noreferrer">在线客服</a>（curl 请打码，**不要发真实密码**）。

## 相关文档

| 任务 | 页面 |
| --- | --- |
| 流量见底自动买包 | <a href="auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">自动购买流量</a> |
| Usage 与订单 | <a href="usage-and-orders.md" target="_blank" rel="noopener noreferrer">用量与订单</a> |
| 新建或重置代理用户 | <a href="authentication.md" target="_blank" rel="noopener noreferrer">认证方式</a> |
| 国家 / 城市定向 | <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">地域定向</a> |
| 几分钟内固定同一 IP | <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">粘性会话</a> |
| 更多语言示例 | <a href="code-examples.md" target="_blank" rel="noopener noreferrer">代码示例</a> |
| HTTP 与 SOCKS5 | <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> |
| 407 / 403 等 | <a href="response-codes.md" target="_blank" rel="noopener noreferrer">状态码</a> |
| Chrome、Windows、RPA | <a href="apps-and-browsers.md" target="_blank" rel="noopener noreferrer">在应用与浏览器中使用</a> |
