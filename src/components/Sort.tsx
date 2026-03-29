import { PriceSort } from "../types/medication";

interface IProps {
  value: PriceSort;
  onChange: (order: PriceSort) => void;
}

const Sort = (props: IProps) => {
  const { value, onChange } = props;
  return (
    <fieldset className="sortContainer">
      <legend>Sort by price</legend>
      <div className="sort">
        <label htmlFor="price-sort"> Display order </label>
        <select
          id="price-sort"
          value={value}
          onChange={(e) => onChange(e.target.value as PriceSort)}
        >
          <option value="none">Default order</option>
          <option value="asc">Low to high</option>
          <option value="desc">High to low</option>
        </select>
      </div>
    </fieldset>
  );
};

export default Sort;
