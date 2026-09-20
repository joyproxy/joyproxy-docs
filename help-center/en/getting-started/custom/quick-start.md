# Custom Proxies · Quick start

This guide walks you through purchasing Custom Proxies ports, assigning a region, setting authentication, and testing a connection.

> **What are Custom Proxies?**  
> Billed by dedicated port count. Each port is 100% yours. After purchase, you can Assign region (country/city) independently on every port, and you can set a Rotation interval to replace the exit IP on a schedule.

---

## Step 1: Purchase custom ports

1. Log in to the <a href="https://www.joyproxy.com/admin-overview.html" target="_blank" rel="noopener noreferrer">JoyProxy console</a> and open **<a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">Purchase Proxies</a>** in the left menu.
2. Choose an IP network:
   - **Residential**: real home-broadband IPs, very high trust.
   - **Business / ISP**: carrier business lines, high speed and high trust.
   - **Datacenter**: hosting ASN IPs, strong value and low latency.
3. Switch to the **Custom Dedicated Residential Proxies** tab (or **Custom Dedicated Business Proxies** / **Custom Dedicated Datacenter Proxies** if you selected those networks).
4. Choose a validity plan (for example **Monthly Plan**). Under **Number of ports (this order)**, enter how many ports to buy (for example 5).
5. Under **Pre-assign port locations**, you can pin some ports to a country now, or choose **Assign after purchase**.
6. Choose a payment method and complete checkout.

---

## Step 2: Assign region on each port

1. Open **<a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a>**.
2. Find the Custom Proxies ports you just bought.
3. Click **Assign region** on the port.
4. In the region picker, choose the country/region (for example United States) and save.
5. Within a few seconds, that port’s exit IP is bound to the selected country.

---

## Step 3: Set credentials and generate endpoints

1. Open **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users & Whitelist</a>**. Under **Username/Password**, create credentials (Username: `user123`, Password: `pass123`).
2. Open **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>** and switch to **Custom Proxies**.
3. Choose a protocol (`HTTP` or `SOCKS5`), click **Generate now**, then **Copy host:port list** to get the dedicated endpoints:
   ```text
   http://user123:pass123@us-ca.edge.joyproxy.com:20001
   ```

---

## Step 4: Test the proxy connection

Substitute the real `host:port` and credentials from the previous step:

### cURL
```bash
curl -x http://user123:pass123@us-ca.edge.joyproxy.com:20001 https://api.ipify.org
```

### Python
```python
import requests

proxy_url = "http://user123:pass123@us-ca.edge.joyproxy.com:20001"
proxies = {
    "http": proxy_url,
    "https": proxy_url,
}

response = requests.get("https://api.ipify.org", proxies=proxies, timeout=15)
print("Current custom port exit IP:", response.text)
```

### Node.js
```javascript
const { HttpsProxyAgent } = require('https-proxy-agent');

const proxyUrl = 'http://user123:pass123@us-ca.edge.joyproxy.com:20001';
const agent = new HttpsProxyAgent(proxyUrl);

async function testProxy() {
  const res = await fetch('https://api.ipify.org', { agent });
  const ip = await res.text();
  console.log('Current custom port exit IP:', ip);
}

testProxy();
```

If the command returns an exit IP, the connection is working.

---

## 3-second troubleshooting

- **407 proxy authentication failed**: Check that the Username and Password match Users & Whitelist. If you use IP Whitelist, confirm this machine’s public IPv4 is added.
- **403 target refused the request**: The target blocked the current exit IP. On the console, click **<a href="rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">New IP</a>** to replace it.
- **502 / 504 connection timed out**: Check that the port has **Assign region** completed on **<a href="view-ports.md" target="_blank" rel="noopener noreferrer">My Proxies</a>**. A port with no region cannot connect.
