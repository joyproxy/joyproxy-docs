# Windows 11 system proxy settings

Windows can send **all compatible applications** through a proxy when you enable system-wide settings. This works well with JoyProxy **Static** or **Custom** host:port lines; rotating gateways use the same fields with `gate.joyproxy.com` and port `9001`.

## Before you start

1. Generate endpoints in [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html).
2. Decide auth:
   - **Whitelist** — run from the IP you added in [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html).
   - **Username/password** — Windows will prompt or use your app’s embedded credentials.

> **Security**
>
> System proxy affects every app that respects Windows proxy settings (browsers, many SDKs). Disable it when you are done, or use the [Browser extension](../getting-started/browser-extension.md) for isolated testing.

## Configure proxy (Windows 11)

1. **Settings** → **Network & internet** → **Proxy**.
2. Under **Manual proxy setup**, set **Use a proxy server** to **On**.
3. **Address** = endpoint host (e.g. `us-ca.edge.joyproxy.com` or `gate.joyproxy.com`).
4. **Port** = endpoint port (e.g. `10001` or `9001`).
5. Save.

If Windows or an app prompts for credentials, enter your Whitelist & Users username and password (static/custom) or generated user + password (rotating).

## Edge and Chrome on Windows

Chromium browsers follow **system proxy** on Windows. After enabling proxy above, open Edge or Chrome and visit an IP-check site to confirm egress.

For **browser-only** routing without touching system settings, prefer the [JoyProxy extension](../getting-started/browser-extension.md).

## Verify and troubleshoot

| Check | Action |
| --- | --- |
| Wrong country | Regenerate username (rotating) or confirm static allocation region |
| Auth errors | Re-enter password; confirm whitelist IP matches [whatismyip](https://www.joyproxy.com) from the server |
| Some apps ignore proxy | Use [Proxy Server](../getting-started/proxy-server.md) local port or app-specific proxy fields |

## Related

- [Static proxy guide](../getting-started/static-proxy.md)
- [Chrome static proxy](chrome-static-proxy.md)
