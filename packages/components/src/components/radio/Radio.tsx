import React, {
  ForwardRefRenderFunction,
  forwardRef,
  InputHTMLAttributes,
  useState,
  ChangeEventHandler,
  useContext,
} from "react";
import classnames from "classnames";
import RadioContext from "./context";
import "./index.scss";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

const Radio: ForwardRefRenderFunction<HTMLElement, RadioProps> = (
  props,
  ref
) => {
  const { children, value, onChange, checked, defaultChecked, disabled } =
    props;
  const [isChecked, setIsChecked] = useState<boolean>(
    checked || defaultChecked || false
  );
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
