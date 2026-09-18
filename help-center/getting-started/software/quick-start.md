# Quick start

JoyProxy software sits **in front of** your cloud lines (or your own proxy). The apps are free; **traffic and scraping credits** are billed in the console.

Fastest path: install the **browser extension**, paste one line, test, apply. That only affects this Chromium browser.

## Pick a tool

| You want | Tool | Then |
| --- | --- | --- |
| Proxy this Chrome / Edge only | Browser Extension | Steps below |
| Batch-check many HTTP / SOCKS lines | Proxy Tester | [Proxy Tester](proxy-tester.md) |
| A local `127.0.0.1` entry for a CLI | Proxy Server | [Proxy Server](proxy-server.md) |
| Per-app routing on a phone | Android client | [Android client](android-client.md) |

You still need a working line from [Rotating](../rotating/quick-start.md), [Static](../static/quick-start.md), or [Custom](../custom/quick-start.md).

## Five minutes with the extension

1. Install from the [Chrome Web Store](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng) and pin **JoyProxy**.
2. Paste a URI, or sign in to load purchases from [My Proxies](https://www.joyproxy.com/admin-my-orders.html):

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
http://USER:PASS@HOST:PORT
```

3. Run **Test**. Confirm the exit IP is not your home IP.
4. Click **Apply**. System proxy stays unchanged.

Details: [Browser extension](browser-extension.md).

## If a tool only accepts localhost

Run [Proxy Server](proxy-server.md), point its upstream at JoyProxy, then set the app to `127.0.0.1` and the local port.

## What to read next

| Task | Page |
| --- | --- |
| Rotating gateway fields | [Rotating quick start](../rotating/quick-start.md) |
| Dedicated host:port | [Static quick start](../static/quick-start.md) |
| Windows / Chrome system proxy | [Best practices](../../best-practices/windows-11-system-proxy.md) |
