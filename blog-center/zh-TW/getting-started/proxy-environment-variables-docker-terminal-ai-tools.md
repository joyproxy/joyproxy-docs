---
title: "環境變數設定代理全解：Linux、macOS、Windows、Docker 與 AI 工具中的 HTTP_PROXY / ALL_PROXY / NO_PROXY 實戰指南"
description: "系統講解終端機、Python、Node.js、Git、Docker 與 AI CLI 工具中的 HTTP_PROXY、HTTPS_PROXY、ALL_PROXY 和 NO_PROXY 設定細節，涵蓋大小寫優先權、socks5h:// 防 DNS 洩漏、密碼跳脫與 JoyProxy 接入實戰。"
category: getting-started
date: 2026-11-19
---

# 環境變數設定代理全解：Linux、macOS、Windows、Docker 與 AI 工具中的 HTTP_PROXY / ALL_PROXY / NO_PROXY 實戰指南

當你從單條 `curl` 測試邁向真實開發環境——例如執行 AI 程式開發 CLI、Python 爬蟲服務、Node.js 腳本、Git 拉取或 Docker 容器編排——在每條指令裡手動拼接 `--proxy` 參數很快就會變得難以維護。

業界通用的**代理環境變數**（`HTTP_PROXY`、`HTTPS_PROXY`、`ALL_PROXY`、`NO_PROXY`）正是為此而生。但開發者在實際設定時，幾乎都會踩進幾個隱蔽的深坑：

* 「明明已經 `export HTTP_PROXY`，為什麼 `curl` 走了代理，Node.js 原生 `fetch` 卻依然直連本機 IP？」
* 「配了 `ALL_PROXY` 後外網通了，但本機 MCP 服務、Ollama（`127.0.0.1:11434`）和 Docker 容器健康檢查全掛了！」
* 「代理密碼在瀏覽器裡能用，放進環境變數後卻頻繁報錯 `407 Proxy Authentication Required` 或 `Invalid URL`。」
* 「Docker 建置時設定了 `ENV HTTP_PROXY`，結果把代理帳號密碼永久打進了映像檔層裡！」

本文將一次釐清各語言執行環境、Shell 與容器對代理環境變數的真實解析規則，並結合 **[靜態 ISP 代理](https://www.joyproxy.com/products/proxy-isp.html)**、**[資料中心代理](https://www.joyproxy.com/products/proxy-datacenter.html)** 與 **[動態住宅代理](https://www.joyproxy.com/products/proxy-residential.html)** 給出開箱即用的生產範本。

---

## 一、四個核心環境變數的真實分工與優先權規則

代理環境變數並沒有統一強制的 RFC 標準，不同函式庫的實作細節各異。先記住下面四條核心規則，就能避開 90% 的故障：

| 變數名稱 | 接管的流量範圍 | 生產環境必知注意事項 |
| :--- | :--- | :--- |
| **`HTTP_PROXY` / `http_proxy`** | 明文 HTTP 請求（`http://...`） | 部分工具（如 `curl`、`apt`）優先讀取**小寫** `http_proxy`，而 Go、`httpx` 等優先讀取**大寫** `HTTP_PROXY`。生產腳本建議**大小寫成對設定**。 |
| **`HTTPS_PROXY` / `https_proxy`** | TLS/HTTPS 加密請求（`https://...` 的 `CONNECT` 通道） | 代理 URI 協定頭通常仍寫 `http://user:pass@host:port`（表示透過 HTTP 代理建立 HTTPS 通道），除非目標連接埠明確要求 TLS 加密連線，否則不要改成 `https://`。 |
| **`ALL_PROXY` / `all_proxy`** | HTTP/HTTPS 之外的備援協定（特別是 SOCKS5） | 僅支援該變數的用戶端有效（如 `curl`、`git`、`pip`、`httpx[socks]`）。協定務必使用 **`socks5h://`**（而非 `socks5://`），確保網域名稱解析在遠端代理節點完成，防止本機 ISP DNS 洩漏。 |
| **`NO_PROXY` / `no_proxy`** | 逗號分隔的直連白名單（網域、IP、CIDR 網段） | **極為關鍵。** 遺漏 `localhost,127.0.0.1,::1` 會導致本機介面、資料庫、本機 MCP Server 及雲端主機中繼資料位址（`169.254.169.254`）被錯誤發往遠端代理並逾時失敗。 |

> [!NOTE] 密碼含特殊字元會導致 URI 解析失敗
> 若你的代理密碼中包含 `@`、`:`、`/`、`#`、`?` 或 `%` 等符號，環境變數解析器會在錯誤位置截斷主機名稱，引發 `407` 認證失敗或 URL 解析報錯。請先對密碼做 URL 編碼（例如 `@` 替換為 `%40`、`:` 替換為 `%3A`），或在 JoyProxy 靜態線路上啟用 **IP 白名單免密認證**，徹底告別明文密碼拼接。

---

## 二、終端機環境設定：Linux、macOS 與 Windows PowerShell

### Linux / macOS（`bash` / `zsh`）

在日常終端機、AI CLI 工具或本機自動化腳本中使用時，建議同時匯出大小寫變數，並預設鎖定內網與迴環位址白名單：

```bash
# 以 JoyProxy 靜態 ISP 代理為例（請替換為控制台擷取的實際入口與憑證）
export PROXY_URL="http://your_user:your_pass@isp.joyproxy.com:10001"

export HTTP_PROXY="$PROXY_URL"
export HTTPS_PROXY="$PROXY_URL"
export http_proxy="$PROXY_URL"
export https_proxy="$PROXY_URL"

# 選用：SOCKS5 備援（務必用 socks5h:// 避免本機 DNS 洩漏）
export ALL_PROXY="socks5h://your_user:your_pass@isp.joyproxy.com:10001"
export all_proxy="$ALL_PROXY"

# 必須放行本機迴環、區域網段與雲端中繼資料服務
export NO_PROXY="localhost,127.0.0.1,::1,.local,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,169.254.169.254"
export no_proxy="$NO_PROXY"
```

> [!TIP] 在 `~/.zshrc` 或 `~/.bashrc` 中封裝快捷開關
> 如果你經常在直連與代理之間切換，建議把上述匯出語句放進 `proxy_on` / `proxy_off` 兩個 shell 函式中按需啟停，避免誤傷本機開發服務。

### Windows PowerShell 與 CMD

在 PowerShell 中，目前工作階段環境變數透過 `$env:` 作用域設定：

```powershell
# PowerShell（僅對目前終端機視窗生效）
$env:HTTP_PROXY  = "http://your_user:your_pass@isp.joyproxy.com:10001"
$env:HTTPS_PROXY = "http://your_user:your_pass@isp.joyproxy.com:10001"
$env:ALL_PROXY   = "socks5h://your_user:your_pass@isp.joyproxy.com:10001"
$env:NO_PROXY    = "localhost,127.0.0.1,::1,.local,169.254.169.254"

# 用完隨時清理
Remove-Item Env:HTTP_PROXY, Env:HTTPS_PROXY, Env:ALL_PROXY, Env:NO_PROXY
```

若使用傳統 `cmd.exe`：

```cmd
set HTTP_PROXY=http://your_user:your_pass@isp.joyproxy.com:10001
set HTTPS_PROXY=http://your_user:your_pass@isp.joyproxy.com:10001
set NO_PROXY=localhost,127.0.0.1,::1
```

---

## 三、常見執行環境與工具的「坑」：Python、Node.js 與 Git

即使終端機裡環境變數已經生效，主流程式執行環境也存在各自的行為差異：

### 1. Python（`requests`、`httpx`、`aiohttp`、`pip`）
* **`requests` 與 `httpx`**：預設自動讀取 `HTTP_PROXY`、`HTTPS_PROXY` 和 `ALL_PROXY`。若使用 `socks5h://`，需確保安裝了 SOCKS 相依套件（如 `pip install socksio` 或 `requests[socks]`）。
* **`aiohttp`**：**預設完全忽略系統代理環境變數！** 高併發非同步請求必須明確傳入 `trust_env=True`：

```python
import aiohttp, asyncio

async def main():
    async with aiohttp.ClientSession(trust_env=True) as session:
        async with session.get("https://api.ipify.org?format=json") as resp:
            print(await resp.text())

asyncio.run(main())
```

### 2. Node.js（原生 `fetch`、`undici`、`axios`）
* **內建 `fetch`（基於 `undici`）**：長期以來預設不讀取 `HTTP_PROXY` / `HTTPS_PROXY`，這是 Node.js 開發者最常踩的坑。
  * 在 **Node.js 22.21+ / 24+** 中，可直接設定環境變數 `NODE_USE_ENV_PROXY=1` 開啟原生支援。
  * 舊版本則建議在入口處明確註冊 `EnvHttpProxyAgent`：

```javascript
import { EnvHttpProxyAgent, setGlobalDispatcher } from "undici";

// 自動讀取 HTTP_PROXY、HTTPS_PROXY 與 NO_PROXY
setGlobalDispatcher(new EnvHttpProxyAgent());

const res = await fetch("https://api.ipify.org?format=json");
console.log(await res.text());
```

### 3. Git（按網域精準代理，避免影響內網儲存庫）
無需全域開啟代理，可以只對特定程式碼託管網域（例如 `github.com`）生效：

```bash
git config --global http.https://github.com.proxy http://your_user:your_pass@isp.joyproxy.com:10001
# 需要取消時執行：
git config --global --unset http.https://github.com.proxy
```

---

## 四、Docker 規範設定：建置期 vs 執行期（嚴禁把帳密寫死進 `ENV`）

在容器化爬蟲與 AI Agent 部署中，最危險的操作莫過於在 `Dockerfile` 裡寫 `ENV HTTP_PROXY=http://user:pass@...`——這會把代理帳密永久保留在映像檔歷史紀錄中。

### 安全寫法 1：建置期透過 `--build-arg` 傳入
Docker 預設將 `HTTP_PROXY`、`HTTPS_PROXY` 和 `NO_PROXY` 識別為預定義建置參數，**不會持久化到最終映像檔層中**：

```bash
docker build \
  --build-arg HTTP_PROXY="http://your_user:your_pass@dc.joyproxy.com:10001" \
  --build-arg HTTPS_PROXY="http://your_user:your_pass@dc.joyproxy.com:10001" \
  --build-arg NO_PROXY="localhost,127.0.0.1" \
  -t my-scraper:latest .
```

### 安全寫法 2：執行期透過 `compose.yaml` + `.env` 注入
對於需要動態換 IP 的容器化爬蟲、Playwright 節點或 MCP 服務，將敏感設定保留在本機 `.env`（切勿提交到 Git），並在容器啟動時注入：

```yaml
services:
  crawler-worker:
    build: .
    env_file:
      - .env
    environment:
      - HTTP_PROXY=${JOYPROXY_RESI_URL}
      - HTTPS_PROXY=${JOYPROXY_RESI_URL}
      - NO_PROXY=localhost,127.0.0.1,redis,postgres
```

對應的 `.env` 檔案中即可直接寫入 JoyProxy 動態閘道字串（例如透過 `gate.joyproxy.com:9001` 綁定美國城市 30 分鐘黏性工作階段）：

```dotenv
JOYPROXY_RESI_URL=http://your_user-zone-resi-region-us-session-worker1-sessTime-30:your_pass@gate.joyproxy.com:9001
```

---

## 五、不同環境變數工作流程該如何匹配 JoyProxy 代理產品？

| 常見場景 | 推薦 JoyProxy 產品 | 選型核心原因 |
| :--- | :--- | :--- |
| **本機終端機、AI 程式設計 CLI、長工作階段登入態工具** | **[ISP（獨享靜態住宅）代理](https://www.joyproxy.com/products/proxy-isp.html)** | 固定純正住宅 ASN（`isp.joyproxy.com:10001`），避免中途切換 IP 觸發人機驗證，且支援 **IP 白名單**，`.env` 裡連密碼都無需明文存放。 |
| **Docker 映像檔建置、CI/CD 相依套件拉取、不限流量併發** | **[資料中心代理](https://www.joyproxy.com/products/proxy-datacenter.html)** | 高速低延遲機房骨幹網，提供不限流量方案，拉取大體積套件與開放 API 時毫無 GB 帳單焦慮。 |
| **容器化爬蟲 Worker 與多區併發擷取** | **[住宅代理](https://www.joyproxy.com/products/proxy-residential.html)** | 統一入口 `gate.joyproxy.com:9001`，只需修改環境變數使用者名稱中的地區與 `sessTime` 參數即可靈活輪換或保持黏性。 |
| **B2B 企業介面聯調與商業環境測試** | **[商業代理](https://www.joyproxy.com/products/proxy-business.html)** | 提供乾淨的商業寬頻 ASN 出口，更貼合企業級服務與 SaaS 後台的風控畫像。 |
| **高防反爬目標頁直接擷取（免設定代理）** | **[網頁擷取 API](https://www.joyproxy.com/products/web-unblocker.html)** | 目標站防護極嚴時，無需折騰代理環境變數，直接透過標準 HTTPS 呼叫 `api.joyproxy.com`，按成功請求計費。 |

---

## 六、30 秒快速排錯與驗證清單

設定完成後，啟動核心業務前建議先跑完以下三步校驗：

1. **驗證外網出口 IP 是否真正切換**：
   ```bash
   curl -s https://api.ipify.org?format=json
   ```
   若回傳的仍是本機寬頻 IP，請加上 `-v` 參數執行 `curl -v https://api.ipify.org`，觀察日誌中是否出現 `Uses proxy env variable`。
2. **驗證 `NO_PROXY` 是否成功放行本機服務**：
   ```bash
   curl -v http://127.0.0.1:8080/health
   ```
   確認連線直接指向本機連接埠，而沒有嘗試經由代理通道轉發 `127.0.0.1`。
3. **驗證 SOCKS5 DNS 解析位置**：
   在使用 `ALL_PROXY` 時，確認協定前綴為 `socks5h://` 而非 `socks5://`，防止本機 DNS 洩漏真實地理位置。

如需進一步排查認證失敗或白名單規則，可參考 [JoyProxy 白名單與認證帳密設定指南](https://www.joyproxy.com/blog/zh-TW/getting-started/whitelist-credentials-setup/) 與 [解決 407 代理認證報錯實戰](https://www.joyproxy.com/blog/zh-TW/guides/stop-407-rotating-proxy-extraction-guide/)。現在就去 [註冊 JoyProxy 帳號](https://www.joyproxy.com/register.html)，用 1 GB 入門流量包或獨享靜態 ISP 線路快速跑通你的開發環境吧。
