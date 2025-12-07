# Armando Jimenez - Web Portfolio

A modern, responsive personal portfolio website showcasing my work and experience. Built with clean HTML, SCSS, and JavaScript for optimal performance and user experience.

Currently live at: [armandojimenez.dev](https://armandojimenez.dev)



## ✨ Features

- **Single-page application** with smooth scrolling navigation
- **Responsive design** that works beautifully on all devices
- **Dark mode support** for comfortable viewing
- **Interactive animations** including scroll-triggered effects and custom gradients
- **Mouse spotlight effect** in the hero section for enhanced interactivity
- **Timeline components** for experience and education sections
 
- **Modern build system** with automated SCSS compilation and JS minification

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **SCSS/Sass** - Modular styling with variables and mixins
- **JavaScript/jQuery** - Interactive functionality and DOM manipulation
- **Bootstrap** - Responsive grid system and components
- **Font Awesome** - Icon library for UI elements
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **Google Fonts** - Custom typography (Varela Round)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/armandojimenez/armandojimenez.github.io.git
cd armandojimenez.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

This will automatically compile SCSS and JS files and watch for changes.

 

### Build Commands

- `npm run dev` - Start development with auto-compilation
- `npm run build:css` - Compile SCSS to compressed CSS
- `npm run build:js` - Transpile and minify JavaScript
- `npm run build` - Build all assets for production

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── scss/
│   └── styles.scss         # Main SCSS stylesheet
├── js/
│   ├── scripts.js          # Main JavaScript file
│   └── scripts.min.js      # Minified JavaScript
├── css/
│   └── styles.css          # Compiled CSS
├── images/                 # Image assets
├── libs/                   # Third-party libraries
├── resume/                 # Resume PDF
└── .github/
    └── copilot-instructions.md  # Development guidelines
```

## 🎨 Customization

### Colors
Modify color variables in `scss/styles.scss`:
```scss
$base-color: #2a1818;  // Primary color
// Add dark mode variants as needed
```

### Animations
- Gradient animations are defined with keyframes for smooth color transitions
- Mouse spotlight effect uses radial gradients for interactive highlighting
- AOS library handles scroll animations with data attributes

### Content
Update personal information in `index.html`:
- Hero section with name and title
- About section content
- Experience and education timelines
- Projects showcase
- Skills and contact information

## 🌐 Deployment

This is a static site hosted on GitHub Pages. The build process compiles SCSS and JS, so deployment only requires pushing the compiled assets.

### GitHub Pages Setup
1. Ensure `index.html` is in the root directory
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose `master` branch
4. The site will be available at `https://armandojimenez.github.io`

## 📝 Development Notes

- Uses modern npx-based build tools for ARM64 compatibility
- SCSS compiled with compressed output for production
- JavaScript transpiled with Babel for browser compatibility
- All third-party libraries kept in `libs/` directory
- Responsive design tested across multiple breakpoints

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ using modern web technologies*

