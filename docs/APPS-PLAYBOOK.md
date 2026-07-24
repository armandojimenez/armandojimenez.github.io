# Apps section playbook

How to keep the apps showcase on the home page up to date. This is written for an AI assistant
(or a human) doing maintenance. Follow it exactly; do not improvise a different process.

The apps live in TWO files that must always stay in sync, entry for entry:

- `index.html` (English) — section `#projects`
- `es/index.html` (Spanish) — same section, same order, translated copy

## The golden rules

1. **Stats never go down.** Displayed star scores, ratings/reviews counts, and download counts are
   high-water marks. Only change a number if the new verified value is HIGHER than what the page
   shows. Store APIs often report US-only or lagging numbers; a smaller number is not evidence the
   real one dropped. If a fetched value is lower than the displayed one, keep the displayed one.
2. **Both languages or neither.** Never add, remove, or edit an app in one language file without
   making the equivalent change in the other.
3. **One honest sentence per app.** Plain, human, no hype, no em dashes. The Spanish description is
   a natural translation, not word-for-word. Spanish register: Latin American / Puerto Rican
   professional Spanish, tú form, no slang, no Spain-flavored vocabulary ("resume" not
   "currículum", "Educación" not "Formación", "estuve a cargo de" not "fui dueño de").
4. **Self-host icons.** Never hot-link `mzstatic.com` or Play CDN images.

## Discovering the live catalog

All live iOS apps (source of truth for what exists):

```bash
curl -s "https://itunes.apple.com/lookup?id=1565696393&entity=software&limit=200&country=us"
```

That id is Armando's Apple developer (artist) id. Each result gives `trackId`, `trackName`,
`bundleId`, `artworkUrl512`, `averageUserRating`, `userRatingCount`, `releaseDate`.

Android: the Play package usually equals the iOS `bundleId`, but verify with an HTTP probe
(`curl -s -o /dev/null -w "%{http_code}" -A "Mozilla/5.0" "https://play.google.com/store/apps/details?id=<pkg>"`;
200 = live, 404 = not on Play). Known quirks as of July 2026:

- Ask Better's package is `dev.armandojimenez.afformations` (not `askbetter`)
- Lilia and Wealthy are lowercase on Play (`.lilia`, `.wealthy`) though the iOS bundle ids are capitalized
- Better Tomorrow is iOS-only (no Play listing)

## Adding a new app

1. Get the app's `trackId`, `bundleId`, and `artworkUrl512` from the lookup above.
2. Choose the slug: the `bundleId` suffix, lowercased (e.g. `dev.armandojimenez.NewApp` → `newapp`).
3. Download the icon: save `artworkUrl512` to `images/apps/<slug>.jpg`.
4. Verify the landing page exists: `https://armandojimenez.dev/<landing-slug>/` (landing slugs
   sometimes differ from icon slugs, e.g. `ponleivu` icon vs `/ponle-tax/` landing; check the
   sitemaps or probe candidates).
5. Add a `<li class="app r">` entry at the END of the grid in `index.html`, copying the structure of
   an existing non-featured entry: icon (with width/height 512 and `loading="lazy"`), name, one
   honest sentence, links to App Store (`https://apps.apple.com/us/app/id<trackId>`), Google Play
   (by package, omit if not on Play), and Website (the landing page).
6. Add the translated entry in the same position in `es/index.html` (link labels there:
   `App Store`, `Google Play`, `Sitio web`).
7. Update the counts everywhere they appear, in BOTH files:
   - the apps section meta line, e.g. `16 live · 2021 → today`
   - the hero sentence ("Sixteen apps…" / "Dieciséis apps…")
   - the `<meta name="description">` and og/twitter descriptions
8. New apps do NOT get an `app-stats` line. See "Promoting to featured" below.

## Removing an app

Only if it is truly gone from both stores (probe both). Remove from both language files, delete the
icon, and update the counts listed above.

## Updating stats

The five featured apps (Believe, Holy, Unique, Motiv, Divine) show an `app-stats` line:
`★ 4.7 · 5.9K ratings · 200K+ downloads` (ES: `reseñas` / `descargas`).

- Verify against the live store pages (global numbers), not just the US lookup API.
- Round DOWN to friendly values (5.9K+, 200K+), and remember rule 1: never lower a displayed number.
- Star score: show one decimal. Never display a lower score than the page already shows.

## Promoting to featured

When a non-featured app earns real traction (roughly 500+ ratings or 10K+ downloads), it can become
featured: add `featured` to its `<li>` class, add the `app-stats` line in both files, and move it
up in the grid order (featured apps come first, ordered by downloads).

## Websites & SaaS

Web projects live in the `#web` section ("On the web" / "En la web") as `.web-card` entries:
a thumbnail image in `images/web/<slug>.png` (transparent or white background, trimmed and
optimized, roughly 400px on the long side), the name, one honest sentence, and the bare domain as
the link. Same both-languages rule applies.
