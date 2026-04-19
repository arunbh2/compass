# COMPASS — Climate Action Routing System

> Not a directory. A routing layer.
> Recognition → Next Step → Action.

An editorial-grade, mobile-first React app that routes climate hazards
(flood, heat, cyclone, drought, landslide, GLOF) in three Indian geographies —
**Vidarbha, Coastal Odisha, Ladakh** — to tested solutions, service providers,
and government schemes, ending every screen with a specific first step.

---

## 🚀 Deploying to GitHub Pages (novice, copy-paste only)

Your app will live at: **https://arunbh2.github.io/compass**

### One-time setup (10 minutes)

#### 1. Push this project to your GitHub repo

Open the **Terminal** on your machine in the project folder and run:

```bash
git init
git add .
git commit -m "Initial COMPASS commit"
git branch -M main
git remote add origin https://github.com/arunbh2/compass.git
git push -u origin main
```

> If `git remote add` says "remote origin already exists", skip that one line.

#### 2. Enable GitHub Pages (one click)

1. Open https://github.com/arunbh2/compass
2. Click **Settings** (top right of the repo).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
   (That's it — no other fields to fill in.)

#### 3. Wait for the first deployment

1. Go to the **Actions** tab in your repo.
2. You'll see a workflow called **"Deploy COMPASS to GitHub Pages"** running.
3. When it turns green (≈ 2 minutes), your site is live at:
   **https://arunbh2.github.io/compass**

### After that — every change is automatic

- Add photos to `frontend/public/photos/`
- Edit text in `frontend/src/data/compass.js`
- Run these three commands:

```bash
git add .
git commit -m "Update photos"
git push
```

GitHub rebuilds and redeploys automatically within ~2 minutes.

---

## 🖼️ How to add your own photos (no code required)

1. Open the folder: `frontend/public/photos/`
2. Drop your JPG files there using these **exact file names**:

| File name              | Where it shows                                          |
| ---------------------- | ------------------------------------------------------- |
| `hero.jpg`             | Front-page hero (right of the giant headline)           |
| `vidarbha.jpg`         | Vidarbha geography card                                 |
| `odisha.jpg`           | Coastal Odisha geography card                           |
| `ladakh.jpg`           | Ladakh geography card                                   |
| `sol-biodyke.jpg`      | Solution: Bio-Dyke + Mangrove Buffer                    |
| `sol-watershed.jpg`    | Solution: Watershed Treatment                           |
| `sol-icestupa.jpg`     | Solution: Ice Stupa                                     |
| `sol-sri.jpg`          | Solution: SRI                                           |
| `sol-heatplan.jpg`     | Solution: Village Heat Action Plan                      |
| `sol-ews.jpg`          | Solution: Cyclone Early Warning Cascade                 |
| `sol-pmfby.jpg`        | Solution: PMFBY Claim Navigation                        |
| `sol-solarhouse.jpg`   | Solution: Solar-Passive House Retrofit                  |

- Recommended: **1600 × 1200 px** (landscape 4:3), under **500 KB** per image.
- If you don't add a photo, the app uses a beautiful **documentary fallback** from Pexels
  (or a styled editorial placeholder if that also fails). Nothing breaks.
- After dropping photos, commit + push (see "After that" above) — GitHub redeploys.

---

## 🎨 Brand palette used throughout

| Role                | Colour    | Hex       |
| ------------------- | --------- | --------- |
| Ink / text / dark   | Ink navy  | `#0a1629` |
| Primary action      | Consulting Blue | `#2161c2` |
| Highlight / accent  | PA Yellow | `#ffa600` |
| Support / secondary | Publishing Aqua | `#2bb6b7` |
| Warning / alert     | Red       | `#e74c3c` |
| Success             | Green     | `#2ecc71` |
| Soft accent         | Pink      | `#ed6a82` |
| Page background     | Grey      | `#f3f3f3` |

**Typography**: Cormorant Garamond (display serif) + IBM Plex Sans/Mono (body & labels) — loaded from Google Fonts.

---

## 🧑‍💻 Running locally (optional)

```bash
cd frontend
yarn install
yarn start
```

Opens at http://localhost:3000.

---

## 📝 Editing content

All text content for hazards, solutions, providers, schemes, and the pathway
generator lives in **one file**:

```
frontend/src/data/compass.js
```

Open it in any text editor, change the text, save, commit, push.

---

## 📁 Project structure

```
frontend/
├── public/
│   ├── photos/              ← drop your photos here
│   └── index.html           ← fonts + meta
└── src/
    ├── App.js               ← screen routing + state
    ├── components/
    │   ├── Entry.jsx        ← 3-step onboarding
    │   ├── Solutions.jsx    ← solution catalogue
    │   ├── Providers.jsx    ← NGO / govt registry
    │   ├── Schemes.jsx      ← scheme navigator
    │   ├── Pathway.jsx      ← personalised timeline
    │   ├── Dashboard.jsx    ← dark intel screen
    │   ├── Shared.jsx       ← bottom nav, masthead, tags
    │   └── PhotoSlot.jsx    ← photo placeholder component
    └── data/
        └── compass.js       ← all content lives here

.github/workflows/deploy.yml ← auto-deploys on push to main
```

---

## 🛟 Troubleshooting

- **My site shows a blank page on GitHub Pages.**
  Make sure GitHub Pages source is set to **"GitHub Actions"** (not "Deploy from a branch"). See step 2 above.

- **I see the wrong URL in the address bar.**
  The app lives at `https://arunbh2.github.io/compass/` (with a trailing slash). Don't worry — it works either way.

- **My photos don't show up.**
  Check the file name is **exactly** as in the table (lowercase, `.jpg`, no spaces). Then commit + push again.

- **I want to change the repo name from `compass` to something else.**
  Edit two files and push:
  1. In `frontend/package.json`, change `"homepage": "/compass"` to `"homepage": "/your-new-name"`
  2. In `.github/workflows/deploy.yml`, change `PUBLIC_URL: /compass` to `PUBLIC_URL: /your-new-name`

---

Made with care for the communities this routing layer serves.
