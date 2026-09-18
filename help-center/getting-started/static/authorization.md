# Whitelist or username/password

Set **at least one** auth method in [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html) before you generate endpoints. You can keep both; each app picks what it supports.

## Option A — IP whitelist (servers and VPS)

Best when scrapers run on a known public IPv4.

1. From the **same machine that will connect**, look up its **public IPv4** (not `192.168.x.x` / `10.x`).
2. **Whitelist & Users → IP Whitelist** → enter the IP and a remark → **Add IP**.
3. In the client, use only `host:port` from Endpoints.

API:

```bash
curl -X POST "https://api.joyproxy.com/v1/whitelist/add?token=YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"ips\":[\"203.0.113.50\"],\"remark\":\"production-crawler\"}"
```

If the server’s public IP changes (home ISP, some clouds), update the whitelist or the connection will fail.

## Option B — Username and password

Best for laptops, browsers, and tools that cannot pin one egress IP.

1. **Username / Password** → create a credential (username **3+** characters, password **6+**).
2. In the client:

| Field | Value |
| --- | --- |
| Host | From Endpoints, e.g. `us-ca.edge.joyproxy.com` |
| Port | From Endpoints, e.g. `10001` |
| Username | The credential username you created |
| Password | The credential password |

Unlike Rotating, Static **does** use this short username in the proxy form. There is no second “generated gateway user.”

```text
http://USER:PASS@us-ca.edge.joyproxy.com:10001
```

## Next

[Generate endpoints](generate-endpoints.md)
