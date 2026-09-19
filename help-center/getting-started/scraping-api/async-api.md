# 异步队列任务 API

当你的业务需要**大批量抓取（如一次性抓取数万个 URL）**，或者目标网页渲染时间较长时，使用同步 HTTP 请求可能会因为长连接超时或并发爆表而导致失败。

JoyProxy 提供了 **异步队列任务 API（Async API）**。你可以将大批量的抓取任务提交到云端异步队列中，获取 Job ID 与 Task ID，后台会自动调度云端渲染集群完成抓取，你只需通过定时轮询或回调获取结果。

---

## 异步任务流转架构

```text
你的系统                          JoyProxy 异步队列                        目标网站
  │                                      │                                   │
  ├── 1. POST /v1/fetch/async/jobs ─────►│                                   │
  │   (提交批量 URL 列表)                 ├── 调度代理与 Headless 抓取 ───────►│
  │◄── 返回 job_id & task_ids ───────────┤                                   │
  │                                      │◄── 返回页面数据 ──────────────────┤
  │                                      │                                   │
  ├── 2. GET /v1/fetch/async/jobs/{id} ─►│                                   │
  │   (轮询查询任务进度)                  │                                   │
  │◄── 返回 status: completed ───────────┤                                   │
  │                                      │                                   │
  └── 3. GET /v1/fetch/async/jobs/... ──►│ (仅在成功获取结果时扣除积分)      │
```

---

## 关键端点与操作步骤

### 1. 提交异步任务包（Submit Job）
- **端点**：`POST /v1/fetch/async/jobs?token=YOUR_SCRAPING_TOKEN`
- **请求头**：`Content-Type: application/json`
- **请求体 (JSON)**：
  ```json
  {
    "tasks": [
      { "url": "https://example.com/page1", "render": true },
      { "url": "https://example.com/page2", "super": true, "geoCode": "us" }
    ]
  }
  ```
- **返回**：包含 `job_id` 和对应每个 URL 的 `task_id` 列表。

### 2. 轮询任务状态（Poll Status）
- **端点**：`GET /v1/fetch/async/jobs/{job_id}?token=YOUR_SCRAPING_TOKEN`
- **返回**：当前 Job 的整体完成进度（如已完成数、等待中数、失败数）。

### 3. 获取抓取结果（Fetch Result）
- **端点**：`GET /v1/fetch/async/jobs/{job_id}/{task_id}?token=YOUR_SCRAPING_TOKEN`
- **返回**：对应任务的抓取结果 HTML / JSON 内容。

---

## 异步 API 的优势与扣费

1. **不占用同步并发限制**：异步 Job 提交后由云端队列平滑排队处理，有效避免 `429 Too Many Requests` 报错。
2. **计费规则与同步完全一致**：仅针对成功获取到 HTML/JSON 内容的 Task 扣除 Credits 积分，提交任务包时不预扣积分，执行失败或超时的任务**零扣费**。
