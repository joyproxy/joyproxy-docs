# Browser extension

The JoyProxy **Browser Extension** applies a proxy to **one Chromium browser** (Chrome, Edge, Brave, and similar). System-wide settings stay untouched—ideal for manual QA, account checks, and quick geo validation.

[Chrome Web Store](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng) · [Product page](https://www.joyproxy.com/products/browser-extension.html)

## Install

1. Install from the [Chrome Web Store](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng).
2. Pin **JoyProxy** on the toolbar for one-click access.

## Three ways to work

| Mode | Account | What you do |
| --- | --- | --- |
| **Your own proxy** | Optional | Paste `host:port` or a full URI, test, apply |
| **Extract API** | Optional | Point at a provider URL; extension pulls and tests lines |
| **JoyProxy lines** | Sign in on joyproxy.com | Load rotating or static lines from your orders |

You do **not** need a JoyProxy account to test your own proxies. Sign in when you want cloud lines synced from [My Proxies](https://www.joyproxy.com/admin-my-orders.html).

## Recommended workflow

1. Open the popup or side panel.
2. Paste a static or rotating gateway string **or** sign in to load purchased lines.
   - Rotating: `http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001` — see [Rotating proxy](rotating-proxy.md).
   - Static: use host:port from [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html).
3. Run the **connectivity test** and confirm exit IP / country.
4. Click **Apply**. Only this browser uses the proxy.

## Advanced options

- Scope: all sites or allow-list only
- User-Agent tweaks, WebRTC limits, cookie cleanup, fingerprint-related controls
- Saved profiles and list import

> **Tip**
>
> For batch validation of many lines, use [Proxy Tester](proxy-tester.md). For every app on the PC, see [Windows 11 system proxy](../best-practices/windows-11-system-proxy.md).

Source and updates: [GitHub — joyproxy-extension](https://github.com/joyproxy/joyproxy-extension) · Extension privacy: [privacy-extension](https://www.joyproxy.com/privacy-extension.html)
