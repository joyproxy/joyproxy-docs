# 异步队列任务 API（Async API）

当你的业务需要**大批量抓取（如一次性抓取数万个 URL）**，或者目标网页渲染时间较长时，使用同步 HTTP 请求可能会因为长连接超时或并发爆表而导致失败。

JoyProxy 提供了 **异步队列任务 API（Async API）**。你可以将大批量的抓取任务提交到云端异步队列中，获取 Job ID 与 Task ID，后台会自动调度云端渲染集群完成抓取，你只需通过定时轮询或回调获取结果。

---

## 异步任务流转架构

```text
你的系统                       JoyProxy 异步队列                     目标网站
  │                                   │                                │
  ├── 1. POST /v1/async/job ─────────►│                                │
  │   (提交批量 URL 列表)              ├── 调度代理与 Headless 抓取 ────►│
  │◄── 返回 job_id & task_ids ────────┤                                │
  │                                   │◄── 返回页面数据 ───────────────┤
  │                                   │                                │
  ├── 2. GET /v1/async/status ───────►│                                │
  │   (轮询查询任务进度)               │                                │
  │◄── 返回 status: completed ────────┤                                │
  │                                   │                                │
  └── 3. GET /v1/async/result ───────►│ (仅在成功获取结果时扣除积分)   │
```

---

## 关键端点与操作步骤

### 1. 提交异步任务包（Submit Job）
- **端点**：`POST /v1/async/job?token=YOUR_SCRAPING_TOKEN`
- **请求体 (JSON)**：
  ```json
  {
    "tasks": [
      { "url": "https://example.com/page1", "render": true },
      { "url": "https://example.com/page2", "super": true }
    ]
  }
  ```
- **返回**：包含 `job_id` 和对应每个 URL 的 `task_id` 列表。

### 2. 轮询任务状态（Poll Status）
- **端点**：`GET /v1/async/status?token=YOUR_SCRAPING_TOKEN&job_id=JOB_ID`
- **返回**：当前 Job 的整体完成进度百分比（如 `completed: 2, pending: 0, failed: 0`）。

### 3. 获取抓取结果（Fetch Result）
- **端点**：`GET /v1/async/result?token=YOUR_SCRAPING_TOKEN&task_id=TASK_ID`
- **返回**：对应任务的抓取结果 HTML / JSON 内容。

---

## 异步 API 的优势与扣费

1. **不占用同步并发限制**：异步 Job 提交后由云端队列平滑排队处理，有效避免 `429 Too Many Requests` 报错。
2. **0 扣费保证**：与同步 API 完全一致，积分**仅在成功获取到 Task Result 结果时**才从账户中扣除。
