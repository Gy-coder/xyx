import { forwardRef, ForwardRefRenderFunction, MouseEventHandler } from "react";
import classnames from "classnames";
import { SwitchProps } from "./interface";
import useMergeState from "../../hooks/useMergeState";
import "./index.scss";

const Switch: ForwardRefRenderFunction<any, SwitchProps> = (props, ref) => {
  const {
    defaultChecked,
    checked,
    onChange,
    style,
    className,
    disabled = false,
    size = "middle",
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
        [`g-switch-disabled`]: disabled,
        [`g-switch-${size}`]: size,
      })}
      ref={ref}
      style={style}
      onClick={handleClick}
    >
      <div className="g-switch-toggle-wrapper">
        <div className="g-switch-toggle" />
      </div>
    </div>
  );
};

export default forwardRef(Switch);
