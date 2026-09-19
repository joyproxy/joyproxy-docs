# 发起代理请求（First Request）

拿到提取到的自定义端口端点（如 `us-ca.edge.joyproxy.com:20001`）和代理账密后，可以在各种主流编程语言或第三方软件中发起 HTTP / SOCKS5 请求。

请将示例代码中的 `USER`、`PASS` 和 `us-ca.edge.joyproxy.com:20001` 替换为你实际的凭据与端口端点：

---

## 编程语言代码示例

{% tabs %}
{% tab title="cURL" %}
```bash
# HTTP 代理测试
curl -x http://USER:PASS@us-ca.edge.joyproxy.com:20001 https://api.ipify.org

# SOCKS5 代理测试
curl --socks5 http://USER:PASS@us-ca.edge.joyproxy.com:20001 https://api.ipify.org
```
{% endtab %}

{% tab title="Python (Requests)" %}
```python
import requests

proxy_url = "http://USER:PASS@us-ca.edge.joyproxy.com:20001"
proxies = {
    "http": proxy_url,
    "https": proxy_url,
}

try:
    response = requests.get("https://api.ipify.org", proxies=proxies, timeout=15)
    print("当前端口出口 IP:", response.text)
except requests.exceptions.RequestException as e:
    print("代理连接失败:", e)
```
{% endtab %}

{% tab title="Node.js (Axios)" %}
```javascript
const axios = require('axios');
const { HttpsProxyAgent } = require('https-proxy-agent');

const proxyUrl = 'http://USER:PASS@us-ca.edge.joyproxy.com:20001';
const agent = new HttpsProxyAgent(proxyUrl);

axios.get('https://api.ipify.org', { httpAgent: agent, httpsAgent: agent })
  .then(res => console.log('当前端口出口 IP:', res.data))
  .catch(err => console.error('代理连接报错:', err.message));
```
{% endtab %}

{% tab title="Go" %}
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
	fmt.Println("当前端口出口 IP:", string(body))
}
```
{% endtab %}

{% tab title="PHP" %}
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
    echo '当前端口出口 IP: ' . $response;
}
curl_close($ch);
```
{% endtab %}
{% endtabs %}

---

## 第三方软件与指纹浏览器集成

- **Chrome / Edge 浏览器代理**：参阅 **<a href="../../best-practices/browser/chrome-edge.md" target="_blank" rel="noopener noreferrer">Chrome 静态代理</a>**。
- **Windows 系统全局代理**：参阅 **<a href="../../best-practices/browser/windows.md" target="_blank" rel="noopener noreferrer">Windows 11 系统代理</a>**。
- **指纹浏览器与多账号工具**：参阅 **<a href="../../best-practices/browser/extension.md" target="_blank" rel="noopener noreferrer">第三方软件配合代理</a>**（只需在代理主机与端口栏填入自定义端口地址即可）。
