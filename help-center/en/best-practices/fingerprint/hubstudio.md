# Hubstudio proxy setup

Hubstudio is an antidetect browser built for teams. This page shows how to attach JoyProxy Static Proxies.

---

## Setup

1. Open Hubstudio and go to **Environment management → New environment**;
2. Enter a name;
3. In **Proxy settings**:
   - **Proxy type**: custom proxy;
   - **Protocol**: `HTTP` or `Socks5`;
   - **IP / domain**: Entry Point hostname (for example `us-ca.edge.joyproxy.com`);
   - **Port**: the port (for example `10001`);
   - **Username and password**: credentials (leave blank if this IP is on **IP Whitelist**);
4. Click **Test connection** and confirm the handshake;
5. Keep WebRTC and timezone matching the proxy IP (default);
6. Click **Finish** and start the environment.
