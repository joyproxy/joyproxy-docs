# Invoices

The console is the ledger and invoice download center for finance teams and developers. You can reconcile every recharge and product charge.

Open Invoices from any of these:

- **My Account** → **Invoices**;
- On **Overview**, click the **Account Balance** / **Available Balance** figure;
- Direct URL: <a href="https://www.joyproxy.com/admin-transactions.html" target="_blank" rel="noopener noreferrer">Invoices</a>.

---

## Two tabs

The Invoices page has **Balance** and **Orders** only. An older **Traffic usage (hourly rotating)** tab is **no longer shown** on this page (locale strings may still exist in the product, but the tab was removed from the UI). For hourly or daily rotating traffic curves, use **Usage** in the relevant proxy console (for example **Residential**), not Invoices.

### 1. Balance (ledger)

Every wallet movement — the view finance uses for audit:

- **Category** (matches the console): **Recharge**; **Balance Consumption** and **Balance Renew** when you pay from wallet; **Admin Gift** / **Admin Deduction**; **Refund**; **Welcome credit** / **Welcome credit reclaimed**; other **Credit** / **Debit** rows.
- **Recharge channels** include PayPal, card (Evonet), WeChat Pay, UPI (India), USDT on-chain top-ups, and similar — they appear as **Recharge**.
- **PDF invoice**: The **Invoice** column shows **PDF** only on **Recharge** rows (order id, gateway reference, amounts, JoyProxy letterhead). **Balance Consumption**, **Balance Renew**, refunds, admin adjustments, and welcome-credit rows **do not** offer PDF download.
- **Batch download**: After **Time range** → **Apply filter**, **Batch download invoices (ZIP)** packs only rows that have a PDF action (on Balance, mainly recharges in the filtered window).

### 2. Orders (purchase history)

Product orders with **Network** and **Type** filters (Rotating, Static, Custom, Web Scraping API):

- Rotating packs, static lines, custom ports, Web Scraping API credits across Residential, Mobile, Business, Datacenter, and so on;
- Date, product, type, amount, and description.

**PDF invoice**: **PDF** appears only when the order was paid through an **external gateway** (PayPal, Evonet card, WeChat Pay, UPI, etc.) for a **direct purchase or renewal**. Orders paid with **Account balance** **do not** show PDF (the matching **Balance Consumption** / **Balance Renew** row on **Balance** also has no PDF).

---

## Invoices vs proxy consoles

- **Live resources**: Port status, exit IP changes, Auto-renew, remaining GB, and traffic charts belong in the network console (**Residential**, **Business / ISP**, and so on) on **My Proxies** and **Usage**.
- **Money**: Export reimbursement PDFs, confirm a recharge, or review monthly spend here on **Invoices**.

---

## Billing questions

- **USDT not credited yet?**  
  If you closed the window after an on-chain transfer, open **My Account** → **Profile** and click **Claim USDT** to scan the chain and credit the deposit.
- **Unexpected charge amount?**  
  Note the order id and time, then open **Help Center** and submit a <a href="tickets.md" target="_blank" rel="noopener noreferrer">Tickets</a> request so finance and engineering can pull logs.
- **Invoice with a company name and tax ID?**  
  Use <a href="live-chat.md" target="_blank" rel="noopener noreferrer">Live Chat</a> and send the legal name, tax ID, and receiving email.
