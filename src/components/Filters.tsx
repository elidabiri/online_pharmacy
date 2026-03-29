import { ChangeEvent } from "react";
import { MedicationFilters } from "../types/medication";

interface IProps {
  values: MedicationFilters;
  onChange: (next: MedicationFilters) => void;
}

const Filter = (props: IProps) => {
  const { values, onChange } = props;
  const set =
    (key: keyof MedicationFilters) => (e: ChangeEvent<HTMLInputElement>) => {
      onChange({ ...values, [key]: e.target.value });
    };

  return (
    <fieldset className="filters">
      <legend>Search</legend>
      <div className="filters_grid">
        <label className="filters_field">
          Name
          <input
            type="search"
            value={values.name}
            onChange={set("name")}
            placeholder="Name"
            autoComplete="off"
          />
        </label>
        <label className="filters_field">
          Manufacturer
          <input
            type="search"
            value={values.manufacturer}
            onChange={set("manufacturer")}
            placeholder="Manufacturer"
            autoComplete="off"
          />
        </label>
        <label className="filters_field">
          Description
          <input
            type="search"
            value={values.description}
            onChange={set("description")}
            placeholder="Description"
            autoComplete="off"
          />
        </label>
      </div>
    </fieldset>
  );
};

export default Filter;
