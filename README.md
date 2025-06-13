# Syamgith App

This project is a React web application configured to use Tailwind CSS for styling and is set up for deployment to GitHub Pages.

## Project Overview

- **Framework:** React (using `react-scripts`)
- **Styling:** Tailwind CSS (with PostCSS and Autoprefixer)
- **Testing:** React Testing Library and Jest DOM
- **Deployment:** GitHub Pages (using the `gh-pages` npm package)
- **Homepage:** Set to `https://syamgith.github.io/` (for GitHub Pages deployment)

## How to Run Locally

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm start
   ```
   - This will run the app in development mode.
   - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to Build for Production

- **Build the app:**
  ```sh
  npm run build
  ```
  - This creates an optimized production build in the `build` directory.

## How to Deploy to GitHub Pages

1. **Ensure your repository is set up on GitHub and the `homepage` field in `package.json` is correct.**
2. **Deploy the app:**
   ```sh
   npm run deploy
   ```
   - This will:
     - Build the app (`npm run build`)
     - Publish the `build` directory to the `gh-pages` branch of your repository using the `gh-pages` package.
   - Your site will be available at `https://syamgith.github.io/`.

## Scripts in `package.json`

- `npm start` — Start the development server.
- `npm run build` — Build the app for production.
- `npm run test` — Run tests.
- `npm run deploy` — Deploy to GitHub Pages.
- `npm run eject` — Ejects the app (not recommended unless you need to customize the build config).

---

**Summary:**  
This is a React + Tailwind CSS app, ready for local development and easy deployment to GitHub Pages. Just install dependencies, run locally with `npm start`, and deploy with `npm run deploy`.
