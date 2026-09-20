# Send your first proxy request

Once you have the Static Proxies connection address and credentials, you can connect from any language or client.

---

## Code samples

Replace `USER`, `PASS`, and `us-ca.edge.joyproxy.com:10001` with the endpoint you generated:

### cURL
```bash
curl -x http://USER:PASS@us-ca.edge.joyproxy.com:10001 https://api.ipify.org
```

### Python
```python
import requests

proxy = "http://USER:PASS@us-ca.edge.joyproxy.com:10001"
res = requests.get("https://api.ipify.org", proxies={"http": proxy, "https": proxy}, timeout=15)
print("Static exit IP:", res.text)
```

### Node.js
```javascript
const { HttpsProxyAgent } = require("https-proxy-agent");

const agent = new HttpsProxyAgent("http://USER:PASS@us-ca.edge.joyproxy.com:10001");
const res = await fetch("https://api.ipify.org", { agent });
console.log("Static exit IP:", await res.text());
```

---

## Clients and third-party software

- **Chrome / Edge**: see **<a href="../../best-practices/browser/chrome-edge.md" target="_blank" rel="noopener noreferrer">Chrome static proxy</a>** or the **<a href="../../getting-started/software/browser-extension.md" target="_blank" rel="noopener noreferrer">Browser Extension</a>**.
- **Windows system proxy**: see **<a href="../../best-practices/browser/windows.md" target="_blank" rel="noopener noreferrer">Windows 11 system proxy</a>**.
- **Antidetect browsers and third-party apps**: see **<a href="../../best-practices/browser/extension.md" target="_blank" rel="noopener noreferrer">Using proxies with third-party software</a>**.
