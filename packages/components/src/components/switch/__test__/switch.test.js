import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Switch from "../Switch";
import { getElementByClassName } from "../../../utils/getElementByClassName";
import { useState } from "react";

describe("test Switch component", () => {
  it("should render correctly", () => {
    const { container, asFragment } = render(<Switch />);
    const el = getElementByClassName(container, "g-switch");
    expect(el).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
  it("can change value", () => {
    const jestFn = jest.fn();
    let v, setV, handleChange;
    const Demo = () => {
      [v, setV] = useState(false);
      handleChange = (newV) => {
        setV(newV);
        jestFn(newV);
      };
      return <Switch checked={v} onChange={handleChange} />;
    };
    const { container, asFragment } = render(<Demo />);
    const el = getElementByClassName(container, "g-switch");
    expect(v).toBe(false);
    fireEvent.click(el);
    expect(v).toBe(true);
    expect(jestFn).toBeCalledTimes(1);
    expect(jestFn).toBeCalledWith(true);
    expect(asFragment()).toMatchSnapshot();
  });
  it("disabled", () => {
    const jestFn = jest.fn();
    const { contaier } = render(<Switch disabled onChange={jestFn} />);
    const el = getElementByClassName(contaier, "g-switch");
    expect(el).toHaveClass("g-switch-disabled");
    expect(jestFn).not.toBeCalled();
  });
});
