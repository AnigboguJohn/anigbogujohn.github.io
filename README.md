# Nonso John Anigbogu · Portfolio

Personal portfolio website: projects, services, skills, work history and contact.
Plain HTML, CSS and JavaScript, with no build step and nothing to install.

## Open it

Double-click `index.html`. It works straight from the folder.

## Folders

```
portfolio/
├─ index.html                 the page
├─ assets/
│  ├─ css/style.css           all styles (dark and light themes, phone layout)
│  ├─ js/data.js              ALL THE CONTENT: projects, services, skills, work
│  ├─ js/main.js              behaviour: menu, theme, slider, filters, project pop-up, form
│  ├─ cv/Nonso_Anigbogu_CV.pdf   the CV behind the "Download CV" buttons
│  ├─ icons/favicon.svg       browser-tab icon
│  └─ images/
│     ├─ profile/             your photo (see below)
│     └─ projects/            screenshots: gather/, regradar/, tranyer/, adf-magazine/
├─ vercel.json                settings for Vercel hosting
└─ README.md
```

## Add your photo

Save a portrait photo as **`assets/images/profile/profile.jpg`** (about 840 × 1040 pixels).
Until then, the "NA" placeholder is shown.

## Change the content

Everything you read on the page is in `assets/js/data.js`: projects, screenshots, features,
stack, folder trees, services, skills and work history. Edit the text there and refresh.
To add a screenshot, put the image in that project's folder and add it to its `gallery` list.

## Put it online (free)

**GitHub Pages**
1. Create a new public repository on GitHub, for example `portfolio`.
2. Upload everything in this folder (Add file → Upload files).
3. Settings → Pages → Source: "Deploy from a branch" → `main` / root → Save.
4. Your site: `https://anigbogujohn.github.io/portfolio/`

**Vercel**
1. vercel.com → Add New → Project → import the GitHub repository.
2. Framework preset: **Other**. Leave the build command empty. Deploy.

## Contact form

The form needs no server. It opens WhatsApp (+234 916 059 9477) or the visitor's email app
with their message filled in, sent to nonsoanigbogu49@gmail.com.
