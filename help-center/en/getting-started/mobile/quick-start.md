# Mobile Proxies Quick Start

Get started with Rotating 4G/5G Mobile Proxies in 4 steps.

## Step 1: Buy a Mobile Traffic Pack

1. Sign in to the console and open **Mobile** in the left sidebar ([open console](https://www.joyproxy.com/admin-proxy-mobile.html)).
2. Select a GB pack on the **Buy** tab (starts at 1 GB for `$4.00`; traffic never expires) and complete checkout.

See: [Purchase traffic](../rotating/purchase.md).

## Step 2: Create Proxy Credentials

1. Open **Users & Whitelist** and create a proxy Username and Password.

See: [Users & Whitelist](../rotating/authentication.md).

## Step 3: Generate Mobile Endpoints

1. Open **Endpoint generator**, choose your target country, city, or carrier, protocol (`HTTP` or `SOCKS5`), and session mode.
2. Click **Generate now** to get `gate.joyproxy.com:9001` and your encoded routing username.

See: [Generate endpoints](../rotating/extract-ip.md) · [Advanced extraction parameters](../rotating/extraction-parameters.md).

## Step 4: Verify Connectivity

```bash
curl -x http://<GENERATED_USER>:<PASSWORD>@gate.joyproxy.com:9001 https://api.ipify.org?format=json
```

See [Send a proxy request](../rotating/first-request.md) and [Response codes](../rotating/response-codes.md) for code examples and troubleshooting.
