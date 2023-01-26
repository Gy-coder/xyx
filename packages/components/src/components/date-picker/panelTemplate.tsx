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
    middleHeader?: ReactNode
    handleClickDoubleLeft: () => void
    handleClickDoubleRight: () => void
    handleClickItem: (item: number) => void
    handleClickMiddleHeader: () => void
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
                    className={classnames("g-datepicker-panel-header-year")}
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
                {renderArray.map((q) => {
                    return <div className={classnames("g-datepicker-panel-content-row")} key={createId()}>
                        {q.map((m) => {
                            return (
                                <div key={createId()}>
                                    <span
                                        className={classnames({ [`g-datepicker-panel-content-item-active`]: innerValue ? innerValue.isSameMonth(m) : false })}
                                        onClick={() => handleClickItem(m[mode] as number)}
                                    >
                                        {mode === 'month' ? <> {month[m.month - 1]}</> : <>{m[mode]}</>}
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