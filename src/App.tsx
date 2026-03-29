import { useEffect, useMemo, useState } from "react";
import { fetchMedications } from "./services/api";
import type {
  Medication,
  MedicationFilters, PriceSort
} from "./types/medication";
import {
  filterMedications,
  sortMedicationsByPrice,
} from "./utils/filterSort";
import Filters from "./components/Filters";
import Sort from "./components/Sort";
import MedicationsList from "./components/MedicationsList";
// styles
import "./App.css";

const emptyFilters: MedicationFilters = {
  name: "",
  description: "",
  manufacturer: "",
};

function App() {
  const [items, setItems] = useState<Medication[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<MedicationFilters>(emptyFilters);
  const [priceSort, setPriceSort] = useState<PriceSort>("none");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchMedications()
      .then((data) => {
        if (!cancelled) {
          setItems(data);
          setErrorMsg(null);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setErrorMsg(
            err instanceof Error ? err.message : "Something went wrong",
          );
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const visible = useMemo(() => {
    const filtered = filterMedications(items, filters);
    return sortMedicationsByPrice(filtered, priceSort);
  }, [items, filters, priceSort]);

  return (
    <div className="app">
      <header className="app_header">
        <h1>Online Pharmacy</h1>
        <p className="app_tagline">
          Medication list, filter, and sort by price.
        </p>
      </header>

      {loading && <p>Loading ... </p>}
      {!!errorMsg && <p>{errorMsg}</p>}

      {!loading && !errorMsg && (
        <>
          <div className="app_controls">
            <Filters values={filters} onChange={setFilters} />
            <Sort value={priceSort} onChange={setPriceSort} />
          </div>
          <MedicationsList items={visible} />
        </>
      )}
    </div>
  );
}

export default App;
