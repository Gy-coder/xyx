import { RefObject } from "react"

type Options = {
    triggerRect: DOMRect | null,
    contentRect: DOMRect | null,
    placement: "top" | "left" | "bottom" | "right"
}

const usePlacement = ({ triggerRect, contentRect, placement }: Options) => {
    if (!contentRect) return { top: 0, left: 0 }
    const { width: triggerWidth, height: triggerHeight, top: triggerTop, left: triggerLeft } = triggerRect!
    const { width: contentWidth, height: contenHeight } = contentRect
    const map: Record<typeof placement, Record<"top" | "left", number>> = {
        top: {
            top: window.scrollX + triggerTop - contenHeight,
            left: window.scrollY + triggerLeft + triggerWidth / 2 - contentWidth / 2
        },
        left: {
            top: 0,
            left: 0
        },
        bottom: {
            top: 0,
            left: 0
        },
        right: {
            top: 0,
            left: 0,
        }
    }
    return { top: map[placement].top, left: map[placement].left }
}

export default usePlacement