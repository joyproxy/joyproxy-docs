---
title: "別再被 407 擋住：JoyProxy 住宅、移動、商業代理提取指南"
description: "深度拆解 407 Proxy Authentication Required 的根本原因，詳解 JoyProxy 動態住宅、移動與商業代理的閘道架構、帳密語法、城市精準定位與 1~30 分鐘黏性工作階段設定。"
category: guides
date: 2026-11-05
---

# 別再被 407 擋住：JoyProxy 住宅、移動、商業代理提取指南

剛在 JoyProxy 購買了住宅、移動或商業代理流量包，滿懷期待地把閘道和連接埠設定進 Python 腳本、爬蟲框架或防關聯瀏覽器，一送出請求卻迎面而來一個錯誤：

```text
HTTP/1.1 407 Proxy Authentication Required
```

很多人的第一反應通常是：「我密碼明明輸入正確了，難道是代理節點壞了？」

實際上，在絕大多數情況下，網路本身沒有任何故障。**`407` 狀態碼代表代理層身分驗證失敗**。在 JoyProxy 的動態代理架構中，閘道需要透過客戶端傳入的帳密參數即時完成「帳戶驗證 + 流量扣減 + 地理路由 + 工作階段維持」多重調度。只要其中一個參數語法有誤，閘道就會直接拒絕連線。

本文將用最直接明瞭的方式，拆解 JoyProxy 動態代理的提取機制，排查導致 407 的高頻盲區，並提供隨複製即用的設定範例。

---

## 一、JoyProxy 動態代理閘道的運作機制

在傳統的自建單點代理中，每個代理通常對應一個單獨的 IP 與連接埠。但在支撐全球 200+ 國家與 25,000+ 城市的千萬級動態住宅/移動網路中，這種模式根本無法擴展。

JoyProxy 採用**集中智慧閘道架構**：
* **統一連線入口**：無論你需要調用美國紐約的住宅寬頻、英國倫敦的 4G/5G 移動網路，還是德國法蘭克福的企業商業寬頻，你的客戶端只需連線統一的接入閘道：
  * **主機（Host）**：`gate.joyproxy.com`
  * **連接埠（Port）**：`9001`（標準同時支援 HTTP / HTTPS 與 SOCKS5）
* **參數語法全在使用者名稱中編碼**：閘道本身並不會為你每個請求分配獨立的連接埠。相反地，**你想要的目的地國家、城市、電信營運商類型以及工作階段時長，全部編碼在產生的代理使用者名稱（Username）中**。

當請求到達閘道時，解析引擎會即時拆解使用者名稱中的指令標籤，瞬間從全球寬頻池中調度對應出口，並將資料封包送出。

---

## 二、導致 407 報錯的四大常見原因

如果你在連線 `gate.joyproxy.com:9001` 時遭遇 `407 Proxy Authentication Required`，請依以下四步驟逐一排查：

### 1. 誤將網站登入密碼當成了代理密碼
這是最常見的新手失誤。你在 JoyProxy 官網（控制台）註冊登入所使用的密碼，**並不是代理連線密碼**。
* **正確做法**：登入控制台，進入左側導航欄的 **使用者與白名單（Users & Whitelist）** 頁面，在該頁面建立或複製專屬的**代理認證密碼**。

### 2. 使用者名稱長字串被截斷或手誤修改
在 **提取中心（Endpoint Generator）** 中產生的使用者名稱通常很長（例如 `user1-zone-resi-region-us-city-los_angeles-session-ab12cd-sessTime-30`）。
* 如果在複製貼上到腳本、環境變數或防關聯瀏覽器時，漏掉了開頭的字元或截斷了末尾，閘道解析器將無法識別正確的指令，從而直接拋出 407。
* 手動修改城市名稱拼字錯誤（如把 `los_angeles` 誤寫為 `losangeles`）也會導致路由校驗失敗。

### 3. 試圖對動態代理使用「純 IP 白名單免密」
JoyProxy 的**靜態代理（ISP / 資料中心）**支援 IP 白名單免密存取，但**動態代理（住宅 / 移動 / 商業）必須使用帳密連線**。
* **原因**：動態代理必須依賴使用者名稱中的標籤來告知閘道去哪個國家、哪個城市提取節點。如果只掛 IP 白名單而不傳帶有標籤的使用者名稱，閘道根本不知道你想要調取什麼網路，因而強制要求認證。

### 4. 流量包額度已耗盡或未綁定訂單
如果帳戶內的按量計費流量（GB）已經用完，或者產生端點時選錯了未啟動的訂單，閘道在校驗帳戶餘額為零時，同樣會回傳 407 拒絕服務。

---

## 三、使用者名稱語法拆解：城市定位與黏性工作階段

理解 JoyProxy 的使用者名稱結構後，你甚至無需每次打開網頁產生器，就能在程式碼中動態拼接出任意需要的網路出口。

一個典型的完整使用者名稱範例如下：
```text
user1-zone-resi-region-us-city-los_angeles-session-a8f912-sessTime-30
```

各欄位涵義對應表：

| 參數欄位 | 範例數值 | 作用與涵義 | 是否必填 |
|---|---|---|---|
| **子帳戶名** | `user1` | 在「使用者與白名單」中設定的子使用者名稱 | 是 |
| **網路產品類型 (`zone`)** | `zone-resi` | `zone-resi`（住宅）/ `zone-cellular`（移動）/ `zone-biz`（商業） | 否（預設住宅） |
| **國家代碼 (`region`)** | `region-us` | 目標兩字 ISO 國家代碼（如 `us`、`gb`、`jp`、`de`、`sg`） | 否（預設全球隨機） |
| **指定城市 (`city`)** | `city-los_angeles` | 目標城市小寫底線命名（如 `new_york`、`london`、`tokyo`） | 否（預設全國隨機） |
| **黏性工作階段 ID (`session`)** | `session-a8f912` | 自訂唯一字串。相同 ID 的請求將保持在同一個出口 IP | 否（不填則每請求輪換） |
| **工作階段有效時長 (`sessTime`)** | `sessTime-30` | 黏性保持時長，單位為分鐘（支援 **1 ~ 30** 分鐘） | 與 session 配合使用 |

### 輪換模式 vs 黏性工作階段如何選擇？

1. **每請求輪換（Rotate Every Request）**：
   * **語法**：省略 `session` 與 `sessTime`，例如 `user1-zone-resi-region-us`。
   * **行為**：每次發起 HTTP 請求，閘道都會調度一個新的住宅出口 IP。
   * **適用**：公開網頁多執行緒抓取、高並發價格比價、大規模資料提取。
2. **黏性工作階段（Sticky Session，1~30 分鐘）**：
   * **語法**：攜帶 `session-xxxx-sessTime-30`。
   * **行為**：在指定的 1~30 分鐘內，所有攜帶相同 session ID 的請求將嚴格重複使用同一個公網 IP。
   * **關鍵機制**：即使 30 分鐘時間到期，**連線字串依然完全有效，無需更換連接埠重連**。閘道會在租約過期後的下一個請求中，平滑且無感地為你分配同區域的一個全新 IP。
   * **適用**：多步驟結帳流程、社群帳號登入互動、AI Agent 複雜長流程任務。

---

## 四、多語言與工具隨複製即用實操範例

連線閘道統一使用：
* **Host**: `gate.joyproxy.com`
* **Port**: `9001`

### 1. cURL 命令列測試
測試一個位於美國洛杉磯、保持 30 分鐘黏性的住宅代理：
```bash
curl -x http://user1-zone-resi-region-us-city-los_angeles-session-ab12cd-sessTime-30:YOUR_PASSWORD@gate.joyproxy.com:9001 https://ipinfo.io/json
```

### 2. Python (Requests 模組)
```python
import requests

proxy_user = "user1-zone-resi-region-us-city-new_york-session-demo01-sessTime-15"
proxy_pass = "YOUR_PROXY_PASSWORD"
proxy_url = f"http://{proxy_user}:{proxy_pass}@gate.joyproxy.com:9001"

proxies = {
    "http": proxy_url,
    "https": proxy_url,
}

response = requests.get("https://ipinfo.io/json", proxies=proxies, timeout=10)
print(response.json())
```

### 3. 防關聯瀏覽器（AdsPower / BitBrowser / Hubstudio）
* **代理類型**：選擇 `HTTP` 或 `SOCKS5`
* **代理主機**：`gate.joyproxy.com`
* **代理連接埠**：`9001`
* **代理帳號**：填入完整的長使用者名稱（含 `zone`、`region` 等參數）
* **代理密碼**：填入在「使用者與白名單」中設定的密碼
* 點擊「測試連線」，確認偵測出的地理位置與目標城市一致後即可直接啟動。

---

**相關產品與技術文件：**

* 線上控制台產生器：[JoyProxy 提取中心](https://www.joyproxy.com/admin-ip-extraction-center.html)
* 帳密與子帳戶管理：[JoyProxy 使用者與白名單](https://www.joyproxy.com/admin-user-whitelist.html)
* 動態住宅代理產品頁：[JoyProxy 住宅代理](https://www.joyproxy.com/products/proxy-residential.html)（按量計費，$3.50/GB 起，流量不過期）
* 商業代理產品頁：[JoyProxy 商業代理](https://www.joyproxy.com/products/proxy-business.html)
* 移動代理產品頁：[JoyProxy 移動代理](https://www.joyproxy.com/products/proxy-mobile.html)
