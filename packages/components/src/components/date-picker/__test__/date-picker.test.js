import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DatePicker from "../index";
import { getElementByClassName } from "../../../utils/getElementByClassName";
import Dayjs from "../../../utils/dayjs";

describe("test DatePicker", () => {
  it("should Render Correctly", () => {
    const { container, asFragment } = render(<DatePicker />);
    const el = getElementByClassName(container, "g-datepicker");
    expect(el).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
  it("click can open picker", () => {
    const { container, asFragment } = render(<DatePicker placeholder="1234" />);
    const input = screen.getByPlaceholderText("1234");
    expect(input).toBeVisible();
    fireEvent.click(input);
    const el = getElementByClassName(container, "g-datepicker-panel-wrapper");
    expect(el).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
    fireEvent.click(document);
    expect(el).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
  it("onchange can work", () => {
    const jestFn = jest.fn();
    const { asFragment } = render(
      <DatePicker
        placeholder="1234"
        onChange={jestFn}
        defaultValue="2023-01-21"
      />
    );
    const input = screen.getByPlaceholderText("1234");
    fireEvent.click(input);
    const item = screen.getAllByText("1")[0];
    fireEvent.click(item);
    expect(jestFn).toBeCalledWith(new Date(2023, 0, 1, 0, 0, 0), "2023-01-01");
    expect(asFragment()).toMatchSnapshot();
  });
  it("clear", () => {
    const { container } = render(
      <DatePicker placeholder="1234" defaultValue="2023-01-21" allowClear />
    );
    const input = screen.getByDisplayValue("2023-01-21");
    const clear = getElementByClassName(container, "g-input-clear");
    expect(clear).toBeVisible();
    expect(input.value).toBe("2023-01-21");
    fireEvent.click(clear);
    expect(clear).not.toBeVisible();
    expect(input.value).toBe("");
  });
  it("click double left button", () => {
    const { container } = render(<DatePicker placeholder="1234" />);
    const input = screen.getByPlaceholderText("1234");
    fireEvent.click(input);
    const arrow = container.getElementsByClassName(
      "g-datepicker-day-picker-header-arrow"
    )[0];
    fireEvent.click(arrow);
    const el = container.querySelectorAll(
      ".g-datepicker-day-picker-header-day-and-month span"
    )[0];
    expect(el.innerHTML).toBe(new Dayjs().year - 1 + "年");
  });
  it("click left button", () => {
    const { container } = render(<DatePicker placeholder="1234" />);
    const input = screen.getByPlaceholderText("1234");
    fireEvent.click(input);
    const arrow = container.getElementsByClassName(
      "g-datepicker-day-picker-header-arrow"
    )[1];
    fireEvent.click(arrow);
    const els = container.querySelectorAll(
      ".g-datepicker-day-picker-header-day-and-month span"
    );
    const month = parseInt(els[1].innerHTML);
    let year = new Dayjs().year;
    if (month > new Dayjs().month) {
      year--;
      // eslint-disable-next-line jest/no-conditional-expect
      expect(els[0].innerHTML).toBe(year + "年");
      // eslint-disable-next-line jest/no-conditional-expect
      expect(els[1].innerHTML).toBe(12 + "月");
    } else {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(els[1].innerHTML).toBe(new Dayjs().month - 1 + "月");
    }
  });
  it("test format", () => {
    const jestFn = jest.fn();
    const { container } = render(
      <DatePicker format="YYYY/MM/DD" onChange={jestFn} />
    );
    const input = getElementByClassName(container, "g-input-origin");
    fireEvent.click(input);
    const footer = screen.getByText("今 天");
    fireEvent.click(footer);
    const year = new Date().getFullYear(),
      month = (new Date().getMonth() + 1).toString().padStart(2, "0"),
      day = new Date().getDate().toString().padStart(2, "0");
    expect(input.value).toBe(`${year}/${month}/${day}`);
    // expect(jestFn).toBeCalledWith(new Date(), `${year}/${month}/${day}`);
    expect(footer).not.toBeInTheDocument();
  });
  it("test month picker", () => {
    const jestFn = jest.fn();
    const { container, asFragment } = render(
      <DatePicker picker="month" onChange={jestFn} />
    );
    const input = getElementByClassName(container, "g-input-origin");
    fireEvent.click(input);
    const el = getElementByClassName(
      container,
      "g-datepicker-panel-header-middle"
    );
    expect(el).toBeVisible();
    expect(el.textContent).toBe(`${new Date().getFullYear()}年`);
    expect(asFragment()).toMatchSnapshot();
    const item = screen.getByText("十二月");
    fireEvent.click(item);
    // expect(jestFn).toBeCalledWith(new Date(), `${year}/${12}`);
    expect(input.value).toBe(`${new Date().getFullYear()}-12`);
    expect(el).not.toBeInTheDocument();
  });
});
