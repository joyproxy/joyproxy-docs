# Proxy Server

**joyproxy-server** is an open-source **HTTP/SOCKS5 gateway** for Linux and Windows. Run it on your VPS or office machine to give legacy apps a local `127.0.0.1:port` entry that forwards to JoyProxy cloud endpoints—or to any upstream you configure.

[Product page](https://www.joyproxy.com/products/proxy-server.html) · [GitHub Releases](https://github.com/joyproxy/joyproxy-server/releases/latest)

## Typical architectures

1. **Cloud endpoints only** — Server forwards to JoyProxy `host:port` from [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html).
2. **Team entry point** — Developers point tools at your server; you rotate upstream lines centrally.
3. **Auth gateway** — Enable password, whitelist, or HTTP APIs on the server while upstream stays on JoyProxy.

## Setup outline

1. Read capabilities on the [Proxy Server product page](https://www.joyproxy.com/products/proxy-server.html).
2. Download binaries for your OS from [GitHub Releases](https://github.com/joyproxy/joyproxy-server/releases/latest).
3. Pick a startup mode: open, whitelist, password, API auth, or combinations documented in the repo.
4. Paste upstream JoyProxy credentials (rotating gateway or static host:port).
5. Optionally enable **auth and traffic reporting HTTP APIs** for integration with your platform.

## When to choose server vs extension

| Need | Tool |
| --- | --- |
| One browser, quick UI | [Browser extension](browser-extension.md) |
| Local port for many CLI tools | **Proxy Server** |
| Phone apps | [Android client](proxy-android-client.md) |

The server download is **free**; JoyProxy **proxy traffic** is billed separately through your cloud orders.
