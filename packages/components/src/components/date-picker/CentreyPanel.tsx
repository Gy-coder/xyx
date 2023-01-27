import { FC, useCallback, useMemo } from "react"
import Dayjs from "../../utils/dayjs"
import { PanelProps } from "./interface"
import PanelTemplate from "./PanelTemplate"
const x = () => undefined

const CentreyPanel: FC<PanelProps> = (props) => {
    const { visibleValue, innerValue, onChangeMode, onChangeVisibleValue } = props
    const beginYear = visibleValue.set(Math.floor(visibleValue.year / 100) * 100 - 10, 'year')
    const handleClickDoubleLeft = useCallback(() => onChangeVisibleValue(visibleValue.add(-100, 'year')), [visibleValue])
    const handleClickDoubleRight = useCallback(() => onChangeVisibleValue(visibleValue.add(100, 'year')), [visibleValue])
    const handleClickItem = useCallback((year: number) => {
        onChangeVisibleValue(visibleValue.set(year, 'year'))
        onChangeMode('year')
    }, [])
    const renderArray = useMemo(() => {
        const res: Dayjs[][] = new Array(4).fill(undefined).map(() => new Array(3).fill(undefined))
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[0].length; j++) {
                res[i][j] = beginYear.add((i * 3 + j) * 10, 'year')
            }
        }
        return res
    }, [visibleValue])
    return <PanelTemplate
        innerValue={innerValue}
        visibleValue={visibleValue}
        mode="centrey"
        middleHeader={<>{beginYear.add(10, 'year').year} - {beginYear.add(109, 'year').year}</>}
        renderArray={renderArray}
        handleClickDoubleLeft={handleClickDoubleLeft}
        handleClickDoubleRight={handleClickDoubleRight}
        handleClickItem={handleClickItem}
    />
}

export default CentreyPanel