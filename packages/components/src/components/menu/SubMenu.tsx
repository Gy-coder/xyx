import classnames from "classnames";
import React, { forwardRef, ForwardRefRenderFunction, FunctionComponentElement, useCallback, useContext, useEffect, useState } from "react";
import useVisible from "../../hooks/useVisible";
import TransistionInExpand from "../_interal/transition_in_expand/TransitionInExpand";
import Trigger from "../_interal/trigger/Trigger";
import MenuContext, { ParentContext } from "./context";
import { MenuItemProps, SubMenuProps } from "./interface";

const SubMenu: ForwardRefRenderFunction<any, SubMenuProps> = (props, ref) => {
    const { title, index, className, children } = props
    const { visible, open, close } = useVisible()
    const classes = classnames("g-menu-submenu", className)
    const { horizontal, selectedIndex } = useContext(MenuContext)
    const parentType = useContext(ParentContext)
    const renderChildren = () => {
        return <ParentContext.Provider value="SubMenu">
            <ul className={classnames("g-menu-submenu-list", {
                [`g-menu-submenu-list-right`]: parentType === "SubMenu"
            })}>
                {React.Children.map(children, (child, i) => {
                    const childElement = child as FunctionComponentElement<MenuItemProps | SubMenuProps>
                    return React.cloneElement(childElement, {
                        index: `${index}-${i}`
                    })
                })}
            </ul>
        </ParentContext.Provider>
    }
    useEffect(() => close(), [selectedIndex])
    return (
        <li
            className={classes}
            onMouseEnter={open}
            onMouseLeave={close}
            ref={ref}
        >
            {horizontal ? <Trigger popup={renderChildren()} visible={visible} placement={parentType === "Menu" ? 'bottomLeft' : "rightTop"}>
                <div className="g-menu-submenu-title">{title}</div>
            </Trigger> : null}
        </li>
    )
}

SubMenu.displayName = "SubMenu"
export default forwardRef(SubMenu)