# View and manage ports

After checkout, review and manage every Custom Proxies port on **<a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a>**.

---

## Fields on the page

Open **<a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a>** and switch to **Custom Proxies**. The list includes:

| Field | Meaning |
| --- | --- |
| **Id** | Unique identifier for the port in the system. |
| **Dedicated connection address (Host:Port)** | Host and port your client uses (for example `us-ca.edge.joyproxy.com:20001`). |
| **Dedicated Exit IP** | The public exit IP currently bound to this port. |
| **Assign region** | Country / state / city bound to the port (`Unassigned` if you have not set one). |
| **Rotation** | Automatic exit-IP policy (`Rotate: Off` or `Rotate: Every 600s`). |
| **End** | When this port’s plan expires. |
| **Auto-renew** | Whether this port order renews from Account Balance. |

---

## Actions

On each row you can:

1. **<a href="assign-region.md" target="_blank" rel="noopener noreferrer">Assign region</a>**: set or change the country and city for this port.
2. **<a href="rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">Rotation</a>**: set how often the port replaces its exit IP (for example 5 minutes / 10 minutes / 1 hour).
3. **<a href="rotation-and-refresh.md" target="_blank" rel="noopener noreferrer">New IP</a>**: replace the exit IP immediately (same country and network, a new IP).
4. **<a href="auto-renew.md" target="_blank" rel="noopener noreferrer">Auto-renew</a>**: turn automatic renewal on or off for this order.
5. **Copy connection host and port**: copy the `host:port` proxy address.
