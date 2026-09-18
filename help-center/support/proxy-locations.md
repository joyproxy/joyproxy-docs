# Proxy locations

JoyProxy offers exits in many **countries and cities** across Residential, Mobile, Business / ISP, and Datacenter products. Exact availability depends on network, mode, and current pool inventory.

## Where to see live availability

| Step | Location |
| --- | --- |
| Rotating geo in username | <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> country/state/city pickers |
| Static country at purchase | <a href="https://www.joyproxy.com/admin-purchase.html?tab=long-term" target="_blank" rel="noopener noreferrer">Purchase → Static</a> search |
| Custom per-port geo | <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies → Custom</a> → **Assign region** |
| Scraping fetch geo | `geoCode` on Web Scraping API fetch — <a href="../getting-started/scraping-api/parameters.md" target="_blank" rel="noopener noreferrer">Parameters</a> |

Inventory updates as JoyProxy expands partnerships—if a region is greyed out at purchase, try a neighboring country or ask <a href="live-chat.md" target="_blank" rel="noopener noreferrer">sales via chat</a> about restock timing.

## Choosing a region

- **Residential rotating** — encode country (and finer geo) in the generated username.
- **Static** — country is fixed at checkout; pick carefully for account registration flows.
- **Mobile** — select mobile traffic for carrier-class exits in supported markets.
- **Datacenter** — prioritize throughput; geo is still selectable where offered.

## Web Scraping API

Use `geoCode` on fetch requests when you need a specific exit country without managing proxy strings. See <a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">Web Scraping API guide</a>.

## Compliance reminder

Use JoyProxy only for lawful purposes described in the <a href="https://www.joyproxy.com/terms.html" target="_blank" rel="noopener noreferrer">Terms</a>. You are responsible for how you apply geo targeting in your applications.
