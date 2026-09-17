# Whitelist & Users (Custom)

Same authorization rules apply to custom and custom residential proxies.

Before using any custom  proxy, configure at least one auth method in [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html).

### IP Whitelist

- Find your machine's **public IP** (not 192.168.x.x LAN)
- Whitelist & Users → IP Whitelist → enter IPv4 + remark → **Add IP**
- Connect from that IP without username/password

```
POST https://api.joyproxy.com/v1/whitelist/add?token=YOUR_API_TOKEN
{"ips":["203.0.113.50"],"remark":"office"}
```

### Username & Password

- Whitelist & Users → Username/Password → create credential (username 3+, password 6+)
- Use `http://USER:PASS@HOST:PORT` in apps that support proxy auth

*(Table — see [JoyProxy Help Center](https://www.joyproxy.com/help.html) for full table.)*

**💡 Tip**Whitelist and credentials can coexist; each app picks the mode it supports.
