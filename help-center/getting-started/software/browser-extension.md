# Browser extension

The JoyProxy **Browser Extension** applies a proxy to **one Chromium browser** (Chrome, Edge, Brave, and similar). System-wide settings stay untouched—ideal for manual QA, account checks, and geo checks.

<a href="https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng" target="_blank" rel="noopener noreferrer">Chrome Web Store</a> · <a href="https://www.joyproxy.com/products/browser-extension.html" target="_blank" rel="noopener noreferrer">Product page</a>

## Install

1. Install from the <a href="https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng" target="_blank" rel="noopener noreferrer">Chrome Web Store</a>.
2. Pin **JoyProxy** on the toolbar.

## Three ways to work

| Mode | JoyProxy account | What you do |
| --- | --- | --- |
| **Your own proxy** | Optional | Paste `host:port` or a URI, test, apply |
| **Extract API** | Optional | Point at a provider URL; the extension pulls and tests lines |
| **JoyProxy lines** | Sign in on joyproxy.com | Load rotating or static lines from your orders |

You can test your own proxies without an account. Sign in when you want cloud lines from <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a>.

## Recommended workflow

1. Open the popup or side panel.
2. Paste a line **or** sign in to load purchases.
   - Rotating: `http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001` — <a href="../rotating/first-request.md" target="_blank" rel="noopener noreferrer">Rotating first request</a>
   - Static / Custom: `http://USER:PASS@HOST:PORT` from <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a>
3. Run **connectivity test** and confirm exit IP / country.
4. Click **Apply**. Only this browser uses the proxy.

## Advanced

- Scope: all sites or allow-list only
- User-Agent, WebRTC limits, cookie cleanup, fingerprint-related controls
- Saved profiles and list import

> **Tip**
>
> Batch-validate many lines with <a href="proxy-tester.md" target="_blank" rel="noopener noreferrer">Proxy Tester</a>. For every app on the PC, see <a href="../../best-practices/windows-11-system-proxy.md" target="_blank" rel="noopener noreferrer">Windows 11 system proxy</a>.

Source: <a href="https://github.com/joyproxy/joyproxy-extension" target="_blank" rel="noopener noreferrer">GitHub — joyproxy-extension</a> · Privacy: <a href="https://www.joyproxy.com/privacy-extension.html" target="_blank" rel="noopener noreferrer">privacy-extension</a>
