import { RefObject } from "react"

type Options = {
    triggerRect: DOMRect | null,
    contentRect: DOMRect | null,
    placement: "top" | "left" | "bottom" | "right" | "topLeft" | "topRight"
}

const usePlacement = ({ triggerRect, contentRect, placement }: Options) => {
    if (!contentRect) return { top: 0, left: 0 }
    const { width: triggerWidth, height: triggerHeight, top: triggerTop, left: triggerLeft } = triggerRect!
    const { width: contentWidth, height: contentHeight } = contentRect
    const map: Record<typeof placement, Record<"top" | "left", number>> = {
        top: {
            top: window.scrollY + triggerTop - contentHeight,
            left: window.scrollX + triggerLeft + triggerWidth / 2 - contentWidth / 2
        },
        left: {
            top: window.scrollY + triggerTop + triggerHeight / 2 - contentHeight / 2,
            left: window.scrollX + triggerLeft - contentWidth
        },
        bottom: {
            top: window.scrollY + triggerTop + triggerHeight,
            left: window.scrollX + triggerLeft + triggerWidth / 2 - contentWidth / 2
        },
        right: {
            top: window.scrollY + triggerTop + triggerHeight / 2 - contentHeight / 2,
            left: window.scrollX + triggerLeft + triggerWidth,
        },
        topLeft: {
            top: window.scrollY + triggerTop - contentHeight,
            left: window.scrollX + triggerLeft,
        },
        topRight: {
            top: window.scrollY + triggerTop - contentHeight,
            left: window.scrollX + triggerLeft + triggerWidth - contentWidth,
        }
    }
    return { top: map[placement].top, left: map[placement].left }
}

export default usePlacement