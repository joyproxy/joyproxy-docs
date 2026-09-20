# Send a proxy request

After you generate a connection string, use it from code or a client against the JoyProxy Rotating Proxies gateway.

- **Host**: `gate.joyproxy.com`
- **Port**: `9001`

---

## Code samples

Replace `GENERATED_USER` with the full long username from **<a href="extract-ip.md" target="_blank" rel="noopener noreferrer">Endpoint generator</a>**, and `YOUR_PASS` with the Password from **<a href="authentication.md" target="_blank" rel="noopener noreferrer">Users & Whitelist</a>**.

### cURL
```bash
# HTTP proxy test
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org

# SOCKS5 proxy test
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
print("Exit IP:", response.text)
```

### Node.js (fetch)
```javascript
const { HttpsProxyAgent } = require("https-proxy-agent");

const proxyUrl = "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001";
const agent = new HttpsProxyAgent(proxyUrl);

async function checkIp() {
  const res = await fetch("https://api.ipify.org", { agent });
  console.log("Exit IP:", await res.text());
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
  log.Println("Exit IP:", string(body))
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

echo "Exit IP: " . $ip;
```

---

## Browsers and third-party tools

To use Rotating Proxies in a browser or desktop app:

- **Chrome / Edge**: the official **<a href="../../getting-started/software/browser-extension.md" target="_blank" rel="noopener noreferrer">Browser Extension</a>**.
- **Desktop tests and batch checks**: the free official **<a href="../../getting-started/software/proxy-tester.md" target="_blank" rel="noopener noreferrer">Proxy Tester</a>**.
- **Local gateway forwarding**: **<a href="../../getting-started/software/proxy-server.md" target="_blank" rel="noopener noreferrer">Proxy Server</a>**.
- **Antidetect browsers (AdsPower, Hubstudio, Undetectable, and others)**: **<a href="../../best-practices/browser/extension.md" target="_blank" rel="noopener noreferrer">Use proxies with third-party software</a>**.
