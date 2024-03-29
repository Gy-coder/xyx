import { FC, useCallback, useMemo } from "react";
import Dayjs from "../../utils/dayjs";
import { PanelProps } from "./interface";
import PanelTemplate from "./PanelTemplate";

const YearPanel: FC<PanelProps> = (props) => {
    const { innerValue, visibleValue, onChangeMode, onChangeVisibleValue, picker, onChangeValue, closePanel, format } = props
    const handleClickDoudbleLeft = useCallback(() => onChangeVisibleValue(visibleValue.add(-10, 'year')), [visibleValue])
    const handleClickDoubleRight = useCallback(() => onChangeVisibleValue(visibleValue.add(10, 'year')), [visibleValue])
    const handleClickYear = useCallback(() => {
        onChangeMode("centrey")
    }, [])
    const handleClickItem = useCallback((year: number) => {
        if (picker === 'year') {
            const newDay = new Dayjs(`${year}-1-1`)
            onChangeValue!(newDay.raw, newDay.format(format))
            closePanel!()
        } else {
            onChangeVisibleValue(visibleValue.set(year, 'year'))
            onChangeMode('month')
        }
    }, [])
    const beginYear = visibleValue.set(Math.floor(visibleValue.year / 10) * 10 - 1, 'year')
    const renderArray = useMemo(() => {
        const res: Dayjs[][] = new Array(4).fill(undefined).map(() => new Array(3).fill(undefined))
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                res[i][j] = beginYear.add(i * 3 + j, 'year')
            }
        }
        return res
    }, [visibleValue])
    return <PanelTemplate
        innerValue={innerValue}
        visibleValue={visibleValue}
        mode="year"
        renderArray={renderArray}
        middleHeader={<>{beginYear.add(1, 'year').year} - {beginYear.add(10, 'year').year}</>}
        handleClickDoubleLeft={handleClickDoudbleLeft}
        handleClickDoubleRight={handleClickDoubleRight}
        handleClickItem={handleClickItem}
        handleClickMiddleHeader={handleClickYear}
    />
}

export default YearPanel