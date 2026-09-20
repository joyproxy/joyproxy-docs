# Official Browser Extension

JoyProxy Browser Extension is a lightweight proxy manager. When you apply a proxy in the extension, **rules apply only to this browser window. They do not change OS network settings and do not affect other apps on the computer**.

---

## Step 1: Install the extension

The extension is built for Chromium and works in mainstream browsers:

1. **Install**:
   - **Chrome**: search **JoyProxy** in the Chrome Web Store and add it;
   - **Edge**: search **JoyProxy** in Edge Add-ons and add it;
   - Direct install: <a href="https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng" target="_blank" rel="noopener noreferrer">Chrome Web Store listing</a>
2. **Pin it**: after install, open the browser’s Extensions menu (puzzle icon) and pin JoyProxy to the toolbar.

---

## Step 2: Configure Static Proxies

1. **Copy connection details**:
   - Sign in to the JoyProxy console, open **My Proxies**, and copy the **Entry Point** host and port (for example `us-ca.edge.joyproxy.com:10001`);
   - Confirm Username/Password or IP Whitelist status;
2. **Fill in the extension**:
   - Click the JoyProxy toolbar icon;
   - Switch to the **Static** tab;
   - Enter hostname, port, and credentials (if you signed in to your JoyProxy account in the extension, purchased lines sync so you can pick one);
3. **Test and apply**:
   - Click **Test and apply**;
   - The extension runs a connectivity handshake and, on success, shows a green exit public IP and location;
4. **Browse as usual**: all requests from this browser now go through that proxy node.

---

## Step 3: Configure Rotating Proxies

1. Switch to the **Rotating** tab in the extension;
2. Choose country and session mode (new IP every request, or sticky session);
3. Enter the generated long username and proxy password;
4. Apply. The extension schedules nodes according to those rules.

---

## Step 4: Disconnect and restore a direct connection

When you no longer need a proxy, click **Direct connection** in the top-right of the popup. The browser returns to the local network immediately.
