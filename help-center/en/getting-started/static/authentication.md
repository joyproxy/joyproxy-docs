# Set Username/Password and IP Whitelist

Static Proxies support Username/Password authentication or password-free access through IP Whitelist.

---

## Method 1: Username/Password

1. Open **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users & Whitelist</a>**.
2. Switch to the **Username/Password** tab.
3. Create User/Pass or pick an existing credential:
   - **Username**: for example `user123`.
   - **Password**: for example `pass123`.
4. After saving, connect to the static dedicated endpoint `us-ca.edge.joyproxy.com:10001` with that Username and Password.

---

## Method 2: IP Whitelist

If your app runs on a server with a fixed public IPv4 address:

1. Open **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users & Whitelist</a>** → **IP Whitelist**.
2. Enter the server’s public IPv4 address and save.
3. After it is added, connections from that server do not need a Username and Password — connect to the dedicated `host:port` directly.
