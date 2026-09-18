# Proxy Android client

Route mobile-app traffic through HTTP/SOCKS5 **without root**. Use it for on-device checks of mobile web, apps, or JoyProxy **Mobile rotating** lines.

[Product page](https://www.joyproxy.com/products/android-client.html) · [APK](https://github.com/joyproxy/joyproxy-client-android/releases/latest)

## Install

1. Review the [product page](https://www.joyproxy.com/products/android-client.html).
2. Download the signed APK from [GitHub Releases](https://github.com/joyproxy/joyproxy-client-android/releases/latest).
3. Allow install from that source if Android asks.

## Configure

1. Enter **host**, **port**, and credentials from [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html).
   - Mobile / Residential rotating: `gate.joyproxy.com:9001` + generated username + Whitelist & Users password — [Rotating](../rotating/README.md)
   - Static / Custom: dedicated host:port — [Static](../static/README.md)
2. Routing:
   - **Global** — all supported apps
   - **Whitelist** — only selected apps
   - **Blacklist** — all except selected apps
3. Start the VPN-style service (sing-box libbox).

For stock Android **Wi‑Fi manual proxy** without the app, see [Mobile static proxy](../../best-practices/mobile-static-proxy.md).
