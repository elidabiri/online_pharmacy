import type {
  Medication,
  MedicationFilters, PriceSort
} from "../types/medication";


// Convert to lowercase
function lc(s: string): string {
  return s?.trim()?.toLowerCase();
}

// Filtering function
export const filterMedications = (
  items: Medication[],
  filters: MedicationFilters,
): Medication[] => {
  const lcName = lc(filters.name);
  const lcDesc = lc(filters.description);
  const lcManufacturer = lc(filters.manufacturer);

  return items.filter((item) => {
    if (lcName && !lc(item.name)?.includes(lcName)) return false;
    if (lcDesc && !lc(item.description)?.includes(lcDesc)) return false;
    if (lcManufacturer && !lc(item.manufacturer)?.includes(lcManufacturer))
      return false;
    return true;
  });
};

// Sorting function
export const sortMedicationsByPrice = (
  items: Medication[],
  order: PriceSort,
): Medication[] => {
  if (order === "none") return [...items];
  const sign = order === "asc" ? 1 : -1;
  return [...items].sort((a, b) => (a.price - b.price) * sign);
};
