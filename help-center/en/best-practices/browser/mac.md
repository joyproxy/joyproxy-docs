# Mac system proxy setup

macOS can set a network proxy. After you configure it in System Settings, Safari and most system HTTP clients forward through that node.

---

## Prerequisite: IP Whitelist (recommended for Static / Custom Proxies)

macOS proxy fields for username and password are not reliable in every app. For **Static Proxies or Custom Proxies**, prefer IP Whitelist so the connection does not need a password:

1. Sign in to the JoyProxy console, open the target proxy network, and go to **Users & Whitelist**;
2. Click **Add to whitelist** to record the public IP of the Mac’s current network;
3. For Rotating Proxies, or if you did not add a whitelist entry, check **Proxy server requires a password** in the macOS proxy panel and enter the long proxy username and password.

---

## macOS Sonoma / Ventura

1. Click the **Apple menu () → System Settings**;
2. In the sidebar, choose **Network**;
3. On the right, select the active connection (**Wi-Fi** or **Ethernet**);
4. Click **Details...** next to the network name;
5. Open the **Proxies** tab;
6. Enable the matching protocol:
   - **HTTP / HTTPS**: turn on **Web proxy (HTTP)** and **Secure web proxy (HTTPS)**;
   - **SOCKS5**: turn on **SOCKS proxy**;
7. Fill in server details:
   - **Server**: the Entry Point hostname from the console (for example `us-ca.edge.joyproxy.com` — never the Dedicated Exit IP);
   - **Port**: the matching port;
   - (If not on the whitelist) check **Proxy server requires a password** and enter Username/Password;
8. Click **OK**, then **Apply** on the main screen.

---

## Verify and restore

- **Verify**: open Terminal and run `curl https://ipinfo.io`. Check the IP and location in the JSON;
- **Restore**: return to the Proxies panel, turn the proxy switches off, and apply to go back to a direct connection.
