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