import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import DatePicker from "../index";
import {getElementByClassName} from "../../../utils/getElementByClassName";

describe("test DatePicker", () => {
    it("should Render Correctly", () => {
        const {container, asFragment} = render(<DatePicker/>)
        const el = getElementByClassName(container, 'g-datepicker')
        expect(el).toBeVisible()
        expect(asFragment()).toMatchSnapshot()
    })
    it("click can open picker", () => {
        const {container, asFragment} = render(<DatePicker placeholder="1234"/>)
        const input = screen.getByPlaceholderText("1234")
        expect(input).toBeVisible()
        fireEvent.click(input)
        const el = getElementByClassName(container, "g-datepicker-panel-wrapper")
        expect(el).toBeVisible()
        expect(asFragment()).toMatchSnapshot()
        fireEvent.click(document)
        expect(el).not.toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })
    it("onchange can work", () => {
        const jestFn = jest.fn()
        const {asFragment} = render(<DatePicker placeholder="1234" onChange={jestFn} defaultValue="2023-01-21" />)
        const input = screen.getByPlaceholderText("1234")
        fireEvent.click(input)
        const item = screen.getAllByText("1")[0]
        fireEvent.click(item)
        expect(jestFn).toBeCalledWith(new Date(2023,0,1,0,0,0),"2023-01-01")
        expect(asFragment()).toMatchSnapshot()
    })
    it("clear",()=>{
        const {container} = render(<DatePicker placeholder="1234" defaultValue="2023-01-21" />)
        const input = screen.getByDisplayValue("2023-01-21")
        const clear = getElementByClassName(container,"g-input-clear")
        expect(clear).toBeVisible()
        expect(input.value).toBe("2023-01-21")
        fireEvent.click(clear)
        expect(clear).not.toBeVisible()
        expect(input.value).toBe("")
    })
})