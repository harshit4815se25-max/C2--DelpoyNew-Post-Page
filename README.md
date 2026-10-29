# DEV@Deakin (SIT313 Task C2)

React + Vite front end with a Navbar and a New Post page (Question / Article forms with validation).

## Run locally
```bash
npm install
npm run dev        # development server
npm run build      # production build into /dist
npm run preview    # preview the production build
```

## Deploy to Netlify (Git-based)
1. Push this folder to a GitHub repository.
2. On Netlify: **Add new site -> Import an existing project -> GitHub** and pick the repo.
3. Build settings (read automatically from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**. Netlify gives you a `https://<name>.netlify.app` link.
5. Open the link, test both forms, and refresh the page to confirm it still loads.

### Alternative: Cloudflare Pages
Build command `npm run build`, output directory `dist`.

## Notes
- No auth provider, database or API keys are used, so nothing had to be disabled for hosting.
- `.env` files are git-ignored. See `.env.example`.
- Vercel is not recommended here (the task sheet says it is intended for Next.js).
