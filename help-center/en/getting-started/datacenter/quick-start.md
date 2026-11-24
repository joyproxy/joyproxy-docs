# Datacenter Proxies Quick Start

Configure your dedicated Datacenter Proxy in 4 steps.

## Step 1: Order Datacenter Static Lines

1. Sign in to the console and open **Datacenter Proxies** in the left sidebar ([open console](https://www.joyproxy.com/admin-proxy-datacenter.html)).
2. Choose country/city, quantity, and duration (1, 7, 30, 90, 180, or 365 days) on the **Buy** tab and check out for instant activation.

See: [Purchase dedicated lines](../static/purchase.md).

## Step 2: Set Credentials or IP Whitelist

1. Open **Users & Whitelist** to set a proxy Username/Password, or whitelist your server's public IP for passwordless access.

See: [Users & Whitelist](../static/authentication.md).

## Step 3: Copy Your Fixed Entry Point

1. Open **My Proxies** and copy your **Entry Point** (e.g., `dc.joyproxy.com:10001`). Always connect to the Entry Point rather than the Dedicated Exit IP.

See: [View purchased lines](../static/view-lines.md) · [Generate endpoints](../static/extract-ip.md).

## Step 4: Verify Connectivity

```bash
curl -x http://<USERNAME>:<PASSWORD>@dc.joyproxy.com:<PORT> https://api.ipify.org?format=json
```

See the [Static Proxies Guide](../static/) for auto-renew, changing exit IPs, and response codes.
