# Network types and how to choose

Custom Proxies are billed by port and duration. **ISP Proxies** and **Datacenter Proxies** are available (<a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">see current pricing</a>). Understanding the difference before checkout helps you pick the right fit.

---

## Custom dedicated network comparison

| Network | IP source and trust | Bandwidth and latency | Typical use |
| --- | --- | --- | --- |
| **ISP Proxies** | Carrier business ISP dedicated-line IPs | Dedicated bandwidth, fast and stable, business ASN identity | Long-lived B2B system access, cross-border enterprise automation, workloads that need a business IP |
| **Datacenter Proxies** | Enterprise datacenter / hosting ASN lines | Very low latency, 100 Mbps / 1 Gbps-class throughput, strong value | Large-scale public-data automation, high-concurrency API tests, API forwarding |

---

## Details

### 1. ISP Proxies
- **Business ISP lines**: Commercial office IPs from major carriers (such as AT&T, Verizon, and Comcast) — residential-like trust with datacenter-like speed and stability.
- **Built for high throughput**: A fit when you move larger payloads often and still need a high-trust IP.

### 2. Datacenter Proxies
- **Value and concurrency**: Cloud-hosted IPs with very low latency and high throughput.
- **Many ports at once**: A fit when you order 50–200 ports in one checkout for large parallel collection.

---

## Decision tree

```text
What does your workload need?
 ├── Enterprise B2B automation / high-speed stable links ──► ISP Proxies
 └── Large-scale high-concurrency collection / cost-sensitive ──► Datacenter Proxies
```

Next: go to **<a href="purchase.md" target="_blank" rel="noopener noreferrer">Purchase ports</a>** to place an order.
