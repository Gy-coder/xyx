import InternalMenu from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

type MenuType = typeof InternalMenu & {
    Item: typeof MenuItem
    SubMenu: typeof SubMenu
}

const Menu = InternalMenu as MenuType
Menu.Item = MenuItem
Menu.SubMenu = SubMenu

export default Menu