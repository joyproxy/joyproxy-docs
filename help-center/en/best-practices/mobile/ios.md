# iOS and iPadOS proxy

On iPhone and iPad you can set a manual HTTP proxy on the current Wi-Fi network, or use a third-party app that speaks HTTP/SOCKS5.

---

## Method 1: Built-in Wi-Fi proxy

Quick HTTP proxy on Wi-Fi:

1. **IP Whitelist first**: for Static Proxies or Custom Proxies, add this network’s public IP on JoyProxy **Users & Whitelist** so you can skip a password. The Rotating Proxies gateway always needs Username/Password;
2. Open iPhone / iPad **Settings → Wi-Fi**;
3. Tap the **info (ⓘ)** icon next to the connected network;
4. Scroll to the bottom and tap **Configure Proxy**;
5. Switch the mode to **Manual**;
6. Fill in:
   - **Server**: Entry Point hostname (for example `us-ca.edge.joyproxy.com`);
   - **Port**: the port;
   - (If not on the whitelist) turn on **Authentication** and enter Username/Password;
7. Tap **Save** in the top-right.

---

## Method 2: Standard proxy apps (including cellular)

For 4G/5G cellular, or for per-app rules, use a third-party app that supports HTTP/SOCKS5:

1. Add an `HTTP` or `SOCKS5` node;
2. Enter Entry Point hostname, port, and credentials;
3. Connect and choose a rule / split-tunnel mode.
