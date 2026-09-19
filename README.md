# Uvaraj — Freelance Portfolio Website

A fast, responsive portfolio website for a freelance web developer and designer, built with plain **HTML, CSS and JavaScript**. No build step and no dependencies.

## Files

```
├── index.html   # the complete website (design, content and scripts)
├── uvaraj.jpg   # profile photo
└── README.md
```

All three files live in the main folder. There are no subfolders.

## Features

- Home, About and Services pages with single-page navigation
- Hero section with profile photo and call-to-action buttons
- Selected work, skills, background, process, pricing packages and FAQ
- Contact form that opens the visitor's email app
- Mobile-first layout with automatic light and dark mode

## Run locally

Put `index.html` and `uvaraj.jpg` in the same folder and open `index.html` in a browser.

## Customize

Open `index.html` and edit the text directly. On GitHub, tap the file, then the pencil icon.

| What | How to find it |
| --- | --- |
| Email | Search for `your.email@example.com` (appears twice) |
| Phone | Search for `+91 00000 00000` and `+910000000000` |
| Location | Search for `Hyderabad` |
| Projects, prices, skills | Search for `Selected work`, `Packages` or `Skills` |
| About text and education | Search for `About Uvaraj` |
| Colors | Edit the values under `:root` at the top of the `<style>` section |

### Change the photo

Upload a new photo named `uvaraj.jpg` and replace the old one. If you use a different file name, change this line near the bottom of `index.html`:

```js
var PHOTO="uvaraj.jpg";
```

If the photo file is missing, the site shows a plum tile with the letter "U" instead of a broken image.

## Upload to GitHub (from a phone)

1. Open github.com and tap **+ → New repository**. Name it `uvaraj-portfolio`, choose **Public**, and tap **Create repository**.
2. Tap **uploading an existing file**.
3. Select `index.html`, `uvaraj.jpg` and `README.md`, then tap **Commit changes**.

## Deploy with GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Branch**, choose `main` and `/ (root)`, then tap **Save**.
3. After one to two minutes, the site is live at `https://<your-username>.github.io/<repository-name>/`.

## Deploy with Vercel

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. Tap **Add New → Project** and import the repository.
3. Leave the settings unchanged (Framework Preset: **Other**, no build command) and tap **Deploy**.

Every commit to GitHub redeploys the site automatically.

## Troubleshooting

- **Photo not showing:** the file must be named exactly `uvaraj.jpg` (lowercase) and sit in the same folder as `index.html`.
- **404 page:** the main file must be named exactly `index.html`.
- **Old version showing:** wait a minute, then close the tab and reopen the link.

## Tech

HTML5, CSS3, vanilla JavaScript. Fonts: Fraunces and Manrope via Google Fonts.

© 2026 Uvaraj. All rights reserved.
