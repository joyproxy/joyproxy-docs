# Windows system proxy setup

When most desktop apps on Windows 10 or Windows 11 should share one proxy, set it in the OS network settings.

---

## Prerequisite: IP Whitelist (recommended for Static / Custom Proxies)

Windows’ built-in proxy panel only accepts a **server hostname** and **port** — **it cannot store a proxy username and password**. At the OS level, use **Static Proxies** or **Custom Proxies**.

*Note: the Rotating Proxies gateway (`gate.joyproxy.com:9001`) requires a long username and password. OS-level IP Whitelist cannot skip that. For Rotating Proxies, use Browser Extension or a third-party client that supports credentials.*

To use Static or Custom Proxies at the OS layer without a password, enable **IP Whitelist**:

1. Sign in to the JoyProxy console, open the target network console, and go to **Users & Whitelist**;
2. In **IP Whitelist**, click **Add to whitelist** (the console detects and records your current public IPv4);
3. The whitelist takes effect within about 1 minute. After that, Static or Custom Proxies from this network can connect without Username/Password.

---

## Windows 11

1. Open **Start → Settings** (or press `Win + I`);
2. In the left menu, choose **Network & internet**;
3. Click **Proxy**;
4. Next to **Manual proxy setup**, click **Set up**;
5. In the dialog:
   - Turn the switch **On**;
   - **Proxy IP address**: the **Entry Point** hostname from the JoyProxy console (for example `us-ca.edge.joyproxy.com` — no port, and never the Dedicated Exit IP);
   - **Port**: the port number (for example `10001`);
   - Keep the default local bypass list (`localhost;127.0.0.1`);
6. Click **Save**.

---

## Windows 10

1. Open **Start → Settings → Network & Internet**;
2. In the left nav, click **Proxy**;
3. Scroll to **Manual proxy setup**;
4. Turn on **Use a proxy server**;
5. Enter the Entry Point hostname in the address field and the port in the port field;
6. Click **Save**.

---

## Verify and turn off

- **Verify**: open a browser to `https://api.ipify.org` and confirm the public IP matches the proxy node’s exit IP;
- **Turn off**: return to the same panel, switch **Use a proxy server** **Off**, and save to restore the local network.
