# Chrome browser with static proxy

For **dedicated static or custom** lines, you can route Chrome on Windows through the **system proxy**, or use the **JoyProxy extension** when you want per-browser control without changing OS settings.

## Recommended: JoyProxy extension

Best for day-to-day QA on static lines:

1. Install the <a href="../getting-started/software/browser-extension.md" target="_blank" rel="noopener noreferrer">Browser extension</a>.
2. Paste `http://USER:PASS@HOST:PORT` from <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>.
3. Test exit IP → **Apply**.

Only Chrome (or Edge) uses the proxy; Slack, updates, and other apps stay direct.

## Alternative: Windows system proxy (Chrome follows OS)

1. Follow <a href="windows-11-system-proxy.md" target="_blank" rel="noopener noreferrer">Windows 11 system proxy</a>.
2. Launch Chrome—no separate Chrome proxy dialog on Windows.
3. Visit an IP-check site to validate.

Use this when you must test **exactly** how Chrome behaves with system-wide enterprise policies.

## Microsoft Edge

Edge on Windows uses the same system proxy path. You can also install the JoyProxy extension from the Chrome Web Store on Edge.

## Static line checklist

| Step | Done? |
| --- | --- |
| Static order active in <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a> | |
| Whitelist or credentials in <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> | |
| Host/port copied from generator | |
| Exit IP matches purchased region | |

## Rotating in Chrome

Rotating uses `gate.joyproxy.com:9001` with a **generated username**—the extension or system proxy both work; see <a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">Rotating proxy</a>.
