# Jungle0430.github.io

This repository contains a simple bilingual (EN/中文) personal homepage for GitHub Pages.

## What's included

- `index.html`: English homepage (default)
- `zh.html`: Chinese homepage (switch via the button)
- `assets/styles.css`: Site styles
- `assets/site.js`: Language switch + in-page nav highlight
- `assets/profile.svg`: Profile photo placeholder (replace with your real photo)

## Customize content

Open and edit:

- `index.html`: Replace all bracketed placeholders like `[Your Name]`, update your bio/education/publications/awards
- `zh.html`: Chinese version of the same content

To use your own photo:

- Put your photo at `assets/profile.jpg` (or `.png`)
- Update both `index.html` and `zh.html` to change the `<img src="assets/profile.svg">` to your file name

## Preview locally

You can open `index.html` directly in a browser, or run a tiny local server:

```bash
cd /Users/junglej/Documents/jungle/github_repo
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages (you will do git operations)

1. Commit and push to your repo `Jungle0430/Jungle0430.github.io` on branch `main`.
2. On GitHub: **Settings → Pages**
   - **Source**: Deploy from a branch
   - **Branch**: `main` / root (`/`)
3. Wait for the build, then your site should be available at `https://Jungle0430.github.io/`.

Suggested git commands:

```bash
git add .
git commit -m "Add bilingual personal homepage"
git push origin main
```
