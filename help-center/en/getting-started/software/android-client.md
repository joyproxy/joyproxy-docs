# Android Client

The software hub and site menu label this app **Proxy Client**. The product page title is **JoyProxy Android Client**.

**JoyProxy Android Client** is a lightweight mobile proxy app built on the sing-box `libbox` core. Without root, it can send phone or Android-emulator traffic through HTTP or SOCKS5, with per-app routing rules.

Use it on a real phone for overseas social ops and cross-border debugging, or in desktop emulators (LDPlayer, MuMu, Nox, and similar) for batch automation.

Links:  
<a href="https://www.joyproxy.com/products/android-client.html" target="_blank" rel="noopener noreferrer">Official product page</a> · <a href="https://github.com/joyproxy/joyproxy-client-android/releases" target="_blank" rel="noopener noreferrer">GitHub Releases (APK)</a> · <a href="https://github.com/joyproxy/joyproxy-client-android" target="_blank" rel="noopener noreferrer">Source repository</a>

---

## Download and install

1. Open <a href="https://github.com/joyproxy/joyproxy-client-android/releases" target="_blank" rel="noopener noreferrer">GitHub Releases</a> and download the signed **`app-release.apk`**.
2. Copy the APK to the phone or emulator and install it. On first install Android may ask you to allow apps from unknown sources — allow it and continue.
3. Open **JoyProxy** to reach the main setup screen.

---

## Configure and connect

The client accepts any standard HTTP / HTTPS or SOCKS5 proxy. For JoyProxy cloud lines, fill in the fields for that product:

### 1. Node details

- **Protocol**: **HTTP** or **SOCKS5**.
- **Host** and **Port**:
  - Rotating Proxies example: Host `gate.joyproxy.com`, Port `9001`.
  - Static Proxies example: Host such as `us-ca.edge.joyproxy.com`, Port the dedicated port from purchase (for example `10001`).
- **Username and password**: Rotating gateway connections need the long username and proxy Password. For Static Proxies already bound to **IP Whitelist**, you can leave credentials empty.

### 2. Connectivity test

While **disconnected**, tap **Test**. The client handshakes with the server and shows latency. Confirm the node works before you connect.

### 3. Proxy scope

To avoid sending every app through the proxy, choose one of three routing modes:

- **Global**: all apps on the device use the proxy.
- **Whitelist** (recommended): **only checked apps** use the proxy; others stay direct. Select the target browser or business app and leave messaging or banking apps direct so daily chat is not interrupted and risk checks are not triggered.
- **Blacklist**: checked apps stay direct; every other app uses the proxy.

*Tip: if you change the list or mode while connected, tap **Disconnect** then **Connect** again before the new scope takes effect.*

### 4. Connect and disconnect

1. When the form looks right, tap **Connect**.
2. The first time, Android shows a connection-request dialog. Tap **OK** to allow a local VPN tunnel.
3. After connect, the status bar shows the VPN **key icon**. Target-app traffic is now routed.
4. When you are done, open the app and tap **Disconnect** to restore the device network.

---

## Pair with Mobile Proxies for a real mobile network

For cross-border marketing, multi-account anti-ban, and mobile data checks, the device fingerprint should match the network.

Pair this client with JoyProxy <a href="../rotating/network-types.md" target="_blank" rel="noopener noreferrer">Rotating Mobile Proxies</a>:
- Install the client on a real Android phone and use the assigned mobile carrier IP (4G / 5G cellular exit).
- With Whitelist routing, the target app sees ASN, IP, and environment consistent with a local mobile network, which lowers block rates.

---

## Notes

- **Permissions**: the client uses Android’s standard VpnService API for local loopback routing. **Root is not required**, and it does not modify system files.
- **Language**: the top settings switch between Chinese and English UI.
- **Source and build**: GPLv3. To compile yourself, set up the Android NDK and build the `libbox.aar` dependency first.
