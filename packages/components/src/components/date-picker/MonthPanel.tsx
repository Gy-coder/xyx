import {FC, useCallback, useMemo} from "react";
import classnames from "classnames";
import {MonthPanelProps} from "./interface";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import createId from "../../utils/createId";
import Dayjs from "../../utils/dayjs";

const month = [
    "一月","二月","三月",
    "四月","五月","六月",
    "七月","八月","九月",
    "十月","十一月","十二月"
]
const MonthPanel: FC<MonthPanelProps> = (props) => {
    const {innerValue,visibleValue, onChangeVisibleValue, onChangeMode} = props
    const handleClickYear = useCallback(() => onChangeMode("year"),[])
    const handleClickDoubleLeft = useCallback(()=> onChangeVisibleValue(visibleValue.add(-1,'year')),[visibleValue])
    const handleClickDoubleRight = useCallback(()=> onChangeVisibleValue(visibleValue.add(1,'year')),[visibleValue])
    const handleClickMonth = useCallback((month: number) => {
        onChangeVisibleValue(visibleValue.set(month,'month'))
        onChangeMode("date")
    },[visibleValue])
    const renderMonth = useMemo(() => {
        const res: Dayjs[][] = new Array(4).fill(undefined).map(() => new Array(3).fill(undefined))
        for(let i = 0;i < 4;i++){
            for(let j = 0;j < 3;j++){
                res[i][j] = visibleValue.set(i * 3 + j + 1,'month')
            }
        }
        return res
    },[visibleValue])
    return <div className={classnames("g-datepicker-month-picker")}>
        {visibleValue.format()}
        <header className={classnames("g-datepicker-month-picker-header")}>
            <span
                className={classnames("g-datepicker-month-picker-header-arrow")}
                onClick={handleClickDoubleLeft}
            >
                <InternalIcon name="icon-arrow-double-left"/>
            </span>
            <span
                className={classnames("g-datepicker-month-picker-header-year")}
                onClick={handleClickYear}
            >
                {visibleValue.year}年
            </span>
            <span
                className={classnames("g-datepicker-month-picker-header-arrow")}
                onClick={handleClickDoubleRight}
            >
                <InternalIcon name="icon-arrow-double-right"/>
            </span>
        </header>
        <main className={classnames("g-datepicker-month-picker-content")}>
            {renderMonth.map((q) => {
                return <div className={classnames("g-datepicker-month-picker-content-row")} key={createId()}>
                    {q.map((m) => {
                        return (
                            <div key={createId()}>
                                <span
                                    className={classnames({[`g-datepicker-month-picker-content-item-active`]: innerValue? innerValue.isSameMonth(m): false})}
                                    onClick={()=> handleClickMonth(m.month)}
                                >
                                    {month[m.month - 1]}
                                </span>
                            </div>
                        )
                    })}
                </div>
            })}
        </main>
    </div>;
};

export default MonthPanel;
