### Project overview

This repository hosts a personal portfolio built with React (Create React App) and Tailwind CSS, deployed to GitHub Pages. The app renders a single-page layout with sections for header, about, experience, skills, projects, and contact.

- **Framework**: React 18 with `react-scripts`
- **Styling**: Tailwind CSS (via PostCSS), classes authored directly in JSX and in `src/index.css`
- **Deployment**: GitHub Pages using `gh-pages` (`npm run deploy`), homepage set to `https://syamgith.github.io/`
- **Assets**: Images served from `public/images/`

### High-level architecture

- `src/index.js`: React entry, mounts `<App />` and includes StrictMode
- `src/App.js`: Page shell and layout; composes section components
- `src/components/*`: Presentational components for each section
- `tailwind.config.js` + `src/index.css`: Tailwind setup and base styles
- `public/index.html`: CRA HTML template; injects bundled assets

### Notable implementation details

- Uses pure functional components; no global state, no routing
- Tailwind utility classes for all layout/typography/visual effects
- Inline SVGs for icons; no runtime icon library required
- Profile image referenced from `public/images/me.jpg`

### Findings: candidates for cleanup/optimization

- Unused CRA scaffolding: `reportWebVitals`, test files, `logo.svg`, `App.css`
- Legacy static site in repository root (`index.html`, `syamgith_files/`) not used by CRA
- Unused Font Awesome CDN link in `public/index.html` (icons are inline SVG)

### Planned changes

- Remove web vitals import/call and delete `src/reportWebVitals.js`
- Remove unused test scaffolding: `src/App.test.js`, `src/setupTests.js`
- Remove unused assets: `src/App.css`, `src/logo.svg`
- Remove legacy root files: root `index.html`, `syamgith_files/` directory
- Tidy `public/index.html`: drop Font Awesome CDN link

### Changes made

- [x] Remove web vitals from `src/index.js` and delete `src/reportWebVitals.js`
- [x] Delete unused test files: `src/App.test.js`, `src/setupTests.js`
- [x] Delete unused assets: `src/App.css`, `src/logo.svg`
- [x] Delete legacy root `index.html` and `syamgith_files/`
- [x] Remove Font Awesome CDN link from `public/index.html`

App should start with `npm start` and build with `npm run build` without changes to behavior.
