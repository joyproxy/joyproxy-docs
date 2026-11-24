# Authentication and Formats

Dedicated Mobile Proxies use **per-port Username / Password authentication**. No IP whitelisting is required, so you can connect seamlessly from office networks, home broadband, cloud servers, or mobile devices.

## Credential Fields

Every active port under **My Dedicated Mobile Proxies** provides:
- **Host**: Fixed proxy server address
- **HTTP Port**: Endpoint for HTTP/HTTPS traffic
- **SOCKS5 Port**: Endpoint for SOCKS5 traffic
- **Username / Password**: Unique credentials dedicated to that port

## One-Click Copy Formats

| Client / Tool | Format |
| :--- | :--- |
| **HTTP / HTTPS URL** | `http://username:password@host:http_port` |
| **SOCKS5 URL** | `socks5://username:password@host:socks5_port` |
| **AdsPower / BitBrowser / HubStudio** | `host:http_port:username:password` (or SOCKS5 port) |

> **Security Note**: Keep your port credentials confidential and never commit them to public repositories.
