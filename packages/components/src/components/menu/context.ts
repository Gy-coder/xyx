import { createContext } from "react"

interface ContextType {
    selectedIndex: string,
    onSelect?: (selectedIndex: string) => void
    horizontal?: boolean
}

const MenuContext = createContext<ContextType>({ selectedIndex: "0" })
const ParentContext = createContext<"Menu" | "SubMenu">("Menu");

export { ParentContext }
export default MenuContext