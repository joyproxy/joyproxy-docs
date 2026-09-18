# Whitelist or username/password

Set **at least one** auth method in [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html) before you generate endpoints. You can keep both; each app picks what it supports.

Rotating uses a **generated username** plus this password. On Static, the short credential name **is** the proxy user. Product-wide walkthrough: [Authentication methods](../rotating/authentication.md).

## Choose a method

| Method | Best when |
| --- | --- |
| **IP whitelist** | Scrapers run on a known public IPv4 (VPS, office egress) |
| **Username / password** | Laptops, browsers, clouds with changing egress, tools that cannot pin one IP |

## Option A — IP whitelist

1. From the **same machine that will connect**, look up its **public IPv4** (not `192.168.x.x` / `10.x`).
2. **Whitelist & Users → IP Whitelist** → enter the IP and a remark → **Add IP**.
3. In the client, use only `host:port` from Endpoints.

API:

```bash
curl -X POST "https://api.joyproxy.com/v1/whitelist/add?token=YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"ips\":[\"203.0.113.50\"],\"remark\":\"production-crawler\"}"
```

### Keep the list accurate

- IPv4 only (`x.x.x.x`).
- Whitelist the IP that **opens** the connection, not the Exit IP on the order card.
- Name each entry (`staging`, `prod-crawler-1`) so you can remove the right row later.
- On AWS / GCP / Azure, egress IPs often change — prefer **username + password** there.
- If you look up the address while a personal VPN is on, you will whitelist the VPN exit instead of the server.

If the server’s public IP changes, update the whitelist or the connection will fail.

## Option B — Username and password

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

### 407 Proxy Authentication Required

Recreate the credential password, confirm you are not sending the website login, and retry. Do not mix a Rotating generated username with a Static `*.edge.joyproxy.com` host.

## Next

[Generate endpoints](generate-endpoints.md)
