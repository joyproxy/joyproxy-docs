# Verify connectivity and exit IP

After you configure a proxy, run a standard check: **the tunnel connects, the exit IP location matches the target, and nothing leaks your real network identity**.

Three common methods:

---

## Method 1: Public IP check sites (browser)

In a browser that already uses the proxy, open:

1. **<a href="https://ipinfo.io" target="_blank" rel="noopener noreferrer">ipinfo.io</a>**:
   - Shows public IP, Country, City, Timezone, and Org;
   - Use it to confirm ASN for Residential or Business / ISP lines.
2. **<a href="https://whoer.net" target="_blank" rel="noopener noreferrer">whoer.net</a>**:
   - Broader leak check: DNS location vs system timezone.
3. **<a href="https://browserleaks.com/webrtc" target="_blank" rel="noopener noreferrer">browserleaks.com/webrtc</a>**:
   - Checks whether WebRTC exposes your real public IP or LAN IP.

---

## Method 2: cURL in a terminal

Use `curl` to test the handshake:

### 1. Static Proxies:
```bash
curl -x http://USERNAME:PASSWORD@us-ca.edge.joyproxy.com:10001 https://ipinfo.io
```

### 2. Rotating Proxies:
```bash
curl -x http://GENERATED_USERNAME:PASSWORD@gate.joyproxy.com:9001 https://ipinfo.io
```

JSON with an exit IP and country means the tunnel and authentication are working.

---

## Method 3: Proxy Tester

To batch-test many lines:

1. Open the Windows desktop app **Proxy Tester**;
2. Paste the proxy list into the input box;
3. Click **Start Test**. The tool measures latency and status on multiple threads and shows each public exit IP.

---

## Common connection errors

- **Cannot connect to the proxy server / timed out**:
  - Recheck hostname and port;
  - **Important**: Static Proxies must use the Entry Point hostname — never the Dedicated Exit IP.
- **HTTP 407 Proxy Authentication Required**:
  - Auth failed. For Rotating Proxies, use the password from **Users & Whitelist** plus the full generated long username. For Static Proxies or Custom Proxies, confirm Username/Password, or that this public IP is on **IP Whitelist**.
