# Restaurant App

A React + Vite single-page application for a restaurant website.

## Tech Stack

- **Frontend:** React 19, Vite 8
- **Icons:** lucide-react
- **Language:** JavaScript (JSX)
- **Package Manager:** npm

## Project Structure

```
src/
  App.jsx         # Root app component
  App.css         # App-level styles
  index.css       # Global styles
  main.jsx        # Entry point
  components/     # React components
  data/           # Static data files
  assets/         # Static assets
public/           # Public assets
index.html        # HTML entry point
vite.config.js    # Vite configuration
```

## Running the App

```bash
npm run dev   # Start dev server on port 5000
npm run build # Build for production (outputs to dist/)
```

## Replit Configuration

- Dev server runs on `0.0.0.0:5000` with `allowedHosts: true` for proxy compatibility
- Deployment: static site, built with `npm run build`, served from `dist/`
- Workflow: "Start application" → `npm run dev`
