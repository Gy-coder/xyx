import InternalMenu from "./Menu";
import MenuItem from "./MenuItem";

type MenuType = typeof InternalMenu & {
    Item: typeof MenuItem
}

const Menu = InternalMenu as MenuType
Menu.Item = MenuItem

export default Menu