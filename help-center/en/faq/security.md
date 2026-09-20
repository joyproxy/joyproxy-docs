# Authorization and account security

This chapter covers JoyProxy credentials: four tokens and how they stay isolated, plus IP Whitelist and Username/Password.

---

## Tokens

### How many tokens are there? Can I mix them?

Least privilege: **four tokens, isolated, not interchangeable**:

| Token | Scope | What it can do | Where to get / rotate |
| :--- | :--- | :--- | :--- |
| **Master User Token** | Console and account APIs | Balance, place orders, renew, ledger. **Never** extract proxies or call Web Scraping API. | **My Account** |
| **API token** | Extract and whitelist APIs | `/v2/extract`, proxy lists, region catalog, IP Whitelist. | **Endpoint generator** |
| **Scraping API Token** | Web Scraping API | Hosted fetch `/v1/fetch`. | Web Scraping API → **API Center** |
| **AI Access Token** | OpenClaw and AI MCP | Cursor, VS Code, Claude Desktop, agents. | Endpoint generator → **AI generator** |

> **Do not** hard-code Master User Token in crawlers, front-end apps, or public GitHub repos.

### Token might be leaked. What now?

1. **Rotate immediately**: open that token’s page and click **Rotate token**. The old value dies at once; a new key is issued;
2. **Update production**: put the new token in scripts or env vars;
3. **Check the ledger**: open **Invoices** and look for charges you did not make.

---

## IP Whitelist vs Username/Password

### Two auth modes. Trade-offs?

When a client connects to a cloud node:

- **IP Whitelist**: register the public IP of the client, server, or crawler. After that, connections from that IP **need no username or password**.
  - *Pros*: simpler clients; no password in code;
  - *Cons*: you need a stable public IP. Home broadband that redials often must update the whitelist.
- **Username/Password**: create credentials on **Users & Whitelist**. The client sends them in the HTTP or SOCKS5 handshake.
  - *Pros*: works when the client IP changes; laptops and many cloud VMs;
  - *Note*: Rotating Proxies currently require Username/Password; routing parameters live in the username.

### Can Rotating Proxies use IP Whitelist (no password)?

No. The rotating gateway requires Username/Password from **Users & Whitelist** so it can parse geo and session from the long username.

Static Proxies and Custom Proxies support IP Whitelist, Username/Password, or both.

### How many whitelist IPs and credential pairs?

- **IP Whitelist**: several source public IPs per network (default **10**; ask support for more);
- **Username/Password**: up to **5** pairs per account. The password is shown once at create time and cannot be recovered in plaintext. Delete and create a new pair if you lose it.

---

## Everyday account safety

### No activation email?

1. Check Spam, Promotions, and Trash;
2. On the login screen, after you enter email and password, click **Resend activation email**;
3. If it still does not arrive, keep the page open and use **Live Chat** (bottom-right). Give the registration email. Support can verify and activate (an unactivated account cannot open **Tickets**).

### Forgot password?

On the login screen click **Forgot password?**, enter the registration email, and use the reset link. If the mail is slow, **Live Chat** with the same email.

### Login says “Region not supported” or “Too Many Requests”?

- **Region not supported**: the current network is blocked (for example a direct connection from mainland China). Switch to a supported network outside that region;
- **429 / too many logins**: too many wrong passwords. Wait a few minutes or ask support to unlock.

### What is Idle sign-out time?

To protect shared or public machines, the console signs you out after idle time with no mouse or keyboard activity.

On **My Account**, set **Idle sign-out time** (live options include **1 hour** through **7 days**; default **24 hours**). Any visit or API request resets the timer.

### Close account? What data do you keep?

- **Privacy**: JoyProxy follows GDPR-style rules. We keep email and billing records needed to run the service. We do not inspect lawful payload traffic;
- **Close account**: if you are done and want personal data removed, use **My Account → Close account**. Identity and history are destroyed and cannot be restored. Remaining balance and products are forfeited. This cannot be undone.
