import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getElementByClassName } from "../../../utils/getElementByClassName";
import Menu from "../";

describe("test Menu", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Menu>
        <Menu.Item>a</Menu.Item>
        <Menu.Item>b</Menu.Item>
        <Menu.Item>c</Menu.Item>
      </Menu>
    );
    const el = getElementByClassName(container, "g-menu"),
      selectedItem = screen.getByText("a");
    expect(el).toBeVisible();
    expect(selectedItem).toHaveClass("g-menu-item-active");
  });
  it("onselect can be called", () => {
    const jestFn = jest.fn();
    render(
      <Menu onSelect={jestFn}>
        <Menu.Item>a</Menu.Item>
        <Menu.Item>b</Menu.Item>
        <Menu.Item>c</Menu.Item>
      </Menu>
    );
    const item = screen.getByText("c");
    fireEvent.click(item);
    expect(jestFn).toBeCalledWith("2");
  });
  it("disabled", () => {
    const jestFn = jest.fn();
    render(
      <Menu onSelect={jestFn}>
        <Menu.Item>a</Menu.Item>
        <Menu.Item>b</Menu.Item>
        <Menu.Item disabled>c</Menu.Item>
      </Menu>
    );
    const item = screen.getByText("c");
    expect(item).toHaveClass("g-menu-item-disabled");
    fireEvent.click(item);
    expect(jestFn).not.toBeCalled();
  });
  it("horizontal property", () => {
    const { container } = render(
      <Menu horizontal>
        <Menu.Item>a</Menu.Item>
        <Menu.Item>b</Menu.Item>
        <Menu.Item>c</Menu.Item>
      </Menu>
    );
    const el = getElementByClassName(container, "g-menu");
    expect(el).toHaveClass("g-menu-horizontal");
  });
});
