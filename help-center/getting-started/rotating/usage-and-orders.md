# Usage and orders

See remaining traffic in the console, and list orders from the API when you automate.

## Usage (console)

On the Residential / Mobile / Business console, open the **Usage** tab (Traffic & orders).

It has two sub-views:

- **Traffic** — used and remaining GB on active Rotating packs (**Traffic quota**), plus charts you can filter by date range
- **Orders** — the same inventory as <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a>

My Proxies also shows remaining GB on each Rotating pack. Endpoints keep working while traffic remains.

## Orders (console)

<a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a> lists Rotating packs for the network you have selected: status, remaining GB, and purchase time.

Buy another pack from <a href="https://www.joyproxy.com/admin-purchase.html?tab=short-term" target="_blank" rel="noopener noreferrer">Purchase → Rotating</a>, or turn on <a href="auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">Auto-buy traffic</a>.

## Orders and balance (API)

Order and balance APIs use the **Master User Token** from <a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">Account settings</a>. That is not the extract API URL on Endpoints.

Try these operations in <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>: **List Purchased Orders** and **Get Balance**.

List active Rotating orders:

```bash
curl -X POST "https://api.joyproxy.com/v2/orders/list" \
  -H "Authorization: Bearer YOUR_MASTER_USER_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"product_type\":\"short-term\",\"network_type\":\"residential\",\"status_valid\":\"valid\",\"limit\":100}"
```

| Body field | Example | Meaning |
| --- | --- | --- |
| `product_type` | `short-term` | Rotating. Static is `long-term`, Custom is `custom-ip` |
| `network_type` | `residential` | `residential`, `cellular` (mobile), or `business` |
| `status_valid` | `valid` | Active packs. Use `all` to include expired |

Rotating rows include `traffic_gb` (purchased pack size). Used and remaining GB stay on **Usage → Traffic** and My Proxies.

The same endpoint lists Static (`long-term`) and Custom (`custom-ip`). Those rows use `port_count` instead of `traffic_gb`.

Account balance:

```bash
curl "https://api.joyproxy.com/v2/balance" \
  -H "Authorization: Bearer YOUR_MASTER_USER_TOKEN"
```

Response shape is documented on **Get Balance** and **List Purchased Orders** in OpenAPI Center.

## Next

<a href="authentication.md" target="_blank" rel="noopener noreferrer">Authentication methods</a> · <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">Generate endpoints</a>
