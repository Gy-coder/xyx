import {ForwardRefRenderFunction, useCallback, useEffect, useMemo, useRef, useState} from 'react'
import classnames from "classnames";
import {DatePickerProps, valueType} from "./interface";
import Input from "../input";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import useClickOutSide from "../../hooks/useClickOutSide";
import useMergeState from "../../hooks/useMergeState";
import Dayjs from "../../utils/dayjs";
import createId from "../../utils/createId";
import "./index.scss"


const weeks = ["日", "一", "二", "三", "四", "五", "六"]

const DatePicker: ForwardRefRenderFunction<any, DatePickerProps> = (props, ref) => {
    const {
        defaultValue,
        value,
        onChange,
        allowClear = true,
        placeholder = "点击输入日期",
    } = props
    const [stateValue, _setStateValue, isControlled] = useMergeState<valueType>(undefined, {
        defaultValue,
        value
    })
    const [visibleValue, setVisibleValue] = useState<Dayjs>(
        new Dayjs(stateValue)
    )
    const innerValue: Dayjs | undefined = useMemo(() => stateValue ? new Dayjs(stateValue) : undefined, [stateValue])
    const [visiblePanel, setVisiblePanel] = useState<boolean>(false)
    const componentRef = useRef<HTMLDivElement>(null)
    const openPanel = useCallback(() => setVisiblePanel(true), [])
    const closePanel = useCallback(() => setVisiblePanel(false), [])
    const setStateValue = (newValue?: Date,valueString?: string) => {
        if (!isControlled) _setStateValue(newValue)
        onChange?.(newValue,valueString)
    }
    const handleClear = () => {
        setStateValue(undefined,undefined)
    }
    const handleClick = (day: Dayjs) => {
        setStateValue(day.raw,day.format())
        closePanel()
    }
    const clickLeft = useCallback(() => setVisibleValue(visibleValue.add(-1,'month')),[visibleValue])
    const clickDoubleLeft = useCallback(() => setVisibleValue(visibleValue.add(-1,'year')),[visibleValue])
    const clickRight = useCallback(() => setVisibleValue(visibleValue.add(1,'month')),[visibleValue])
    const clickDoubleRight = useCallback(() => setVisibleValue(visibleValue.add(1,'month')),[visibleValue])
    useClickOutSide(componentRef, () => closePanel())
    useEffect(() => setVisibleValue(new Dayjs(stateValue)), [stateValue])
    const daysArray = useMemo(() => {
        const firstDay = visibleValue.firstDayOfMonth()
        const firstDayWeekOfMonth = firstDay.week
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
                    <header className={classnames('g-datepicker-day-picker-header')}>
                        <div>
                            <span
                                className={classnames("g-datepicker-day-picker-header-arrow")}
                                onClick={clickDoubleLeft}
                            >
                                <InternalIcon name="icon-arrow-double-left"/>
                            </span>
                            <span
                                className={classnames("g-datepicker-day-picker-header-arrow")}
                                onClick={clickLeft}
                            >
                                <InternalIcon name="icon-arrow-left"/>
                            </span>
                        </div>
                        <div className={classnames("g-datepicker-day-picker-header-day-and-month")}>
                            <span>{visibleValue.year}年</span>
                            <span>{visibleValue.month}月</span>
                        </div>
                        <div>
                            <span
                                className={classnames("g-datepicker-day-picker-header-arrow")}
                                onClick={clickRight}
                            >
                                <InternalIcon name="icon-arrow-right"/>
                            </span>
                            <span
                                className={classnames("g-datepicker-day-picker-header-arrow")}
                                onClick={clickDoubleRight}
                            >
                                <InternalIcon name="icon-arrow-double-right"/>
                            </span>
                        </div>
                    </header>
                    <main className={classnames('g-datepicker-day-picker-content')}>
                        <span className={classnames("g-datepicker-day-picker-row")}>
                            {weeks.map(w => (
                                <span className={
                                    classnames("g-datepicker-day-picker-title")}
                                      key={w}
                                >
                                    {w}
                                </span>
                            ))}
                        </span>
                        {daysArray.map(line => (
                            <span
                                className={classnames("g-datepicker-day-picker-row")}
                                key={createId()}
                            >{
                                line.map(day => (
                                    <span
                                        className={classnames("g-datepicker-day-picker-item", {
                                            [`g-datepicker-day-picker-item-active`]: innerValue ? day.isSameDay(innerValue) : false,
                                            [`g-datepicker-day-picker-item-not-in-this-month`]: !day.isSameMonth(visibleValue)
                                        })}
                                        onClick={() => handleClick(day)}
                                        key={createId()}
                                    >
                                        {day.day}
                                    </span>
                                ))
                            }</span>
                        ))}
                    </main>
                    <footer>footer</footer>
                </div>
            </div>}
        </div>
    )
}

export default DatePicker