# Proxy Android client

Route mobile-app traffic through HTTP/SOCKS5 **without root**. Use it for on-device checks of mobile web, apps, or JoyProxy **Mobile rotating** lines.

<a href="https://www.joyproxy.com/products/android-client.html" target="_blank" rel="noopener noreferrer">Product page</a> · <a href="https://github.com/joyproxy/joyproxy-client-android/releases/latest" target="_blank" rel="noopener noreferrer">APK</a>

## Install

1. Review the <a href="https://www.joyproxy.com/products/android-client.html" target="_blank" rel="noopener noreferrer">product page</a>.
2. Download the signed APK from <a href="https://github.com/joyproxy/joyproxy-client-android/releases/latest" target="_blank" rel="noopener noreferrer">GitHub Releases</a>.
3. Allow install from that source if Android asks.

## Configure

1. Enter **host**, **port**, and credentials from <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a>.
   - Mobile / Residential rotating: `gate.joyproxy.com:9001` + generated username + Users & Whitelist password — <a href="../rotating/README.md" target="_blank" rel="noopener noreferrer">Rotating</a>
   - Static / Custom: dedicated host:port — <a href="../static/README.md" target="_blank" rel="noopener noreferrer">Static</a>
2. Routing:
   - **Global** — all supported apps
   - **Whitelist** — only selected apps
   - **Blacklist** — all except selected apps
3. Start the VPN-style service (sing-box libbox).

For stock Android **Wi‑Fi manual proxy** without the app, see <a href="../../best-practices/mobile-static-proxy.md" target="_blank" rel="noopener noreferrer">Mobile static proxy</a>.
