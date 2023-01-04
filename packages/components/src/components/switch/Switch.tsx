import { forwardRef, ForwardRefRenderFunction } from "react";
import { SwitchProps } from "./interface";

const Switch: ForwardRefRenderFunction<any, SwitchProps> = (props, ref) => {
  return <div>Switch</div>;
};

export default forwardRef(Switch);
