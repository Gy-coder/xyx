import React, { FC, forwardRef, ForwardRefRenderFunction, PropsWithChildren, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom'
import useClientRect from "../../hooks/useClientRect";
import useManyClickOutSide from "../../hooks/useManyClickOutSide";
import usePlacement from "../../hooks/usePlacement";
import './index.scss'

export interface TooltipProps extends PropsWithChildren {
  content: string
}

const Tooltip: ForwardRefRenderFunction<any, TooltipProps> = (props, ref) => {
  const { children, content } = props
  const child = React.Children.only(children);
  const [visible, setVisible] = useState<boolean>(false)
  const openTooltip = () => setVisible(true)
  const closeTooltip = () => setVisible(false)
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [triggerRect] = useClientRect(triggerRef)
  const [contentRect] = useClientRect(contentRef, visible)
  const { top, left } = usePlacement({ triggerRect, contentRect })
  useImperativeHandle(ref, () => triggerRef.current)
  return (
    <div
      className="g-tooltip"
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
    >
      {
        visible ? ReactDOM.createPortal(
          <div className="g-tooltip-content" ref={contentRef} style={{ top: `${top}px`, left: `${left}px` }}>
            <div className="g-tooltip-content-arrow" />
            <div className="g-tooltip-content-inner">
              {content}
            </div>
          </div>,
          document.body
        ) : null
      }
      <span
        className="g-tooltip-trigger"
        ref={triggerRef}
        onClick={openTooltip}
      >
        {child}
      </span>
    </div >)
};

export default forwardRef(Tooltip);
