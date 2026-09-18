# Set rotation interval

Rotation refreshes the **exit IP** on a timer while keeping the port’s **region rules**. The `host:port` your client uses stays the same.

## Steps

1. [My Proxies → Custom Proxies](https://www.joyproxy.com/admin-my-orders.html).
2. Select port(s).
3. Click **Rotation**.
4. Pick a preset: **Off**, 1 min, 5 min, 15 min, 1 hour — or enter seconds in **60-second steps**.
5. **Off** keeps the current IP until you change it or assign a timer.
6. Click **Apply**. The next cycle uses the new interval.

> **Important**
>
> Assign [region](assign-region.md) **before** enabling a timer, so rotated IPs stay in the geography you chose.

These controls live on My Proxies. Continue connecting with the generated host and port.

On-demand exit IP change: [New IP](new-ip.md).

## Next

[New IP](new-ip.md) · [Authorize and generate](authorize-and-generate.md)
