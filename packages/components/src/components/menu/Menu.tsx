import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import classnames from 'classnames'
import "./index.scss"
import { MenuProps } from "./interface";
import MenuContext from "./context";

const Menu: ForwardRefRenderFunction<any, MenuProps> = (props, ref) => {
    const { defaultIndex = '0', className, horizontal = false, style, onSelect, children } = props
    const [currentIndex, setCurrentIndex] = useState(defaultIndex)
    const handleSelect = (selectedValue: string) => {
        setCurrentIndex(selectedValue)
        onSelect?.(selectedValue)
    }
    const classes = classnames("g-menu", className, {
        "g-menu-horizontal": horizontal
    })
    return (
        <MenuContext.Provider value={{
            selectedIndex: currentIndex,
            onSelect: handleSelect
        }}>
            <ul className={classes} style={style} ref={ref}>{children}</ul>
        </MenuContext.Provider>
    )
}

export default forwardRef(Menu)