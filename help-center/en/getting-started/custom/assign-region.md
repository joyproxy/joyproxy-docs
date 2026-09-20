# Assign region

A core Custom Proxies advantage: **after you buy a port, you can Assign region — or switch country and city — in the console at any time.**

---

## Steps

1. Log in to the JoyProxy console and open **<a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a>**.
2. Find the Custom Proxies port you want to configure.
3. Click **Assign region**.
4. In the region picker:
   - **Select a country**: choose the target country (for example United States, Japan, or Germany).
   - **State / province / city (optional)**: narrow to a specific state or province.
   - **City (optional)**: narrow to a specific city.
5. Click **Assign**.
6. Within a few seconds, the port’s exit IP is reassigned to the selected region.

---

## Hot switching notes

- **Connection address does not change**: After you change the country or city, the Host and Port your client uses (for example `us-ca.edge.joyproxy.com:20001`) **stay the same**. You do not need to edit code or reconfigure the client.
- **How fast it applies**: A region switch usually takes 3–10 seconds. In-flight TCP connections may drop once; send a new request to use the new region’s exit IP.
- **Network tier lock**: If the first assignment used a given network tier (**Standard Network** or **Premium Network**), later Assign region choices must stay on that same tier.
