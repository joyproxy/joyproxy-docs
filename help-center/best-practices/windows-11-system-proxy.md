# Windows 11 system proxy settings

Windows can send **all compatible applications** through a proxy when you enable system-wide settings. This works well with JoyProxy **Static** or **Custom** host:port lines; rotating gateways use the same fields with `gate.joyproxy.com` and port `9001`.

## Before you start

1. Generate endpoints in <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>.
2. Decide auth:
   - **Whitelist** — run from the IP you added in <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a>.
   - **Username/password** — Windows will prompt or use your app’s embedded credentials.

> **Security**
>
> System proxy affects every app that respects Windows proxy settings (browsers, many SDKs). Disable it when you are done, or use the <a href="../getting-started/software/browser-extension.md" target="_blank" rel="noopener noreferrer">Browser extension</a> for isolated testing.

## Configure proxy (Windows 11)

1. **Settings** → **Network & internet** → **Proxy**.
2. Under **Manual proxy setup**, set **Use a proxy server** to **On**.
3. **Address** = endpoint host (e.g. `us-ca.edge.joyproxy.com` or `gate.joyproxy.com`).
4. **Port** = endpoint port (e.g. `10001` or `9001`).
5. Save.

If Windows or an app prompts for credentials, enter your Users & Whitelist username and password (static/custom) or generated user + password (rotating).

## Edge and Chrome on Windows

Chromium browsers follow **system proxy** on Windows. After enabling proxy above, open Edge or Chrome and visit an IP-check site to confirm egress.

For **browser-only** routing without touching system settings, prefer the <a href="../getting-started/software/browser-extension.md" target="_blank" rel="noopener noreferrer">JoyProxy extension</a>.

## Verify and troubleshoot

| Check | Action |
| --- | --- |
| Wrong country | Regenerate username (rotating) or confirm static allocation region |
| Auth errors | Re-enter password; confirm whitelist IP matches <a href="https://www.joyproxy.com" target="_blank" rel="noopener noreferrer">whatismyip</a> from the server |
| Some apps ignore proxy | Use <a href="../getting-started/software/proxy-server.md" target="_blank" rel="noopener noreferrer">Proxy Server</a> local port or app-specific proxy fields |

## Related

- <a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">Static proxy guide</a>
- <a href="chrome-static-proxy.md" target="_blank" rel="noopener noreferrer">Chrome static proxy</a>
