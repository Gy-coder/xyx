import React, { FC, forwardRef, ForwardRefRenderFunction } from "react";
import './index.scss'

export interface TooltipProps { }

const Tooltip: ForwardRefRenderFunction<any, TooltipProps> = (props) => {
  return <div>Tooltip</div>;
};

export default forwardRef(Tooltip);
