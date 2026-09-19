# Uvaraj — Freelance Portfolio Website

A fast, responsive portfolio website for a freelance web developer and designer. The whole site is **one file** (`index.html`) with the design, scripts and profile photo built in. No build step, no dependencies, and no extra files to keep in sync.

## Features

- Home, About and Services pages with single-page navigation
- Hero section with profile photo, availability badge and call-to-action buttons
- Selected work, skills, background, process, pricing packages and FAQ
- Contact form that opens the visitor's email app
- Mobile-first layout with automatic light and dark mode

## Project structure

```
uvaraj-portfolio/
├── index.html   # the complete website
└── README.md
```

## Run locally

Download `index.html` and open it in any browser.

## Customize

Open `index.html` in a text editor (on GitHub, tap the pencil icon) and edit the text directly.

| What | How to find it |
| --- | --- |
| Email address | Search for `your.email@example.com` (appears twice) |
| Phone number | Search for `+91 00000 00000` and `+910000000000` |
| Location | Search for `Hyderabad` |
| Projects, prices, skills | Search for the section headings, such as `Selected work` or `Packages` |
| About text and education | Search for `About Uvaraj` |
| Colors | Change the values under `:root` near the top of the `<style>` section |

### Change the profile photo

The photo is stored inside `index.html` as a long block of text beginning with `data:image/jpeg;base64,`, so it can't be swapped by uploading a file. Two ways to change it:

1. Ask Claude (or any developer) to embed your new photo in `index.html`, or
2. Upload your new photo to the repository as `photo.jpg`, then replace each long `src="data:image/jpeg;base64,..."` value with `src="photo.jpg"`.

## Deploy with GitHub Pages

1. Open the repository on github.com and go to **Settings → Pages**.
2. Under **Branch**, select `main` and the `/ (root)` folder, then tap **Save**.
3. After one to two minutes, your site is live at `https://<your-username>.github.io/<repository-name>/`.

## Deploy with Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Tap **Add New → Project** and import this repository.
3. Leave the settings unchanged:
   - **Framework Preset:** Other
   - **Build Command:** empty
   - **Output Directory:** empty
4. Tap **Deploy**. Your site goes live at a link like `https://uvaraj-portfolio.vercel.app`.

Every time you commit a change to GitHub, Vercel redeploys automatically.

## Update the site

1. Open `index.html` in the repository and tap the pencil icon.
2. Make your changes and tap **Commit changes**.
3. Wait one to two minutes, then reload the site.

## Troubleshooting

- **Site shows a 404 page:** the file must be named exactly `index.html`, in lowercase, in the main folder of the repository.
- **Old version still showing:** wait a minute, then close the tab and open the link again.
- **Photo missing:** make sure the whole `index.html` was uploaded, since the photo is part of that file.

## Make the contact form send messages directly (optional)

The form currently opens the visitor's email app. To receive messages without that step, use a free service such as [Formspree](https://formspree.io):

1. Create a form on Formspree and copy its endpoint URL.
2. In `index.html`, change `<form id="cform" novalidate>` to `<form id="cform" action="YOUR_ENDPOINT_URL" method="POST">`.
3. Remove the `cform` submit handler from the script section.

## Tech

- HTML5, CSS3, vanilla JavaScript
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) and [Manrope](https://fonts.google.com/specimen/Manrope) via Google Fonts

## License

© 2026 Uvaraj. All rights reserved.
