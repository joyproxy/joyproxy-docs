# Tickets

Tickets is the async technical and commercial support channel in the JoyProxy console. Use it when a proxy network, API integration, or billing issue needs logs, a written trail, or more than one team.

Open Tickets from:

- **Support** in the left sidebar;
- Direct URL: <a href="https://www.joyproxy.com/admin-support.html#tickets" target="_blank" rel="noopener noreferrer">Tickets</a>.

---

## When to use Tickets

Compared with Live Chat, Tickets fits:

- **Deep technical faults**: node request logs, packet captures, or connectivity analysis;
- **Finance and reconciliation**: company invoices, disputed recharges, custom contracts, or postpaid bills;
- **Account and security changes**: primary email change, enterprise entitlements, or sub-account ownership;
- **Custom capacity**: higher Web Scraping API concurrency, extra countries, or a dedicated whitelist.

---

## Create a ticket

On **Support**, click **+ New Ticket** and fill in:

### 1. Subject
Keep the title short, for example:
- `[Static Dedicated] Order #1024 exit IP connect timeout`
- `[Invoices] USDT confirmed on-chain but balance not updated`
- `[Web Scraping API] /v1/fetch returns 502 on a specific target`

### 2. Priority
- **Low**: general questions, docs, or non-urgent ideas;
- **Medium** (default): partial blockage with a workaround, or routine billing questions;
- **High**: production crawl down, many endpoints failing, or a severe outage.

### 3. Issue Description
Give enough detail for a fast diagnosis:
- **Proxy**: product line (Rotating Residential / Static Dedicated), auth (User/Pass or IP Whitelist), target host, status or cURL output, and time with timezone.
- **Billing**: recharge order id, method (PayPal / USDT-TRC20), TXID, or payment time.
- **Web Scraping API**: endpoint, parameters, HTTP status, and a snippet of the error body.

### 4. Attach Image (optional)
PNG, JPG, or GIF. Keep each file under 5MB.
> ⚠️ **Do not leak secrets**: Mask Master User Token, proxy passwords, and full API credentials in screenshots and logs.

Click **Submit Ticket**. You get a ticket id (for example `#1042`).

---

## Follow-up and status

After submit, watch progress in **My Tickets**:

### 1. Status
| Status | Meaning |
| :--- | :--- |
| **Pending** | The ticket is in the support queue and will be assigned. |
| **Processing** | An engineer is investigating or pulling connectivity reports from the carrier. |
| After support replies | Open **View**. If they asked for more detail, reply in the same thread. |
| **Closed** | The issue is resolved or both sides agreed to stop. If the same issue returns, reply within 7 days to reopen. |

### 2. Replies
Click **View** on the right of the list to open the thread. Add text or a new screenshot at the bottom. Keep the conversation on one ticket instead of opening duplicates for the same incident.
