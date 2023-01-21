import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import DatePicker from "../index";
import {getElementByClassName} from "../../../utils/getElementByClassName";
import {useState} from "react";

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
        expect(jestFn).toBeCalledWith("2023-01-01")
        expect(asFragment()).toMatchSnapshot()
    })
    it("number",() => {
        const base = 1672588800000
        const jestFn = jest.fn()
        const {asFragment} = render(<DatePicker placeholder="1234" onChange={jestFn} defaultValue={base} />)
        const input = screen.getByPlaceholderText("1234")
        fireEvent.click(input)
        const item = screen.getAllByText("1")[0]
        fireEvent.click(item)
        expect(jestFn).toBeCalledWith(base - 24 * 60 * 60 * 1000)
        expect(asFragment()).toMatchSnapshot()
    })
    it("date",()=> {
        let v,setV,handleChange
        const Demo = () => {
            [v,setV] = useState()
            handleChange = (newValue)=> setV(newValue)
            return <DatePicker placeholder="1234" value={v} onChange={handleChange}/>
        }
        const {asFragment} = render(<Demo />)
        const input = screen.getByPlaceholderText("1234")
        fireEvent.click(input)
        const item = screen.getAllByText("1")[0]
        fireEvent.click(item)
        const year = new Date().getFullYear(),month = new Date().getMonth()
        expect(v instanceof Date).toBeTruthy()
        expect(v.getFullYear()).toBe(year)
        expect(v.getMonth()).toBe(month)
        expect(v.getDate()).toBe(1)
        expect(asFragment()).toMatchSnapshot()
    })
})