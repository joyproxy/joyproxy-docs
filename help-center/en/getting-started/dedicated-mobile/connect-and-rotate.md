# Connection Setup & One-Click / API IP Rotation

## 1. Direct HTTP / SOCKS5 Credentials

Once your port status changes to **Active** under **Dedicated Mobile → My Proxies** (`/admin-proxy-mobile-dedicated.html?tab=orders`), you can view and one-click copy:

- **HTTP URL**: `http://user:pass@host:http_port`
- **SOCKS5 URL**: `socks5://user:pass@host:socks5_port`
- **Anti-detect format**: `host:port:user:pass` (ready for AdsPower, BitBrowser, HubStudio)

## 2. One-Click Console Rotation

Click **Rotate IP** on any active port to trigger a cellular network reconnect. A fresh 4G/5G carrier IP becomes active within **5–15 seconds** (45-second cooldown between rotations).

## 3. Private Rotation API URL

Click **Copy Rotate API** to get your port's private JoyProxy rotation endpoint:

```bash
curl "https://api.joyproxy.com/api/v1/mobile-dedicated/rotate/<your_rotate_token>"
```

Paste this URL into your anti-detect browser's "Change IP URL" field or automation scripts to switch IPs programmatically.
