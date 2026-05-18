# Deploying Adhira's Portfolio to Vercel

Step-by-step guide to deploy this Next.js site from GitHub to Vercel.

**Repository:** https://github.com/adhira-ch/Adhira-Site  
**App folder:** `adhira-site` (not the repo root)

---

## Prerequisites

- [ ] GitHub account with the `Adhira-Site` repo pushed and up to date
- [ ] [Vercel account](https://vercel.com) (sign up with GitHub)
- [ ] [Google AI Studio API key](https://aistudio.google.com/apikey) for the chatbot (optional but recommended)
- [ ] Node.js installed locally (to verify the build before deploying)

---

## Part 1 — Verify the build locally

Run these commands in PowerShell from the **app folder**:

```powershell
cd "c:\Users\Adhira Choudhury\OneDrive - McKinsey & Company\Adhira-Site\adhira-site"
```

Stop any running dev servers (`Ctrl+C` in terminal windows running `npm run dev`).

### 1.1 Clean the cache (recommended on OneDrive)

```powershell
npm run clean
```

### 1.2 Run a production build

```powershell
npm run build
```

**Success looks like:** the command finishes without errors and shows compiled routes.

**If the build fails:** fix the errors shown in the terminal before deploying. Vercel will fail with the same issues.

> **Note:** Local `npm run dev` errors about `.next\_buildManifest.js.tmp` are usually OneDrive + Turbopack issues. They do **not** mean Vercel will fail, as long as `npm run build` succeeds.

---

## Part 2 — Push code to GitHub

From the **repository root** (parent of `adhira-site`):

```powershell
cd "c:\Users\Adhira Choudhury\OneDrive - McKinsey & Company\Adhira-Site"
git status
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

Use your actual branch name if it is not `main` (e.g. `master`).

**Do not commit** `.env.local` — it contains secrets and should stay gitignored. You will add secrets in the Vercel dashboard instead.

---

## Part 3 — Create the Vercel project

### 3.1 Sign in and import

1. Go to [https://vercel.com](https://vercel.com)
2. Click **Sign Up** or **Log In** → choose **Continue with GitHub**
3. Authorize Vercel to access your GitHub account if prompted
4. Click **Add New…** → **Project**
5. Find **Adhira-Site** in the list and click **Import**

If the repo is missing, click **Adjust GitHub App Permissions** and grant access to `adhira-ch/Adhira-Site`.

### 3.2 Configure the project (required)

On the **Configure Project** screen, set:

| Setting | Value |
|--------|--------|
| **Project Name** | e.g. `adhira-portfolio` (your choice) |
| **Framework Preset** | Next.js (should auto-detect) |
| **Root Directory** | Click **Edit** → select or type `adhira-site` |
| **Build Command** | `npm run build` (default) |
| **Output Directory** | Leave default (Next.js handles this) |
| **Install Command** | `npm install` (default) |

**Critical:** Root Directory must be **`adhira-site`**. If you leave it as the repo root, the build will fail because `package.json` is inside `adhira-site`.

### 3.3 Add environment variables

Expand **Environment Variables** and add:

| Name | Value | Environments |
|------|--------|----------------|
| `GEMINI_API_KEY` | Your key from [Google AI Studio](https://aistudio.google.com/apikey) | Production, Preview, Development |
| `GEMINI_MODEL` | `gemini-2.5-flash-lite` | Production, Preview, Development (optional) |

Copy the same `GEMINI_API_KEY` you use in local `.env.local`.

- **With the API key:** chatbot uses Gemini on `/chat` and the floating widget.
- **Without it:** chatbot falls back to basic keyword search (still works, less natural).

### 3.4 Deploy

1. Click **Deploy**
2. Wait 2–5 minutes for the build log to complete
3. When successful, Vercel shows **Congratulations!** and a URL like:
   `https://adhira-portfolio-xxxx.vercel.app`

Open that URL and test:

- [ ] Home page loads
- [ ] About Me, Projects, Work Experience, Blog, Chat
- [ ] Floating chat button (bottom-left) opens and responds
- [ ] Images load (if you committed files in `public/`)

---

## Part 4 — Custom domain (optional)

To use **adhirachoudhury.com**:

1. In Vercel, open your project → **Settings** → **Domains**
2. Add `adhirachoudhury.com` and `www.adhirachoudhury.com`
3. Vercel shows DNS records to add at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)
4. Typical setup:
   - `www` → **CNAME** → `cname.vercel-dns.com` (Vercel shows the exact value)
   - apex `@` → **A** record to Vercel’s IP, or use your registrar’s redirect to `www`
5. Wait for DNS propagation (minutes to 48 hours)
6. Vercel automatically provisions HTTPS

---

## Part 5 — Updating the live site

Every push to the connected GitHub branch triggers a new deployment.

```powershell
# Edit files, then from repo root:
git add .
git commit -m "Update site content"
git push
```

Vercel builds and publishes automatically. No manual redeploy needed unless you click **Redeploy** in the dashboard.

### What to edit

| Content | File(s) |
|---------|---------|
| Website copy (pages, jobs, projects) | `adhira-site/content/site.json` |
| Chatbot knowledge | `adhira-site/content/chat-context.md` |
| Blog articles | `adhira-site/content/articles/*.json` (see `article.template.json`) |
| Secrets | Vercel → **Settings** → **Environment Variables** (never commit secrets) |

After changing env vars in Vercel, **redeploy** the latest deployment (or push a small commit) for changes to take effect.

---

## Part 6 — Troubleshooting

### Build failed on Vercel

1. Open the failed deployment → **Building** tab → read the error at the bottom
2. Common fixes:

| Error | Fix |
|-------|-----|
| `package.json` not found | Set **Root Directory** to `adhira-site` |
| TypeScript / compile error | Run `npm run build` locally and fix the same error |
| Module not found | Run `npm install` locally, commit `package-lock.json`, push |
| `GEMINI` / API errors at runtime | Add `GEMINI_API_KEY` under Environment Variables and redeploy |

### Site builds but chatbot does not work

1. Confirm `GEMINI_API_KEY` is set in Vercel for **Production**
2. Redeploy after adding the variable
3. Open browser DevTools → Network → send a chat message → check `/api/chat` response

### Images missing on live site

Add image files to `adhira-site/public/` (e.g. `profile.jpg`, project images), commit, and push.

### Local dev errors only (`ENOENT` / `_buildManifest.js.tmp`)

Caused by OneDrive + Turbopack during `npm run dev`. Use:

```powershell
npm run dev:clean
```

Or work from a folder outside OneDrive. This does not affect Vercel if `npm run build` passes.

---

## Quick reference

```text
GitHub repo:     github.com/adhira-ch/Adhira-Site
Vercel root:     adhira-site
Build command:   npm run build
Install command: npm install
Env vars:        GEMINI_API_KEY, GEMINI_MODEL (optional)
Local pre-check: npm run build
```

---

## Checklist before first deploy

- [ ] `npm run build` succeeds in `adhira-site`
- [ ] Latest code pushed to GitHub
- [ ] Vercel Root Directory = `adhira-site`
- [ ] `GEMINI_API_KEY` added in Vercel (if using AI chat)
- [ ] Tested `.vercel.app` URL after deploy
- [ ] (Optional) Custom domain connected
