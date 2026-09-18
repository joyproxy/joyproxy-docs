# Generate endpoints

Rotating always uses **one gateway**. Generation creates a **username** (and shows the password you already stored). You can generate as often as you like while the traffic pack is active.

Authentication first: [Authentication methods](authentication.md).

## Connection constants

| Field | Always |
| --- | --- |
| Host | `gate.joyproxy.com` |
| Port | `9001` |
| Protocols | HTTP and SOCKS5. Either protocol can open **HTTPS websites**. |

## Web generator

1. Open [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html) or the **Endpoints** tab on your network console.
2. Select **Rotating** and the order / network you paid for (Residential, Mobile, or Business).
3. **Output format** — Endpoint:port, HTTP, or SOCKS5. Host and port stay `gate.joyproxy.com:9001`.
4. **Location** — country, then optionally state / city. See [Location targeting](location-targeting.md).
5. **Session type** — **Sticky session** (1–30 minutes) or **Rotating session**. See [Sticky sessions](sticky-sessions.md).
6. Set how many lines to create → **Generate**.
7. Copy **Host**, **Port**, **Username**, and **Password**, or the full example string.

The username stays valid while you have traffic. Sticky time only controls how long each session holds an exit IP — it does not expire the username.

> **Important**
>
> Paste the username **exactly**. It encodes targeting and session. Editing it can send you to the wrong region or fail authentication.

### Copy the list

- Copy a single row, or copy **Host / Port / Username / Password** one field at a time for tools that use four boxes.
- Copy the full URI when the client accepts `http://user:pass@host:port`.
- Generate as many lines as you need for workers. Each line is another username against the same gateway.

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

The Endpoints page also shows language snippets (cURL, Python, and others) built from the same selection. Paste one into your environment to confirm the IP before you wire production.

## Generate from the API

Copy the **API token** from [Account settings](https://www.joyproxy.com/admin-settings.html). Pass it as `Authorization: Bearer` or as `token=` on the query string.

That token is for extract APIs. It is **not** the proxy password and **not** the [AI Access Token](../../integration/integrate-proxies-in-ai.md).

```http
GET https://api.joyproxy.com/v2/extract?network_type=residential&count=5&duration=5m&format=json
Authorization: Bearer YOUR_API_TOKEN
```

Equivalent:

```bash
curl "https://api.joyproxy.com/v2/extract?token=YOUR_API_TOKEN&network_type=residential&count=5&duration=5m&format=json"
```

| Query | Meaning |
| --- | --- |
| `network_type` | `residential`, `cellular` (alias `mobile`), or `business` — must match the pack you bought |
| `count` | How many usernames to return |
| `duration` | Sticky length in minutes, for example `5m` or `30m`. Omit this for a rotating session |
| `format` | `json`, or other formats shown in [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) |

The JSON includes `gate.joyproxy.com`, port `9001`, and a wire-ready username. Copy them into the client unchanged.

> **Security**
>
> URLs that contain `token=` are secrets. Do not paste them into tickets or public chats. Rotate the API token in Account settings if a link leaks.

Full parameter lists, try-it playground, and language snippets: [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html).

## Next

- Target a country or city: [Location targeting](location-targeting.md)
- Keep an IP for a login flow: [Sticky sessions](sticky-sessions.md)
- Prove the line works: [First request](first-request.md)
