# System-wide Proxy (Whole Computer IP)

Route all system traffic through JoyProxy on Windows / macOS.

## Windows

- Settings → Network & Internet → Proxy
- Enable **Use a proxy server**
- Address = endpoint host; Port = endpoint port
- Save — all apps using system proxy will egress via JoyProxy

## macOS

- System Settings → Network → your connection → Details → Proxies
- Enable Web Proxy (HTTP) and/or SOCKS Proxy
- Server = host; Port = port; add credentials if required

**⚠️ Note**System proxy affects all traffic. Disable when not needed.
