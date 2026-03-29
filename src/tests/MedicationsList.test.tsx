import { render, screen } from "@testing-library/react";
import type { Medication } from "../types/medication";
import MedicationsList from "../components/MedicationsList";

const sampleItems: Medication[] = [
  {
    id: 1,
    name: "Aspirin",
    description: "Pain relief",
    manufacturer: "PharmaCo",
    price: 12.5,
  },
  {
    id: 2,
    name: "Vitamin D",
    description: "Supplement",
    manufacturer: "HealthInc",
    price: 8.99,
  },
];

describe(">>> MedicationsList empty or with items", () => {
  it("+++ MedicationsList --- Snapshot empty", () => {
    const { container } = render(<MedicationsList items={[]} />);
    expect(container).toMatchSnapshot();
  });

  it("+++ MedicationsList --- Snapshot with rows", () => {
    const { container } = render(<MedicationsList items={sampleItems} />);
    expect(container).toMatchSnapshot();
  });

  it("+++ MedicationsList --- shows empty message when no items", () => {
    render(<MedicationsList items={[]} />);
    expect(
      screen.getByText(/there is no medications/i),
    ).toBeInTheDocument();
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });

  it("+++ MedicationsList --- renders medication rows and formatted prices", () => {
    render(<MedicationsList items={sampleItems} />);
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Aspirin" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "$12.50" })).toBeInTheDocument();
    expect(screen.getByText("Vitamin D")).toBeInTheDocument();
  });
});
