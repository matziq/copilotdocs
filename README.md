# Copilot class docs (GitHub Pages)

This repo is set up to publish externally facing class handouts using **GitHub Pages**.

- The website lives in `docs/`
- Landing page: `docs/index.html`
- Sample handout (your template): `docs/copilot_page.html`

## Publish (one-time)

1. Create a new GitHub repository (public is simplest for customer-facing docs).
2. Push this folder to GitHub.
3. In GitHub: **Settings → Pages**
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/docs`
4. Wait ~1–3 minutes; GitHub will show the public URL.

## Add more pages

- Copy `docs/index.html` to `docs/<your-page>.html`
- Link to it from `docs/index.html`

## Local preview

From the repo root, run a simple static server and open the printed URL in a browser.

```powershell
python -m http.server 8000 --directory .\docs
```

## Notes

- `docs/.nojekyll` disables Jekyll processing so your HTML/CSS/JS is served exactly as-is.
- The left-side "On this page" navigation is generated automatically from `h2/h3/h4` headings.
