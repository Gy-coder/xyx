import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

describe("test button component", () => {
  it("button should render correctly", () => {
    const { container, asFragment } = render(<Button>+1</Button>);
    const el = container.getElementsByClassName("g-button")[0];
    expect(el).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
  it("can be click", () => {
    const jestFn = jest.fn();
    const { container } = render(<Button onClick={jestFn}>+1</Button>);
    const el = container.getElementsByClassName("g-button")[0];
    expect(jestFn).not.toBeCalled();
    fireEvent.click(el);
    expect(jestFn).toBeCalledTimes(1);
  });
});
