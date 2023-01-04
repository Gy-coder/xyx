import React, {
  ChangeEventHandler,
  forwardRef,
  ForwardRefRenderFunction,
  useState,
} from "react";
import classnames from "classnames";
import type { CheckboxProps } from "./interface";
import "./index.scss";

const Checkbox: ForwardRefRenderFunction<any, CheckboxProps> = (props, ref) => {
  const { value, onChange, defaultChecked, children, checked, disabled } =
    props;

  const [isChecked, setIsChecked] = useState<boolean>(
    checked || defaultChecked || false
  );
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (disabled) return;
    setIsChecked(!isChecked);
    onChange?.(e);
  };
  return (
    <label
      className={classnames("g-checkbox", {
        active: isChecked,
        disabled: disabled,
      })}
      ref={ref}
    >
      <div className="g-checkbox-inner" />
      <input
        className="g-checkbox-input"
        type="checkbox"
        checked={isChecked}
        value={value}
        onChange={handleChange}
      />
      <span className="g-checkbox-text">{children}</span>
    </label>
  );
};

export default forwardRef(Checkbox);
