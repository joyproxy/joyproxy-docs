# Multilogin and other antidetect browsers

Besides the browsers above, teams also use **Multilogin**, **Dolphin{anty}**, **GoLogin**, and **Kameleo**.

The UI differs; the proxy fields do not. This page uses Multilogin as the example.

---

## Multilogin

1. Open Multilogin and click **New browser profile**;
2. In the left menu, choose **Proxy**;
3. **Proxy type**: `HTTP proxy` or `SOCKS5 proxy`;
4. Fill in:
   - **IP or host**: Entry Point hostname (for example `us-ca.edge.joyproxy.com` — never Dedicated Exit IP);
   - **Port**: the port;
   - **Username / Password**: proxy credentials;
5. Click **Check proxy** and wait for `Connection test passed`;
6. Set Timezone and Geolocation to fill from the external IP;
7. Click **Create profile**, save, and start.

---

## Dolphin{anty} / GoLogin

When you create a profile, choose a custom proxy and paste the standard string `host:port:username:password`. Run the connectivity test, then save.
