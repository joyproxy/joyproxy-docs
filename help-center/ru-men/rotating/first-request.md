# 发起代理请求

拿到生成链接后，你可以使用各种编程语言或客户端连接动态代理网关。

网关固定地址：`gate.joyproxy.com:9001`

---

## 代码示例

请将 `GENERATED_USER` 替换为提取到的完整长用户名，`YOUR_PASS` 替换为代理密码：

{% tabs %}
{% tab title="cURL" %}
```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

proxy = "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"
res = requests.get("https://api.ipify.org", proxies={"http": proxy, "https": proxy}, timeout=15)
print("出口 IP:", res.text)
```
{% endtab %}

{% tab title="Node.js" %}
```javascript
const { HttpsProxyAgent } = require("https-proxy-agent");

const agent = new HttpsProxyAgent("http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001");
const res = await fetch("https://api.ipify.org", { agent });
console.log("出口 IP:", await res.text());
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
  proxyURL, _ := url.Parse("http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001")
  client := &http.Client{
    Transport: &http.Transport{Proxy: http.ProxyURL(proxyURL)},
  }
  resp, err := client.Get("https://api.ipify.org")
  if err != nil {
    log.Fatal(err)
  }
  defer resp.Body.Close()
  b, _ := io.ReadAll(resp.Body)
  log.Println("出口 IP:", string(b))
}
```
{% endtab %}
{% endtabs %}

---

## 常用软件与客户端配置

如需在浏览器、测试工具或桌面程序中使用动态代理：

- **Chrome / Edge 浏览器**：配合 [JoyProxy 浏览器扩展](../../getting-started/software/browser-extension.md)。
- **快捷测试连通性**：使用 [代理检测工具](../../getting-started/software/proxy-tester.md)。
- **本地网关转发**：使用 [代理服务器](../../getting-started/software/proxy-server.md)。
- **指纹浏览器与第三方软件**：参见 [第三方软件配合代理](../../best-practices/third-party-static-proxies.md)。
