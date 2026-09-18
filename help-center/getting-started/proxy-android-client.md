# Proxy Android client

The JoyProxy **Android client** routes mobile app traffic through HTTP/SOCKS5 **without root**. Use it to validate mobile web flows, carrier-specific targets, or JoyProxy **Mobile rotating** lines in real device conditions.

[Product page](https://www.joyproxy.com/products/android-client.html) · [Download APK](https://github.com/joyproxy/joyproxy-client-android/releases/latest)

## Install

1. Review features on the [product page](https://www.joyproxy.com/products/android-client.html).
2. Download the signed APK from [GitHub Releases](https://github.com/joyproxy/joyproxy-client-android/releases/latest).
3. Allow installation from trusted sources if Android prompts you.

## Configure

1. Enter **host**, **port**, and credentials from [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html).
   - Mobile rotating: gateway `gate.joyproxy.com:9001` with generated username + Whitelist & Users password — see [Rotating proxy](rotating-proxy.md).
2. Choose routing mode:
   - **Global** — all supported apps
   - **Whitelist** — only selected apps
   - **Blacklist** — all except selected apps
3. Start the VPN-style service built on sing-box libbox.

## Mobile proxies + device testing

Purchasing **Mobile** traffic on JoyProxy gives carrier-class exits. Pair those lines with this client when you need **on-device** behavior, not just server-side scripts.

For Wi‑Fi manual proxy on stock Android (no app), see [Mobile static proxy](../best-practices/mobile-static-proxy.md).

Additional client platforms are on the roadmap; Android is available today.
