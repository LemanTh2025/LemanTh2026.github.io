# LemanTh Website Template

A lightweight, **markdown-first** GitHub Pages site for the *Lausanne Event on Machine Learning and Neural Network Theory (LemanTh)*, powered by the **Minimal Mistakes** Jekyll theme.

## Quick start

1. Create a new repository on GitHub, e.g. `lemanth2026`.
2. Download this template and copy its contents to your repo.
3. Edit `_config.yml`:
   - `url` and `baseurl`
   - `event` fields (dates, location, registration url, contact, countdown).
4. Update content:
   - `_data/speakers.yml`
   - `_data/schedule.yml`
   - images in `assets/img/`
5. Enable GitHub Pages in **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` / root
6. Wait ~1–2 minutes for the site to build.

## Content files

- **Home:** `index.md` (hero, CTA, countdown, highlights)
- **Speakers:** `pages/speakers.md` + `_data/speakers.yml`
- **Schedule:** `pages/schedule.md` + `_data/schedule.yml`
- **Registration:** `pages/registration.md` (embeds Google Form)
- **Venue:** `pages/venue.md`
- **Conduct:** `pages/conduct.md`

## Customization

- Colors and components: `assets/css/custom.scss`
- Logo & favicon: `assets/img/lemanth-logo.png`, `assets/img/favicon.png`
- Countdown: `assets/js/countdown.js` (`site.event.countdown_deadline` in `_config.yml`)

---

Made for **LemanTh** organizers. Drop in your real content and you're live.