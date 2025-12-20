# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development with auto-compilation (SCSS + JS watch)
npm run build:css    # Compile SCSS to compressed CSS using dart-sass
npm run build:js     # Transpile and minify JS using Babel
```

The build system uses npx-based commands (migrated from Gulp for ARM64 compatibility).

## Architecture

This is a static single-page portfolio website hosted on GitHub Pages at armandojimenez.dev.

**Core Files:**
- `index.html` - All content with smooth-scrolling navigation between sections
- `scss/styles.scss` - Main stylesheet (compiles to `css/styles.css`)
- `js/scripts.js` - jQuery-based interactions (compiles to `js/scripts.min.js`)

**Key Sections:** About, Experience (timeline), Projects, Education, Skills, Certifications, Hobbies, Contact

**Dependencies:**
- jQuery for DOM manipulation
- Bootstrap for grid/layout
- AOS (Animate On Scroll) for scroll-triggered animations
- Font Awesome for icons
- Google Fonts (Varela Round)

## Key Conventions

**Styling:**
- Color variables defined in SCSS (e.g., `$base-color: #2a1818;`) with dark mode variants
- Dark mode toggle uses `data-theme` attribute on `<body>`
- AOS animations via data attributes (e.g., `data-aos="fade-up"`)

**JavaScript Patterns:**
- Timeline component dynamically wraps content in `.vtimeline-point` structure
- Mouse spotlight effect in hero section using radial gradients and physics-based animations
- Interactive about image with invert toggle (hover, focus, keyboard accessible)
- Theme preference persisted in localStorage

**Interactive Effects:**
- Background shapes in `#lead` use antigravity physics responding to mouse movement
- Confetti magic button using canvas-confetti library

## Frontend Design Skill

When creating UI components, follow these principles:
- Commit to a bold aesthetic direction (avoid generic "AI slop" aesthetics)
- Choose distinctive fonts (not Arial/Inter), unexpected color palettes
- Use purposeful animations at high-impact moments (page load, scroll triggers, hovers)
- Apply creative backgrounds (gradients, textures, geometric patterns)
- Match implementation complexity to the vision - minimalist designs need restraint and precision
