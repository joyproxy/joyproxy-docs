# 发起代理请求（First Request）

拿到提取的代理连接后，你可以使用各种编程语言或客户端连接 JoyProxy 动态代理网关。

- **代理主机（Host）**：`gate.joyproxy.com`
- **代理端口（Port）**：`9001`

---

## 代码示例

请将代码中的 `GENERATED_USER` 替换为从 **<a href="extract-ip.md" target="_blank" rel="noopener noreferrer">提取（Endpoint Generator）</a>** 页面生成的完整长用户名，`YOUR_PASS` 替换为在 **<a href="authentication.md" target="_blank" rel="noopener noreferrer">账密与白名单（Users &amp; Whitelist）</a>** 中设置的代理密码。

### cURL
```bash
# HTTP 代理测试
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org

# SOCKS5 代理测试
curl -x socks5h://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

### Python (requests)
```python
import requests

proxy_url = "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"
proxies = {
    "http": proxy_url,
    "https": proxy_url,
}

response = requests.get("https://api.ipify.org", proxies=proxies, timeout=15)
print("代理出口 IP:", response.text)
```

### Node.js (fetch)
```javascript
const { HttpsProxyAgent } = require("https-proxy-agent");

const proxyUrl = "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001";
const agent = new HttpsProxyAgent(proxyUrl);

async function checkIp() {
  const res = await fetch("https://api.ipify.org", { agent });
  console.log("代理出口 IP:", await res.text());
}

checkIp();
```

### Go
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

  body, _ := io.ReadAll(resp.Body)
  log.Println("代理出口 IP:", string(body))
}
```

### PHP
```php
<?php
$ch = curl_init("https://api.ipify.org");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_PROXY, "gate.joyproxy.com:9001");
curl_setopt($ch, CURLOPT_PROXYUSERPWD, "GENERATED_USER:YOUR_PASS");
$ip = curl_exec($ch);
curl_close($ch);

echo "代理出口 IP: " . $ip;
```

---

## 常用客户端与第三方软件集成

如需在浏览器或第三方桌面软件中使用动态代理：

- **Chrome / Edge 浏览器**：使用官方开箱即用的 **<a href="../../getting-started/software/browser-extension.md" target="_blank" rel="noopener noreferrer">浏览器扩展</a>**。
- **桌面测试与批量检测**：使用官方免费 **<a href="../../getting-started/software/proxy-tester.md" target="_blank" rel="noopener noreferrer">代理检测工具</a>**。
- **本地网关中转转发**：使用 **<a href="../../getting-started/software/proxy-server.md" target="_blank" rel="noopener noreferrer">代理服务器</a>**。
- **指纹浏览器（AdsPower、Hubstudio、Undetectable 等）**：参阅 **<a href="../../best-practices/browser/extension.md" target="_blank" rel="noopener noreferrer">第三方软件配合代理</a>** 指南。
