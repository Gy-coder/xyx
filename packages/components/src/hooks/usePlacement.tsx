import { RefObject } from "react"

type Options = {
    triggerRect: DOMRect | null,
    contentRect: DOMRect | null
}

const usePlacement = ({ triggerRect, contentRect }: Options) => {
    if (!contentRect) return { top: 0, left: 0 }
    const { width: triggerWidth, height: triggerHeight, top: triggerTop, left: triggerLeft } = triggerRect!
    const { width: contentWidth, height: contenHeight } = contentRect
    return {
        top: window.scrollX + triggerTop - contenHeight,
        left: window.scrollY + triggerLeft + triggerWidth / 2 - contentWidth / 2
    }
}

export default usePlacement