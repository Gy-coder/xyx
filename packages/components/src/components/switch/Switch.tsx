import { forwardRef, ForwardRefRenderFunction, MouseEventHandler } from "react";
import classnames from "classnames";
import { SwitchProps } from "./interface";
import useMergeState from "../../hooks/useMergeState";

const Switch: ForwardRefRenderFunction<any, SwitchProps> = (props, ref) => {
  const {
    defaultChecked,
    checked,
    onChange,
    style,
    className,
    disabled = false,
  } = props;
  const [isChecked, setIsChecked, isControlled] = useMergeState(false, {
    defaultValue: defaultChecked,
    value: checked,
  });
  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    if (disabled) return;
    if (!isControlled) setIsChecked(!isChecked);
    onChange?.(!isChecked);
  };
  return (
    <div
      className={classnames("g-switch", className, {
        [`g-switch-active`]: isChecked,
      })}
      onClick={handleClick}
    >
      isChecked :{String(isChecked)}
      Switch
    </div>
  );
};

export default forwardRef(Switch);
