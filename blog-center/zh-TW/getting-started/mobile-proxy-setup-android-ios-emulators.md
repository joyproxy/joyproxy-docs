---
title: "手機與模擬器代理設定入門：Android 分應用代理、iPhone (iOS) 與安卓模擬器防洩漏實戰（2026）"
description: "手把手教你設定 Android、iPhone/iPad (iOS) 與安卓模擬器（LDPlayer 雷電、MuMu、Android Studio/ADB）的 HTTP/SOCKS5 代理。詳解分應用白名單防偷跑流量、IP 白名單 vs 帳密認證及行動端防穿幫檢測。"
category: getting-started
date: 2026-11-26
---

# 手機與模擬器代理設定入門：Android 分應用代理、iPhone (iOS) 與安卓模擬器防洩漏實戰（2026）

在 Linux 伺服器或 Python 腳本裡配好代理通常只需要一行環境變數，但一旦遷移到**實體手機或安卓模擬器**，開發者與營運團隊立刻會遇到一連串棘手問題：

* 「安卓系統的 Wi-Fi 手動代理只有主機和連接埠輸入框，沒有帳號密碼欄，動態代理怎麼連？」
* 「手機掛了全域 Wi-Fi 代理，結果系統更新和背景同步一晚上偷跑了 4 GB 住宅流量。」
* 「iPhone 配好了 Wi-Fi 代理，切到 4G/5G 行動網路後代理直接失效。」
* 「TikTok、Instagram 等 App 明明查到是美國 IP，卻依然推送本地內容甚至觸發環境異常風控。」

本文將帶你用最短路徑跑通 **Android 實體機**、**iPhone / iPad（iOS）** 以及 **主流安卓模擬器** 的代理設定，同時徹底避開系統背景偷跑流量、本地 DNS/IPv6 洩漏和 GPS 時區穿幫陷阱。

---

## 一、先選對行動端代理線路與認證方式

開始設定手機之前，先根據業務場景匹配最合適的 JoyProxy 產品線與接入協定：

| 行動端業務場景 | 推薦 JoyProxy 產品線 | 入口與認證方式 | 核心優勢 |
| :--- | :--- | :--- | :--- |
| **多裝置/模擬器 App 測試與批次資料擷取** | **[住宅代理](https://www.joyproxy.com/products/proxy-residential.html)**（`-zone-resi`）或 **[行動代理](https://www.joyproxy.com/products/proxy-mobile.html)**（`-zone-cellular`） | `gate.joyproxy.com:9001` + 長使用者名稱密碼（`-session-<id>-sessTime-<min>`） | 每次新建工作階段可分配不同真實家庭寬頻或 4G/5G 電信商 IP，支援最長 1,440 分鐘黏性工作階段 |
| **主力社群矩陣、廣告後台與商店長期登入** | **[ISP（獨享靜態住宅）代理](https://www.joyproxy.com/products/proxy-isp.html)**（`isp.joyproxy.com`） | 獨立連接埠 + 帳密 **或** IP 白名單 | 固定紐約、洛杉磯、倫敦、東京、新加坡等城市原生電信商 ASN，獨享不限流量 |
| **高風控行動 App（TikTok、IG、支付類）與高畫質影片上傳** | **[真機獨享 4G/5G 代理](https://www.joyproxy.com/products/proxy-mobile-dedicated.html)** | 獨享實體 SIM 卡連接埠 + 帳密 / 按需切換 IP | 單租戶獨立實體卡槽與數據機，電信商 CGNAT 最高信任度，真正不限流量 |
| **測試環境聯調、高頻介面壓測** | **[資料中心代理](https://www.joyproxy.com/products/proxy-datacenter.html)**（`dc.joyproxy.com`） | 獨立連接埠 + 帳密 **或** IP 白名單 | 超低延遲、千兆頻寬且無按 GB 計費焦慮 |

> [!IMPORTANT] 系統內建 Wi-Fi 代理 vs 專用用戶端的核心差異
> 絕大多數原版 Android 系統的 Wi-Fi 手動代理介面**只支援填寫主機名稱和連接埠，不支援輸入使用者名稱和密碼**。如果你使用的是 **[ISP 代理](https://www.joyproxy.com/products/proxy-isp.html)** 或 **[資料中心代理](https://www.joyproxy.com/products/proxy-datacenter.html)**，可以先將目前 Wi-Fi 公網 IP 加入控制台「使用者與白名單」實現免密連線；但 **動態代理統一閘道（`gate.joyproxy.com:9001`）必須使用長使用者名稱與密碼認證**，因此必須搭配用戶端 App 使用，或藉助用戶端實現**分應用代理**。

---

## 二、Android 實體機設定：免 Root 分應用代理（推薦）

在 Android 手機上測試 App，最核心的訴求是：**只讓目標 App 走代理，通訊軟體、系統更新、雲端同步等日常軟體繼續走本地網路**，既省流量又不影響日常通訊。

使用開源免費的 **[JoyProxy Android 用戶端](https://www.joyproxy.com/products/android-client.html)**，無需 Root 即可透過 Android 原生介面實現分應用精細分流。

### 1. 使用 JoyProxy Android 用戶端（支援全域 / 白名單 / 黑名單）

1. **下載安裝 APK**：在手機瀏覽器打開 **[JoyProxy 軟體下載頁](https://www.joyproxy.com/products/software.html)** 或 **[Android 用戶端產品頁](https://www.joyproxy.com/products/android-client.html)**，下載官方簽章安裝包並安裝。
2. **新增代理設定**：
   * **協定**：選擇 `HTTP` 或 `SOCKS5`（涉及非 HTTP 協定或需確保遠端解析 DNS 時建議優先選 `SOCKS5`）。
   * **接入動態住宅 / 行動 / 商業代理**：
     * **伺服器**：`gate.joyproxy.com`
     * **連接埠**：`9001`
     * **使用者名稱 / 密碼**：從 **[IP 擷取中心](https://www.joyproxy.com/admin-ip-extraction-center.html)** 完整複製產生的長使用者名稱（例如 `subuser-zone-cellular-region-us-city-los_angeles-session-mob01-sessTime-60`）與子帳號密碼。
   * **接入靜態 ISP / 資料中心 / 真機獨享 4G/5G 代理**：
     * 填入對應入口網域（如 `isp.joyproxy.com` 或 `dc.joyproxy.com`）、獨立連接埠號與帳密（已加白名單可留空）。
3. **設定分應用作用域（Per-App Proxy Scope）**：
   * 將代理模式從 `全域（Global）` 切換為 **`白名單（Whitelist）`**。
   * 僅勾選需要走代理的目標 App 或測試瀏覽器。
   * 未勾選的 App 與系統進程將完全繞過代理，徹底杜絕背景更新偷跑住宅流量。
4. **測試並一鍵連線**：
   * 點擊連通性測試確認延遲正常後，點擊主介面**連線**按鈕，並允許系統彈出的本地 VPN 權限請求即可生效。

### 2. 備選方案：Android 原生 Wi-Fi 手動代理（僅限靜態線路）

如果測試機受限無法安裝 APK，且你使用的是 **ISP 代理** 或 **資料中心代理**：

1. 登入 JoyProxy 控制台，在「使用者與白名單」中新增目前 Wi-Fi 出口的公網 IPv4 位址。
2. 打開手機 **設定 → WLAN / Wi-Fi → 點擊目前網路右側設定圖示 → 修改/進階選項 → 代理 → 手動**。
3. 填入入口主機名稱（如 `isp.joyproxy.com`）與連接埠，儲存即可。
4. 測試完畢務必將代理改回**無**；注意原生 Wi-Fi 代理僅對該 Wi-Fi 熱點生效，切換到行動數據後不會經過代理。

---

## 三、iPhone 與 iPad（iOS / iPadOS）設定指南

蘋果裝置內建的 Wi-Fi 代理比 Android 更完整，原生支援帳密認證，但在行動網路和分應用控制上有邊界。

### 方案 A：iOS 原生 Wi-Fi 手動代理（支援帳密認證）

1. 打開 **設定 → Wi-Fi**，點擊目前已連線網路右側的 **`ⓘ`** 圖示。
2. 滑到底部點擊 **設定代理伺服器 → 手動**。
3. 按產品類型填寫參數：
   * **伺服器**：動態代理填 `gate.joyproxy.com`；靜態線路填對應入口主機（如 `isp.joyproxy.com` / `dc.joyproxy.com`）。
   * **連接埠**：動態代理填 `9001`；靜態線路填專屬連接埠。
   * **認證**：動態代理務必打開**認證**開關，填入完整長使用者名稱與密碼；靜態線路若已設定 IP 白名單可關閉認證。
4. 點擊右上角**儲存**，隨後打開 Safari 存取 `https://ipinfo.io/json` 驗證出口 IP。

### 方案 B：需要 4G/5G 行動網路、SOCKS5 或分應用規則時

iOS 原生設定僅對目前 Wi-Fi 下的標準 HTTP/HTTPS 流量生效。如果你希望在手機 SIM 卡行動網路下保持代理、使用 `SOCKS5` 協定或按 App/網域分流，需使用支援 HTTP/SOCKS5 協定的第三方 iOS 代理工具（如 Shadowrocket、Potatso 或 Loon 等），匯入相同的伺服器、連接埠與帳密並設定分流規則即可。

---

## 四、安卓模擬器與雲手機設定（LDPlayer 雷電、MuMu、Android Studio、ADB）

在 PC 上執行雷電、MuMu 或 CI/CD 無頭模擬器進行 App 自動化測試時，有三種常用接法：

### 1. 雷電（LDPlayer）/ MuMu 模擬器內設定虛擬 Wi-Fi（靜態 + 白名單）

1. 打開模擬器桌面 **系統應用 → 設定 → 網路和網際網路 → WLAN**。
2. 長按預設虛擬 Wi-Fi（常見名稱為 `WiredSSID`）→ **修改網路 → 進階選項 → 代理 → 手動**。
3. 填入靜態 **ISP 代理** 或 **資料中心代理** 的入口主機與連接埠（需提前把宿主機公網 IP 加入 JoyProxy **IP 白名單**）。
4. 若需使用帶長使用者名稱認證的 **動態住宅** 或 **行動代理**，建議直接在模擬器內安裝 **[JoyProxy Android 用戶端](https://www.joyproxy.com/products/android-client.html)** APK，並開啟白名單模式。

### 2. Android Studio 模擬器（AVD）命令列直接掛載

自動化測試與 CI 流水線中，推薦在啟動 AVD 時透過 `-http-proxy` 參數直接注入含帳密認證的代理：

```bash
# 使用黏性美國洛杉磯行動代理啟動 Android 模擬器
emulator -avd Pixel_8_API_34 \
  -http-proxy "http://subuser-zone-cellular-region-us-city-los_angeles-session-avd01-sessTime-60:YOUR_PASS@gate.joyproxy.com:9001" \
  -dns-server 8.8.8.8
```

### 3. ADB 命令列快速切換全域代理（適合已加白名單的靜態節點）

在本地多開實體測試機群時，可透過 ADB 批次下發或清理已加白名單的靜態連接埠：

```bash
# 為目前連線的裝置或模擬器設定全域 HTTP 代理
adb shell settings put global http_proxy isp.joyproxy.com:YOUR_PORT

# 檢查目前生效的全域代理設定
adb shell settings get global http_proxy

# 測試結束後清除代理恢復直連
adb shell settings put global http_proxy :0
```

> [!TIP] 為什麼 `adb shell settings put global http_proxy` 不適合動態帳密？
> Android 的全域 `http_proxy` 系統屬性在部分 App 中無法正確彈出或透傳 `username:password` 憑證。凡是使用 `gate.joyproxy.com:9001` 帳密認證的場景，建議統一在裝置內使用 **[JoyProxy Android 用戶端](https://www.joyproxy.com/products/android-client.html)** 或 AVD 啟動參數 `-http-proxy`。

---

## 五、行動端防穿幫與防洩漏 5 項必查清單

手機 App 採集的環境維度比網頁端更細。僅僅換了出口 IP 卻保留原有時區和本地 GPS，極易被風控識別為異常裝置：

```text
  JoyProxy 出口 IP：美國洛杉磯（住宅 / 行動電信商）
       │
       ├──► 1. 系統時區：    手動鎖定 America/Los_Angeles（關閉自動同步時區）
       ├──► 2. 系統語言：    與目標國家對齊（如 English (US)）
       ├──► 3. 虛擬定位/GPS：模擬器開啟同城 GPS 座標，或關閉無關定位權限
       ├──► 4. DNS 與 IPv6： 使用 SOCKS5 / VPN 模式託管遠端 DNS，防止 UDP 洩漏
       └──► 5. IP 連續性：   養號與登入場景鎖定靜態 ISP / 獨享 4G/5G 或長黏性工作階段
```

1. **關閉「自動設定時區」**：無卡測試機或模擬器若保持本地時區卻掛著倫敦或紐約 IP，App 在首次冷啟動時就會記錄時區衝突。請手動將裝置時區改為代理節點所在城市時區。
2. **對齊系統語言與地區格式**：美國節點對應 `English (United States)`，日本節點對應 `日本語`，避免語言與 IP 歸屬地明顯矛盾。
3. **模擬器同步虛擬 GPS 座標**：若目標 App 申請了位置權限，在雷電、MuMu 或 Android Studio 擴展控制面板中，將模擬 GPS 經緯度設定在與 `-city-<城市>` 參數一致的城區範圍內。
4. **攔截 UDP / WebRTC 與本地 DNS 洩漏**：普通系統 Wi-Fi HTTP 代理不接管 UDP 協定（如部分 App 的 WebRTC 或 QUIC 連線）。使用 **[JoyProxy Android 用戶端](https://www.joyproxy.com/products/android-client.html)** 的本地 VPN 託管通道，可顯著降低本地 DNS 和旁路流量洩漏風險。
5. **切換國家前先徹底關閉 App 進程**：切忌在 App 前台活躍狀態下直接把美國 IP 切成英國 IP。切換區域前先強行停止目標 App（多帳號場景需清理快取或隔離執行個體），或為高價值帳號直接綁定一條長期不變的 **[ISP 代理](https://www.joyproxy.com/products/proxy-isp.html)** 或 **[真機獨享 4G/5G 代理](https://www.joyproxy.com/products/proxy-mobile-dedicated.html)**。

---

## 六、60 秒連通性驗證與常見報錯排查

設定生效後，打開手機瀏覽器依序核驗兩項指標：

1. 存取 **`https://ipinfo.io/json`**：確認回傳的 `ip`、`country`、`city` 與 `org`（電信商 ASN）與所選 JoyProxy 線路一致。
2. 存取 **`https://browserleaks.com/webrtc`**（或 `ipleak.net`）：確認未暴露本機區域網路 IP、本地電信商 IP 或原生 IPv6 位址。

| 常見現象 | 高機率原因 | 解決方案 |
| :--- | :--- | :--- |
| **回傳 `407 Proxy Authentication Required`** | 在原生 Android Wi-Fi 手動代理中填了 `gate.joyproxy.com:9001`，或長使用者名稱複製不完整 | 改用 **[JoyProxy Android 用戶端](https://www.joyproxy.com/products/android-client.html)**，並從 **[IP 擷取中心](https://www.joyproxy.com/admin-ip-extraction-center.html)** 重新完整複製帳密 |
| **瀏覽器已換 IP，但目標 App 仍走本地直連** | App 走非 HTTP Socket、強制直連或繞過了系統 HTTP 代理 | 在 JoyProxy Android 用戶端中改用 `SOCKS5` + 本地 VPN 分流模式，並將該 App 加入白名單 |
| **一晚消耗大量住宅流量（GB）** | 使用了全域代理，導致系統更新、應用程式商店或相簿雲同步走代理通道 | 在用戶端切換為**白名單（Whitelist）**分應用代理，僅勾選目標測試 App |
| **靜態 ISP / 資料中心連線卡住無回應** | Wi-Fi 寬頻重新撥號導致公網 IP 變更，原 IP 白名單失效 | 登入控制台更新「使用者與白名單」中的最新出口 IP，或改填帳密認證 |

---

## 下一步行動

* 下載免費開源的 **[JoyProxy Android 用戶端](https://www.joyproxy.com/products/android-client.html)**，體驗免 Root 分應用白名單路由
* 前往 **[IP 擷取中心](https://www.joyproxy.com/admin-ip-extraction-center.html)** 產生適配行動端的 `-zone-cellular` 或 `-zone-resi` 代理參數
* 需要高權重實體 SIM 卡與不限流量手機環境？立即了解 **[真機獨享 4G/5G 代理](https://www.joyproxy.com/products/proxy-mobile-dedicated.html)**，或在 **[價格與方案頁](https://www.joyproxy.com/pricing.html)** 對比各產品線方案。
