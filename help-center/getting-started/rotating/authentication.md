# Authentication methods

Rotating uses **Username/Password**. Open [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html) (same page on the Residential / Mobile / Business console).

Website login and proxy login are **different**. Resetting the dashboard password does **not** change the proxy password — use [Forgot password](../../user-console/forgot-password.md) only for the site.

## Username/Password (recommended)

This is the method Rotating clients use. Create it on the **Username/Password** tab first.

### Credential mode

| Mode on Users & Whitelist | What you get |
| --- | --- |
| **Shared** | One User/Pass for every product on the account |
| **Per product** | One User/Pass per network type (Residential, Mobile, Business, Datacenter) |

Pick Shared when one secret is enough. Pick Per product when each network should have its own User/Pass.

### Create a User/Pass

1. Open [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html) → **Username/Password**.
2. Choose **Shared** or **Per product**.
3. Create the credential:
   - Username: starts with a **letter**, lowercase **a–z** and **0–9** only, **max 16** characters.
   - Password: **at least 6** characters.
4. Save. Copy the **password** into a password manager or `.env` file.

The username on this page is your **User/Pass name**. The string your app sends to the Rotating gateway is the **long generated username** from Endpoints.

### What you type in the client (Rotating)

| Client field | Value |
| --- | --- |
| Proxy host | `gate.joyproxy.com` |
| Proxy port | `9001` |
| Proxy type | HTTP or SOCKS5 (both can open HTTPS websites) |
| Proxy username | **Generated username** from [Endpoints](generate-endpoints.md) |
| Proxy password | The password from Username/Password |

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

> **Important**
>
> Do not put the short Users & Whitelist name into the Rotating username field. Paste the generated string from Endpoints.

### Edit the password

Use **Edit** on the Username/Password row to set a new password, then update `YOUR_PASS` in every client. The generated Rotating username can stay the same.

### 407 Proxy Authentication Required

1. Password is the **Username/Password** secret — not the website login.
2. Username is the **full generated string** from Endpoints.
3. Edit the password if you are unsure, then retry:

```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

## What you type for Static / Custom (User/Pass)

On dedicated lines, the **Users & Whitelist username** *is* the proxy user. There is no second generated gateway user.

```text
http://USER:PASS@us-ca.edge.joyproxy.com:10001
```

Walkthrough: [Static authorization](../static/authorization.md).

## IP whitelist

Use the **IP Whitelist** tab on the same Users & Whitelist page for Static and Custom `host:port` lines when the client machine has a stable public IPv4.

1. Look up that machine’s **public IPv4**.
2. **Users & Whitelist → IP Whitelist** → enter the address and a remark → **Add IP**.
3. In the client, use the `host:port` from Endpoints.

Whitelist the IP that **opens** the proxy connection, not the Exit IP on the order card. Name each entry so you can tell staging from production.

## Next

[Generate endpoints](generate-endpoints.md) — produce the Rotating username that carries geo and session.
