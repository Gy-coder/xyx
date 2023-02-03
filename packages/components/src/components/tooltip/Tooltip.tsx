import React, { FC, forwardRef, ForwardRefRenderFunction, PropsWithChildren, useImperativeHandle, useRef, useState } from "react";
import ReactDOM from 'react-dom'
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
  useImperativeHandle(ref, () => triggerRef.current)
  useManyClickOutSide([triggerRef, contentRef], closeTooltip)
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
      <div
        className="g-tooltip-trigger"
        ref={triggerRef}
        onClick={openTooltip}
      >
        {child}
      </div>
    </div>)
};

export default forwardRef(Tooltip);
