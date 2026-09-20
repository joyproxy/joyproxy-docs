# JoyProxy Help Center (VitePress)

Builds static HTML for `https://www.joyproxy.com/help/` from `../help-center/en` and `../help-center/zh`.

## Prerequisites

- Node.js 18+
- Edit Markdown only under `help-center/` (not `.content/` — generated).

## Commands

```bash
npm ci
npm run dev      # http://localhost:5173/help/
npm run build    # output: .vitepress/dist
npm run preview  # preview production build
```

Sidebars are generated from `help-center/en/SUMMARY.md` and `help-center/zh/SUMMARY.md` at config load time.

## Deploy

Copy the contents of `.vitepress/dist` to `{frontend}/help/` on the server (nginx `location /help/`).
