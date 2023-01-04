import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useState,
  ChangeEventHandler,
  useContext,
  DetailedHTMLProps,
  LabelHTMLAttributes,
} from "react";
import classnames from "classnames";
import RadioContext from "./context";
import "./index.scss";
import type { RadioProps } from "./interface";
import useMergeState from "../../hooks/useMergeState";

const Radio: ForwardRefRenderFunction<any, RadioProps> = (props, ref) => {
  const { children, value, onChange, checked, defaultChecked, disabled } =
    props;
  const [isChecked, setIsChecked] = useMergeState<boolean>(false, {
    defaultValue: defaultChecked,
    value: checked,
  });
  const { isGroup, selectedValue } = useContext(RadioContext);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (disabled) return;
    setIsChecked(true);
    onChange?.(e);
  };
  return (
    <label
      className={classnames("g-radio", {
        disabled: disabled,
      })}
      ref={ref}
    >
      <span
        className={classnames("g-radio-circle", {
          active: isGroup ? selectedValue === value : isChecked,
          disabled: disabled,
        })}
      />
      <input
        className="g-radio-input"
        type="radio"
        value={value}
        checked={isGroup ? selectedValue === value : isChecked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className="g-radio-text">{children}</span>
    </label>
  );
};

export default forwardRef(Radio);
