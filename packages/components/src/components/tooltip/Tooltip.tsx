import React, { CSSProperties, forwardRef, ForwardRefRenderFunction, PropsWithChildren, ReactElement, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import useClientRect from "../../hooks/useClientRect";
import usePlacement from "../../hooks/usePlacement";
import './index.scss'

export interface TooltipProps extends PropsWithChildren {
  content: string
  color?: string
  placement?: "top" | "left" | "bottom" | "right" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
  | "leftTop" | "leftBottom" | "rightTop" | "rightBottom"
  overlayClassName?: string
  overlayStyle?: CSSProperties
  overlayInnerStyle?: CSSProperties
  onVisibleChange?: (visible: boolean) => void
}


const Tooltip: ForwardRefRenderFunction<any, TooltipProps> = (props, ref) => {
  const { children,
    content,
    placement = 'top',
    color,
    overlayClassName,
    overlayStyle,
    overlayInnerStyle,
    onVisibleChange
  } = props
  const child = React.Children.only(children);
  const [visible, setVisible] = useState<boolean>(false)
  const openTooltip = () => setVisible(true)
  const closeTooltip = () => setVisible(false)
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [triggerRect, updateTriggerRect] = useClientRect(triggerRef)
  const [contentRect] = useClientRect(contentRef, visible)
  const { top, left } = usePlacement({ triggerRect, contentRect, placement })
  const borderDirection = placement.split(/[A-Z]/)[0].charAt(0).toUpperCase() + placement.split(/[A-Z]/)[0].slice(1)
  useImperativeHandle(ref, () => triggerRef.current)
  useEffect(() => onVisibleChange?.(visible), [visible])
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
          <div
            className={classnames("g-tooltip-content", overlayClassName)}
            ref={contentRef}
            style={{ top: `${top}px`, left: `${left}px`, ...overlayStyle }}
          >
            <div
              className={classnames("g-tooltip-content-arrow", {
                [`g-tooltip-content-arrow-${placement}`]: placement
              })}
              style={color ? { [`border${borderDirection}Color`]: color } : undefined}
            />
            <div
              className={classnames("g-tooltip-content-inner", {
                [`g-tooltip-content-inner-${placement}`]: placement
              })}
              style={{ ...overlayInnerStyle, ...{ background: color } }}
            >
              {content}
            </div>
          </div>,
          document.body
        ) : null
      }
      {
        React.cloneElement(child as ReactElement, {
          className: "g-tooltip-trigger",
          ref: triggerRef,
        })
      }
    </div >)
};

export default forwardRef(Tooltip);