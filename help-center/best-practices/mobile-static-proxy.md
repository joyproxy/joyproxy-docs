# Mobile devices with static proxy

Use JoyProxy **static or custom** host:port on a phone when you need real mobile UI behavior with a **stable egress** (for example, checking a mobile web checkout while keeping the same IP for the session).

For carrier-class **Mobile rotating** traffic, pair [Mobile purchases](../getting-started/rotating/README.md) with the [Android client](../getting-started/software/android-client.md).

## iOS (Wi‑Fi manual proxy)

1. Generate static/custom endpoints on desktop first ([Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html)).
2. On iPhone: **Settings → Wi‑Fi → (i) next to your network → Configure Proxy → Manual**.
3. **Server** = host; **Port** = port.
4. If the network requires authentication, enter username/password from [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html).

> **Note**
>
> iOS Wi‑Fi proxy applies to HTTP traffic on that network; some apps use their own stacks. For full-app routing on Android, use the JoyProxy client.

## Android (Wi‑Fi manual proxy)

1. **Wi‑Fi → long-press network → Modify → Advanced → Proxy → Manual**.
2. Hostname and port from your generated line.
3. Save and open a browser to verify IP.

## Android (JoyProxy client — recommended for apps)

1. Install the [Proxy Android client](../getting-started/software/android-client.md).
2. Enter host, port, credentials.
3. Choose **Global**, **Whitelist**, or **Blacklist** app routing.

## Auth tips

- **Whitelist**: ensure the phone’s Wi‑Fi egress IP is listed if you connect without credentials.
- **Credentials**: use the same `USER:PASS` as desktop static guides.

## Verify

Load a mobile browser and confirm country/ASN before running paid flows. If results drift, regenerate the endpoint or check order expiry in [My Proxies](https://www.joyproxy.com/admin-my-orders.html).
