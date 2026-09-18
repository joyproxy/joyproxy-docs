# Browser extension

The JoyProxy **Browser Extension** applies a proxy to **one Chromium browser** (Chrome, Edge, Brave, and similar). System-wide settings stay untouched—ideal for manual QA, account checks, and geo checks.

[Chrome Web Store](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng) · [Product page](https://www.joyproxy.com/products/browser-extension.html)

## Install

1. Install from the [Chrome Web Store](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng).
2. Pin **JoyProxy** on the toolbar.

## Three ways to work

| Mode | JoyProxy account | What you do |
| --- | --- | --- |
| **Your own proxy** | Optional | Paste `host:port` or a URI, test, apply |
| **Extract API** | Optional | Point at a provider URL; the extension pulls and tests lines |
| **JoyProxy lines** | Sign in on joyproxy.com | Load rotating or static lines from your orders |

You can test your own proxies without an account. Sign in when you want cloud lines from [My Proxies](https://www.joyproxy.com/admin-my-orders.html).

## Recommended workflow

1. Open the popup or side panel.
2. Paste a line **or** sign in to load purchases.
   - Rotating: `http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001` — [Rotating first request](../rotating/first-request.md)
   - Static / Custom: `http://USER:PASS@HOST:PORT` from [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html)
3. Run **connectivity test** and confirm exit IP / country.
4. Click **Apply**. Only this browser uses the proxy.

## Advanced

- Scope: all sites or allow-list only
- User-Agent, WebRTC limits, cookie cleanup, fingerprint-related controls
- Saved profiles and list import

> **Tip**
>
> Batch-validate many lines with [Proxy Tester](proxy-tester.md). For every app on the PC, see [Windows 11 system proxy](../../best-practices/windows-11-system-proxy.md).

Source: [GitHub — joyproxy-extension](https://github.com/joyproxy/joyproxy-extension) · Privacy: [privacy-extension](https://www.joyproxy.com/privacy-extension.html)
