# Create a proxy password

JoyProxy uses **two logins**:

| Login | Used for |
| --- | --- |
| Website email + password | Dashboard, billing, [Account settings](https://www.joyproxy.com/admin-settings.html) |
| Proxy username + password | HTTP/SOCKS connections to `gate.joyproxy.com:9001` |

The proxy **username** is **not** the short name you type in Whitelist & Users. That screen only stores the **password** (and a label). The username your app sends is the **long string from Endpoints**.

## Create a credential

1. Open [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html), or **Users & Whitelist** on the Residential / Mobile / Business console.
2. Open **Username / Password**.
3. Create a credential:
   - Label / username field: **3 or more** characters (this is a label for the password, not the gateway user).
   - Password: **6 or more** characters.
4. Save and copy the **password** into your password manager or `.env` file.

You can keep several credentials—for example one for production scrapers and one for local tests.

## What you type in the client

| Client field | Value |
| --- | --- |
| Proxy host | `gate.joyproxy.com` |
| Proxy port | `9001` |
| Proxy username | **Generated username** from [Endpoints](generate-endpoints.md) |
| Proxy password | The password you just created |

> **Important**
>
> Do not put the short Whitelist & Users name into the proxy username field. Tools that “auto-fill username” from the credential list will fail until you paste the generated string.

## IP whitelist

IP allow lists are used on **Static** and **Custom** lines so a known server can connect without embedding a password. For Rotating, plan on **username + password** as described here. When whitelist for rotating is enabled in your console, the Endpoints screen will say so—until then, every rotating client sends the generated user and this password.

## API token (optional)

To generate usernames from scripts, copy the **API token** in [Account settings](https://www.joyproxy.com/admin-settings.html). That token is for `/v2/extract` and related APIs. It is **not** the proxy password and **not** the [AI Access Token](../../integration/integrate-proxies-in-ai.md).

## Next

[Generate endpoints](generate-endpoints.md) — produce the username that carries geo and session.
