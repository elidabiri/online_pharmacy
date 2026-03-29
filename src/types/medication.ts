export interface Medication {
  id: number;
  name: string;
  description: string;
  manufacturer: string;
  price: number;
}

export interface MedicationFilters {
  name: string;
  description: string;
  manufacturer: string;
}

export type PriceSort = "none" | "asc" | "desc";