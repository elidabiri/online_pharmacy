# Online Pharmacy

A small React + TypeScript app that lists medications, lets you search by name, manufacturer, and description, and sort the list by price. Data is loaded from a static JSON file served with the app.

## Features

- Browse medications in a table (name, price, manufacturer, description)
- Filter by name, manufacturer, and description
- Sort by price (default, low to high, high to low)
- Loading and error states when fetching data
- Unit tests (React Testing Library + Jest)



## Getting started

### Install and run

```bash
git clone git@github.com:elidabiri/online_pharmacy.git
cd online-pharmacy
npm install
npm start
```

The app opens at [http://localhost:3000]

### Data

Medications are read from [`public/products.json`]
via `fetch("/products.json")`

## Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm start`       | Dev server with hot reload                       |
| `npm test`        | Jest in watch mode (`--watchAll=false` for CI)   |
| `npm run build`   | Production build in `build/`                     |
| `npm run lint`    | ESLint on `src` and `server` (if present)        |
| `npm run format`  | Prettier write on `src` and `server`             |

## Project layout

src/
  App.tsx              # Page layout, fetch, filter/sort state
  components/          # Filters, Sort, MedicationsList
  services/api.ts      # Fetch and parse medications
  types/               # Medication type
  utils/filterSort.ts  # Filter and sort helpers
  tests/               # Component and App tests
public/
  products.json        # Medication data


## License
MIT
