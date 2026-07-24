# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Static personal site for Armando Jiménez, hosted on GitHub Pages at armandojimenez.dev.
The home page was fully redesigned in July 2026; it is plain HTML/CSS/vanilla JS with no framework
and no build step.

**Home page (redesigned):**
- `index.html` (English) and `es/index.html` (Spanish) — always edit both; they mirror each other
- `css/home.css` — the only stylesheet the home pages use (design tokens at the top)
- `js/home.js` — vanilla JS: scroll reveals, memoji peek, copy-email button. No dependencies
- `fonts/` — self-hosted Cabinet Grotesk + Switzer (woff2)
- `images/apps/` — self-hosted app icons; `images/me.png` is the memoji (the site's signature)

**Legacy assets (do not delete):** `scss/`, `css/styles.css`, `js/scripts.js`/`scripts.min.js`,
`libs/` belong to the pre-2026 site. The `npm run` scripts in package.json compile them. Nothing in
this repo references them anymore, but sibling GitHub Pages repos and old links may.

**Sibling pages (never touch from here):** `/apps/<app>/` privacy/terms pages have their own
`theme.css`. Per-app landing pages are separate repos served at `armandojimenez.dev/<slug>/`.

## Design rules for the home page

- Pure white `#FFFFFF` page, neutral black `#0E0F11` type. NO decorative color anywhere: all color
  comes from the memoji and the real app icons. No gradients, no accent colors, no ivory/cream.
- Type: Cabinet Grotesk (display, weights 500/700/800) + Switzer (body, 400/500/600), self-hosted.
- Copy: plain, first person, one honest sentence at a time. **No em dashes** (restructure the
  sentence instead). No hype words. Date ranges use en dashes.
- Motion: one load moment for the hero, gentle one-time scroll reveals, hover micro-interactions,
  the memoji peek/duck easter egg, and the navbar handoff (the hero name and memoji rise into the
  bar once their large versions scroll beneath it; on narrow screens the empty brand row stays
  collapsed until then). Nothing loops, nothing animates on every scroll.
  `prefers-reduced-motion` and no-JS must always show full content.
- The employer is never mentioned in the hero. Identity framing: AI engineer + indie app maker
  first, full-stack depth beneath it; employers are entries in Experience only.
- Both language pages must stay in sync (structure, order, anchors: #projects, #web, #about,
  #experience, #skills, #education, #certs, #hobbies, #contact).

## Updating the apps section

Read `docs/APPS-PLAYBOOK.md` and follow it exactly. Key law: **displayed ratings, review counts,
download counts, and star scores never go down.** They are high-water marks; a lower fetched value
is never a reason to lower a displayed one.

## Resume

`resume/Armando_Jimenez_Resume.pdf` is generated from HTML printed via headless Chrome. Keep it one
page, black text only.
