# Flavor Haven Restaurant Website

A responsive restaurant website built with Vite and React.

## Features

- Responsive navigation bar
- Hero section with call-to-action buttons
- Menu category tabs with starter, main, and dessert items
- About section with restaurant highlights
- Contact form layout and business details
- Mobile-friendly styling with modern dark theme

## Getting Started

Install dependencies:

```bash
npm install
```

Run in development mode:

```bash
npm run dev
```

Open the site at `http://localhost:5173/`.

## Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The app is ready for static hosting. On Vercel, create a new project and use the default settings. The `vercel.json` file is already included to serve the `dist` directory.

For Netlify, deploy the `dist/` folder and set the build command to:

```bash
npm run build
```

and the publish directory to:

```bash
dist
```

## Project Structure

- `index.html` — application entry point
- `vite.config.js` — Vite configuration
- `src/main.jsx` — React root render
- `src/App.jsx` — main restaurant website component
- `src/styles.css` — site styling

## Notes

The contact form is currently static and can be wired to a backend service if desired.
