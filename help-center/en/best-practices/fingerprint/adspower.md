# AdsPower proxy setup

AdsPower is a widely used antidetect browser. This page shows how to attach JoyProxy Static Proxies or Rotating Proxies.

---

## Step 1: Get JoyProxy connection details

Sign in to the JoyProxy console:

- **Static Proxies**: open **My Proxies**, copy the **Entry Point** (for example `us-ca.edge.joyproxy.com:10001`) and credentials;
- **Rotating Proxies**: open **Endpoint generator**, generate an endpoint (host `gate.joyproxy.com`, port `9001`, copy the long username and password).

---

## Step 2: Create a profile in AdsPower

1. Open AdsPower and click **New Profile**;
2. Name the environment and pick OS and browser kernel;
3. Find the **Proxy** section.

---

## Step 3: Fill in the proxy

1. **Proxy type**: `HTTP` or `SOCKS5`;
2. **Proxy host**: Entry Point hostname (for example `us-ca.edge.joyproxy.com` — never Dedicated Exit IP);
3. **Proxy port**: the port;
4. **Proxy username / password**: credentials for that network (for Static Proxies, leave blank if this public IP is on **IP Whitelist**; Rotating Proxies always need the long username and password);
5. Click **Check proxy** to test;
6. On success, AdsPower shows exit IP, country, and city;
7. In advanced settings, set **Timezone** and **WebRTC** to match based on IP;
8. Click **OK**, save, and start the profile.
