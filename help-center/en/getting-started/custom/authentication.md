# Set Username/Password and IP Whitelist

When you connect to a Custom Proxies port, you can authenticate with **Username/Password** or **IP Whitelist**.

---

## Method 1: Username/Password

This is the usual method for code, desktop clients, and antidetect browsers.

1. Open **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users & Whitelist</a>**.
2. Switch to the **Username/Password** tab.
3. Click **Create User/Pass**:
   - Set **Username**: for example `user123`.
   - Set **Password**: for example `pass123`.
4. After it is saved, every Custom Proxies port on the account can use these credentials:
   ```text
   http://user123:pass123@us-ca.edge.joyproxy.com:20001
   ```

---

## Method 2: IP Whitelist

If your app runs on a server with a fixed public IPv4 (for example AWS EC2, Alibaba Cloud ECS, or a colocation host):

1. Open **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users & Whitelist</a>**.
2. Switch to the **IP Whitelist** tab.
3. Click **Add IP**, enter the server’s public IPv4 address, and save.
4. After it is added, connections from that server do not need a Username and Password — connect to `us-ca.edge.joyproxy.com:20001` directly.

---

## Common auth questions

- **Several credentials**: You can create more than one Username/Password and give them to different teammates or projects.
- **Username/Password and IP Whitelist together**: If both are set, requests from a whitelisted IP can connect without credentials, and requests that send Username/Password still authenticate.
