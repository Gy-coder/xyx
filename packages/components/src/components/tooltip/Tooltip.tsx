import React, { FC, forwardRef, ForwardRefRenderFunction, PropsWithChildren, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom'
import useClientRect from "../../hooks/useClientRect";
import useManyClickOutSide from "../../hooks/useManyClickOutSide";
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
  const [triggerClientRect] = useClientRect(triggerRef)
  const [contentClientRect] = useClientRect(contentRef, visible)
  useImperativeHandle(ref, () => triggerRef.current)
  return (
    <div className="g-tooltip">
      {
        visible ? ReactDOM.createPortal(
          <div className="g-tooltip-content" ref={contentRef}>
            {content}
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
    </div>)
};

export default forwardRef(Tooltip);
