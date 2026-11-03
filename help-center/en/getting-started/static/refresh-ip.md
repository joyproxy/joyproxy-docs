# Change the exit IP

During an active Static Proxies plan, if a target site blocks the current exit IP or you need a fresh one, you can replace it from the console.

## Steps

1. Open **<a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a>**.
2. Find the Static Proxies line whose IP you want to replace.
3. Click **New IP** on that line.
4. Confirm in the dialog. JoyProxy assigns a new exit IP to the same dedicated `host:port`.

> **Note**  
> After you change the exit IP, the proxy `host:port` stays the same. You do not need to edit client settings. The new IP usually applies within a few seconds to a couple of minutes; the line may drop briefly.

---

## Upgrade to Private Proxies

If changing the exit IP still does not meet strict performance requirements, or if your workloads require ultra-low latency and dedicated large bandwidth, please submit a ticket to apply for Private Proxies. Our engineering team will evaluate your requirements and provision dedicated direct-connect resources.
