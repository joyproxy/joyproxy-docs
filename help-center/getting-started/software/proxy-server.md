# Proxy Server

**joyproxy-server** is an open-source **HTTP/SOCKS5 gateway** for Linux and Windows. Run it on a VPS or office PC so tools that only accept `127.0.0.1:port` can still use JoyProxy cloud lines.

[Product page](https://www.joyproxy.com/products/proxy-server.html) · [Releases](https://github.com/joyproxy/joyproxy-server/releases/latest)

## Architectures

1. **Cloud upstream** — Forward to Rotating `gate.joyproxy.com:9001` or a Static/Custom host:port from [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html).
2. **Team entry** — Developers point everything at your server; you rotate upstream in one place.
3. **Auth gateway** — Password, whitelist, or HTTP APIs on the server (see the GitHub README).

## Setup outline

1. Read the [product page](https://www.joyproxy.com/products/proxy-server.html).
2. Download binaries from [GitHub Releases](https://github.com/joyproxy/joyproxy-server/releases/latest).
3. Choose a startup mode documented in the repo.
4. Set upstream JoyProxy credentials ([Rotating](../rotating/README.md) or [Static](../static/README.md)).
5. Optionally enable auth and traffic-reporting APIs.

| Need | Tool |
| --- | --- |
| One browser | [Browser extension](browser-extension.md) |
| Local port for many CLI tools | **Proxy Server** |
| Phone apps | [Android client](android-client.md) |

The binary is **free**. JoyProxy **cloud traffic** is billed on your orders.
