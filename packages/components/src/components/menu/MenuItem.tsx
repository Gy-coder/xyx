import classnames from "classnames";
import { forwardRef, ForwardRefRenderFunction, useContext } from "react";
import { MenuItemProps } from "./interface";
import MenuContext from "./context";

const MenuItem: ForwardRefRenderFunction<any, MenuItemProps> = (props, ref) => {
    const { index, className, style, disabled = false, children } = props
    const { selectedIndex, onSelect } = useContext(MenuContext)
    const classes = classnames("g-menu-item", className, {
        "g-menu-item-active": index === selectedIndex,
        "g-menu-item-disabled": disabled
    })
    const handleClick = (newSelectedIndex: string) => {
        if (disabled) return
        onSelect?.(newSelectedIndex)
    }
    return (
        <li
            onClick={() => { handleClick(index as string) }}
            className={classes}
            style={style}
            ref={ref}
        >
            {children}
        </li>
    )
}

export default forwardRef(MenuItem)