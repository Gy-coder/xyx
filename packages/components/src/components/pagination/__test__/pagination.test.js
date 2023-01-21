import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {getElementByClassName} from "../../../utils/getElementByClassName";
import Pagination from "../Pagination";
import {useState} from "react";
import {keyboard} from "../../../utils/keyboard";

describe("test Pagination component", () => {
    it("should render correctly", () => {
        const {container, asFragment} = render(<Pagination total={100}/>);
        const el = getElementByClassName(container, "g-pagination");
        expect(el).toBeVisible();
        expect(asFragment()).toMatchSnapshot()
    });
    it("can click prev at 1", () => {
        const jestFn = jest.fn();
        let {container} = render(<Pagination total={100} onChange={jestFn}/>);
        let leftButton = getElementByClassName(
            container,
            "g-pagination-prev-button"
        );
        expect(leftButton).toBeVisible();
        fireEvent.click(leftButton);
        expect(jestFn).toBeCalledWith(1);
    });
    it("can click prev at 2", () => {
        const jestFn = jest.fn();
        const {container} = render(
            <Pagination total={100} onChange={jestFn} defaultCurrent={2}/>
        );
        let leftButton = getElementByClassName(
            container,
            "g-pagination-prev-button"
        );
        expect(leftButton).toBeVisible();
        fireEvent.click(leftButton);
        expect(jestFn).toBeCalledWith(1);
    });
    it("can click next at 1", () => {
        const jestFn = jest.fn();
        const {container} = render(<Pagination onChange={jestFn} total={100}/>);
        const rightButton = getElementByClassName(
            container,
            "g-pagination-next-button"
        );
        expect(rightButton).toBeVisible();
        fireEvent.click(rightButton);
        expect(jestFn).toBeCalledWith(2);
    });
    it("can click next at totalPage", () => {
        const jestFn = jest.fn();
        const {container} = render(
            <Pagination onChange={jestFn} total={100} defaultCurrent={10}/>
        );
        const rightButton = getElementByClassName(
            container,
            "g-pagination-next-button"
        );
        expect(rightButton).toBeVisible();
        fireEvent.click(rightButton);
        expect(jestFn).toBeCalledWith(10);
    });
    it("controlled component", () => {
        const jestFn = jest.fn()
        let v, setV, handleChange
        const Demo = () => {
            [v, setV] = useState(1)
            handleChange = (newCurrent) => {
                jestFn(newCurrent)
                setV(newCurrent)
            }
            return <>
                <Pagination total={1000} current={v} onChange={handleChange}/>
            </>
        }
        const {container} = render(<Demo/>)
        const six = screen.getByText("6")
        fireEvent.click(six)
        expect(jestFn).toBeCalledWith(6)
        expect(v).toBe(6)
    })
    it("hideOnSinglePage", () => {
        const {container, asFragment} = render(<Pagination total={1} hideOnSinglePage/>)
        const el = getElementByClassName(container, "g-pagination")
        expect(el).toBeFalsy()
        expect(asFragment()).toMatchSnapshot()
    })
    xit("test simple", () => {
        const jestFn = jest.fn()
        const {container, asFragment} = render(<Pagination total={100} simple onChange={jestFn}/>)
        const el = getElementByClassName(container, "g-input-origin")
        fireEvent.change(el, {target: {value: "6"}})
        fireEvent.keyPress(el, {code: keyboard.Enter})
        expect(jestFn).toBeCalledWith(6)
        expect(asFragment()).toMatchSnapshot()
    })
    it("test mini",()=> {
        const {container} = render(<Pagination total={100} mini />)
        const el = getElementByClassName(container,'g-pagination')
        expect(el).toHaveClass('g-pagination-mini')
    })
});
