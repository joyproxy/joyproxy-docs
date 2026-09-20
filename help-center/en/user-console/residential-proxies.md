# Residential Proxies console

Residential Proxies use real home broadband IPs worldwide. They have high anti-bot pass rates and commercial reputation, and they fit large-scale e-commerce scraping, social multi-account isolation, and search-result collection.

In the left sidebar **Proxies** group, click **Residential**:

<a href="https://www.joyproxy.com/admin-proxy-residential.html" target="_blank" rel="noopener noreferrer">Open the Residential console</a> · <a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">Residential product page</a>

---

## Six workspace tabs

The Residential console is six tabs from purchase through production:

| Tab | What it is for |
| :--- | :--- |
| **Buy** | Choose Rotating traffic, Static Dedicated lines, or Custom Dedicated ports, pick a plan, and pay. |
| **My Proxies** | Inventory. Remaining GB and validity on rotating packs; status, renew, and exit IP changes on static and custom ports. |
| **Users & Whitelist** | Authorization before you generate endpoints. Add a client IP to whitelist or create User/Pass. |
| **Endpoint generator** | Build `host:port` endpoints or API URLs by country, region, session, and protocol. |
| **Usage** | Live consumption of prepaid rotating traffic and traffic on dedicated ports. |
| **API Center** | Opens OpenAPI Center in a new tab so developers can try management APIs. |

---

## Three product modes

Residential offers three modes. Switch them at the top of each tab:

1. **Rotating Residential Proxies** (billed by traffic):  
   Connect through the shared gateway (`gate.joyproxy.com:9001`). Target country, state, city, or ISP. Rotate every request or keep a sticky session for tens of minutes.  
   - Purchase: <a href="../getting-started/rotating/purchase.md" target="_blank" rel="noopener noreferrer">Purchase Rotating Proxies</a>
   - Parameters: <a href="../getting-started/rotating/extraction-parameters.md" target="_blank" rel="noopener noreferrer">Advanced extraction parameters</a>
2. **Static Dedicated Residential Proxies** (monthly dedicated IP):  
   A fixed residential IP in a chosen country, on a stable port. Fits store operations and ads where the exit must not change.  
   - Purchase: <a href="../getting-started/static/purchase.md" target="_blank" rel="noopener noreferrer">Purchase Static Proxies</a>
   - Change exit: <a href="../getting-started/static/refresh-ip.md" target="_blank" rel="noopener noreferrer">Change exit IP</a>
3. **Custom Dedicated Residential Proxies** (multi-port cluster):  
   Many dedicated ports. Set country (and facility) per port, and optionally rotate the underlying exit on a timer.  
   - Ports: <a href="../getting-started/custom/view-ports.md" target="_blank" rel="noopener noreferrer">View and manage ports</a>
   - Rotation: <a href="../getting-started/custom/rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">Rotation interval and manual IP refresh</a>

---

## Recommended first workflow

If this is your first Residential order, use this order:

1. **Buy a plan**  
   On **Buy**, switch to the product mode you need, pick country and pack size, then pay with Available Balance or an online method.
2. **Authorize (required)**  
   Open **Users & Whitelist**. The console reminds you to **Authorize before you generate proxy endpoints**. Rotating currently supports User/Pass only — click **Auto-generate User/Pass** (then **Generate & create**) for a strong username and password. For token-free extract API calls from a fixed server, add that server IP to **IP Whitelist**.
3. **Generate endpoints**  
   Open **Endpoint generator**, pick the exit country (for example United States or Japan), then **Generate now**. Copy the connection string into your tool. For crawlers, copy the **API URL**.
4. **Send traffic and watch Usage**  
   Put the endpoint into your code or Browser Extension. Watch remaining traffic on **Usage**. For hourly curves, use <a href="invoices.md" target="_blank" rel="noopener noreferrer">Invoices</a> → **Rotating Traffic Usage**.
