# Android emulator proxy

Configuring a proxy in an Android emulator (LDPlayer, MuMu, and similar) gives automation and app debugging the same exit as a real mobile device.

---

## Before you start

- **Network type**: for mobile-app testing, prefer **Rotating Mobile Proxies** (4G/5G) or **Static Residential Proxies** — both look like real end-user networks;
- **IP Whitelist**: for Static Proxies, add the host PC’s public IP on JoyProxy **Users & Whitelist** so you do not have to type credentials. The Rotating Proxies gateway (`gate.joyproxy.com:9001`) always needs the long username and password in the client.

---

## LDPlayer

1. Open LDPlayer and go to **System apps → Settings**;
2. Tap **Network & internet → WLAN**;
3. Long-press the default virtual Wi-Fi name and tap **Modify network**;
4. Expand advanced options and set Proxy to **Manual**;
5. **Proxy hostname** = Entry Point (for example `us-ca.edge.joyproxy.com`); **Proxy port** = the port;
6. Tap **Save**.

---

## Keep location aligned with the network

If the target app checks both IP and GPS:

1. Confirm the proxy node’s city (for example Los Angeles, US);
2. Open the emulator’s **virtual location** tool and set GPS to the same city;
3. Keep exit-IP geo and GPS coordinates in the same place.
