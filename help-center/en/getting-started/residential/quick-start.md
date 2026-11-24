# Residential Proxies Quick Start

Get up and running with Rotating Residential Proxies in 4 steps.

## Step 1: Buy a Residential Traffic Pack

1. Sign in to the console and open **Residential** in the left sidebar ([open console](https://www.joyproxy.com/admin-proxy-residential.html)).
2. On the **Buy** tab, choose a GB pack (starts at 1 GB for `$3.50`; unused traffic never expires).
3. Complete checkout with Account Balance, Card, PayPal, Multi-Chain Crypto, WeChat Pay, or UPI for instant activation.

See: [Purchase traffic](../rotating/purchase.md).

## Step 2: Create Proxy Credentials

1. Open the **Users & Whitelist** tab and create a proxy Username and Password (e.g., `user1`).
2. Rotating proxy connections always require Username/Password authentication. Optionally add your server IP to the whitelist for tokenless extract API calls.

See: [Users & Whitelist](../rotating/authentication.md).

## Step 3: Generate Endpoints

1. Open the **Endpoint generator** tab, select your country, state/province, city, ASN, protocol (`HTTP` or `SOCKS5`), and session mode (per-request rotate or sticky).
2. Click **Generate now** and copy the credentials:
   - **Host**: `gate.joyproxy.com`
   - **Port**: `9001`
   - **Username**: the full generated routing string (do not shorten)
   - **Password**: your proxy password from Step 2

See: [Generate endpoints](../rotating/extract-ip.md) · [Advanced extraction parameters](../rotating/extraction-parameters.md).

## Step 4: Verify Connectivity

```bash
curl -x http://<GENERATED_USER>:<PASSWORD>@gate.joyproxy.com:9001 https://api.ipify.org?format=json
```

For Python, Scrapy, Playwright, and browser setup examples, see [Send a proxy request](../rotating/first-request.md).
