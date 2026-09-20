# Users & Whitelist

Before you connect to the Rotating Proxies gateway, set proxy credentials in the console.

> **Keep these separate**  
> The proxy Password is independent of your JoyProxy website Log In password. Resetting the website password does not change the proxy Password.

---

## Method 1: Username/Password (required)

This is the only auth method the Rotating Proxies gateway accepts.

1. Open **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users & Whitelist</a>**.
2. Switch to the **Username/Password** tab.
3. Choose **Credential mode**:
   - **Shared**: one User/Pass for every proxy network on the account (recommended when you start).
   - **Per product**: separate User/Pass for Residential, Mobile, Business / ISP, and Datacenter.
4. In **Create User/Pass**, fill in:
   - **Product**: the proxy network (for example Residential).
   - **Username**: start with a lowercase letter; only lowercase letters and digits (`a–z`, `0–9`); max 16 characters.
   - **Password**: at least 6 characters.
   - **Description (optional)**: a note so you can tell credentials apart.
5. Click **Create User/Pass**, then store the **Password** you set.

> **Important**  
> The short username you create here (for example `user123`) is for managing credentials. When you connect to `gate.joyproxy.com:9001`, the username field must be the **full long username** from **<a href="extract-ip.md" target="_blank" rel="noopener noreferrer">Endpoint generator</a>**.

### Manage and change the password

- In the credential list, click **Edit** to change the proxy Password.
- After you change it, update only the password in your client. You do not need to regenerate the long username on Endpoint generator.

---

## About IP Whitelist

> **Important**  
> The Rotating Proxies gateway (`gate.joyproxy.com:9001`) **currently supports Username/Password only**. IP Whitelist cannot skip password auth on this gateway.  
> **IP Whitelist** in the console is mainly for passwordless Static Proxies connections, and for calling the extract API from a fixed public server without a token.

To add a whitelist IP for Static Proxies or API extract:

1. Get the **fixed public IPv4** of your client or crawler server.
2. Open **<a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users & Whitelist</a>** → **IP Whitelist**.
3. Enter the IP in **IP Address** and a note in **Description (optional)**.
4. Click **Add IP** to save.
