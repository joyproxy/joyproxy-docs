# Assign region

Each Custom port can target country only, country + province, or a specific city. Ports in the **same order** can use **different** regions.

## Steps

1. Open <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a> → **Custom Proxies**.
2. Select one or more active ports (checkboxes).
3. Click **Assign region**.
4. Choose **Country** → optional **Region / Province** → optional **City**.
5. Confirm. Each port keeps its own assignment.

Use this for multi-market QA: one port for the US store, another for the UK store, same account.

Region changes are done on this page (not via extract API). After you change geo, keep using that port’s **host:port** from Endpoints.

## Next

<a href="rotation.md" target="_blank" rel="noopener noreferrer">Set rotation</a>
