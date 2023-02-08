import React, { FC, PropsWithChildren, ReactElement, ReactNode, useRef } from "react";
import ReactDOM from 'react-dom'
import useClientRect from "../../../hooks/useClientRect";
import usePlacement from "../../../hooks/usePlacement";

interface TriggerProps extends PropsWithChildren {
    popup: ReactNode
    visible: boolean
    placement?: "top" | "left" | "bottom" | "right" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
    | "leftTop" | "leftBottom" | "rightTop" | "rightBottom"
}

const Trigger: FC<TriggerProps> = ({ popup, visible, children, placement = 'top' }) => {
    const triggerRef = useRef<HTMLElement | null>(null)
    const popupRef = useRef<HTMLDivElement | null>(null)
    const child = React.Children.only(children)
    const [triggerRect] = useClientRect(triggerRef, visible)
    const [popupRect] = useClientRect(popupRef)
    const { top, left } = usePlacement({ triggerRect, contentRect: popupRect, placement: placement })
    return (
        <>
            {visible && ReactDOM.createPortal(
                <div ref={popupRef} style={{ top, left, position: "absolute" }}>{popup}</div>,
                document.body
            )}
            {React.cloneElement(child as ReactElement, {
                ref: triggerRef
            })}
        </>
    )
}

export default Trigger