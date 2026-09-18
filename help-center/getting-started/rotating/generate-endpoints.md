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

On the same Endpoints page, the **API URL** box is already filled from your location, session, format, and count. Copy that URL and call it — `token=` is already in the query. You do not look up a token in Account settings.

[Account settings](https://www.joyproxy.com/admin-settings.html) holds the **Master User Token** for order APIs.

```bash
curl "PASTE_THE_COPIED_API_URL"
```

The copied URL looks like this (your token is already in it):

```text
https://api.joyproxy.com/v2/extract?token=...&network_type=residential&count=5&duration=5m&format=json
```

| Query | Meaning |
| --- | --- |
| `token` | Included when you copy the API URL |
| `network_type` | `residential`, `cellular` (alias `mobile`), or `business` — must match the pack you bought |
| `count` | How many usernames to return |
| `duration` | Sticky length in minutes, for example `5m` or `30m`. Omit this for a rotating session |
| `format` | `json`, or other formats shown in [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) |

The response includes `gate.joyproxy.com`, port `9001`, and a wire-ready username. Copy them into the client unchanged.

Treat the copied URL as a secret. Do not paste it into tickets or public chats.

Full parameter lists and try-it playground: [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html).

## Next

- Target a country or city: [Location targeting](location-targeting.md)
- Keep an IP for a login flow: [Sticky sessions](sticky-sessions.md)
- Prove the line works: [First request](first-request.md)
