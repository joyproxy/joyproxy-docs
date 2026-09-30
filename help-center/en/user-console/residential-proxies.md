# Residential Proxies console

Residential Proxies use real home broadband IPs worldwide. They have high anti-bot pass rates and commercial reputation, and they fit large-scale e-commerce scraping, social multi-account isolation, and search-result collection.

In the left sidebar **Proxies** group, click **Residential**:

<a href="https://www.joyproxy.com/admin-proxy-residential.html" target="_blank" rel="noopener noreferrer">Open the Residential console</a> · <a href="https://www.joyproxy.com/products/proxy-residential.html" target="_blank" rel="noopener noreferrer">Residential product page</a>

---

## Six workspace tabs

The Residential console is six tabs from purchase through production:

| Tab | What it is for |
| :--- | :--- |
| **Buy** | Choose a Rotating traffic pack, pick a plan, and pay. |
| **My Proxies** | Inventory. Remaining GB and validity on rotating packs. |
| **Users & Whitelist** | Authorization before you generate endpoints. Add a client IP to whitelist or create User/Pass. |
| **Endpoint generator** | Build `host:port` endpoints or API URLs by country, region, session, and protocol. |
| **Usage** | Live consumption of prepaid rotating traffic. |
| **API Center** | Opens OpenAPI Center in a new tab so developers can try management APIs. |

---

## Rotating only

The Residential console sells Rotating Proxies only (GB packs). There is no Static or Custom SKU here:

Connect through the shared gateway (`gate.joyproxy.com:9001`). Target country, state, city, or ISP. Rotate every request or keep a sticky session for tens of minutes.

- Purchase: <a href="../getting-started/rotating/purchase.md" target="_blank" rel="noopener noreferrer">Purchase Rotating Proxies</a>
- Parameters: <a href="../getting-started/rotating/extraction-parameters.md" target="_blank" rel="noopener noreferrer">Advanced extraction parameters</a>

---

## Recommended first workflow

If this is your first Residential order, use this order:

1. **Buy a plan**  
   On **Buy**, pick a traffic pack, then pay with Available Balance or an online method.
2. **Authorize (required)**  
   Open **Users & Whitelist**. The console reminds you to **Authorize before you generate proxy endpoints**. Rotating currently supports User/Pass only — click **Auto-generate User/Pass** (then **Generate & create**) for a strong username and password. For token-free extract API calls from a fixed server, add that server IP to **IP Whitelist**.
3. **Generate endpoints**  
   Open **Endpoint generator**, pick the exit country (for example United States or Japan), then **Generate now**. Copy the connection string into your tool. For crawlers, copy the **API URL**.
4. **Send traffic and watch Usage**  
   Put the endpoint into your code or Browser Extension. On **Usage**, watch remaining traffic and daily charts, and drill down to hourly consumption in the chart (Invoices no longer has a separate **Traffic usage** tab).
