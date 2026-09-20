# Response codes and common errors

When you connect through Static Proxies, these are the usual errors and what to check:

## 1. 407 proxy authentication failed

- **Check**: Confirm the Username and Password in your client match **<a href="authentication.md" target="_blank" rel="noopener noreferrer">Users & Whitelist</a>**. If you use IP Whitelist, confirm this machine’s public IPv4 is added.

## 2. 403 target refused the request

- **Check**: Run `curl -x ... https://api.ipify.org`. If ipify returns an IP, the proxy is working and the target site is blocking the exit. Use **<a href="refresh-ip.md" target="_blank" rel="noopener noreferrer">New IP</a>** to replace the exit IP on that line.

## 3. 502 / 504 connection timed out

- **Check**: Confirm the proxy Host and Port. On **<a href="view-lines.md" target="_blank" rel="noopener noreferrer">My Proxies</a>**, confirm the line is active and has not expired.
