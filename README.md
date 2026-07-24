# armandojimenez.dev

Personal site of Armando Jiménez: software engineer and independent app maker in Puerto Rico.
Live at [armandojimenez.dev](https://armandojimenez.dev), with a Spanish version at
[armandojimenez.dev/es](https://armandojimenez.dev/es/).

## What it is

A single hand-written page, in two languages, showcasing 16 published mobile apps with live store
links, plus experience, skills, and contact. No framework, no build step, no tracking.

- Pure white, neutral black, and no decorative color: every drop of color on the page comes from
  the real app icons and the memoji.
- Typography: [Cabinet Grotesk](https://www.fontshare.com/fonts/cabinet-grotesk) and
  [Switzer](https://www.fontshare.com/fonts/switzer), self-hosted.
- Vanilla JavaScript only: one page-load moment, gentle one-time scroll reveals, and a memoji that
  peeks over the apps section (tap him).
- Accessible by default: semantic HTML, keyboard focus styles, `prefers-reduced-motion` support,
  and full content without JavaScript.

## Structure

```
├── index.html          # English page
├── es/index.html       # Spanish page (hreflang alternates, language toggle in the nav)
├── css/home.css        # The only stylesheet the home pages use
├── js/home.js          # Vanilla JS interactions
├── fonts/              # Self-hosted woff2
├── images/apps/        # App icons (self-hosted)
├── images/web/         # Thumbnails for web projects
├── resume/             # Resume PDF
├── docs/               # Maintenance playbooks
└── apps/               # Privacy/terms pages for each published app
```

Legacy assets from the previous version of the site (`scss/`, `css/styles.css`, `js/scripts.js`,
`libs/`) are kept for compatibility; the npm scripts in `package.json` compile them.

## Running locally

It's a static site. Serve the root with anything:

```bash
python3 -m http.server 8000
```

## License

Code is MIT. Content, app icons, and images are © Armando Jiménez.
