# Proxy locations

JoyProxy offers exits in many **countries and cities** across Residential, Mobile, Business / ISP, and Datacenter products. Exact availability depends on network, mode, and current pool inventory.

## Where to see live availability

| Step | Location |
| --- | --- |
| Rotating geo in username | [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html) country/state/city pickers |
| Static country at purchase | [Purchase → Static](https://www.joyproxy.com/admin-purchase.html?tab=long-term) search |
| Custom per-port geo | [My Proxies → Custom](https://www.joyproxy.com/admin-my-orders.html) → **Assign region** |
| Scraping fetch geo | `geoCode` parameter on `/v1/fetch` |

Inventory updates as JoyProxy expands partnerships—if a region is greyed out at purchase, try a neighboring country or ask [sales via chat](live-chat.md) about restock timing.

## Choosing a region

- **Residential rotating** — encode country (and finer geo) in the generated username.
- **Static** — country is fixed at checkout; pick carefully for account registration flows.
- **Mobile** — select mobile traffic for carrier-class exits in supported markets.
- **Datacenter** — prioritize throughput; geo is still selectable where offered.

## Web Scraping API

Use `geoCode` on fetch requests when you need a specific exit country without managing proxy strings. See [Web Scraping API guide](../getting-started/scraping-api/README.md).

## Compliance reminder

Use JoyProxy only for lawful purposes described in the [Terms](https://www.joyproxy.com/terms.html). You are responsible for how you apply geo targeting in your applications.
