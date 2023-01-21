import {ForwardRefRenderFunction, useCallback, useRef, useState} from 'react'
import classnames from "classnames";
import {DatePickerProps} from "./interface";
import Input from "../input";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import useClickOutSide from "../../hooks/useClickOutSide";
import "./index.scss"


const DatePicker: ForwardRefRenderFunction<any, DatePickerProps> = (props, ref) => {
    const [visiblePanel, setVisiblePanel] = useState<boolean>(false)
    const componentRef = useRef<HTMLDivElement>(null)
    const openPanel = useCallback(() => setVisiblePanel(true), [])
    const closePanel = useCallback(() => setVisiblePanel(false), [])
    useClickOutSide(componentRef,() => closePanel())
    return <div className={classnames('g-datepicker')} ref={componentRef}>
        <Input
            suffix={<InternalIcon name="icon-date"/>}
            width={200}
            readOnly
            onClick={openPanel}
        />
        {visiblePanel && <div className={classnames("g-datepicker-panel-wrapper")}>
            <div className={classnames('g-datepicker-day-picker')}>
                <header className={classnames('g-datepicker-day-picker-header')}>header</header>
                <main className={classnames('g-datepicker-day-picker-content')}>main</main>
                <footer>footer</footer>
            </div>
        </div>}
    </div>
}

export default DatePicker