# 发起代理请求（First Request）

拿到静态独享代理的连接地址与账密后，可以在各种编程语言或客户端中建立连接。

---

## 代码示例

请将 `USER`、`PASS` 和 `us-ca.edge.joyproxy.com:10001` 替换为你提取到的真实端点：

{% tabs %}
{% tab title="cURL" %}
```bash
curl -x http://USER:PASS@us-ca.edge.joyproxy.com:10001 https://api.ipify.org
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

proxy = "http://USER:PASS@us-ca.edge.joyproxy.com:10001"
res = requests.get("https://api.ipify.org", proxies={"http": proxy, "https": proxy}, timeout=15)
print("静态出口 IP:", res.text)
```
{% endtab %}

{% tab title="Node.js" %}
```javascript
const { HttpsProxyAgent } = require("https-proxy-agent");

const agent = new HttpsProxyAgent("http://USER:PASS@us-ca.edge.joyproxy.com:10001");
const res = await fetch("https://api.ipify.org", { agent });
console.log("静态出口 IP:", await res.text());
```
{% endtab %}
{% endtabs %}

---

## 客户端与第三方软件集成

- **Chrome / Edge 浏览器**：参阅 **<a href="../../best-practices/chrome-static-proxy.md" target="_blank" rel="noopener noreferrer">Chrome 静态代理</a>** 或使用 **<a href="../../getting-started/software/browser-extension.md" target="_blank" rel="noopener noreferrer">浏览器扩展</a>**。
- **Windows 系统代理**：参阅 **<a href="../../best-practices/windows-11-system-proxy.md" target="_blank" rel="noopener noreferrer">Windows 11 系统代理</a>**。
- **指纹浏览器与第三方软件**：参阅 **<a href="../../best-practices/third-party-static-proxies.md" target="_blank" rel="noopener noreferrer">第三方软件配合代理</a>**。
