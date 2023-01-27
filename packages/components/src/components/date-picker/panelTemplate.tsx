import { FC, ReactNode } from "react";
import classnames from 'classnames'
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import Dayjs from "../../utils/dayjs";
import { modeType } from "./interface";
import createId from "../../utils/createId";
import "./styles/panel.scss"

const month = [
    "一月", "二月", "三月",
    "四月", "五月", "六月",
    "七月", "八月", "九月",
    "十月", "十一月", "十二月"
]



interface PanelTemplateProps {
    innerValue?: Dayjs
    visibleValue: Dayjs
    mode: modeType
    renderArray: Dayjs[][]
    middleHeader: ReactNode
    inThisUnit?: (day: Dayjs) => boolean
    handleClickDoubleLeft: () => void
    handleClickDoubleRight: () => void
    handleClickItem: (item: number) => void
    handleClickMiddleHeader?: () => void
}

const PanelTemplate: FC<PanelTemplateProps> = (props) => {
    const {
        innerValue,
        visibleValue,
        mode,
        renderArray,
        middleHeader,
        handleClickDoubleLeft,
        handleClickDoubleRight,
        handleClickItem,
        handleClickMiddleHeader
    } = props
    const isActive = (day: Dayjs) => {
        if (!innerValue) return false
        switch (mode) {
            case 'month':
                return innerValue.isSameDay(day)
            case "year":
                return innerValue.isSameYear(day)
            case "centrey":
                return day.year >= Math.floor(innerValue.year / 10) * 10 &&
                    day.year <= Math.floor((innerValue.year / 10) + 1) * 10 - 1
        }
    }
    const itemClasses = (day: Dayjs, rowIndex: number, itemIndex: number) => classnames(
        {
            [`g-datepicker-panel-content-item-active`]: isActive(day),
            [`g-datepicker-panel-content-not-in-unit`]: mode !== 'month' ? (
                (rowIndex === 0 && itemIndex === 0) || (rowIndex === 3 && itemIndex === 2)
            ) : false,
        })
    const renderItem = (item: Dayjs) => {
        switch (mode) {
            case 'month':
                return <>  {month[item.month - 1]}</>
            case "centrey":
                return <>{item.year}-{item.add(9, 'year').year}</>
            default:
                return <>{item[mode]}</>
        }
    }
    return (
        <div className={classnames("g-datepicker-panel")}>
            <header className={classnames("g-datepicker-panel-header")}>
                <span
                    className={classnames("g-datepicker-panel-header-arrow")}
                    onClick={handleClickDoubleLeft}
                >
                    <InternalIcon name="icon-arrow-double-left" />
                </span>
                <span
                    className={classnames("g-datepicker-panel-header-middle", {
                        [`g-datepicker-panel-centrey-middle`]: mode === 'centrey'
                    })}
                    onClick={handleClickMiddleHeader}
                >
                    {middleHeader}
                </span>
                <span
                    className={classnames("g-datepicker-panel-header-arrow")}
                    onClick={handleClickDoubleRight}
                >
                    <InternalIcon name="icon-arrow-double-right" />
                </span>
            </header>
            <main className={classnames("g-datepicker-panel-content")}>
                {renderArray.map((row, rowIndex) => {
                    return <div className={classnames("g-datepicker-panel-content-row")} key={createId()}>
                        {row.map((item, itemIndex) => {
                            return (
                                <div key={createId()}>
                                    <span
                                        className={itemClasses(item, rowIndex, itemIndex)}
                                        onClick={() => handleClickItem(mode === 'centrey' ? item.year : item[mode] as number)}
                                    >
                                        {renderItem(item)}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                })}
            </main>
        </div>
    )
}

export default PanelTemplate