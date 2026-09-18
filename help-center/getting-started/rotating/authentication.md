# Authentication methods

Rotating connections use **username + password**. Static and Custom dedicated lines can use the same credentials **or** an **IP whitelist** so a known server connects without embedding a password.

Manage both on [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html) (also **Users & Whitelist** on the Residential / Mobile / Business console).

## Two logins

| Login | Used for |
| --- | --- |
| Website email + password | Dashboard, billing, [Account settings](https://www.joyproxy.com/admin-settings.html) |
| Proxy username + password | HTTP / HTTPS / SOCKS5 connections |

If you cannot open the dashboard, use [Forgot password](../../user-console/forgot-password.md). That reset does **not** change the proxy password.

## Choose a method

| Product | Method in the client |
| --- | --- |
| **Rotating** | Generated username + credential **password** |
| **Static / Custom** | IP whitelist, **or** the short credential username + password |

You can keep several credentials and several whitelist entries on one account. Each app picks the method it supports.

## Username and password

### Create a proxy user

1. Open [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html).
2. Open **Username / Password**.
3. Create a credential:
   - Label / username field: **3 or more** characters.
   - Password: **6 or more** characters.
4. Save. Copy the **password** into a password manager or `.env` file.

Keep separate credentials for production scrapers and local tests so you can rotate one secret without touching the other.

### What you type in the client (Rotating)

The label you typed in Whitelist & Users is **not** the gateway username. Endpoints writes geo and session into a **long generated string**. That string is what the client sends as username.

| Client field | Value |
| --- | --- |
| Proxy host | `gate.joyproxy.com` |
| Proxy port | `9001` |
| Proxy username | **Generated username** from [Endpoints](generate-endpoints.md) |
| Proxy password | The password you just created |

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

> **Important**
>
> Do not put the short Whitelist & Users name into the Rotating username field. Browser autofill and password managers often paste the label — replace it with the generated string before you connect.

### What you type in the client (Static / Custom)

On dedicated lines, the **short credential username** *is* the proxy user. There is no second generated gateway user.

| Client field | Value |
| --- | --- |
| Proxy host | From Endpoints, for example `us-ca.edge.joyproxy.com` |
| Proxy port | From Endpoints, for example `10001` |
| Proxy username | The credential username you created |
| Proxy password | The credential password |

```text
http://USER:PASS@us-ca.edge.joyproxy.com:10001
```

Walkthrough: [Static authorization](../static/authorization.md).

### Edit or replace a password

If a password may have leaked, or you see **407 Proxy Authentication Required**:

1. Open **Username / Password**.
2. Create a **new** credential (or replace the password on the existing row if the console offers it).
3. Update `YOUR_PASS` in every client. The generated Rotating **username** can stay the same.

Delete unused credentials so old configs fail closed instead of draining traffic.

### 407 Proxy Authentication Required

Work through this list:

1. Password is the **Whitelist & Users** secret — not the website login.
2. For Rotating, username is the **full generated string** from Endpoints.
3. For Static / Custom with user/pass, username is the **short** credential name.
4. Recreate the password and retry with a redacted curl:

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

## IP whitelist

Best when scrapers run on a **known public IPv4** (a VPS or office egress that does not change).

Rotating clients send username + password as described above. Whitelist is the method you use today on **Static** and **Custom** so those `host:port` lines can omit credentials.

### Add an IP

1. From the **same machine that will connect**, look up its **public IPv4** (not `192.168.x.x` / `10.x`).
2. [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html) → **IP Whitelist**.
3. Enter the address and a remark (for example `production-crawler`) → **Add IP**.
4. In the client, use only the `host:port` from Endpoints.

API:

```bash
curl -X POST "https://api.joyproxy.com/v1/whitelist/add?token=YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"ips\":[\"203.0.113.50\"],\"remark\":\"production-crawler\"}"
```

### Rules that keep whitelist working

- Use **IPv4** (`x.x.x.x`).
- Add the IP of the machine that **opens** the proxy connection, not the Exit IP on the order card.
- If you are on AWS, GCP, or another cloud with changing egress, prefer **username + password** so a new public IP does not lock you out.
- Turn off a personal VPN while you look up the address to whitelist — otherwise you store the VPN exit instead of the server.

If the server’s public IP changes (home ISP, some clouds), update the list or the connection will fail. Name each entry so you can tell staging from production.

## API token

To generate usernames from scripts, copy the **API token** in [Account settings](https://www.joyproxy.com/admin-settings.html). Pass it as `Authorization: Bearer` or `token=` on `/v2/extract`.

That token is **not** the proxy password and **not** the [AI Access Token](../../integration/integrate-proxies-in-ai.md).

> **Security**
>
> URLs that contain `token=` are secrets. Rotate the API token in Account settings if a link leaks.

## Next

[Generate endpoints](generate-endpoints.md) — produce the Rotating username that carries geo and session.
