# Copilot Instructions for armandojimenez.github.io

## Project Overview
This is a static personal portfolio website built with HTML, SCSS, and JavaScript. It's a single-page application with sections for about, experience, education, projects, and skills. The site is responsive and includes dark mode support.

## Architecture
- **Single-page design**: All content in `index.html` with smooth scrolling navigation
- **Modular SCSS**: Styles organized in `scss/styles.scss` with sections for each portfolio component
- **JavaScript interactions**: jQuery-based animations, mobile menu, and interactive mouse spotlight effects in `js/scripts.js`

## Build System
Use modern npx-based commands for development (migrated from Gulp due to ARM64 compatibility):
- `npm run dev`: Auto-compiles SCSS to `css/styles.css` and processes JS to `js/scripts.min.js`
- `npm run build:css`: Compiles SCSS with compressed output style using dart-sass
- `npm run build:js`: Transpiles and minifies JS using Babel and Uglify
- SCSS compiled with compressed output style
- JS transpiled with Babel and minified with Uglify

## Key Conventions
- **Color variables**: Defined in SCSS (e.g., `$base-color: #2a1818;`) with dark mode variants
- **Responsive design**: Uses Bootstrap grid system with custom breakpoints
- **Animations**: AOS library for scroll-triggered animations (e.g., `data-aos="fade-up"`), custom keyframes for gradient animations
- **Icons**: Font Awesome classes (e.g., `fa fa-bars`) for UI elements
- **Timeline components**: Custom jQuery plugin for experience/education timelines in `#experience-timeline`
- **Interactive effects**: Mouse spotlight effect in home section using radial gradients

## File Structure Patterns
- `scss/styles.scss`: Main stylesheet with 12 sections (variables, mixins, global styles, section-specific styles, media queries), including gradient animations and spotlight effects
- `js/scripts.js`: jQuery code for navigation, scrolling, timeline generation, and mouse spotlight interactions
- `libs/`: Third-party assets (Font Awesome, Bootstrap) kept separate from custom code
- `resume/`: Contains PDF resume file

## Development Workflow
1. Edit `scss/styles.scss` for styling changes
2. Edit `js/scripts.js` for interactive features
3. Run `npm run watch` to see live changes
4. Test responsiveness and dark mode toggle

## External Dependencies
- Bootstrap for layout
- Font Awesome for icons
- AOS for animations
- Google Fonts (Varela Round)
- jQuery for DOM manipulation

## Deployment
Static site hosted on GitHub Pages. No build step required for deployment - push compiled assets.

## Skill: `frontend-design`

- **Name**: `frontend-design`
- **Description**: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
- **License**: Complete terms in `LICENSE.txt`

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion libraries for component frameworks when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families, cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Copilot is capable of extraordinary creative work. Don't hold back — show what can truly be created when thinking outside the box and committing fully to a distinctive vision.
# Copilot Instructions for armandojimenez.github.io

## Project Overview
This is a static personal portfolio website built with HTML, SCSS, and JavaScript. It's a single-page application with sections for about, experience, education, projects, and skills. The site is responsive and includes dark mode support.

## Architecture
- **Single-page design**: All content in `index.html` with smooth scrolling navigation
- **Modular SCSS**: Styles organized in `scss/styles.scss` with sections for each portfolio component
- **JavaScript interactions**: jQuery-based animations, mobile menu, and interactive mouse spotlight effects in `js/scripts.js`

## Build System
Use modern npx-based commands for development (migrated from Gulp due to ARM64 compatibility):
- `npm run dev`: Auto-compiles SCSS to `css/styles.css` and processes JS to `js/scripts.min.js`
- `npm run build:css`: Compiles SCSS with compressed output style using dart-sass
- `npm run build:js`: Transpiles and minifies JS using Babel and Uglify
- SCSS compiled with compressed output style
- JS transpiled with Babel and minified with Uglify

## Key Conventions
- **Color variables**: Defined in SCSS (e.g., `$base-color: #2a1818;`) with dark mode variants
- **Responsive design**: Uses Bootstrap grid system with custom breakpoints
- **Animations**: AOS library for scroll-triggered animations (e.g., `data-aos="fade-up"`), custom keyframes for gradient animations
- **Icons**: Font Awesome classes (e.g., `fa fa-bars`) for UI elements
- **Timeline components**: Custom jQuery plugin for experience/education timelines in `#experience-timeline`
- **Interactive effects**: Mouse spotlight effect in home section using radial gradients

## File Structure Patterns
- `scss/styles.scss`: Main stylesheet with 12 sections (variables, mixins, global styles, section-specific styles, media queries), including gradient animations and spotlight effects
- `js/scripts.js`: jQuery code for navigation, scrolling, timeline generation, and mouse spotlight interactions
- `libs/`: Third-party assets (Font Awesome, Bootstrap) kept separate from custom code
- `resume/`: Contains PDF resume file

## Development Workflow
1. Edit `scss/styles.scss` for styling changes
2. Edit `js/scripts.js` for interactive features
3. Run `npm run watch` to see live changes
4. Test responsiveness and dark mode toggle

## External Dependencies
- Bootstrap for layout
- Font Awesome for icons
- AOS for animations
- Google Fonts (Varela Round)
- jQuery for DOM manipulation

## Deployment
Static site hosted on GitHub Pages. No build step required for deployment - push compiled assets.</content>
<parameter name="filePath">/Users/armandojimenez/development/web/armandojimenez.github.io/.github/copilot-instructions.md