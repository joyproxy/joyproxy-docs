# JoyProxy Browser Extension

**JoyProxy Browser Extension** is a proxy workbench for Chromium browsers: Google Chrome, Microsoft Edge, Brave, Opera, and Vivaldi (Chrome 114+).

It is built on Manifest V3. Proxy rules apply only to **this browser instance** and do not change the Windows or macOS system proxy. You can paste a one-off node, rotate a third-party extract API, or load lines purchased on JoyProxy — all in the extension.

Links:  
<a href="https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng" target="_blank" rel="noopener noreferrer">Chrome Web Store</a> · <a href="https://www.joyproxy.com/products/browser-extension.html" target="_blank" rel="noopener noreferrer">Product page</a> · <a href="https://github.com/joyproxy/joyproxy-extension" target="_blank" rel="noopener noreferrer">GitHub repository</a> · <a href="https://www.joyproxy.com/privacy-extension.html" target="_blank" rel="noopener noreferrer">Privacy policy</a>

---

## Install

### Option 1: Chrome Web Store (recommended)

1. Open the <a href="https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng" target="_blank" rel="noopener noreferrer">Chrome Web Store</a>.
2. Click **Add to Chrome**.
3. After install, open the puzzle-piece menu in the toolbar and **Pin** JoyProxy for quick switching.

*Note: Microsoft Edge can install the same listing from the Chrome Web Store link.*

### Option 2: Load unpacked ZIP (Developer mode)

If you cannot reach the Chrome Web Store, load the offline package:

1. Download the latest <a href="https://github.com/joyproxy/joyproxy-extension/releases/latest/download/joyproxy-extension-unpacked.zip" target="_blank" rel="noopener noreferrer">joyproxy-extension-unpacked.zip</a> from GitHub Releases and unzip it.
2. Open `chrome://extensions`, turn on **Developer mode** in the top-right.
3. Click **Load unpacked** and select the folder that contains `manifest.json`.
4. To update later, overwrite the local files and click **Reload** on the extension card.

---

## Main surfaces

The extension has two primary views:

- **Toolbar popup**: click the JoyProxy toolbar icon. Use it for high-frequency actions: connection status, paste a node, run a connectivity test, connect, or restore direct. If you are signed in to JoyProxy, you can also pick purchased lines here. A lit icon with a country code means the proxy is on; gray means direct.
- **Workbench side panel**: click **Open workbench** at the bottom of the popup. The right-hand panel supports saved profiles, bulk import, third-party API rotation, detailed logs, and full proxy-scope plus fingerprint settings.
- **Page context menu**: right-click any page and choose **Test this site with the current proxy** to check whether the active proxy can open that site.
- **Options page**: open Options from the extension details page. Use it to maintain Bypass domains, switch the public-IP lookup endpoint, or restore the proxy config from before takeover.

---

## Three ways to add a line

The extension treats every proxy source the same. A JoyProxy account is not required:

1. **Own proxy**  
   Paste `host:port`, `user:pass@host:port`, or standard `http://` / `socks5://` URIs. Save multiple profiles and import from text. **No JoyProxy sign-in**, and no cloud billing.
2. **Extract API**  
   Paste a provider extract URL, optional regex, and shared username/password. You can test once then apply, or poll a new IP on a timer.
3. **JoyProxy purchased lines**  
   If this browser is already signed in on <a href="https://www.joyproxy.com" target="_blank" rel="noopener noreferrer">joyproxy.com</a>, the workbench loads your Rotating Residential traffic packs and Static / Custom ports. Pick country, city, and session type in the extension — no need to copy long URLs.

---

## Basic flow

**Test first, then apply.** A failed test does not change the browser’s current network.

### Connect an own proxy

1. Open the **Proxy Address** tab in the popup or workbench.
2. Paste a node (for example `http://user:pass@us-ca.edge.joyproxy.com:10001`).
3. Click **Test** and wait for exit public IP, geo, and latency.
4. If the result looks right, click **Set as proxy** to take over browser traffic.
5. To stop, click **Restore direct** at the top.

### Configure extract-API rotation

1. Open the workbench **API** tab.
2. Paste the provider extract URL. In advanced options you can add an extract regex or a shared username/password.
3. Run mode: **Test only** (pull and report success rate) or **Apply after successful test** (first working node is applied).
4. For timed refresh, enable **Rotate browser proxy on a schedule**, set the interval (seconds) and total rounds, then click **Start test**.

### Use JoyProxy cloud lines

1. Sign in to the website console in this browser, then open the workbench **JoyProxy** tab.
2. Available products are listed. Choose **Rotating** or **Static**:
   - Rotating: pick country, state, and city, plus sticky duration or per-request rotate.
   - Static: pick an assigned dedicated IP from the dropdown.
3. Click **Test**, then **Set as proxy**.

---

## Advanced settings and isolation

The **Advanced** panel under the workbench covers routing scope and fingerprint controls, which helps reduce environment linkage across accounts.

Settings apply together with the network rules when you click **Set as proxy**.

### 1. Proxy scope

Control which requests go through the proxy and which stay direct:

- **All via proxy**: default. Everything except the Bypass list goes through the proxy.
- **Allowlist only**: only listed domains, IPs, or URL prefixes use the proxy; everything else is direct.

**Bypass** defaults include `localhost`, `127.0.0.1`, and `*.joyproxy.com`, so a bad node cannot lock you out of the console or local services. Wildcards such as `*.example.com` are supported, one entry per line.

### 2. Common protection and spoofing

- **User-Agent**: built-in desktop (Windows / macOS Chrome, Edge, Firefox, Safari) and mobile (Android, iPhone) UAs. Enable **Randomize each time you set as proxy** to change the client string on every apply, or type a custom value.
- **Limit WebRTC leaks**: sets WebRTC IP handling to `disable_non_proxied_udp` so STUN cannot skip the proxy and expose your LAN or real public IP.
- **Quick cleanup**: before switching regions, **Clear cookies for this site**, **Clear all data for this site** (including LocalStorage and cache), **Clear all cookies**, or **Clear browser cache** to drop leftover identifiers.

### 3. Fingerprint and low-level options

For stricter anti-fingerprint needs, the extension can spoof the runtime when a page loads. Each item can be fixed or **Randomize each time you set as proxy**:

- **Language and timezone**: spoof `navigator.language`, the `Accept-Language` header, and JavaScript local time. Match them to the exit country so you do not show a US IP with UTC+8.
- **Screen and hardware**: spoof `screen` resolution (1080p, 2K, mobile), device pixel ratio (DPR), CPU cores (`hardwareConcurrency`), and `deviceMemory`.
- **Graphics and fonts**: spoof WebGL renderer (NVIDIA, Intel, AMD, Apple) and Windows or macOS font lists.
- **Canvas noise**: add light random noise to HTML5 Canvas reads so the drawing hash is not stable.
- **Privacy headers**: strip Referer on navigations, or send `DNT: 1` (Do Not Track).

---

## Local Relay

Chromium cannot natively inject credentials for some authenticated proxies — for example SOCKS5 with username/password.

The extension therefore runs a loopback forwarder (default `127.0.0.1:17890`):

- On the unpacked ZIP build, the first time you use an authenticated HTTP proxy on Windows, if you see **Local relay is not running**, go to the `scripts` folder in the unpacked directory, double-click **`install-relay.cmd`** once to register native messaging, then reload the extension.
- For **SOCKS5 with username/password**, Chrome’s own limits still apply. Prefer the matching HTTP port, or add your current exit IP to the provider **IP Whitelist** and connect without a password.

---

## Permissions and privacy

JoyProxy follows least privilege. Proxy configs, account tokens, and custom parameters stay in `chrome.storage.local` on this machine and are not uploaded to third-party servers.

- **Why these permissions**: `proxy` (browser proxy), `sidePanel` (workbench UI), `declarativeNetRequest` and `privacy` (safe header changes and WebRTC protection), `browsingData` (site cookie and cache cleanup).
- **Network calls**: besides JoyProxy official APIs you invoke, the extension only hits public IP lookup APIs (such as `ipinfo.io`) during a connectivity test. Tests do not collect extra browsing behavior.
