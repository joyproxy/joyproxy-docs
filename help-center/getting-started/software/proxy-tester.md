# Proxy Tester

Windows desktop tool to check **HTTP**, **SOCKS5 TCP**, and **SOCKS5 UDP** before you ship config to production.

[Product page](https://www.joyproxy.com/products/tester.html) · [Download](https://github.com/joyproxy/joyproxy-tester/releases/latest)

## What you can verify

- The proxy accepts connections and returns an outbound IP
- Country matches what you generated or purchased
- Batch lists from an extract API or a text file (regex + sequential test)

## Quick start

1. Download the Windows build from [GitHub Releases](https://github.com/joyproxy/joyproxy-tester/releases/latest).
2. Paste a proxy string (`host:port` or full URI with username/password).
3. Run the test and read outbound IP / geo.
4. For Rotating, generate a username in [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html), then test with the Whitelist & Users password — [Rotating first request](../rotating/first-request.md).

| Line type | Paste |
| --- | --- |
| Rotating | `gate.joyproxy.com:9001` + generated user + password |
| Static / Custom | Host and port from the generator |

Open source (MIT). Source runs on Python 3.10+.

After a pass, apply the same line in the [Browser extension](browser-extension.md) for click-through checks.
