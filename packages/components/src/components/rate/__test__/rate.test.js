import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getElementByClassName } from "../../../utils/getElementByClassName";
import Rate from "../Rate";
import { useState } from "react";

const rateClass = "g-rate";
const starClass = "g-rate-item";
const halfStarClass = "g-rate-item-half";
const starActive = "g-rate-item-active";
const disabledClass = "g-rate-disabled";
const disabledCItemClass = "g-rate-item-disabled";
const smallClass = "g-rate-small";
const smallItemClass = "g-rate-item-small";
const largeClass = "g-rate-large";
const largeItemClass = "g-rate-item-large";

describe("Rate component test", () => {
  it("can render corrently", () => {
    const { container, asFragment } = render(<Rate />);
    const el = getElementByClassName(container, rateClass);
    expect(el).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
  it("add ClassName", () => {
    const { container } = render(<Rate className="123" />);
    const el = getElementByClassName(container, rateClass);
    expect(el).toHaveClass("123");
  });
  it("value", () => {
    const active = 3;
    const { container } = render(<Rate defaultValue={active} />);
    const stars = container.getElementsByClassName(starClass);
    for (let i = 0; i < active; i++) expect(stars[i]).toHaveClass(starActive);
    for (let i = active; i < stars.length; i++)
      expect(stars[i]).not.toHaveClass(starActive);
  });
  it("can change value", () => {
    const jestFn = jest.fn();
    const { container } = render(<Rate onChange={jestFn} />);
    const stars = container.getElementsByClassName(starClass);
    for (let i = 0; i < stars.length; i++) expect(stars[i]).toBeVisible();
    fireEvent.click(stars[3]);
    expect(jestFn).toBeCalledWith(4);
    fireEvent.click(stars[0]);
    expect(jestFn).toBeCalledWith(1);
  });
  it("count", () => {
    const { container } = render(<Rate count={10} />);
    const stars = container.getElementsByClassName(starClass);
    expect(stars.length).toBe(10);
  });
  it("can clear value", () => {
    const jestFn = jest.fn();
    const { container } = render(
      <Rate onChange={jestFn} defaultValue={3} clearable />
    );
    const stars = container.getElementsByClassName(starClass);
    const star = container.getElementsByClassName(starActive)[2];
    fireEvent.click(star);
    expect(jestFn).toBeCalledWith(0);
    for (let i = 0; i < star.length; i++)
      expect(stars[i]).not.toHaveClass(starActive);
    fireEvent.click(stars[2]);
    expect(jestFn).toBeCalledWith(3);
    for (let i = 0; i < 3; i++) expect(stars[i]).toHaveClass(starActive);
    fireEvent.click(stars[2]);
    expect(jestFn).toBeCalledWith(0);
    for (let i = 0; i < star.length; i++)
      expect(stars[i]).not.toHaveClass(starActive);
  });
  it("controlled component", () => {
    const jestFn = jest.fn();
    let v, setV, handleChange;
    const Demo = () => {
      [v, setV] = useState(0);
      handleChange = (newValue) => {
        setV(newValue);
        jestFn(newValue);
      };
      return <Rate value={v} onChange={handleChange} />;
    };
    const { container } = render(<Demo />);
    const stars = container.getElementsByClassName(starClass);
    fireEvent.click(stars[4]);
    expect(v).toBe(5);
    fireEvent.click(stars[1]);
    expect(v).toBe(2);
  });
  it("test disabled", () => {
    const jestFn = jest.fn();
    const { container } = render(
      <Rate onChange={jestFn} defaultValue={3} disabled />
    );
    const el = getElementByClassName(container, rateClass);
    expect(el).toHaveClass(disabledClass);
    const stars = container.getElementsByClassName(starClass);
    for (let i = 0; i < stars.length; i++) {
      fireEvent.click(stars[i]);
      expect(jestFn).not.toBeCalled();
    }
  });
  it("charactor", () => {
    const charactor = 1;
    const { container } = render(<Rate character={charactor} />);
    const stars = container.getElementsByClassName(starClass);
    for (let i = 0; i < stars.length; i++) expect(stars[i].innerHTML).toBe("1");
  });
  it("half", () => {
    const jestFn = jest.fn();
    const { container } = render(<Rate half onChange={jestFn} />);
    const halfStars = container.getElementsByClassName(halfStarClass);
    for (let i = 0; i < halfStars.length; i++)
      expect(halfStars[i]).toBeVisible();
    fireEvent.click(halfStars[0]);
    expect(jestFn).toBeCalledWith(0.5);
  });
  it("disabled", () => {
    const jestFn = jest.fn(),
      jestFn2 = jest.fn();
    const { container } = render(
      <Rate disabled onChange={jestFn} onHoverChange={jestFn2} />
    );
    const el = getElementByClassName(container, rateClass);
    expect(el).toBeVisible();
    expect(el).toHaveClass(disabledClass);
    const stars = container.getElementsByClassName(disabledCItemClass);
    expect(stars.length).toBe(5);
    for (let i = 0; i < stars.length; i++) {
      fireEvent.click(stars[i]);
      expect(jestFn).not.toBeCalled();
    }
    for (let i = 0; i < stars.length; i++) {
      fireEvent.mouseEnter(stars[i]);
      expect(jestFn2).not.toBeCalled();
    }
  });
  it("size small", () => {
    const { container } = render(<Rate size="small" />);
    const el = getElementByClassName(container, rateClass);
    expect(el).toBeVisible();
    expect(el).toHaveClass(smallClass);
    const stars = container.getElementsByClassName(smallItemClass);
    for (let i = 0; i < stars.length; i++) {
      expect(stars[i]).toHaveClass(smallItemClass);
    }
  });
  it("size large", () => {
    const { container } = render(<Rate size="large" />);
    const el = getElementByClassName(container, rateClass);
    expect(el).toBeVisible();
    expect(el).toHaveClass(largeClass);
    const stars = container.getElementsByClassName(largeItemClass);
    for (let i = 0; i < stars.length; i++) {
      expect(stars[i]).toHaveClass(largeItemClass);
    }
  });
});
