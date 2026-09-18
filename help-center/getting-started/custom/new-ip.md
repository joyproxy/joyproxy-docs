# New IP

**New IP** replaces the **exit IP** on a Custom port. The region you [assigned](assign-region.md) stays. The `host:port` your client uses does **not** change.

## In My Proxies

1. Sign in → [My Proxies](https://www.joyproxy.com/admin-my-orders.html) → Custom.
2. Open **New IP** on the port.
3. Read the wizard, then **Replace exit IP**.
4. Do not close the page. You will see a 1-minute progress timer; if needed the wizard asks you to wait one more minute. The line drops briefly, then the new exit IP is live (about **1–2 minutes**, sometimes longer).

Keep connecting with the **same host:port** from Endpoints.

For a **timer** that refreshes the exit IP on a schedule, use [Set rotation](rotation.md). New IP is the on-demand control; Rotation is the repeating one.

Custom dedicated ports have **no daily New IP cap**. The wizard still shows the wait interval between refreshes on the same port.

Static ports use the same **New IP** button: [Static → New IP](../static/refresh-ip.md).

## Next

[Authorize and generate](authorize-and-generate.md)
