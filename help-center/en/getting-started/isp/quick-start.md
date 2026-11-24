# ISP (Static Residential) Proxies Quick Start

Configure your dedicated ISP (Static Residential) proxy in 4 steps.

## Step 1: Order ISP Static Lines

1. Sign in to the console and open **ISP Proxies** in the left sidebar ([open console](https://www.joyproxy.com/admin-proxy-isp.html)).
2. On the **Buy** tab, choose your country, state/province, city, and carrier/ASN from the live dropdowns, then select quantity and duration (1, 7, 30, 90, 180, or 365 days).
3. Complete checkout for instant provisioning — traffic is unlimited for the plan duration.

See: [Purchase dedicated lines](../static/purchase.md).

## Step 2: Set Credentials or IP Whitelist

1. Open **Users & Whitelist** to create a proxy Username and Password;
2. Or add your server/office public IP to the **IP Whitelist** for passwordless access.

See: [Users & Whitelist](../static/authentication.md).

## Step 3: Copy Your Fixed Entry Point

1. Open **My Proxies** (or **Endpoint generator**) and copy your **Entry Point** (e.g., `isp.joyproxy.com:10001`).
2. Always configure the **Entry Point** (not the Dedicated Exit IP) as your proxy host and port.

See: [View purchased lines](../static/view-lines.md) · [Generate endpoints](../static/extract-ip.md).

## Step 4: Verify Connectivity

```bash
curl -x http://<USERNAME>:<PASSWORD>@isp.joyproxy.com:<PORT> https://api.ipify.org?format=json
```

For antidetect browsers, see [AdsPower proxy setup](../../best-practices/fingerprint/adspower.md) and [Multi-account isolation](../../best-practices/fingerprint/why-static.md). To rotate the exit IP in the same region, see [Change exit IP](../static/refresh-ip.md).
