# Adhira Choudhury — Portfolio Site

Next.js portfolio with a Gemini-powered chatbot and JSON-driven blog articles.

## Quick start

```bash
cd adhira-site
npm install
cp .env.example .env.local   # add GEMINI_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Content guide

This project uses **three separate content areas**. They are intentionally split so the website and chatbot can differ in tone.

| What | File(s) | Powers |
|------|---------|--------|
| **Website** | `content/site.json` | Home, About, Experience, Projects, skills, press, nav copy |
| **Chatbot** | `content/chat-context.md` | AI assistant only (Gemini + offline fallback) |
| **Articles** | `content/articles/*.json` | `/blog` listing and `/blog/[slug]` pages |

After editing content, restart `npm run dev` (or redeploy on Vercel) to pick up changes.

---

## Updating the website

Edit **`content/site.json`** — the single source of truth for visible site copy.

Common sections:

- `hero` — homepage headline and bio
- `about` — About page paragraphs
- `workExperience` — job timeline
- `projects` — project cards
- `skills` — skills marquee
- `featuredArticles` — press / media section
- `social` — LinkedIn, GitHub, X links
- `pages` — page titles and empty states (e.g. blog)

No code changes needed for typical copy updates.

---

## Updating the chatbot

Edit **`content/chat-context.md`** only.

- The chatbot **does not** read `site.json` anymore.
- When you change facts on the website, **also update** `chat-context.md` so answers stay accurate.
- Write in note form (bullets, tables). The assistant is instructed to **paraphrase** — not read answers aloud like a webpage.
- Use `## Section title` headers — they become search sections for offline mode.

### Tips for better answers

- Add conversational facts (how she’d explain something in an interview).
- Keep a **Topics to avoid** section for confidential items.
- Published blog articles are **auto-included** in the Gemini prompt (title + excerpt). For deeper article Q&A, add a short summary under a `## Articles` section in the markdown file.

### Environment

```bash
# .env.local
GEMINI_API_KEY=your-key-from-aistudio.google.com
GEMINI_MODEL=gemini-2.5-flash-lite
```

Without an API key, the chat falls back to keyword search over `chat-context.md` (less natural, but works).

---

## Adding or updating articles

Articles live in **`content/articles/`** as JSON files. No React/code edits required.

### 1. Copy the template

```bash
cp content/articles/article.template.json content/articles/article_1.json
```

You can name files `article_1.json`, `article-my-post.json`, or any `.json` — except:

- Files containing **`template`** in the name (ignored)
- Files starting with **`_`** (ignored)

### 2. Fill in the JSON

| Field | Required | Description |
|-------|----------|-------------|
| `published` | — | Set `true` or omit to publish. Template uses `false`. |
| `slug` | Yes | URL path: `/blog/your-slug` (lowercase, hyphens) |
| `title` | Yes | Article title |
| `subtitle` | No | Optional subtitle |
| `date` | Yes | ISO date, e.g. `"2026-05-17"` |
| `author` | No | Defaults to `"Adhira Choudhury"` |
| `tags` | No | Array of strings for listing chips |
| `coverImage` | No | Path under `public/`, e.g. `"/blog/cover.jpg"` |
| `excerpt` | Yes* | Short summary for blog list (*auto-truncated from body if omitted) |
| `body` | Yes | Full article in **Markdown** |

### 3. Publish

Set `"published": true` (or remove `"published": false`), save, and restart dev / redeploy.

The blog index at **`/blog`** lists all published articles. Empty state copy comes from `site.json` → `pages.blog`.

### Example

```json
{
  "published": true,
  "slug": "building-rag-at-scale",
  "title": "Building RAG at Scale",
  "subtitle": "Lessons from production GenAI",
  "date": "2026-05-17",
  "tags": ["AI", "RAG"],
  "excerpt": "What I learned deploying retrieval systems in regulated environments.",
  "body": "# Introduction\n\nYour markdown here..."
}
```

---

## Deploy on Vercel

1. Push the repo to GitHub.
2. Import the project in [Vercel](https://vercel.com) — set **Root Directory** to `adhira-site` if the repo is the monorepo root.
3. Add environment variables: `GEMINI_API_KEY`, optional `GEMINI_MODEL`.
4. Deploy.

Framework is detected as Next.js; `vercel.json` is already configured.

---

## Project structure

```
adhira-site/
├── app/                    # Next.js routes
│   ├── blog/               # Article list + [slug] pages
│   ├── chat/               # Full-page chat
│   └── api/chat/           # Gemini API route
├── components/             # UI + Chatbot + ChatWidget
├── content/
│   ├── site.json           # Website copy
│   ├── chat-context.md     # Chatbot knowledge (only source for AI)
│   └── articles/           # Blog JSON files
└── lib/
    ├── content.ts          # Loads site.json
    ├── chat-context.ts     # Loads chat-context.md for AI
    ├── chat-engine.ts      # Client chat + offline fallback
    └── articles.ts         # Loads article JSON files
```
