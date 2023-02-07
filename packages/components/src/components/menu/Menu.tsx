import React, { forwardRef, FunctionComponentElement, ForwardRefRenderFunction, useState } from "react";
import classnames from 'classnames'
import "./index.scss"
import { MenuProps, MenuItemProps } from "./interface";
import MenuContext from "./context";
import MenuItem from "./MenuItem";

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
    const renderChildren = () => React.Children.map(children, (child, index) => {
        const childElement = child as FunctionComponentElement<MenuItemProps>
        if (childElement.type !== MenuItem) {
            console.error("Menu's children must be MenuItem")
        }
        return childElement
    })
    return (
        <MenuContext.Provider value={{
            selectedIndex: currentIndex,
            onSelect: handleSelect
        }}>
            <ul className={classes} style={style} ref={ref}>{renderChildren()}</ul>
        </MenuContext.Provider>
    )
}

export default forwardRef(Menu)