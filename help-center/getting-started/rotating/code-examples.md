# 代码示例（轮换）

将 `GENERATED_USER` 替换为 <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> 的用户名，将 `YOUR_PASS` 替换为 <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> Username/Password。主机与端口保持 `gate.joyproxy.com:9001`。

测试 URL `https://api.ipify.org` 仅打印出口 IP。成功后将同一代理指向真实目标。

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
r = requests.get("https://api.ipify.org", proxies=proxies, timeout=30)
print(r.text)
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
  "net/http"
  "net/url"
)

func main() {
  proxyURL, _ := url.Parse("http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001")
  client := &http.Client{
    Transport: &http.Transport{Proxy: http.ProxyURL(proxyURL)},
  }
  resp, err := client.Get("https://api.ipify.org")
  if err != nil {
    panic(err)
  }
  defer resp.Body.Close()
  b, _ := io.ReadAll(resp.Body)
  println(string(b))
}
```
{% endtab %}

{% tab title="Java" %}
```java
import java.net.*;
import java.io.*;

public class Demo {
  public static void main(String[] args) throws Exception {
    Proxy proxy = new Proxy(Proxy.Type.HTTP,
        new InetSocketAddress("gate.joyproxy.com", 9001));
    Authenticator.setDefault(new Authenticator() {
      protected PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication("GENERATED_USER", "YOUR_PASS".toCharArray());
      }
    });
    URLConnection conn = new URL("https://api.ipify.org").openConnection(proxy);
    try (InputStream in = conn.getInputStream()) {
      System.out.println(new String(in.readAllBytes()));
    }
  }
}
```
{% endtab %}

{% tab title="C#" %}
```csharp
using System.Net;
using System.Net.Http;

var handler = new HttpClientHandler {
  Proxy = new WebProxy("http://gate.joyproxy.com:9001") {
    Credentials = new NetworkCredential("GENERATED_USER", "YOUR_PASS")
  }
};
using var client = new HttpClient(handler);
Console.WriteLine(await client.GetStringAsync("https://api.ipify.org"));
```
{% endtab %}
{% endtabs %}

cURL 使用 SOCKS5：

```bash
curl -x socks5h://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

## 批量提取用户名

从 Endpoints 或 <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> 批量导出。API URL 请保密；勿写入公开仓库。

## 下一步

<a href="apps-and-browsers.md" target="_blank" rel="noopener noreferrer">在应用与浏览器中使用</a> · <a href="protocols.md" target="_blank" rel="noopener noreferrer">协议</a> · <a href="response-codes.md" target="_blank" rel="noopener noreferrer">响应码</a>
