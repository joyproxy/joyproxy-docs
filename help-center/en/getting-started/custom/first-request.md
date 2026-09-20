# Send your first proxy request

Once you have a Custom Proxies endpoint (for example `us-ca.edge.joyproxy.com:20001`) and credentials, you can send HTTP / SOCKS5 requests from common languages and third-party apps.

Replace `USER`, `PASS`, and `us-ca.edge.joyproxy.com:20001` in the samples with your real credentials and port:

---

## Language samples

### cURL
```bash
# HTTP proxy test
curl -x http://USER:PASS@us-ca.edge.joyproxy.com:20001 https://api.ipify.org

# SOCKS5 proxy test
curl --socks5 http://USER:PASS@us-ca.edge.joyproxy.com:20001 https://api.ipify.org
```
### Python (Requests)
```python
import requests

proxy_url = "http://USER:PASS@us-ca.edge.joyproxy.com:20001"
proxies = {
    "http": proxy_url,
    "https": proxy_url,
}

try:
    response = requests.get("https://api.ipify.org", proxies=proxies, timeout=15)
    print("Current port exit IP:", response.text)
except requests.exceptions.RequestException as e:
    print("Proxy connection failed:", e)
```
### Node.js (Axios)
```javascript
const axios = require('axios');
const { HttpsProxyAgent } = require('https-proxy-agent');

const proxyUrl = 'http://USER:PASS@us-ca.edge.joyproxy.com:20001';
const agent = new HttpsProxyAgent(proxyUrl);

axios.get('https://api.ipify.org', { httpAgent: agent, httpsAgent: agent })
  .then(res => console.log('Current port exit IP:', res.data))
  .catch(err => console.error('Proxy connection error:', err.message));
```
### Go
```go
package main

import (
	"fmt"
	"io"
	"net/http"
	"net/url"
)

func main() {
	proxyUrl, _ := url.Parse("http://USER:PASS@us-ca.edge.joyproxy.com:20001")
	client := &http.Client{
		Transport: &http.Transport{
			Proxy: http.ProxyURL(proxyUrl),
		},
	}

	resp, err := client.Get("https://api.ipify.org")
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)
	fmt.Println("Current port exit IP:", string(body))
}
```
### PHP
```php
<?php
$ch = curl_init('https://api.ipify.org');
curl_setopt($ch, CURLOPT_PROXY, 'http://us-ca.edge.joyproxy.com:20001');
curl_setopt($ch, CURLOPT_PROXYUSERPWD, 'USER:PASS');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);

$response = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Curl error: ' . curl_error($ch);
} else {
    echo 'Current port exit IP: ' . $response;
}
curl_close($ch);
```
---

## Third-party software and antidetect browsers

- **Chrome / Edge proxy**: see **<a href="../../best-practices/browser/chrome-edge.md" target="_blank" rel="noopener noreferrer">Chrome static proxy</a>**.
- **Windows system proxy**: see **<a href="../../best-practices/browser/windows.md" target="_blank" rel="noopener noreferrer">Windows 11 system proxy</a>**.
- **Antidetect browsers and multi-account tools**: see **<a href="../../best-practices/browser/extension.md" target="_blank" rel="noopener noreferrer">Using proxies with third-party software</a>** (put the custom port address in the proxy host and port fields).
