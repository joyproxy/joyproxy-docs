# Switch Exit IP on Demand

Dedicated 4G/5G Mobile Proxies remain on a **stable static mobile exit** by default. Whenever your workflow needs a fresh IP from the same carrier, trigger an on-demand switch via either method below:

## Option 1: One-Click Switch in Console

1. Open **Dedicated 4G/5G → My Proxies**.
2. Click **↻ Switch IP** on the target port row.
3. The carrier baseband reconnects and assigns a new mobile exit IP within **5–15 seconds** (your Host, ports, and credentials remain unchanged).

## Option 2: Private Switch API URL

Click **Copy Switch API** to obtain your private JoyProxy refresh endpoint:

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

You can paste this URL directly into the "Change IP URL" field in AdsPower or BitBrowser.

> **Cooldown**: A **45-second cooldown** applies between consecutive switches to protect physical modem stability. Expect a brief 5–15 second reconnect window during each switch.
