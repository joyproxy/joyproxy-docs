# Proxy Tester

Windows desktop tool to check **HTTP**, **SOCKS5 TCP**, and **SOCKS5 UDP** before you ship config to production.

<a href="https://www.joyproxy.com/products/tester.html" target="_blank" rel="noopener noreferrer">Product page</a> · <a href="https://github.com/joyproxy/joyproxy-tester/releases/latest" target="_blank" rel="noopener noreferrer">Download</a>

## What you can verify

- The proxy accepts connections and returns an outbound IP
- Country matches what you generated or purchased
- Batch lists from an extract API or a text file (regex + sequential test)

## Quick start

1. Download the Windows build from <a href="https://github.com/joyproxy/joyproxy-tester/releases/latest" target="_blank" rel="noopener noreferrer">GitHub Releases</a>.
2. Paste a proxy string (`host:port` or full URI with username/password).
3. Run the test and read outbound IP / geo.
4. For Rotating, generate a username in <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a>, then test with the Users & Whitelist password — <a href="../rotating/first-request.md" target="_blank" rel="noopener noreferrer">Rotating first request</a>.

| Line type | Paste |
| --- | --- |
| Rotating | `gate.joyproxy.com:9001` + generated user + password |
| Static / Custom | Host and port from the generator |

Open source (MIT). Source runs on Python 3.10+.

After a pass, apply the same line in the <a href="browser-extension.md" target="_blank" rel="noopener noreferrer">Browser extension</a> for click-through checks.
