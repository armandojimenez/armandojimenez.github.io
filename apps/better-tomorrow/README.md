# Better Tomorrow: Privacy Policy and Terms of Use

The legal pages for the **Better Tomorrow** mood tracker and journal (iOS and Android), in the app's 11 languages.

## Generated pages: do not edit by hand

Every `privacy-policy*.html` and `terms*.html` here is generated from structured sources in the app repo:

```
~/development/vibe/better_tomorrow/l10n-pipeline/bt6/legal/
  content/<locale>.json   one source per language (en is the original)
  locales.mjs             locales, file suffixes, ?lang= aliases, effective date
  build.mjs               writes the 22 pages into this folder
  validate.mjs            translation parity, links, hreflang, ?lang= routing
```

Edit `content/`, then run `node l10n-pipeline/bt6/legal/build.mjs` and `node l10n-pipeline/bt6/legal/validate.mjs` from the app repo. Hand edits here are overwritten on the next build.

The content was rewritten on 2026-09-11 (BT6 of the app's global expansion plan) from an audit of the shipped code. It describes local storage, the optional AI requests (AI gateway on Cloudflare, OpenRouter, and the model providers), Firebase Analytics and Crashlytics, rewarded AdMob ads and ATT, RevenueCat, Unsplash, backups, security, retention, and user rights. The earlier December 2025 text claimed on-device AI, no analytics, an encrypted database, and cloud backup to iCloud or Google Drive. None of those was true, so all of them were removed.

## Files and URLs

| Language | Privacy | Terms |
|---|---|---|
| English | `privacy-policy.html` | `terms.html` |
| Spanish | `privacy-policy-es.html` | `terms-es.html` |
| Portuguese (Brazil) | `privacy-policy-pt-br.html` | `terms-pt-br.html` |
| Indonesian | `privacy-policy-id.html` | `terms-id.html` |
| Turkish | `privacy-policy-tr.html` | `terms-tr.html` |
| German | `privacy-policy-de.html` | `terms-de.html` |
| French | `privacy-policy-fr.html` | `terms-fr.html` |
| Italian | `privacy-policy-it.html` | `terms-it.html` |
| Polish | `privacy-policy-pl.html` | `terms-pl.html` |
| Japanese | `privacy-policy-ja.html` | `terms-ja.html` |
| Korean | `privacy-policy-ko.html` | `terms-ko.html` |

The base is `https://armandojimenez.dev/apps/better-tomorrow/`.

- **`?lang=` routing.** The app opens `privacy-policy.html?theme=<light|dark>&lang=<language code>` in its in-app browser (`legal_browser_screen.dart`).
  - An inline script in every page sends a known code to the matching file and keeps the other query parameters. `pt` goes to the pt-BR page.
  - An unknown code stays on the page it asked for.
  - Old links with `?lang=en|es` keep working.
- **Language menu.** Each page has a `<select>` and a crawlable list of language links in the footer.
- **SEO.** Each page carries a self canonical and reciprocal hreflang to all 11 versions, plus `x-default` pointing to English.
- **Shared script.** `js/policy-scripts.js` reads `data-policy-langs` on `<html>` for the supported languages. Pages without that attribute still behave as the original English/Spanish pair.

## Theme

- `theme.css` holds the Soft Rose overrides for the shared `css/policy-styles.css`: cream `#fdf8f6` and rose `#d64574` in light mode, `#1a0f14` and `#e78fa3` in dark.
- It also styles the language select and the translation note.
- It sets the Noto Sans JP/KR fallbacks and CJK line breaking.
- On phones it pins the controls to the top of the page.
- Dark mode follows `?theme=`, then the visitor's saved choice, then the system setting.

## When the app changes

If the app starts sending data somewhere new, or stops, update `content/en.json` first. Then have every translation updated. `validate.mjs` fails until each language mirrors English block for block. After that, rebuild, and change the store privacy labels so they match.

Contact: armando.jimenez.dev@gmail.com
