# OpenAPI Center

<a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> is the **single** HTTP API reference for JoyProxy: try requests in the browser, copy snippets, and validate tokens before production. Narrative proxy guides in Getting started focus on the console; **paths, query bodies, and error codes live here**.

**Base URL:** `https://api.joyproxy.com`

## Authentication

JoyProxy uses **three different secrets**. Mixing them produces `401` / `invalid_token`.

| Credential | Used for | Where to copy |
| --- | --- | --- |
| Extract token (inside **API URL**, `token=` query) | Endpoint generator, whitelist, credentials, geo reference | <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> — copy the **API URL** box |
| **Master User Token** | Balance, orders, renewals, profile APIs | <a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">Account settings</a> |
| **Scraping API Token** | Web Scraping API fetch and credit/usage APIs | Web Scraping API → <a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">API Center</a> |

When you are signed in, OpenAPI Center can pre-fill extract and master tokens in **Authorize**. You do **not** copy an extract token from Account settings.

> **Important**
>
> Treat every token and full API URL as a secret. Rotate via <a href="../user-console/rotate-token.md" target="_blank" rel="noopener noreferrer">Rotate token</a> if one leaks.

## Rotating endpoints — `GET /v2/extract`

Generates `gate.joyproxy.com:9001` usernames (and wire-ready strings) from active Rotating traffic for the matching `network_type`.

**Easiest path:** on Endpoints, set location, session, format, and count, then copy the **API URL** (token is already in the query).

```bash
curl "PASTE_THE_COPIED_API_URL"
```

Example shape (your token is already filled in when you copy):

```text
https://api.joyproxy.com/v2/extract?token=...&network_type=residential&count=5&duration=5m&format=json
```

| Query | Meaning |
| --- | --- |
| `token` | Included when you copy the API URL |
| `network_type` | `residential`, `cellular` (alias `mobile`), or `business` — must match the pack you bought |
| `count` | How many usernames to return (max **200** per call) |
| `duration` | Sticky length, e.g. `5m` or `30m`. Omit for rotating session |
| `protocol` | Output hint: `http`, `https`, or `socks5` |
| `format` | `json`, `crlf`, and other values shown in OpenAPI Center |
| `country_geoname_id`, `state_geoname_id`, `city_geoname_id` | Same targeting as the web generator — resolve IDs with **Geo Reference** operations |

Pack → `network_type`:

| Pack you bought | `network_type` |
| --- | --- |
| Residential | `residential` |
| Mobile | `cellular` (alias `mobile`) |
| Business / ISP | `business` |

Paste returned usernames **verbatim** into clients. See <a href="../getting-started/rotating/generate-endpoints.md" target="_blank" rel="noopener noreferrer">Generate endpoints</a> for console workflow.

### Extract JSON `error` values

Failed extract calls return JSON with an `error` field (not HTTP proxy status codes):

| `error` | Meaning |
| --- | --- |
| `missing_token`, `invalid_token`, `api_token_required` | Wrong or missing extract token — use the URL from Endpoints, not Master User Token |
| HTTP **429** | Too many extract calls; slow down |
| `no_short_orders`, `short_traffic_exhausted` | No active Rotating pack or traffic used up |
| `invalid_country`, `no_ip_for_geo` | Geo filter does not match current stock |
| `Invalid protocol` | `protocol` must be `http`, `https`, or `socks5` |

## Static endpoints — `GET /v2/extract-long`

Returns dedicated `host:port` lines for Static allocations.

```text
https://api.joyproxy.com/v2/extract-long?token=...&allocation_id=ID&format=crlf
```

`allocation_id` / `order_id` come from My Proxies or **List Purchased Orders**. Console flow: <a href="../getting-started/static/generate-endpoints.md" target="_blank" rel="noopener noreferrer">Static → Generate endpoints</a>.

## Custom endpoints — `GET /v2/extract-custom`

Same pattern for Custom allocations:

```text
https://api.joyproxy.com/v2/extract-custom?token=...&allocation_id=ID&format=crlf
```

Console flow: <a href="../getting-started/custom/authorize-and-generate.md" target="_blank" rel="noopener noreferrer">Custom → Authorize and generate</a>.

## Authorization APIs (extract token)

| Operation | Path |
| --- | --- |
| Whitelist list / add / remove | `GET /v2/whitelist/list`, `POST /v2/whitelist/add`, `POST /v2/whitelist/remove` |
| Credentials list / add / remove | `GET /v2/credentials/list`, `POST /v2/credentials/add`, `POST /v2/credentials/remove` |

Rotating automation today uses **Username/Password** from Users & Whitelist; whitelist APIs apply to Static, Custom, and Datacenter lines.

## Geo reference (extract token)

| Operation | Path |
| --- | --- |
| List countries | `GET /v2/geo/countries` |
| List states | `GET /v2/geo/states` |
| List cities | `GET /v2/geo/cities` |

Use these IDs in `/v2/extract` query parameters when you automate location targeting.

## Orders and balance (Master User Token)

Send `Authorization: Bearer YOUR_MASTER_USER_TOKEN`.

**List active Rotating orders:**

```bash
curl -X POST "https://api.joyproxy.com/v2/orders/list" \
  -H "Authorization: Bearer YOUR_MASTER_USER_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"product_type\":\"short-term\",\"network_type\":\"residential\",\"status_valid\":\"valid\",\"limit\":100}"
```

| Body field | Example | Meaning |
| --- | --- | --- |
| `product_type` | `short-term` | Rotating. Static: `long-term`. Custom: `custom-ip` |
| `network_type` | `residential` | `residential`, `cellular`, or `business` |
| `status_valid` | `valid` | Active packs. `all` includes expired |

Rotating rows include `traffic_gb`. Used / remaining GB also appear under **Usage** in the console. Static and Custom rows use `port_count` instead.

**Account balance:**

```bash
curl "https://api.joyproxy.com/v2/balance" \
  -H "Authorization: Bearer YOUR_MASTER_USER_TOKEN"
```

OpenAPI Center also documents **Create Order** and **Renew Order** (`payment_method: balance` for API checkout). Console equivalents: <a href="../getting-started/rotating/usage-and-orders.md" target="_blank" rel="noopener noreferrer">Usage and orders</a>.

## Web Scraping API (Scraping API Token)

Managed fetches — JoyProxy runs proxies, retries, and optional rendering. Credits charge **only on successful fetches**.

| Operation | Path (see OpenAPI Center for current method) |
| --- | --- |
| Fetch URL | Documented as **Fetch URL** in OpenAPI (playground matches production) |
| Scraping credits | `GET /v2/fetch/credits` |
| Usage history | `GET /v2/fetch/usage` |

Copy the **Scraping API Token** from API Center. Common query flags (`url`, `render`, `super`, `geoCode`, …) are listed in the <a href="https://www.joyproxy.com/admin-unblocker-documentation.html" target="_blank" rel="noopener noreferrer">in-console API documentation</a> and in <a href="../getting-started/scraping-api/parameters.md" target="_blank" rel="noopener noreferrer">Parameters and credit costs</a>.

Product overview: <a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">Web Scraping API</a>.

## Typical workflow

1. Open <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> and pick an operation group.
2. **Authorize** with the correct token type.
3. Fill parameters (or paste the copied extract API URL).
4. Execute, inspect JSON, and export a code sample.

## When OpenAPI is not enough

- Proxy setup walkthroughs: <a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">Getting started</a>
- AI-driven generation: <a href="integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">Integrate proxies in AI</a>
- Destination policy: <a href="../getting-started/rotating/restricted-targets.md" target="_blank" rel="noopener noreferrer">Restricted targets</a>
