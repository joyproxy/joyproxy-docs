# Android Client and per-app routing

On a phone, the usual goal is: **proxy only selected apps (test tools, a business app) while everyday apps stay on the local network so you do not burn proxy traffic**.

JoyProxy **Android Client** does that with **Per-App Routing**.

---

## Step 1: Download and install

1. On the Android device, open: <a href="https://www.joyproxy.com/products/software.html" target="_blank" rel="noopener noreferrer">JoyProxy software downloads</a>;
2. Download the **Proxy Client (Android)** APK and install it;
3. The client uses Android’s standard network stack — **no root required**.

---

## Step 2: Enter proxy details

1. Open JoyProxy Android Client and add a profile;
2. Fill in:
   - **Static Proxies**: protocol `HTTP` or `SOCKS5`, server = Entry Point hostname (for example `us-ca.edge.joyproxy.com`), then port and credentials;
   - **Rotating Proxies**: server `gate.joyproxy.com`, port `9001`, long username and proxy password;
3. Save the profile.

---

## Step 3: Per-App Routing

1. Open proxy scope settings in the client;
2. Set the mode to **Whitelist** (selected apps only);
3. Check the apps that should use the proxy;
4. Unchecked apps keep using the local network.

---

## Step 4: Connect and verify

1. On the home screen, select the profile and tap **Connect**;
2. Allow the system VPN / connection permission prompt;
3. After it connects, test the checked apps. Unchecked apps are unchanged.
