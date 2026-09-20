# Chrome and Edge proxy setup

Google Chrome and Microsoft Edge are both Chromium-based. By default they follow the Windows or macOS system proxy.

To use a proxy in Chrome or Edge only, there are two common approaches: **JoyProxy Browser Extension (applies to this browser only — recommended)**, or **a command-line launch flag for a dedicated proxy**.

---

## Method 1: Official JoyProxy Browser Extension (recommended, browser-only)

If you want the proxy on this browser only, without changing other apps on the OS, install the official JoyProxy Browser Extension.

1. **Install the extension**: search for **JoyProxy** in the Chrome Web Store or the Edge Add-ons store and add it;
2. **Copy connection details**:
   - **Static Proxies**: sign in to the JoyProxy console, open **My Proxies**, and copy the line’s **Entry Point** (for example `us-ca.edge.joyproxy.com:10001`) plus Username/Password;
   - **Rotating Proxies**: open **Endpoint generator**, generate an endpoint, and copy the long username and password;
3. **Configure and apply**:
   - Click the JoyProxy icon on the browser toolbar;
   - Choose the matching product (Static or Rotating), then fill in host, port, and credentials (if you are signed in to your JoyProxy account in the extension, you can pick a purchased line directly);
   - Click **Test and apply**;
4. **Verify and switch**: after a successful test, the extension header shows the current exit IP and region. To return to your local network, click **Direct connection** in the top-right of the popup.

---

## Method 2: Command-line launch flag for a dedicated proxy

If you prefer not to install an extension, add a launch argument to the browser shortcut so this browser uses its own proxy.

### Windows

1. Find the Chrome or Edge shortcut on the desktop, right-click, and choose **Properties**;
2. Open the **Shortcut** tab and find the **Target** field;
3. Add a **space** after the existing path, then append this argument (Static Proxies example):
   ```text
   --proxy-server="http://us-ca.edge.joyproxy.com:10001"
   ```
4. Click **Apply** and save;
5. **Authentication**: launch flags cannot carry a password. For **Static Proxies or Custom Proxies**, open **Users & Whitelist** in the JoyProxy console and add this computer’s public IP to **IP Whitelist** so the connection can skip Username/Password. If the IP is not whitelisted, or you are using the **Rotating Proxies** gateway (Rotating always requires Username/Password), Chrome or Edge will show a native HTTP auth dialog on the first page load — enter the long proxy username and password.

---

## Notes

- **System proxy vs browser proxy**: Chrome’s **Open your computer's proxy settings** opens the OS-wide network panel. Changing the proxy there sends **all** traffic on the machine through the proxy. For browser-only isolation, use Method 1.
