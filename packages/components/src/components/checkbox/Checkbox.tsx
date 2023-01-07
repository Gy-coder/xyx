import React, {
  ChangeEventHandler,
  forwardRef,
  ForwardRefRenderFunction,
  useContext,
} from "react";
import classnames from "classnames";
import type { CheckboxProps } from "./interface";
import "./index.scss";
import CheckboxContext from "./context";
import useMergeState from "../../hooks/useMergeState";

const Checkbox: ForwardRefRenderFunction<any, CheckboxProps> = (props, ref) => {
  const {
    value,
    onChange,
    defaultChecked,
    children,
    checked,
    disabled = false,
    indeterminate = false,
  } = props;

  const [isChecked, setIsChecked, isControlled] = useMergeState<boolean>(
    false,
    {
      defaultValue: defaultChecked,
      value: checked,
    }
  );
  const { isGroup, selectedValue } = useContext(CheckboxContext);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (disabled) return;
    if (!isControlled) setIsChecked(!isChecked);
    onChange?.(e);
  };
  return (
    <label
      className={classnames("g-checkbox", {
        active: isGroup ? selectedValue.includes(value as string) : isChecked,
        disabled: disabled,
        indeterminate: indeterminate,
      })}
      ref={ref}
    >
      <div className="g-checkbox-inner" />
      <input
        className="g-checkbox-input"
        type="checkbox"
        checked={isGroup ? selectedValue.includes(value as string) : isChecked}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className="g-checkbox-text">{children}</span>
    </label>
  );
};

export default forwardRef(Checkbox);
