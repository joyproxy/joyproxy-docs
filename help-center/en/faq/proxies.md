# Extracting and using proxies

This chapter covers generating and using Rotating Proxies and Static Proxies: parameters, connection rules, and advanced tips.

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

## Static Proxies

### Entry Point vs Dedicated Exit IP?

Easy to mix up:

- **Entry Point**: looks like `isp.joyproxy.com:port` or `dc.joyproxy.com:port` (legacy `*.std.joyproxy.com` / `*.pro.joyproxy.com` remain supported). This is the **only** host:port you put in a client, crawler, or Browser Extension.
- **Dedicated Exit IP**: looks like `198.51.100.24`. That is the public IP the target sees. Use it to check geo. **Never use Dedicated Exit IP as the proxy host** — the connection will be refused.

> **Console**: on **My Proxies**, use **Hide Exit IP** / **Show Exit IP** so you do not copy the wrong field.

### Can Static Proxies change IP or region?

- **Change exit IP**: available only on **30-day (monthly) or longer** Static plans. On **My Proxies**, click **Change IP** (or **New IP**) to receive a free new dedicated exit IP in the **same region** once every **30 days** per line (hostname and port stay the same). Short-term plans under 30 days (1-day or 7-day) do not support self-service IP swaps.
- **Change region**: no. Country and city are locked at purchase and self-service **Change IP** cannot switch countries. If you selected the wrong country at checkout, please open a support ticket for assistance; for multi-region switching, use Rotating Proxies and set the country when generating endpoints.

### My Static Proxies exit IP changed. Did you swap it without asking?

We do not change a dedicated exit without cause. Rare cases:

- **Health failover**: 24/7 monitoring. If the broadband node is down (power, ISP cutover, hardware) long enough, the system moves you to a healthy IP in the same region so traffic keeps flowing;
- **You clicked Change IP**: someone on the team used **Change IP** in the console.

The new exit is still dedicated to you.

### Can I buy a 1-day Static Proxy to test and keep the same IP when renewing for 30 days?

Yes. You can purchase a 1-day Static Proxy (for example, $0.60 for 1 ISP IP) to verify connectivity and target-site compatibility. If you renew that line to a 30-day plan **before the 1-day plan expires**, you will keep the exact same exit IP and port (expired lines without renewal are released back to the pool).

### Why do Static ISP Proxies sometimes show as "hosting / datacenter / broadcast" or not "double ISP" on third-party IP checkers (such as Scamalytics, IPQS, or ping0)?

Static ISP Proxies use carrier-assigned bandwidth hosted in data centers, so different third-party IP databases (each with their own update cycles and scoring rules) may label them as commercial/hosting or non-residential.
- If your workflow values a fixed dedicated IP and unlimited high bandwidth, Static ISP Proxies are ideal.
- If a strict target platform (such as certain payment gateways or AI platforms) requires pure home broadband with zero hosting/commercial flags, use **Residential Proxies** or **Mobile Proxies** with a long sticky session (such as `sesstime-1440` or longer).

### Can I select a carrier/ASN or check IP ranges before purchasing Static Proxies?

Yes. On the Static Proxies checkout page, you can directly select the target **country, state/province, city, and specific carrier/ASN** from the live dropdown menus. Only an exact single IP or a specific `/24` subnet cannot be pre-locked before checkout. If you have strict requirements for a specific `/24` subnet or ASN stock check, open a ticket via **Tickets** in the left sidebar of the console.

### Are Static Proxy usernames and passwords per-IP or per-product?

Proxy credentials in **Users & Whitelist** apply at the account/product level rather than per individual static IP. Different static lines are separated by their assigned **Port** (or entry host). You can also bind your server or local public IP in **Users & Whitelist** for passwordless authentication.

### Does the proxy gateway support direct client-to-proxy TLS (`https://HOST:PORT`)?

JoyProxy gateways use standard **HTTP `CONNECT` tunneling** and **SOCKS5**. When accessing HTTPS websites, your client opens a standard HTTP `CONNECT` (or SOCKS5) tunnel through the gateway and completes end-to-end TLS directly with the destination website (no custom root certificate installation needed). Direct TLS encryption from your client to the proxy gateway itself (`https://HOST:PORT`) is not standard/supported.

### What if I am unsatisfied with the quality of an assigned ISP or Datacenter proxy, or need lower latency and higher bandwidth?
You can first try **Change IP** in the console under **My Proxies** to obtain a fresh exit IP. If you require ultra-low latency or dedicated large bandwidth, please submit a ticket to apply for Private Proxies, and our team will evaluate and customize dedicated direct-connect resources for you.

### Are there traffic, speed, or device limits on Static Proxies?
**None.** There are no limits on traffic, bandwidth, concurrency, or the number of connected devices.
Static Proxies are billed by IP count × subscription period. You can transfer unlimited data and connect your devices throughout the active plan.

### What happens when Static Proxies expire?

Without renewal, forwarding stops at expiry. After a short hold, the port and underlying exit are released and cannot be recovered. To keep a line, turn on **Auto-renew**.

---

## Dedicated 4G/5G Mobile Proxy

### Does a Dedicated 4G/5G Mobile Proxy rotate automatically? How do I switch the exit IP?
- **Static by default**: Your exclusive physical 4G/5G SIM port keeps a stable mobile exit IP by default without unexpected rotation — ideal for AI accounts, social media, and e-commerce stores.
- **On-demand switch via console or API**: Whenever you need a fresh carrier IP, click **Switch IP** on your port in the console or call the port's private IP-switch API URL. The cellular modem re-registers on the carrier network and returns with a fresh IP in **5–15 seconds**.

### Which protocols and authentication methods are supported?
Every port natively supports **HTTP/HTTPS** and **SOCKS5** using its dedicated fixed `host:port` and unique Username/Password (one-click copy for standard and antidetect browser formats in the console).

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

### Can I Change IP via API?

Not yet. Static **Change IP** is a console action on **My Proxies**. The extract API only reads the current Entry Point; it does not trigger a new exit.

### AdsPower, Hubstudio, Octobrowser, and similar?

Static Proxies example:

1. Open the antidetect browser and create or edit a profile;
2. Proxy type `HTTP` or `SOCKS5`;
3. Split the **Entry Point** from **My Proxies**: hostname in host, digits after the colon in port;
4. Username/Password from **Users & Whitelist** (Static Proxies can leave them blank if this public IP is on **IP Whitelist**; Rotating always needs credentials);
5. Click **Check proxy** / **Test connection**. When the exit IP looks right, save and start.

### Clash, v2rayN, or Shadowrocket?

Yes. JoyProxy is standard HTTP, HTTPS, and SOCKS5. Any client that supports those protocols (Username/Password or IP Whitelist) can use the generated `host:port` as a normal node.
