import { FC, useCallback, useMemo } from "react";
import { PanelProps } from "./interface";
import Dayjs from "../../utils/dayjs";
import PanelTemplate from "./PanelTemplate";

const MonthPanel: FC<PanelProps> = (props) => {
    const { innerValue, visibleValue, onChangeVisibleValue, onChangeMode, picker, onChangeValue, closePanel, format } = props
    const handleClickYear = useCallback(() => onChangeMode("year"), [])
    const handleClickDoubleLeft = useCallback(() => onChangeVisibleValue(visibleValue.add(-1, 'year')), [visibleValue])
    const handleClickDoubleRight = useCallback(() => onChangeVisibleValue(visibleValue.add(1, 'year')), [visibleValue])
    const handleClickMonth = useCallback((month: number) => {
        console.log(format)
        if (picker === 'month') {
            const newDay = new Dayjs(`${visibleValue.year}-${month}-1`)
            onChangeValue!(newDay.raw, newDay.format(format))
            closePanel?.()
        } else {
            onChangeVisibleValue(visibleValue.set(month, 'month'))
            onChangeMode("date")
        }
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
