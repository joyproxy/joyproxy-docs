# Use Static on Windows, Chrome, and mobile

Dedicated `host:port` lines work well in OS and browser forms.

## Browser only

[JoyProxy Browser Extension](../software/browser-extension.md) — paste `http://USER:PASS@HOST:PORT`, test, apply. Other apps stay direct.

## Chrome / Edge on Windows (system proxy)

Chrome follows Windows. See [Windows 11 system proxy](../../best-practices/windows-11-system-proxy.md) and [Chrome static proxy](../../best-practices/chrome-static-proxy.md).

> **Security**
>
> System proxy routes **all** compatible apps. Disable it after testing.

## iOS / Android Wi‑Fi

[Mobile devices](../../best-practices/mobile-static-proxy.md) — manual proxy on the Wi‑Fi network, or the [Android client](../software/android-client.md) for per-app routing.

## Third-party tools

Host and port from Endpoints; auth = whitelist or user/pass. Table: [Third-party software](../../best-practices/third-party-static-proxies.md).

## Chapter index

[Static proxy](README.md)
