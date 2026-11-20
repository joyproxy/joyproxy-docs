# Purchase, billing, and invoices

This chapter covers billing, price tiers, payment methods, recharge bonuses, invoices, and refunds.

---

## Plans and pricing

### Do I have to subscribe monthly?

**No forced subscription.** JoyProxy is **No subscription / Instant activation / Secure checkout**:

- Default is pay-as-you-go: buy the duration and volume you need;
- The system **does not** charge a card when a plan ends or traffic runs out, unless you turned on **Auto-renew** for a Static line or **Auto-buy traffic** for Rotating.

### Does unused rotating traffic expire?

**No.** Rotating traffic packs for Residential, Mobile, and Business **do not expire**. You use GB until it is gone. Web Scraping API Credits also have no expiry.

### Price ladders on the four networks?

#### 1. Residential Proxies (per GB)

From about $3.50/GB; larger packs lower the unit price. Traffic until used:

- 1 GB: $3.50/GB ($3.50)
- 10 GB: $3.35/GB ($33.50, save 4%)
- 20 GB: $3.20/GB ($64.00, save 9%)
- 50 GB: $2.95/GB ($147.50, save 16%)
- 100 GB: $2.65/GB ($265.00, save 24%)
- 200 GB: $2.35/GB ($470.00, save 33%)
- 500 GB: $2.05/GB ($1,025.00, save 41%)
- 1000 GB: $1.80/GB ($1,800.00, save 49%)

#### 2. Mobile Proxies (per GB)

4G/5G cellular, separate ladder:

- 1 GB: $4.00/GB | 10 GB: $3.80/GB | 50 GB: $3.20/GB | 100 GB: $2.85/GB | 500 GB: $2.20/GB | 1000 GB: $2.00/GB

#### 3. Business Proxies (per GB)

Commercial ISP ASN, separate ladder:

- 1 GB: $3.80/GB | 10 GB: $3.65/GB | 50 GB: $3.18/GB | 100 GB: $2.86/GB | 500 GB: $2.21/GB | 1000 GB: $1.94/GB

#### 4. Static Proxies (per IP × duration)

- **ISP Proxies**: $3.00/IP/month;
- **Datacenter Proxies**: $2.00/IP/month.

> Static Proxies have no traffic, concurrency, or bandwidth cap during the plan.

---

## Payments, fees, and recharge bonus

### Payment methods?

- **Balance**: preferred. No extra processing fee. One-click checkout.
- **Credit Card**: Visa, Mastercard, American Express, JCB.
- **Wallets**: PayPal, Apple Pay, Google Pay.
- **Crypto**: Multi-chain payments supporting **USDT, USDC, TRX, BNB, ETH, SOL, and BTC** across **TRON (TRC20)**, **BSC (BEP20)**, **Polygon**, **Arbitrum One**, **Solana (SPL)**, **Ethereum (ERC20)**, and **Bitcoin (Native SegWit)** for Balance top-ups and direct checkout.
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

### Which cryptocurrencies and networks are supported? What if a deposit isn't credited automatically?

1. **Supported coins and networks** (minimum `$1 USD` equivalent, usable for both Balance top-up and direct order checkout):
   - **USDT (Tether)**: **TRON (TRC20)**, **BSC (BEP20)**, **Polygon**, **Arbitrum One**, **Solana (SPL)**, **Ethereum (ERC20)**
   - **USDC (USD Coin)**: **BSC (BEP20)**, **Polygon**, **Arbitrum One**, **Solana (SPL)**, **Ethereum (ERC20)** *(TRC20 is not supported for USDC)*
   - **TRX**: TRON Network (TRC20)
   - **BNB**: BSC (BEP20)
   - **ETH**: Arbitrum One, Ethereum Mainnet (ERC20)
   - **SOL**: Solana Mainnet
   - **BTC**: Bitcoin (Native SegWit)
2. **Match the selected network exactly**: after picking a coin and network, the checkout displays the destination address and QR code. Make sure your wallet or exchange sends on the **exact same network** (e.g., send on BEP20 when BSC is selected). Cross-chain or wrong-network transfers cannot be recovered.
3. **Send the exact decimal amount shown**: each payment intent assigns a **unique decimal amount** (such as `10.01 USDT` for a `$10.00` order; non-stablecoins lock the live conversion rate) with a **25-minute** timer. Send the **exact decimals without rounding** so the system matches your deposit automatically (the full received amount is credited to your account).
4. **Auto-detection & troubleshooting**: after sending, click **I Have Paid**. Our scanner checks supported chains every few seconds and credits upon confirmation. If the window was closed, the network is congested, or the sent decimals differed after 10–30 minutes:
   - For legacy TRON child wallet deposits, open **My Account** → **Profile** and use **Claim USDT** with your amount or TxID;
   - For any multi-chain crypto deposit or order, open **Tickets** with the **coin, network (e.g. `USDT-BSC`, `USDC-Polygon`, `SOL`), exact sent amount, and transaction hash (TxID)** so support can match and credit it.

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
Eligible orders have a **7-day refund window** subject to the strict rules in our [Terms & Conditions — Refund Policy](https://www.joyproxy.com/terms.html#refund):
1. **7-day window**: refund requests for eligible orders must be opened within **7 days** of payment; orders older than 7 days are strictly non-refundable.
2. **General connectivity vs. specific targets**: proxy availability is determined by whether the proxy can normally connect to standard, unrestricted public websites. If general connectivity works normally and only specific target websites, apps, or ports requested by the customer fail to connect, **this is not a service failure and is not eligible for a refund**.
3. **Non-refundable & non-withdrawable exclusions**:
   - **1-day orders** (unless due to a verified general network failure);
   - **Crypto (all chains: USDT, USDC, TRX, BNB, ETH, SOL, BTC)** and **UPI** payments (unless due to a verified general network failure);
   - **Account balance top-ups and orders paid with Balance** (**no cash withdrawal and no refund**);
   - Claims based on specific target site/network blocks while general connectivity is normal;
   - Requests past 7 days, accounts terminated for policy violations, or promotional bonus credits.
4. **Amount calculation for eligible orders**:
   - **Unused order**: full refund (returned to the original payment method where supported, otherwise to non-withdrawable Balance);
   - **Partial use**: remaining value (> 0) after deducting consumed usage at your actual paid unit price — **duration-based plans round up to whole days (under 1 day counts as 1 day)**, and **traffic-based plans round up to whole GB (under 1 GB counts as 1 GB)**.
5. **How to request**: open **Tickets** under the finance category with your reason and order ID (for claimed general network failures, include test logs or error screenshots).

### Paid, but Balance or the order did not land?

Check PayPal or the card statement first.

- If more than 30 minutes have passed, open **Tickets** with the in-console order ID plus PayPal Capture ID, card transaction ID, or Crypto TxID (with coin & network). Support will match and credit.

### How is Rotating Proxy traffic calculated? Are both upload and download billed? Do failed requests cost traffic?
1. **Total traffic billing (Up + Down)**: Rotating Proxies (Residential, Mobile, Business) are billed on the sum of **upload requests + download responses** routed through the gateway (including HTTP headers and payload bodies).
2. **Gateway failures are free**: If a connection is rejected at the proxy gateway (such as a 407 authentication failure), no external traffic is consumed, and **zero GB is deducted**.
3. **Target site responses**: If the gateway successfully contacts the target site, whatever bytes the target returns (even 403, 404, or 500 status pages) consumed real broadband node bandwidth and are billed at actual transfer size.
4. **Bandwidth saving tip**: Always enable compression in your requests (`Accept-Encoding: gzip, deflate, br`) to reduce response transfer sizes by up to 70%.
