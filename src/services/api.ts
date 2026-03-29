import type { Medication } from "../types/medication";

const parseMedications = (text: string): Medication[] => {
  const data = JSON.parse(text) as unknown;
  if (!Array.isArray(data)) {
    throw new Error("Expected a JSON array");
  }
  return data as Medication[];
};

export const fetchMedications = async (): Promise<Medication[]> => {
  try {
    const response = await fetch("/products.json");
    const text = await response.text();
    if (!response.ok) {
      throw new Error("Could not load products.json");
    }
    return parseMedications(text);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
