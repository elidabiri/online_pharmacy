import type { Medication } from "../types/medication";

type Props = {
  items: Medication[];
};

const MedicationsList = ({ items }: Props) => {
  if (!!!items || items.length === 0) {
    return <p className="empty-list">There is no medications</p>;
  }

  return (
    <div className="table-wrap">
      <table className="med-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Manufacturer</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: Medication) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price?.toFixed(2)}</td>
              <td>{item.manufacturer}</td>
              <td className="med-table_desc">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicationsList;
