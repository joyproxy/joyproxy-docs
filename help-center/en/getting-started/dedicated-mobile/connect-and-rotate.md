# Connection Setup & On-Demand IP Switch

## 1. Retrieve Static Mobile Credentials

Once your port status is **Active**, open [Dedicated Mobile → My Dedicated Mobile Proxies](https://www.joyproxy.com/admin-proxy-mobile-dedicated.html?tab=orders) to view your fixed endpoint credentials:

- **Host** (fixed server IP)
- **HTTP Port** and **SOCKS5 Port** (direct connection, unlimited traffic)
- **Username / Password** (unique per port)

Use the one-click copy buttons:
- **Copy HTTP**: `http://user:pass@host:http_port`
- **Copy SOCKS5**: `socks5://user:pass@host:socks5_port`
- **Copy Antidetect**: `host:port:user:pass` (ready for AdsPower, BitBrowser, HubStudio)

## 2. On-Demand IP Switch (Static by Default)

Your Dedicated Mobile Proxy stays on a stable mobile exit by default. Whenever you decide you need a new IP, click **↻ Switch IP** on that port row in **My Dedicated Mobile Proxies** to trigger a carrier baseband reconnect (takes **5–15 seconds** to assign a fresh IP on the same carrier).

> A **45-second** cooldown applies between switches to protect physical modem stability.

## 3. Private On-Demand Switch API

Click **Copy Switch API** to get your private JoyProxy endpoint for scripts or antidetect browsers:

```bash
curl "https://api.joyproxy.com/api/v1/mobile-dedicated/rotate/<your_rotate_token>"
```

Example response:

```json
{
  "success": true,
  "order_no": "MD261124-XXXXXX",
  "message": "IP rotation triggered. New mobile IP will be active in 5-15 seconds.",
  "cooldown_sec": 45
}
```
