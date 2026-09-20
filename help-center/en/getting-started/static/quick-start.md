# Static Proxies · Quick start

This guide walks you through purchasing Static Proxies, setting authentication, generating endpoints, and testing a connection.

> **What are Static Proxies?**  
> Static Proxies are billed by line count and duration (day / month / year). For as long as the plan is active, you get a dedicated host and port (for example `us-ca.edge.joyproxy.com:10001`) that only you can use.

---

## Step 1: Purchase a static dedicated line

1. Log in to the <a href="https://www.joyproxy.com/admin-overview.html" target="_blank" rel="noopener noreferrer">JoyProxy console</a> and open **<a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">Purchase Proxies</a>** in the left menu.
2. Choose a network: **Residential** / **Business / ISP** / **Datacenter**.
3. Switch to the **Static Dedicated Residential Proxies** tab (or **Static Dedicated Business Proxies** / **Static Dedicated Datacenter Proxies** if you selected those networks).
4. Choose a validity plan (for example Monthly Plan). Under **Choose IP locations**, pick the country/region and set how many IPs to buy.
5. Complete payment.

---

## Step 2: Set a Username/Password

1. Open **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users & Whitelist</a>**.
2. Under **Username/Password**, create credentials (for example `user123` / `pass123`).
3. Save the Username and Password.

---

## Step 3: Generate the fixed endpoints

1. Open **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>** and switch to the **Static Proxies** tab.
2. Filter the lines from your order and pick an **Output format**.
3. Click **Generate now**, then **Copy host:port list** to get your dedicated endpoints:
   ```text
   http://user123:pass123@us-ca.edge.joyproxy.com:10001
   ```

---

## Step 4: Test the proxy connection

Replace the host:port and credentials with the values you generated, then run a test:

### cURL
```bash
curl -x http://user123:pass123@us-ca.edge.joyproxy.com:10001 https://api.ipify.org
```

### Python
```python
import requests

proxy = "http://user123:pass123@us-ca.edge.joyproxy.com:10001"
res = requests.get("https://api.ipify.org", proxies={"http": proxy, "https": proxy}, timeout=15)
print("Static proxy IP:", res.text)
```

If the public IP in the response stays the same across requests, the Static Proxies connection is working.

---

## 3-second troubleshooting

- **407 proxy authentication failed**: Check that the Username and Password match what you created in Users & Whitelist.
- **Connection timed out**: Confirm Host and Port match the dedicated port shown in Endpoint generator.
- **The target blocked this IP**: On **<a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a>**, click **New IP** to replace the exit IP.
