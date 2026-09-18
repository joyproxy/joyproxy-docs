# Generate endpoints

Rotating always uses **one gateway**. Generation creates a **username** (and shows the password you already stored). You can generate as often as you like while the traffic pack is active.

Authentication first: <a href="authentication.md" target="_blank" rel="noopener noreferrer">Authentication methods</a>.

## Connection constants

| Field | Always |
| --- | --- |
| Host | `gate.joyproxy.com` |
| Port | `9001` |
| Protocols | HTTP and SOCKS5. Either protocol can open **HTTPS websites**. See <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a>. |

## Web generator

1. Open <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a> or the **Endpoints** tab on your network console.
2. Select **Rotating** and the order / network you paid for (Residential, Mobile, or Business).
3. **Output format** — Endpoint:port, HTTP, or SOCKS5. Host and port stay `gate.joyproxy.com:9001`. Details: <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a>.
4. **Location** — country, then optionally state / city. See <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">Location targeting</a>.
5. **Session type** — **Sticky session** (1–30 minutes) or **Rotating session**. See <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">Sticky sessions</a>.
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

<a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">Account settings</a> holds the **Master User Token** for order APIs.

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
| `format` | `json`, or other formats shown in <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> |

The response includes `gate.joyproxy.com`, port `9001`, and a wire-ready username. Copy them into the client unchanged.

Treat the copied URL as a secret. Do not paste it into tickets or public chats.

Full parameter lists and try-it playground: <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>.

## Next

- Target a country or city: <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">Location targeting</a>
- Keep an IP for a login flow: <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">Sticky sessions</a>
- Prove the line works: <a href="first-request.md" target="_blank" rel="noopener noreferrer">First request</a>
