# Async queue API

When you need **large batches** (tens of thousands of URLs) or pages that take a long time to render, a synchronous HTTP call can time out or hit Concurrency limits.

Web Scraping API provides an **Async API**. Submit a batch to a cloud queue, receive a job ID and task IDs, and let JoyProxy schedule rendering. Poll or fetch results when tasks complete.

---

## Async job flow

```text
Your system                          JoyProxy async queue                   Target site
  │                                      │                                   │
  ├── 1. POST /v1/fetch/async/jobs ─────►│                                   │
  │   (submit a list of URLs)            ├── schedule proxy + headless ──────►│
  │◄── job_id & task_ids ────────────────┤                                   │
  │                                      │◄── page data ─────────────────────┤
  │                                      │                                   │
  ├── 2. GET /v1/fetch/async/jobs/{id} ─►│                                   │
  │   (poll job progress)                │                                   │
  │◄── status: completed ────────────────┤                                   │
  │                                      │                                   │
  └── 3. GET /v1/fetch/async/jobs/... ──►│ (Credits deducted only on success)│
```

---

## Endpoints and steps

### 1. Submit a job
- **Endpoint**: `POST /v1/fetch/async/jobs?token=YOUR_SCRAPING_TOKEN`
- **Header**: `Content-Type: application/json`
- **Body (JSON)**:
  ```json
  {
    "tasks": [
      { "url": "https://example.com/page1", "render": true },
      { "url": "https://example.com/page2", "super": true, "geoCode": "us" }
    ]
  }
  ```
- **Response**: a `job_id` and a `task_id` for each URL.

### 2. Poll status
- **Endpoint**: `GET /v1/fetch/async/jobs/{job_id}?token=YOUR_SCRAPING_TOKEN`
- **Response**: job progress (completed, waiting, failed).

### 3. Fetch a result
- **Endpoint**: `GET /v1/fetch/async/jobs/{job_id}/{task_id}?token=YOUR_SCRAPING_TOKEN`
- **Response**: HTML / JSON for that task.

---

## Why Async API, and how billing works

1. **Does not consume sync Concurrency**: after you submit a job, the cloud queue processes it smoothly, which helps you avoid `429 Too Many Requests`.
2. **Same billing as sync**: Credits are deducted only for tasks that return HTML/JSON. Submitting a job does not pre-charge Credits. Failed or timed-out tasks are **not charged**.
