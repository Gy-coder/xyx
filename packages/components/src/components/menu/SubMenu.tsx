import classnames from "classnames";
import React, { forwardRef, ForwardRefRenderFunction, FunctionComponentElement } from "react";
import { MenuItemProps, SubMenuProps } from "./interface";
import MenuItem from "./MenuItem";

const SubMenu: ForwardRefRenderFunction<any, SubMenuProps> = (props, ref) => {
    const { title, index, className, children } = props
    const classes = classnames("g-menu-submenu", className)
    const renderChildren = () => React.Children.map(children, (child, i) => {
        const childElement = child as FunctionComponentElement<MenuItemProps>
        if (childElement.type !== MenuItem) {
            console.error("Menu.SubMenu's children must be Menu.Item")
            return
        }
        return React.cloneElement(childElement, {
            index: `${index}-${i}`
        })
    })
    return (
        <li className={classes}>
            <div className="g-menu-submenu-title">{title}</div>
            <ul className="g-menu-submenu-list"> {renderChildren()} </ul>
        </li>
    )
}

export default forwardRef(SubMenu)