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

To generate lines with HTTP instead of only the web UI, use the **API URL** on the same page and the reference in <a href="../../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>.

## Next

- Target a country or city: <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">Location targeting</a>
- Keep an IP for a login flow: <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">Sticky sessions</a>
- Prove the line works: <a href="first-request.md" target="_blank" rel="noopener noreferrer">First request</a>
