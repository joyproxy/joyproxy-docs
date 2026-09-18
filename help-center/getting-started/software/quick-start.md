# Quick start

JoyProxy software sits **in front of** your cloud lines (or your own proxy). The apps are free; **traffic and scraping credits** are billed in the console.

Fastest path: install the **browser extension**, paste one line, test, apply. That only affects this Chromium browser.

## Pick a tool

| You want | Tool | Then |
| --- | --- | --- |
| Proxy this Chrome / Edge only | Browser Extension | Steps below |
| Batch-check many HTTP / SOCKS lines | Proxy Tester | <a href="proxy-tester.md" target="_blank" rel="noopener noreferrer">Proxy Tester</a> |
| A local `127.0.0.1` entry for a CLI | Proxy Server | <a href="proxy-server.md" target="_blank" rel="noopener noreferrer">Proxy Server</a> |
| Per-app routing on a phone | Android client | <a href="android-client.md" target="_blank" rel="noopener noreferrer">Android client</a> |

You still need a working line from <a href="../rotating/quick-start.md" target="_blank" rel="noopener noreferrer">Rotating</a>, <a href="../static/quick-start.md" target="_blank" rel="noopener noreferrer">Static</a>, or <a href="../custom/quick-start.md" target="_blank" rel="noopener noreferrer">Custom</a>.

## Five minutes with the extension

1. Install from the <a href="https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng" target="_blank" rel="noopener noreferrer">Chrome Web Store</a> and pin **JoyProxy**.
2. Paste a URI, or sign in to load purchases from <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a>:

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
http://USER:PASS@HOST:PORT
```

3. Run **Test**. Confirm the exit IP is not your home IP.
4. Click **Apply**. System proxy stays unchanged.

Details: <a href="browser-extension.md" target="_blank" rel="noopener noreferrer">Browser extension</a>.

## If a tool only accepts localhost

Run <a href="proxy-server.md" target="_blank" rel="noopener noreferrer">Proxy Server</a>, point its upstream at JoyProxy, then set the app to `127.0.0.1` and the local port.

## What to read next

| Task | Page |
| --- | --- |
| Rotating gateway fields | <a href="../rotating/quick-start.md" target="_blank" rel="noopener noreferrer">Rotating quick start</a> |
| Dedicated host:port | <a href="../static/quick-start.md" target="_blank" rel="noopener noreferrer">Static quick start</a> |
| Windows / Chrome system proxy | <a href="../../best-practices/windows-11-system-proxy.md" target="_blank" rel="noopener noreferrer">Best practices</a> |
