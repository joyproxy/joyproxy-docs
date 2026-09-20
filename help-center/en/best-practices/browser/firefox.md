# Firefox proxy setup

Mozilla Firefox has its own proxy settings. Unlike Chrome, Firefox can set HTTP, HTTPS, or SOCKS5 inside the browser — **no third-party add-on, and no change to the OS-wide proxy**.

---

## Setup

### Step 1: Get proxy connection details

Sign in to the JoyProxy console and copy the endpoint you generated:

- **Static Proxies**: on **My Proxies**, copy the **Entry Point** (for example `us-ca.edge.joyproxy.com:10001`) and credentials;
- **Rotating Proxies**: on **Endpoint generator**, generate an endpoint, then copy the long username and the password you set on **Users & Whitelist**.

---

### Step 2: Open Firefox Network Settings

1. Open Firefox, click the **menu (three lines)** in the top-right, and choose **Settings**;
2. Stay on **General** in the left sidebar and scroll to the bottom;
3. Under **Network Settings**, click **Settings...**.

---

### Step 3: Manual proxy configuration

In the **Connection Settings** dialog:

1. Select **Manual proxy configuration**;
2. Fill in the protocol you are using:
   - **HTTP / HTTPS**:
     - **HTTP Proxy**: hostname (Static Proxies: `us-ca.edge.joyproxy.com`; Rotating gateway: `gate.joyproxy.com`);
     - **Port**: the port (`10001` or `9001`);
     - Check **Also use this proxy for HTTPS**;
   - **SOCKS5**:
     - **SOCKS Host**: hostname and port, then select **SOCKS v5**;
     - Check **Proxy DNS when using SOCKS v5** so DNS is resolved through the proxy.
3. Click **OK** to save.

---

### Step 4: Authenticate and verify

1. Open a new tab and visit an IP check page (for example `https://ipinfo.io`);
2. Firefox shows a native proxy authentication dialog;
3. Enter your proxy credentials (for Rotating Proxies, paste the full generated username) and sign in;
4. When the page loads and shows the exit IP and location of the proxy node, the setup is working. To restore the local network, set Connection Settings back to **No proxy**.
