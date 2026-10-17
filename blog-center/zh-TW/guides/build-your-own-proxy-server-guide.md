---
title: "3分鐘在 Linux 與 Windows 上架設自己的代理伺服器（實戰指南2026版）"
description: "告別繁瑣的 Squid 與 Dante 複雜設定。手把手教您使用輕量開源工具在 Linux 雲端伺服器與 Windows 本地快速啟動 HTTP / SOCKS5 代理閘道，並透過桌面 Tester 與安卓用戶端完成檢測與分流驗證。"
category: guides
legacyUrl: https://www.joyproxy.com/blog/build-your-own-proxy-server-guide_tw.html
date: 2026-10-17
---

# 3分鐘在 Linux 與 Windows 上架設自己的代理伺服器（實戰指南2026版）

在團隊協作、跨國資料擷取或多裝置測試時，許多工程師與營運人員常會遇到這類實際痛點：

* **自動化腳本「只認本機 IP」**：手頭的 Python 爬蟲、商用採集工具或舊版軟體不支援輸入複雜的代理長使用者名稱與密碼，只允許填入一個簡單的 `127.0.0.1:8080`；
* **帳號密碼四處外洩**：團隊內十幾位成員都在使用公司採購的上游代理，如果每部電腦都填寫一組核心帳密，不僅難以統一控管，一旦密碼洩漏還得全體重設；
* **內部網路設備缺乏外部出口**：機房或區域網絡內的多台測試機位於內部私有網路環境，需要一台統一的跳板機作為中繼代理出口。

早年為了解決這些問題，大家習慣在 Linux 上折騰 Squid、Dante 或是 Nginx stream 模組。但實際架設過的朋友都知道過程多麼繁瑣：光是編寫各種 ACL 規則、除錯認證檔與連接埠轉發，大半天時間就搭進去了，一不留神還容易架成被公網掃描器瘋狂濫用的開放節點。

其實在 2026 年，架設高效能代理伺服器早已不需要手寫冗長的設定檔。本文將帶您使用輕量高效的單一執行檔工具 **JoyProxy Server**，在 Linux 與 Windows 上僅需幾行指令或透過圖形化介面，3 分鐘內跑起專屬的 HTTP / SOCKS5 代理閘道，並搭配桌面檢測工具與安卓用戶端快速完成連線驗證。

---

## 架構核心：一台輕量代理閘道能幫您做什麼？

閘道程式本身為獨立執行檔，免安裝、零相依性，就像一座**智慧交通樞紐**，架設在您的用戶端與上游網絡之間：

```text
+-------------------+        HTTP / SOCKS5         +------------------------+
| 手機 / 爬蟲 / 電腦  | --------------------------> | 您的代理伺服器 (JoyProxy) |
+-------------------+      (內網或指定埠免密)         +------------------------+
                                                               |
                                                 轉發流量並自動帶上核心認證
                                                               v
                                                   +------------------------+
                                                   | JoyProxy 上游住宅/ISP出口|
                                                   +------------------------+
```

1. **雙協議支援**：同一個埠號或分立埠號，同時支援標準 HTTP CONNECT 代理與 SOCKS5 代理；
2. **認證代轉**：區域網路用戶端連線至此伺服器時可設定免密或透過 IP 白名單連入，而閘道在向上游轉發流量時，會自動補足完整的海外代理認證資訊；
3. **零設定門檻**：不依賴任何第三方執行環境或複雜的 YAML 語法，所有運作邏輯只需一條啟動指令或在桌面視窗點選即可完成。

---

## 第一部分：Linux 伺服器快速架設（命令列 1 分鐘啟動）

無論您使用的是 AWS、GCP、DigitalOcean、Linode 或阿里雲、騰訊雲等各類海外 VPS，Linux 都是最常見的部署環境。

### 1. 下載程式檔案

閘道已編譯為單一 Go 二進位執行檔，直接從 GitHub Releases 下載即可（無需預先安裝 Python 或 Node.js 等執行環境）：

```bash
# 1. 下載適用於 64 位元 Linux 系統的執行檔
curl -L -o joyproxy https://github.com/joyproxy/joyproxy-server/releases/download/v2.3/joyproxy-linux-amd64

# 2. 賦予執行權限並移動至系統執行路徑
chmod +x joyproxy
sudo mv joyproxy /usr/local/bin/joyproxy
```

> **舊版系統建議**：如果您的主機是較舊的 CentOS 7.x（glibc 2.17+），可以直接在 Releases 頁面下載 `joyproxy-centos7-linux-amd64.tar.gz` 解壓縮使用，完全不用擔心動態連結庫版本報錯的問題。

### 2. 三種常見情境的一行啟動指令

核心功能均整合在 `sps` 子指令中，依照您的架構需求挑選合適指令：

#### 情境 A：純本地區域網路免密跳板（最簡潔）
允許本機或同區網設備免密連線 `8080` 埠號直接出網：
```bash
joyproxy sps -S http -p ":8080" -g "您的伺服器公網IP"
```

#### 情境 B：自動帶上帳密中繼至上游節點（自動化爬蟲必備）
本地用戶端連線 `8080` 無需輸入密碼，閘道接收請求後，自動轉發至 JoyProxy 的海外靜態或動態住宅代理上游：
```bash
joyproxy sps -S http -p ":8080" -g "您的伺服器公網IP" \
  -parent "http://使用者名稱:密碼@gate.joyproxy.com:9001"
```

#### 情境 C：啟用帳號密碼保護（防止公網被盜刷）
若伺服器直接面向公網開放，建議啟用身分驗證。用戶端連線時必須帶入指定帳號與密碼：
```bash
# 啟動帶外部帳密校驗的代理服務
joyproxy sps -S http -p ":8080" -g "您的伺服器公網IP" \
  --auth-url "https://api.yourdomain.com/auth"
```

### 3. 設定背景常駐與開機自動啟動

確認測試無誤後，請勿直接關閉終端機視窗。JoyProxy 內建了守護處理序參數，一行指令即可實現背景常駐與異常自動重啟：

```bash
# 啟用背景常駐 (--daemon) 與處理序終止自動重啟 (--forever)
joyproxy sps -S http -p ":8080" -g "您的伺服器公網IP" --daemon --forever
```

如果您偏好使用 Linux 標準的 `systemctl` 統一控管系統服務，也可以編寫一份標準設定檔 `/etc/systemd/system/joyproxy.service`：

```ini
[Unit]
Description=JoyProxy Gateway Service
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/joyproxy sps -S http -p ":8080" -g "您的伺服器公網IP" --no-detach
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

執行 `sudo systemctl enable --now joyproxy`，代理伺服器即會隨系統開機自動於背景常駐運作。

---

## 第二部分：Windows 電腦架設（圖形化介面一鍵完成）

若您需要在 Windows 工作機、本機測試環境或海外 Windows Server 上臨時開設代理節點供同事或區域網路裝置連入，完全不必開啟命令提示字元，使用圖形化介面版本 `joyproxy-gui.exe` 更為直覺。

1. 從官方 Releases 頁面直接下載 **`joyproxy-gui.exe`**；
2. 程式為綠色免安裝版本，按兩下即可開啟主視窗：

![JoyProxy Windows GUI 桌面代理管理視窗](https://www.joyproxy.com/products/images/proxy-server-windows-gui.png?v=1)

在圖形介面中，所有參數設定一目了然：
* **監聽埠號**：例如填入 `8080`；
* **本地 IP**：預設選取 `0.0.0.0`（允許區域網絡其他裝置連入），或選取 `127.0.0.1`（僅限本機程式連入）；
* **代理類型**：依需求勾選 HTTP 或 SOCKS5；
* **授權模式**：提供開放代理、白名單驗證或自訂帳號密碼認證。

點選介面中央的 **「啟動」** 按鈕，按鈕狀態切換為停止即代表服務成功上線。下方內建的即時日誌監視器會即時捲動顯示每筆連入的用戶端 IP、請求目標網域以及流量傳輸狀態，障礙排除非常便利。

---

## 第三部分：桌面端快速檢測（使用 JoyProxy Tester 全面質檢）

代理伺服器架設完成後，如何準確驗證連線品質、延遲表現與出口 IP 是否正確？

許多人習慣在瀏覽器中手動修改系統代理連線，但這種方式不僅操作麻煩，且容易受到瀏覽器本地快取或全域 VPN 的干擾。建議使用專屬的開源桌面測試工具 **JoyProxy Tester**（免安裝單一 EXE 檔執行）。

![JoyProxy Tester 桌面單節點質檢與地理位置查詢介面](https://www.joyproxy.com/products/images/tester-single.png?v=2)

### 檢測實作步驟：
1. 開啟 JoyProxy Tester，選擇 **Single Test（單節點檢測）**；
2. 協議選擇 **HTTP** 或 **SOCKS5**；
3. 在位址欄填入剛剛架設好的伺服器 IP 與埠號（如 `192.168.1.100:8080`，若設有密碼則填入 `user:pass@192.168.1.100:8080`）；
4. 點選 **Start Test** 開始檢測。

軟體會在毫秒級時間內完成 TCP 交握與 HTTP CONNECT 通道協商，並自動向全球多個 IP 資料庫發起查詢。在檢測儀表板上您可以清楚確認：
* **交握延遲**：連線至自建伺服器所需耗費的毫秒數；
* **出口 IP 與地理歸屬**：是否正確顯示為自建主機或上游指定的海外節點；
* **通訊協定相容度**：不僅支援標準 HTTP，也能直接驗證 SOCKS5 UDP 通道穿透表現。

當所有指標皆呈現綠色正常狀態時，代表您的代理伺服器已具備上線投入生產環境的穩定度。

---

## 第四部分：行動端連入與精準分流（透過 JoyProxy Android 用戶端實測）

對於經營出海社群影音（例如 TikTok、Instagram）、行動廣告投放驗證或跨區手遊測試的團隊，經常需要將實體手機的流量導向自建的代理節點。

直接在 Android 系統內建 Wi-Fi 設定中設定代理，功能相對陽春，也容易遇到 UDP 斷線或本機 App 無法分流的問題。此時建議採用基於 sing-box 核心打造的 **JoyProxy Android 用戶端**。

![JoyProxy Android Client 手機用戶端連線與應用程式級分流介面](https://www.joyproxy.com/products/images/android-client-screenshot.jpg?v=3)

### 行動端連線與分流設定技巧：
1. **安裝 APK**：從官方 GitHub 下載正式簽署的 `app-release.apk`，在實體安卓手機或電腦模擬器（如雷電、夜神）中直接安裝，**全程無需 Root 權限**；
2. **填寫伺服器資訊**：協議選擇 HTTP 或 SOCKS5，填入自建代理伺服器的公網或內網 IP 以及對應埠號；
3. **連線測試**：在尚未點選連線的狀態下，先點選底部的「測試」按鈕，確認手機與代理閘道間的網路暢通；
4. **依需求配置「應用程式白名單分流」**：
   * **全域模式**：手機內所有 App 流量皆經由代理伺服器轉發；
   * **白名單模式（強烈推薦）**：**僅勾選需要出海的目標應用程式**（例如 Chrome 瀏覽器、TikTok 或跨境賣家後台 App）。即時通訊軟體、本機電子郵件與網路銀行 App 保持本地線路直連。既不會干擾日常通訊，也能避免一般通訊軟體觸發跨區風控警報；
5. 點選中央 **「連接代理」**，在系統彈出的連線權限確認框中點選允許，狀態列出現鑰匙圖示即代表代理接管成功。

---

## 常用架設與參數速查矩陣

為了方便後續日常維護與快速除錯，我們將最核心的參數與應用情境整理如下表：

| 運作情境 | 核心啟動參數組合 | 適用情境說明 |
|---|---|---|
| **區域網絡免密共享** | `-p ":8080" -g "IP"` | 辦公室內多台電腦共用同一部主機的代理通道出網 |
| **透明中繼代轉** | `-p ":8080" -parent "http://u:p@上游:9001"` | 讓不支援帳密填寫的舊型採集工具無縫接入海外節點 |
| **多埠號分流出口** | `-p ":5001-5010"` | 開放一段連接埠範圍，將不同埠號分配給不同專案或執行緒 |
| **背景持久守護** | `--daemon --forever` | 生產伺服器常駐運作，處理序意外中斷時自動重啟復原 |
| **系統服務託管模式** | `--no-detach` | 配合 Linux systemd 守護行程使用，保持主處理序前台不脫離 |
| **連線速率限流** | `--max-conns-rate 100` | 限制每秒最大新建連線數，避免突發高併發塞滿頻寬 |

---

**官方工具與相關檔案連結：**

* 代理伺服器端官方下載與文件：[JoyProxy Server 產品介紹](https://www.joyproxy.com/products/proxy-server.html) · [GitHub 倉庫](https://github.com/joyproxy/joyproxy-server)
* 桌面端質檢工具下載：[JoyProxy Tester 詳情](https://www.joyproxy.com/products/tester.html) · [GitHub Releases](https://github.com/joyproxy/joyproxy-tester/releases/latest)
* 安卓用戶端下載：[JoyProxy Android Client 詳情](https://www.joyproxy.com/products/android-client.html) · [APK 官方發布頁](https://github.com/joyproxy/joyproxy-client-android/releases/latest)
* 上游優質代理 IP 採購：[了解 JoyProxy 住宅代理與 ISP 靜態產品](https://www.joyproxy.com/products/proxy-residential.html) · [查看即時方案定價](https://www.joyproxy.com/pricing.html)
