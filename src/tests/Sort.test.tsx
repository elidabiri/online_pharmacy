import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sort from "../components/Sort";

describe(">>> Sort", () => {
  it("+++ Sort default --- Snapshot", () => {
    const onChange = jest.fn();
    const { container } = render(<Sort value="none" onChange={onChange} />);
    expect(container).toMatchSnapshot();
  });

  it("+++ Sort asc --- Snapshot", () => {
    const onChange = jest.fn();
    const { container } = render(<Sort value="asc" onChange={onChange} />);
    expect(container).toMatchSnapshot();
  });

  it("+++ Sort --- calls onChange when user picks sort order", async () => {
    const onChange = jest.fn();
    render(<Sort value="none" onChange={onChange} />);
    const select = screen.getByLabelText(/sort by price/i);
    await userEvent.selectOptions(select, "asc");
    expect(onChange).toHaveBeenCalledWith("asc");
  });
});
