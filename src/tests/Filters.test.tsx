import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filters from "../components/Filters";

const emptyFilters = {
  name: "",
  description: "",
  manufacturer: "",
};

function FiltersWithState({
  onFilterChange,
}: {
  onFilterChange?: (next: typeof emptyFilters) => void;
}) {
  const [values, setValues] = useState(emptyFilters);
  return (
    <Filters
      values={values}
      onChange={(next) => {
        setValues(next);
        onFilterChange?.(next);
      }}
    />
  );
}

describe(">>> Filters", () => {
  it("+++ Filters --- Snapshot", () => {
    const onChange = jest.fn();
    const { container } = render(
      <Filters values={emptyFilters} onChange={onChange} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("+++ Filters --- calls onChange when name field changes", async () => {
    const onChange = jest.fn();
    render(<FiltersWithState onFilterChange={onChange} />);
    const nameInput = screen.getByPlaceholderText("Name");
    await userEvent.type(nameInput, "asp");
    expect(onChange).toHaveBeenLastCalledWith({
      ...emptyFilters,
      name: "asp",
    });
  });
});
