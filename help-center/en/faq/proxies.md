# Extracting and using proxies

This chapter covers generating and using Rotating Proxies, Static Proxies, and Custom Proxies: parameters, connection rules, and advanced tips.

---

## Rotating Proxies

### I bought rotating traffic. How do I generate an endpoint and use it?

Three steps:

1. **Create credentials**: sign in, open the network console (for example Residential), go to **Users & Whitelist**, and create Username/Password (for example prefix `user1` plus a password).
2. **Generate endpoints**: open **Endpoint generator** (or <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>):
   - On **Web generator**, pick the order, protocol (HTTP or SOCKS5), country/city, and session mode (rotate every request or sticky);
   - Click **Generate now** and copy from the result list.
3. **Put it in the client**:
   - **Host**: always `gate.joyproxy.com`
   - **Port**: always `9001`
   - **Username**: the full generated string (do not edit or shorten it)
   - **Password**: the proxy password you set in step 1

### Why do all Rotating connections use gate.joyproxy.com:9001?

That is the shared rotating gateway. `gate.joyproxy.com:9001` is the global entry.

When the client connects with a specific username, the gateway parses country, city, and session ID from that username and picks a matching broadband node. You get throughput and failover without maintaining a huge host list.

### Why is the generated username so long? Can I shorten it?

**Do not edit it.** A Rotating username is a routing string, not a simple login. Typical shape:

`user1-zone-resi-region-us-city-los_angeles-session-ab12cd-sessTime-30`

Each segment is a rule:

- `user1`: your proxy user
- `region-us` / `city-...`: exit geo
- `session-...`: sticky session id
- `sessTime-30`: sticky lifetime in minutes

If you truncate or change it, the gateway cannot route you. You get 407 or a random country.

### Rotate every request vs sticky session?

- **Rotate every request**: a new exit IP on each HTTP request. Best for large crawls so no single IP takes all the load.
- **Sticky session**: keep the same public exit for 1–30 minutes. When time is up or the broadband node drops, the gateway moves you to a new IP in the same region. Best for human-like browsing, multi-step checkout, or social actions.

### Does the connection drop when sticky time ends?

The TCP session is not torn down. During the window the gateway keeps the exit IP stable. After expiry, **the connection string still works**; the next request gets a new exit in the same region.

---

## Static Proxies and Custom Proxies

### Entry Point vs Dedicated Exit IP?

Easy to mix up:

- **Entry Point**: looks like `us-ca.edge.joyproxy.com:10001` (or `*.std.joyproxy.com:port`). This is the **only** host:port you put in a client, crawler, or Browser Extension.
- **Dedicated Exit IP**: looks like `198.51.100.24`. That is the public IP the target sees. Use it to check geo. **Never use Dedicated Exit IP as the proxy host** — the connection will be refused.

> **Console**: on **My Proxies**, use **Hide Exit IP** / **Show Exit IP** so you do not copy the wrong field.

### Can Static Proxies change IP or region?

- **Change exit IP**: yes. On **My Proxies**, open the line and click **Change IP** (or **New IP**). You get a new dedicated exit in the same region. Hostname and port stay the same.
- **Change region**: no. Country and city are locked at purchase. If you need to move geo, buy **Custom Proxies**.

### My Static Dedicated Exit IP changed. Did you swap it without asking?

We do not change a dedicated exit without cause. Rare cases:

- **Health failover**: 24/7 monitoring. If the broadband node is down (power, ISP cutover, hardware) long enough, the system moves you to a healthy IP in the same region so traffic keeps flowing;
- **You clicked Change IP**: someone on the team used **Change IP** in the console.

The new exit is still dedicated to you.

### Custom Proxies show Unassigned after purchase. What does that mean?

Custom is sold as **port quota**. Right after payment the port has no geo, so status is **Unassigned**.

On **My Proxies**, click **Assign region**, pick country, state, or city, and save. The console attaches an exit and issues the Entry Point.

### Custom region change and auto rotation?

- **Change region**: you can reassign during the plan. After the first **Assign region**, if you picked **Standard Network** or **Premium Network**, later moves stay in that same network tier.
- **Timed IP rotation**: interval must be a **multiple of 60 seconds, at least 300 seconds (5 minutes)**. You can also change IP by hand on the list.

### Traffic or concurrency limits on Static / Custom?

**None.** Billing is IP count / port count × duration. During the plan there is no traffic, concurrency, or bandwidth cap.

### What happens when Static / Custom expire?

Without renewal, forwarding stops at expiry. After a short hold, the port and underlying exit are released and cannot be recovered. To keep a line, turn on **Auto-renew**.

---

## Generators and tools

### How can I generate endpoints in the console?

**Endpoint generator** has three tabs:

1. **Web generator**: pick country, city, protocol, and session type; copy links or export CSV/JSON/TXT;
2. **API generator**: for scripts; CRLF or JSON;
3. **AI generator**: natural language in Cursor, VS Code, Claude Desktop, or OpenClaw.

### How many endpoints per API call? Rate limits?

`count` is **1 to 200** (200 max per call).

Rotating host and credentials stay valid as long as you have traffic, so you do not need a tight poll loop. Too many calls return `429 Too Many Requests` — back off. Full parameters: <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> or <a href="../best-practices/developer/build-proxy-list.md" target="_blank" rel="noopener noreferrer">programmatic extraction</a>.

### Can I Change IP / Assign region via API?

Not yet. Static **Change IP**, Custom **Assign region**, and manual IP refresh are console actions on **My Proxies**. The extract API only reads the current Entry Point; it does not trigger a new exit.

### AdsPower, Hubstudio, Octobrowser, and similar?

Static Proxies example:

1. Open the antidetect browser and create or edit a profile;
2. Proxy type `HTTP` or `SOCKS5`;
3. Split the **Entry Point** from **My Proxies**: hostname in host, digits after the colon in port;
4. Username/Password from **Users & Whitelist** (Static Proxies can leave them blank if this public IP is on **IP Whitelist**; Rotating always needs credentials);
5. Click **Check proxy** / **Test connection**. When the exit IP looks right, save and start.

### Clash, v2rayN, or Shadowrocket?

Yes. JoyProxy is standard HTTP, HTTPS, and SOCKS5. Any client that supports those protocols (Username/Password or IP Whitelist) can use the generated `host:port` as a normal node.
