import { CSSProperties, PropsWithChildren } from "react"

export interface MenuProps extends PropsWithChildren {
    defaultIndex?: string
    className?: string
    horizontal?: boolean
    style?: CSSProperties
    onSelect?: (selectedIndex: string) => void
}

export interface SubMenuProps extends PropsWithChildren {
    index?: string
    title: string
    className?: string
}

export interface MenuItemProps extends PropsWithChildren {
    index?: string
    disabled?: boolean,
    className?: string,
    style?: CSSProperties
}