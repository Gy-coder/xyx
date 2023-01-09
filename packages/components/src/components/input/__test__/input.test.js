import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../";
import { getElementByClassName } from "../../../utils/getElementByClassName";
import { keyboard } from "../../../utils/keyboard";
import { useState } from "react";

describe("test Input component", () => {
  it("can render correctly", () => {
    render(<Input placeholder="input" />);
    expect(screen.getByPlaceholderText("input")).toBeVisible();
  });
  it("snapshot", () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("can change value", () => {
    const jestFn = jest.fn();
    render(<Input defaultValue="hello" onChange={jestFn} />);
    const el = screen.getByDisplayValue("hello");
    fireEvent.change(el, { target: { value: "i love u" } });
    expect(jestFn).toHaveBeenCalledTimes(1);
    expect(el.value).toBe("i love u");
  });
  it("size middle", () => {
    const { container } = render(<Input placeholder="123" />);
    const el = container.getElementsByClassName("g-input")[0];
    expect(el).toHaveClass("g-input-middle");
  });
  it("size large", () => {
    const { container } = render(<Input placeholder="123" size="large" />);
    const el = container.getElementsByClassName("g-input")[0];
    expect(el).toHaveClass("g-input-large");
  });
  it("size small", () => {
    const { container } = render(<Input placeholder="123" size="small" />);
    const el = container.getElementsByClassName("g-input")[0];
    expect(el).toHaveClass("g-input-small");
  });
  it("can clear value", () => {
    const { container } = render(<Input placeholder="123" clearable />);
    const el = container.getElementsByClassName("g-input-clear")[0];
    const input = screen.getByPlaceholderText("123");
    expect(el).toBeFalsy();
    fireEvent.change(input, { target: { value: "ccccc" } });
    const el2 = container.getElementsByClassName("g-input-clear")[0];
    expect(el2).toBeVisible();
    expect(input).toHaveValue("ccccc");
    fireEvent.click(el2);
    const input2 = container.getElementsByClassName("g-input-origin")[0];
    expect(input2).toHaveValue("");
  });
  it("can render prefix", () => {
    const { container, asFragment } = render(<Input prefix={<div>123</div>} />);
    const el = container.getElementsByClassName("g-input-prefix")[0];
    expect(el).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
  it("can render suffix", () => {
    const { container, asFragment } = render(<Input suffix={<div>123</div>} />);
    const el = container.getElementsByClassName("g-input-suffix")[0];
    expect(el).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
  it("can render showCount and redender correct", () => {
    const { container, asFragment } = render(
      <Input defaultValue="123" showCount />
    );
    const el = container.getElementsByClassName("g-input-show-count")[0];
    expect(el).toBeVisible();
    expect(el.textContent).toBe("3");
    expect(asFragment()).toMatchSnapshot();
  });
  it("can render showCount and redender correct that has maxLength property", () => {
    const { container, asFragment } = render(
      <Input defaultValue="123" showCount maxLength={20} />
    );
    const el = container.getElementsByClassName("g-input-show-count")[0];
    expect(el).toBeVisible();
    expect(el.innerHTML).toBe("3&nbsp;/&nbsp;20");
    expect(asFragment()).toMatchSnapshot();
  });
  it("can add border false", () => {
    const { container } = render(<Input defaultValue="123" bordered={false} />);
    const el = getElementByClassName(container, "g-input");
    expect(el).toHaveClass("g-input-borderless");
  });
  it("can have error status", () => {
    const { container } = render(<Input status="error" placeholder="error" />);
    const el = getElementByClassName(container, "g-input");
    expect(el).toBeVisible();
    expect(el).toHaveClass("g-input-error");
  });
  it("can have warning status", () => {
    const { container } = render(
      <Input status="warning" placeholder="warning" />
    );
    const el = getElementByClassName(container, "g-input");
    expect(el).toBeVisible();
    expect(el).toHaveClass("g-input-warning");
  });
  it("can rounded", () => {
    const { container } = render(<Input placeholder="1234" rounded />);
    const el = getElementByClassName(container, "g-input");
    expect(el).toHaveClass("g-input-rounded");
  });
  it("disabled", () => {
    const jestFn = jest.fn();
    const { container } = render(
      <Input defaultValue="123" onChange={jestFn} disabled clearable />
    );
    const el = getElementByClassName(container, "g-input");
    const input = screen.getByDisplayValue("123");
    expect(el).toHaveClass("g-input-disabled");
    fireEvent.change(input, { target: { value: "ccc" } });
    expect(jestFn).not.toBeCalled();
    expect(input).toHaveValue("123");
    const clearButton = getElementByClassName(container, "g-input-clear");
    expect(clearButton).toBeFalsy();
  });
  it("pressEnter", () => {
    const jestFn = jest.fn();
    render(<Input placeholder="123" onPressEnter={jestFn} />);
    const el = screen.getByPlaceholderText("123");
    fireEvent.keyDown(el, { code: keyboard.Enter });
    expect(jestFn).toBeCalledTimes(1);
    fireEvent.keyDown(el, { code: keyboard.Enter });
    expect(jestFn).toBeCalledTimes(2);
  });
  it("disabled pressEnter", () => {
    const jestFn = jest.fn();
    render(<Input placeholder="123" onPressEnter={jestFn} disabled />);
    const el = screen.getByPlaceholderText("123");
    fireEvent.keyDown(el, { code: keyboard.Enter });
    expect(jestFn).not.toBeCalled();
    fireEvent.keyDown(el, { code: keyboard.Enter });
    expect(jestFn).not.toBeCalled();
  });
  it("controlled component", () => {
    const jestFn = jest.fn();
    let v, setV, handleChange;
    const Demo = () => {
      [v, setV] = useState("");
      handleChange = (newValue) => {
        setV(newValue);
        jestFn(newValue);
      };
      return <Input value={v} onChange={handleChange} placeholder="input" />;
    };
    render(<Demo />);
    const el = screen.getByPlaceholderText("input");
    fireEvent.change(el, { target: { value: "ccccc" } });
    expect(v).toBe("ccccc");
    expect(jestFn).toBeCalledTimes(1);
    expect(jestFn).toBeCalledWith("ccccc");
  });
  it("addOnBefore", () => {
    const { contaier } = render(
      <Input addOnBefore={<>123</>} placeholder="123" />
    );
    const el = getElementByClassName(contaier, "g-input-add-on-before");
    const input = screen.getByPlaceholderText("123");
    expect(el).toBeVisible();
    expect(input).toBeVisible();
  });
  it("addOnAfter", () => {
    const { contaier } = render(
      <Input addOnAfter={<>123</>} placeholder="123" />
    );
    const el = getElementByClassName(contaier, "g-input-add-on-after");
    const input = screen.getByPlaceholderText("123");
    expect(el).toBeVisible();
    expect(input).toBeVisible();
  });
});

describe("test Input password", () => {
  it("test password", () => {
    const { container } = render(<Input.Password />);
    const el = getElementByClassName(container, "g-input-origin");
    const visibleIcon = getElementByClassName(
      container,
      "g-input-visibility-icon"
    );
    expect(el.type).toBe("password");
    fireEvent.click(visibleIcon);
    expect(el.type).toBe("text");
    fireEvent.click(visibleIcon);
    expect(el.type).toBe("password");
  });
  it("visibility false", () => {
    const { container } = render(<Input.Password visibility={false} />);
    const el = getElementByClassName(container, "g-input-visibility-icon");
    expect(el).not.toBeTruthy();
  });
});
