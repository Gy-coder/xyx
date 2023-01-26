import { FC, useCallback, useMemo } from "react";
import { MonthPanelProps } from "./interface";
import Dayjs from "../../utils/dayjs";
import PanelTemplate from "./panelTemplate";

const month = [
    "一月", "二月", "三月",
    "四月", "五月", "六月",
    "七月", "八月", "九月",
    "十月", "十一月", "十二月"
]
const MonthPanel: FC<MonthPanelProps> = (props) => {
    const { innerValue, visibleValue, onChangeVisibleValue, onChangeMode } = props
    const handleClickYear = useCallback(() => onChangeMode("year"), [])
    const handleClickDoubleLeft = useCallback(() => onChangeVisibleValue(visibleValue.add(-1, 'year')), [visibleValue])
    const handleClickDoubleRight = useCallback(() => onChangeVisibleValue(visibleValue.add(1, 'year')), [visibleValue])
    const handleClickMonth = useCallback((month: number) => {
        onChangeVisibleValue(visibleValue.set(month, 'month'))
        onChangeMode("date")
    }, [visibleValue])
    const renderMonth = useMemo(() => {
        const res: Dayjs[][] = new Array(4).fill(undefined).map(() => new Array(3).fill(undefined))
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                res[i][j] = visibleValue.set(i * 3 + j + 1, 'month')
            }
        }
        return res
    }, [visibleValue])
    return <PanelTemplate
        innerValue={innerValue}
        visibleValue={visibleValue}
        mode={'month'}
        middleHeader={<>{visibleValue.year}年</>}
        renderArray={renderMonth}
        handleClickDoubleLeft={handleClickDoubleLeft}
        handleClickDoubleRight={handleClickDoubleRight}
        handleClickItem={handleClickMonth}
        handleClickMiddleHeader={handleClickYear}
    />
};

export default MonthPanel;
