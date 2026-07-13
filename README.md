# Plus3 Solutions — Website

Single-file Cloudflare Worker website for [plus3.co.za](https://plus3.co.za).

## Stack
- **Cloudflare Workers** — edge-deployed, zero cold start
- **Self-contained `worker.js`** — entire HTML/CSS/JS embedded, no bundler needed
- **System dark/light mode** — `@media (prefers-color-scheme: dark)` only, no JS toggle
- **Auto copyright year** — computed at runtime, refreshes at midnight
- **SEO** — semantic HTML5, `lang="en"`, `hreflang`, canonical URL, meta tags
- **Scroll animations** — CSS-native `animation-timeline: scroll()`, zero layout shift
- **Contact form** — POSTs to `/api/contact` on the Worker (MailChannels hook included)

## Deploy

```bash
npx wrangler login
npx wrangler deploy
```

## Custom Domain

1. Add `plus3.co.za` to Cloudflare (change nameservers at your registrar)
2. Uncomment the `routes` block in `wrangler.toml`
3. Re-deploy: `npx wrangler deploy`

## Contact Form Email

Uncomment the MailChannels block in `worker.js` to enable email delivery to `info@plus3.co.za` (free, no API key needed on Cloudflare Workers).
