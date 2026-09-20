# Purchase, billing, and invoices

This chapter covers billing, price tiers, payment methods, recharge bonuses, invoices, and refunds.

---

## Plans and pricing

### Do I have to subscribe monthly?

**No forced subscription.** JoyProxy is **No subscription / Instant activation / Secure checkout**:

- Default is pay-as-you-go: buy the duration and volume you need;
- The system **does not** charge a card when a plan ends or traffic runs out, unless you turned on **Auto-renew** for a Static line or **Auto-buy traffic** for Rotating.

### Does unused rotating traffic expire?

**No.** Residential, Mobile, and Business Rotating packs **do not expire**. You use GB until it is gone. Web Scraping API Credits also have no expiry.

### Price ladders on the four networks?

#### 1. Rotating Residential (per GB)

From about $3.50/GB; larger packs lower the unit price. Traffic until used:

- 1 GB: $3.50/GB ($3.50)
- 10 GB: $3.35/GB ($33.50, save 4%)
- 20 GB: $3.20/GB ($64.00, save 9%)
- 50 GB: $2.95/GB ($147.50, save 16%)
- 100 GB: $2.65/GB ($265.00, save 24%)
- 200 GB: $2.35/GB ($470.00, save 33%)
- 500 GB: $2.05/GB ($1,025.00, save 41%)
- 1000 GB: $1.80/GB ($1,800.00, save 49%)

#### 2. Rotating Mobile (per GB)

4G/5G cellular, separate ladder:

- 1 GB: $4.00/GB | 10 GB: $3.80/GB | 50 GB: $3.20/GB | 100 GB: $2.85/GB | 500 GB: $2.20/GB | 1000 GB: $2.00/GB

#### 3. Rotating Business / ISP (per GB)

Commercial ISP ASN, separate ladder:

- 1 GB: $3.80/GB | 10 GB: $3.65/GB | 50 GB: $3.18/GB | 100 GB: $2.86/GB | 500 GB: $2.21/GB | 1000 GB: $1.94/GB

#### 4. Static and Custom (per IP/port × duration)

- **Static Residential**: 1 IP about $1.00/day, $2.50/week, $5.00/month, $12.50/quarter, $50.00/year; volume discounts (100–499 volume price; 500+ best price);
- **Custom Residential**: about **$1 extra per port per month** vs Static (about $6.00/port/month);
- **Static Business / ISP**: $3.00/IP/month; Custom Business $4.00/port/month;
- **Static Datacenter**: $2.00/IP/month; Custom Datacenter $3.00/port/month.

> Static and Custom have no traffic, concurrency, or bandwidth cap during the plan.

---

## Payments, fees, and recharge bonus

### Payment methods?

- **Balance**: preferred. No extra processing fee. One-click checkout.
- **Credit Card**: Visa, Mastercard, American Express, JCB.
- **Wallets**: PayPal, Apple Pay, Google Pay.
- **Crypto**: **USDT (TRON / TRC20 only)** to Balance.
- **WeChat Pay**.
- **UPI**: India.

> UnionPay and large bank-transfer rails are rolling out.

### Why recharge Balance first?

1. **No JoyProxy fee**: a card or PayPal charge on the product itself incurs **6.5% + $0.50** gateway fee. Paying the order with **Balance** has **no JoyProxy processing fee**.
2. **Recharge bonus**: on **Recharge**, a single top-up that hits a tier adds gift credit:
   - **$100**: extra **10%** (you receive $110)
   - **$1,000**: extra **20%** (you receive $1,200)
   - **$10,000**: extra **30%** (you receive $13,000)

   Gift credit lands in Available Balance with the principal after payment.

### USDT (TRC20) recharge? Not credited automatically?

1. **Path**: Overview → **Recharge** → USDT (TRC20). The console shows a dedicated address and QR code.
2. **TRC20 only**: send via TronLink or another TRON wallet/exchange on **TRC20**. Official rate **1 USDT = $1.00 USD**. JoyProxy does not charge a deposit fee (keep a little TRX in the wallet for chain gas). Do **not** use ERC20, BEP20, or other chains — funds cannot be recovered.
3. **Confirm payment**: keep the recharge window open about 8 seconds, then click **I have paid**. The console scans the chain and credits within about 5 minutes.
4. **Claim USDT**: if you closed the dialog or the chain is congested for more than 10 minutes:
   - Open **My Account**;
   - Use the **Claim USDT** card: amount or TxID, then **Claim**;
   - Still stuck? Open **Tickets** with the TxID.

### Does the unit price on an existing order rise when the site reprices?

No. The unit price is snapshotted at purchase. If you later enable Auto-renew, renewal uses the price shown at renew time.

---

## Invoices and refunds

### Where are receipts and invoices?

Sign in and open **Invoices** in the sidebar:

- **Balance ledger**: recharge, bonus credit, and order deductions;
- **Orders**: start time, product, amount paid;
- **PDFs**: **Download invoice (PDF)** per order (standard reimbursement layout). Select a date range and **Batch download invoices (ZIP)**.

### Refund policy? Partial use?

1. **7-day window**: within **7 days** of purchase, open **Tickets** if you are not satisfied;
2. **Amount**:
   - Unused order: full refund to Balance;
   - Partial use (some GB or some days on a Static line): unused remainder to Balance after actual usage at the order unit price;
3. **After 7 days**: no refund;
4. **How**: **Tickets**, finance category, reason and order ID.

### Paid, but Balance or the order did not land?

Check PayPal or the card statement first.

- If more than 30 minutes have passed, open **Tickets** with the in-console order ID plus PayPal Capture ID, card transaction ID, or USDT TxID. Support will match and credit.
