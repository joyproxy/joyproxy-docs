# Usage and orders

See remaining traffic in the console, and list orders from the API when you automate.

## Usage (console)

On the Residential / Mobile / Business console, open the **Usage** tab (Traffic & orders).

It has two sub-views:

- **Traffic** — used and remaining GB on active Rotating packs (**Traffic quota**), plus charts you can filter by date range
- **Orders** — the same inventory as [My Proxies](https://www.joyproxy.com/admin-my-orders.html)

My Proxies also shows remaining GB on each Rotating pack. Endpoints keep working while traffic remains.

## Orders (console)

[My Proxies](https://www.joyproxy.com/admin-my-orders.html) lists Rotating packs for the network you have selected: status, remaining GB, and purchase time.

Buy another pack from [Purchase → Rotating](https://www.joyproxy.com/admin-purchase.html?tab=short-term), or turn on [Auto-buy traffic](auto-buy-traffic.md).

## Orders and balance (API)

Order and balance APIs use the **Master User Token** from [Account settings](https://www.joyproxy.com/admin-settings.html). That is not the extract API URL on Endpoints.

Try these operations in [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html): **List Purchased Orders** and **Get Balance**.

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

[Authentication methods](authentication.md) · [Generate endpoints](generate-endpoints.md)
