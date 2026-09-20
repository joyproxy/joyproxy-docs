# Rotating Proxies · Quick start

This guide walks you from buying traffic to your first Rotating Proxies connection.

> **What are Rotating Proxies?**  
> Rotating Proxies are billed by traffic (GB). Every request connects to `gate.joyproxy.com:9001`. The exit IP can change on each request, or stay the same for 1–30 minutes.

---

## Step 1: Buy Rotating Proxies traffic

1. Log in to the <a href="https://www.joyproxy.com/admin-overview.html" target="_blank" rel="noopener noreferrer">JoyProxy console</a> and open **<a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">Purchase Proxies</a>** in the left menu.
2. Pick a network for your use case:
   - **Rotating Residential Proxies**: data collection, social ops, e-commerce price checks (high trust, strong value).
   - **Rotating Mobile Proxies**: app testing and mobile ad verification (real 4G/5G IPs, very hard to block).
   - **Rotating Business / ISP Proxies**: B2B portals and long-lived connections.
3. Choose a traffic pack (for example 5 GB or 10 GB) and complete payment.

---

## Step 2: Set a proxy username and password

*Note: the proxy Password is separate from your website Log In password.*

1. Open **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users & Whitelist</a>**.
2. Under **Username/Password**, create a proxy account (for example `user123` / `pass123`).
3. Save the **Password** you set.

---

## Step 3: Generate a connection endpoint

1. Open **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>** and switch to the **Rotating Proxies** tab.
2. Set extraction options:
   - **Country**: the exit country you need (for example United States).
   - **Session**:
     - **Rotate IPs on every request**: a new IP for each request.
     - **Sticky session**: keep the same IP for 1–30 minutes.
3. Click **Generate now** and copy the connection string.

Standard format:
```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

> **Note**: `GENERATED_USER` is a long string that already includes geo and session parameters. Copy it in full. Do not edit it.

---

## Step 4: Test the proxy

Replace `GENERATED_USER` with the generated long username and `YOUR_PASS` with the Password from Step 2, then run:

### cURL
```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

### Python
```python
import requests

proxy = "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"
res = requests.get("https://api.ipify.org", proxies={"http": proxy, "https": proxy}, timeout=15)
print("Exit IP:", res.text)
```

### Node.js
```javascript
const { HttpsProxyAgent } = require("https-proxy-agent");

const agent = new HttpsProxyAgent("http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001");
const res = await fetch("https://api.ipify.org", { agent });
console.log("Exit IP:", await res.text());
```

If the public IP you get is not your local network IP, Rotating Proxies is working.

---

## 3-second troubleshooting

- **407 proxy authentication required**: check the Password (use the one from Users & Whitelist, not your website Log In password). The username must be the full generated string.
- **Connection timed out**: Host must be `gate.joyproxy.com` and Port must be `9001`.
- **Change country**: go back to **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>**, pick a new country, and generate a new username.
