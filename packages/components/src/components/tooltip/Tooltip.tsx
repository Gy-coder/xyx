import React, { FC, forwardRef, ForwardRefRenderFunction, PropsWithChildren, ReactElement, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import useClientRect from "../../hooks/useClientRect";
import usePlacement from "../../hooks/usePlacement";
import './index.scss'

export interface TooltipProps extends PropsWithChildren {
  content: string
  placement?: "top" | "left" | "bottom" | "right"
}

const Tooltip: ForwardRefRenderFunction<any, TooltipProps> = (props, ref) => {
  const { children, content, placement = 'top' } = props
  const child = React.Children.only(children);
  const [visible, setVisible] = useState<boolean>(false)
  const openTooltip = () => setVisible(true)
  const closeTooltip = () => setVisible(false)
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [triggerRect, updateTriggerRect] = useClientRect(triggerRef)
  const [contentRect] = useClientRect(contentRef, visible)
  const { top, left } = usePlacement({ triggerRect, contentRect, placement })
  useImperativeHandle(ref, () => triggerRef.current)
  return (
    <div
      className="g-tooltip"
      onMouseEnter={() => {
        updateTriggerRect()
        openTooltip()
      }}
      onMouseLeave={closeTooltip}
    >
      {
        visible ? ReactDOM.createPortal(
          <div className="g-tooltip-content" ref={contentRef} style={{ top: `${top}px`, left: `${left}px` }}>
            <div className={classnames("g-tooltip-content-arrow", {
              [`g-tooltip-content-arrow-${placement}`]: placement
            })} />
            <div className={classnames("g-tooltip-content-inner", {
              [`g-tooltip-content-inner-${placement}`]: placement
            })}>
              {content}
            </div>
          </div>,
          document.body
        ) : null
      }
      {React.cloneElement(child as ReactElement, {
        className: "g-tooltip-trigger",
        ref: triggerRef,
      })}
    </div >)
};

export default forwardRef(Tooltip);