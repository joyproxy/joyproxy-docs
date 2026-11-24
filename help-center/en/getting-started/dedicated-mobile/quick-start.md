# Quick Start

Follow these 4 steps to order, configure, and verify your Dedicated Mobile Proxy:

## Step 1: Pick Country, Carrier & Term

1. Sign in to the [JoyProxy Console](https://www.joyproxy.com/admin-proxy-mobile-dedicated.html) and open **Dedicated Mobile** in the left sidebar.
2. Filter by country or **5G Only** to select your target carrier.
3. Choose a rental period (**2 / 7 / 14 / 30 days**) and quantity.

## Step 2: Purchase or Reserve

- When instant inventory is available, click **Buy Now** to activate immediately.
- If a carrier shows **Sold Out**, click **Reserve · 24h Activation** to place a reservation. Provisioning completes within 24 hours with email notification, and **your rental clock starts strictly upon delivery**.

## Step 3: Copy Credentials

Once the port status turns **Active**, open the **My Dedicated Mobile Proxies** tab to view:
- `Host` (fixed server address)
- `HTTP Port` and `SOCKS5 Port`
- `Username` and `Password`

Use the one-click copy buttons for HTTP URL, SOCKS5 URL, or antidetect browser format (`host:port:user:pass`).

## Step 4: Verify Your Connection

Run a quick check with `curl`:

```bash
curl -x "http://USERNAME:PASSWORD@HOST:HTTP_PORT" https://api.ipify.org?format=json
```

When a carrier IP in your selected country is returned, your port is ready for production. See [Send a proxy request](first-request.md) for Python and browser examples.
