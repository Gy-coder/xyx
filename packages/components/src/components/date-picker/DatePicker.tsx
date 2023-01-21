import {ForwardRefRenderFunction, useCallback, useMemo, useRef, useState} from 'react'
import classnames from "classnames";
import {DatePickerProps, valueType} from "./interface";
import Input from "../input";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import useClickOutSide from "../../hooks/useClickOutSide";
import useMergeState from "../../hooks/useMergeState";
import Dayjs from "../../utils/dayjs";
import "./index.scss"


const DatePicker: ForwardRefRenderFunction<any, DatePickerProps> = (props, ref) => {
    const {
        defaultValue,
        value,
        onChange,
        allowClear = true,
        placeholder= "点击输入日期",
    } = props
    const [stateValue, _setStateValue, isControlled] = useMergeState<valueType>(undefined, {
        defaultValue,
        value
    })
    const [visibleValue, setVisibleValue] = useState<Dayjs>(
        new Dayjs(stateValue)
    )
    const innerValue = useMemo(() => stateValue ? new Dayjs(stateValue) : undefined, [stateValue])
    const [visiblePanel, setVisiblePanel] = useState<boolean>(false)
    const componentRef = useRef<HTMLDivElement>(null)
    const openPanel = useCallback(() => setVisiblePanel(true), [])
    const closePanel = useCallback(() => setVisiblePanel(false), [])
    const setStateValue = (newValue: valueType) => {
        if (!isControlled) _setStateValue(newValue)
        onChange?.(newValue)
    }
    const handleClear = () => {
        setStateValue(undefined)
    }
    const handleClick = (day: Dayjs) => {
        if (typeof stateValue === 'string') {
            setStateValue(day.format())
        } else if (typeof stateValue === 'number') {
            setStateValue(day.raw.getTime())
        } else {
            setStateValue(day.raw)
        }
        closePanel()
    }
    useClickOutSide(componentRef, () => closePanel())
    const daysArray = useMemo(() => {
        const firstDay = visibleValue.firstDayOfMonth()
        const firstDayWeekOfMonth = visibleValue.firstDayOfMonth().week
        const beginDay = firstDay.add(-firstDayWeekOfMonth, 'day')
        const tmp: Dayjs[][] = new Array(6).fill(0).map(_ => new Array(7).fill(0))
        for (let i = 0; i < 42; i++) {
            tmp[Math.floor(i / 7)][i % 7] = beginDay.add(i, 'day')
        }
        return tmp
    }, [visibleValue])
    return (
        <div className={classnames('g-datepicker')} ref={componentRef}>
            <Input
                suffix={<InternalIcon name="icon-date"/>}
                width={200}
                readOnly
                onClick={openPanel}
                value={innerValue ? innerValue.format() : ""}
                clearable={allowClear}
                onClickClearButton={handleClear}
                placeholder={placeholder}
            />
            {visiblePanel && <div className={classnames("g-datepicker-panel-wrapper")}>
                <div className={classnames('g-datepicker-day-picker')}>
                    <header className={classnames('g-datepicker-day-picker-header')}>header</header>
                    <main className={classnames('g-datepicker-day-picker-content')}>
                        {daysArray.map(line => (
                            <span key={line[0].day}>
                                {line.map(day => <span onClick={()=>handleClick(day)} key={day.day}>{day.day}</span>)}
                            </span>
                        ))}
                    </main>
                    <footer>footer</footer>
                </div>
            </div>}
        </div>
    )
}

export default DatePicker