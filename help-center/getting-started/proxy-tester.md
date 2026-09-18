# Proxy Tester

**Proxy Tester** is a desktop utility for Windows that checks **HTTP**, **SOCKS5 TCP**, and **SOCKS5 UDP** connectivity before you roll configuration to production or share lines with your team.

[Product page](https://www.joyproxy.com/products/tester.html) · [Download (GitHub Releases)](https://github.com/joyproxy/joyproxy-tester/releases/latest)

## What it helps you verify

- Proxy accepts connections and returns a sensible outbound IP
- Country / region matches what you purchased or generated
- Batch lines from an extract API or text list (regex + sequential test)

## Quick start

1. Download the Windows build from [GitHub Releases](https://github.com/joyproxy/joyproxy-tester/releases/latest).
2. Paste a proxy string (`host:port` or full URI with username/password).
3. Run the test and review outbound IP and geo metadata.
4. For rotating gateways, generate a fresh username in [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html) first, then test with your Whitelist & Users password.

## Pair with JoyProxy cloud

| Line type | What to paste |
| --- | --- |
| Rotating | `gate.joyproxy.com:9001` + generated user + password |
| Static / Custom | Host and port from the static/custom generator |

Open source (MIT). Developers can run from source with Python 3.10+.

> **Tip**
>
> After Tester confirms a line, apply it in the [Browser extension](browser-extension.md) for interactive site checks, or embed it in scripts using [Static](static-proxy.md) / [Rotating](rotating-proxy.md) code samples.
