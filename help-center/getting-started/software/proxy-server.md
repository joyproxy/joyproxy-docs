# Proxy Server

**joyproxy-server** is an open-source **HTTP/SOCKS5 gateway** for Linux and Windows. Run it on a VPS or office PC so tools that only accept `127.0.0.1:port` can still use JoyProxy cloud lines.

<a href="https://www.joyproxy.com/products/proxy-server.html" target="_blank" rel="noopener noreferrer">Product page</a> · <a href="https://github.com/joyproxy/joyproxy-server/releases/latest" target="_blank" rel="noopener noreferrer">Releases</a>

## Architectures

1. **Cloud upstream** — Forward to Rotating `gate.joyproxy.com:9001` or a Static/Custom host:port from <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a>.
2. **Team entry** — Developers point everything at your server; you rotate upstream in one place.
3. **Auth gateway** — Password, whitelist, or HTTP APIs on the server (see the GitHub README).

## Setup outline

1. Read the <a href="https://www.joyproxy.com/products/proxy-server.html" target="_blank" rel="noopener noreferrer">product page</a>.
2. Download binaries from <a href="https://github.com/joyproxy/joyproxy-server/releases/latest" target="_blank" rel="noopener noreferrer">GitHub Releases</a>.
3. Choose a startup mode documented in the repo.
4. Set upstream JoyProxy credentials (<a href="../rotating/README.md" target="_blank" rel="noopener noreferrer">Rotating</a> or <a href="../static/README.md" target="_blank" rel="noopener noreferrer">Static</a>).
5. Optionally enable auth and traffic-reporting APIs.

| Need | Tool |
| --- | --- |
| One browser | <a href="browser-extension.md" target="_blank" rel="noopener noreferrer">Browser extension</a> |
| Local port for many CLI tools | **Proxy Server** |
| Phone apps | <a href="android-client.md" target="_blank" rel="noopener noreferrer">Android client</a> |

The binary is **free**. JoyProxy **cloud traffic** is billed on your orders.
