import React, { forwardRef, FunctionComponentElement, ForwardRefRenderFunction, useState } from "react";
import classnames from 'classnames'
import "./index.scss"
import { MenuProps, MenuItemProps, SubMenuProps } from "./interface";
import MenuContext, { ParentContext } from "./context";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

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
        const childElement = child as FunctionComponentElement<MenuItemProps | SubMenuProps>
        if (childElement.type !== MenuItem && childElement.type !== SubMenu) {
            console.error("Menu's children must be Menu.Item or Menu.SubMenu")
            return
        }
        return React.cloneElement(childElement, {
            index: index.toString()
        })
    })
    return (
        <MenuContext.Provider value={{
            selectedIndex: currentIndex,
            onSelect: handleSelect,
            horizontal
        }}>
            <ParentContext.Provider value="Menu">
                <ul className={classes} style={style} ref={ref}>{renderChildren()}</ul>
            </ParentContext.Provider>
        </MenuContext.Provider>
    )
}

Menu.displayName = "Menu"
export default forwardRef(Menu)