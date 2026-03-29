# Online Pharmacy

A small React + TypeScript app that lists medications, lets you search by name, manufacturer, and description, and sort the list by price. Data is loaded from a static JSON file served with the app.

## Features

- Browse medications in a table (name, price, manufacturer, description)
- Filter by name, manufacturer, and description
- Sort by price (default, low to high, high to low)
- Loading and error states when fetching data
- Unit tests (React Testing Library + Jest)

## Tech stack

- [Create React App](https://create-react-app.dev/) (React 19, TypeScript)
- ESLint (`react-app`, `eslint-config-prettier`)
- Prettier

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended; includes `npm`)

### Install and run

```bash
git clone https://github.com/YOUR_USERNAME/online-pharmacy.git
cd online-pharmacy
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

### Data

Medications are read from [`public/products.json`](public/products.json) via `fetch("/products.json")`. Edit that file to change the catalog in development and production builds.

## Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm start`       | Dev server with hot reload                       |
| `npm test`        | Jest in watch mode (`--watchAll=false` for CI)   |
| `npm run build`   | Production build in `build/`                     |
| `npm run lint`    | ESLint on `src` and `server` (if present)        |
| `npm run format`  | Prettier write on `src` and `server`             |

## Project layout

```
src/
  App.tsx              # Page layout, fetch, filter/sort state
  components/          # Filters, Sort, MedicationsList
  services/api.ts      # Fetch and parse medications
  types/               # Medication type
  utils/filterSort.ts  # Filter and sort helpers
  tests/               # Component and App tests
public/
  products.json        # Medication data
```

## Tests

```bash
npm test -- --watchAll=false
```

Update snapshots after intentional UI changes:

```bash
npm test -- --watchAll=false -u
```

## Deploying to GitHub Pages (optional)

1. In `package.json`, set the `homepage` field to your GitHub Pages URL, for example:

   `"homepage": "https://YOUR_USERNAME.github.io/online-pharmacy"`

2. Install a static deploy helper (e.g. `gh-pages`) and add a `deploy` script that publishes the `build` folder, **or** use GitHub Actions to run `npm run build` and upload `build/` to the `gh-pages` branch.

3. In the repo **Settings → Pages**, choose the branch/folder your host uses (often `gh-pages` or `main` with `/docs`).

Because this app loads `/products.json` with a root-relative URL, the `homepage` setting helps CRA emit correct asset paths for a project site under `https://username.github.io/repo-name/`.

## License

This project is for demonstration purposes. Add a license file if you want to specify terms (e.g. MIT).
