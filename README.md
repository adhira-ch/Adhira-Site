# Adhira-Site

Portfolio site (Next.js) with Gemini-powered chatbot.

## App location

The Next.js app lives in **`adhira-site/`** (set this as the **Root Directory** in Vercel).

## Local development

```bash
cd adhira-site
cp .env.example .env.local   # add GEMINI_API_KEY
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — chat at `/chat`.

## Content

| File | Purpose |
|------|---------|
| `adhira-site/content/site.json` | All visible site copy |
| `adhira-site/content/chat-context.md` | Extra LLM-only context (not on pages) |

## Deploy (Vercel + GitHub)

1. Push the `development` branch (or your chosen production branch).
2. Import **adhira-ch/Adhira-Site** on [vercel.com](https://vercel.com).
3. **Root Directory:** `adhira-site`
4. Add env vars: `GEMINI_API_KEY`, `GEMINI_MODEL=gemini-2.5-flash-lite`
5. Point **adhirachoudhury.com** / **www** in Vercel → Domains.

`old_docs/` and `docs/` are archived static exports — not used by the live app.
