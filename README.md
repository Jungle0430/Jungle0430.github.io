# Jungle0430.github.io

This repository contains a lightweight bilingual (EN/中文) personal homepage + blog for GitHub Pages.

## What's included

- **Home**
  - `index.html`: English homepage (default)
  - `zh.html`: Chinese homepage
- **Blog**
  - `blog/index.html`: Blog directory (English)
  - `blog/zh.html`: Blog directory (中文)
  - `blog/posts/`: Blog post pages
- **Assets**
  - `assets/css/main.css`: Styles (light theme)
  - `assets/js/main.js`: Language switch + in-page nav highlight
  - `assets/img/profile.svg`: Profile photo placeholder (replace with your real photo)
  - `assets/img/favicon.svg`: Favicon

## Customize content

Open and edit:

- `index.html`: Replace bracketed placeholders like `[Your Name]`, update your bio/education/publications/awards
- `zh.html`: Chinese version of the same content
- `blog/index.html` / `blog/zh.html`: Update blog description and post list

To use your own photo:

- Put your photo at `assets/img/profile.jpg` (or `.png`)
- Update `index.html` and `zh.html` to change `<img src="assets/img/profile.svg">` to your file name

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
git commit -m "Add bilingual homepage and blog"
git push origin main
```
