# Username/password or whitelist

Set **Username/Password** on [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html) before you generate endpoints. You can also add an **IP whitelist**. Each app picks the method it supports.

On Static, the Users & Whitelist username **is** the proxy user. Product-wide walkthrough: [Authentication methods](../rotating/authentication.md).

## Username/Password (recommended)

Best for laptops, browsers, and tools that cannot pin one egress IP.

1. [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html) → **Username/Password**.
2. Create a User/Pass:
   - Username: starts with a **letter**, lowercase **a–z** and **0–9** only, **max 16** characters.
   - Password: **at least 6** characters.
3. In the client:

| Field | Value |
| --- | --- |
| Host | From Endpoints, e.g. `us-ca.edge.joyproxy.com` |
| Port | From Endpoints, e.g. `10001` |
| Username | The User/Pass username you created |
| Password | The User/Pass password |

```text
http://USER:PASS@us-ca.edge.joyproxy.com:10001
```

### 407 Proxy Authentication Required

Edit the password on Users & Whitelist, confirm you are not sending the website login, and retry. Do not mix a Rotating generated username with a Static `*.edge.joyproxy.com` host.

## IP whitelist

Best when scrapers run on a known public IPv4.

1. From the **same machine that will connect**, look up its **public IPv4**.
2. **Users & Whitelist → IP Whitelist** → enter the IP and a remark → **Add IP**.
3. In the client, use only `host:port` from Endpoints.

Whitelist the IP that **opens** the connection, not the Exit IP on the order card. Name each entry so you can tell staging from production.

## Next

[Generate endpoints](generate-endpoints.md)
