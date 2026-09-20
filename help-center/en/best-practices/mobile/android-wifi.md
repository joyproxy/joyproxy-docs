# Android Wi-Fi proxy

If you do not want to install a client, Android can set a manual HTTP proxy on the current Wi-Fi network.

> **When to use this**: a fixed Wi-Fi network where you want all HTTP traffic on this device to go through the proxy.

---

## Prerequisite: IP Whitelist (Static / Custom Proxies)

Android’s built-in Wi-Fi proxy fields usually accept only hostname and port — not username and password.

For **Static Proxies or Custom Proxies**, add an IP Whitelist entry:

- Sign in to the JoyProxy console, open **Users & Whitelist**, and add the public IP of this Wi-Fi network to **IP Whitelist**;
- After that, the device can handshake Static or Custom Proxies without a password.
- *Tip: the Rotating Proxies gateway (`gate.joyproxy.com:9001`) always needs a long username and password. Use JoyProxy Android Client or a third-party app that supports credentials.*

---

## Setup

1. Open Android **Settings → WLAN / Wi-Fi**;
2. Tap the **settings** or **advanced** icon next to the connected network;
3. Find **Proxy** and change it from None to **Manual**;
4. Fill in:
   - **Proxy hostname**: JoyProxy Entry Point (for example `us-ca.edge.joyproxy.com`);
   - **Proxy port**: the port (for example `10001`);
5. Tap **Save**.

---

## Verify and restore

- **Verify**: open a browser to `https://ipinfo.io` and check the exit IP;
- **Restore**: return to that Wi-Fi details screen, set Proxy back to **None**, and save.
