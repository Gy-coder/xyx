import { createContext } from "react"

interface ContextType {
    selectedIndex: string,
    onSelect?: (selectedIndex: string) => void
}

const MenuContext = createContext<ContextType>({ selectedIndex: "0" })

export default MenuContext