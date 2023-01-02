import React, {
  ChangeEventHandler,
  forwardRef,
  ForwardRefRenderFunction,
  useContext,
  useState,
} from "react";
import classnames from "classnames";
import { RadioProps } from "./interface";
import RadioContext from "./context";

const RadioButton: ForwardRefRenderFunction<HTMLElement, RadioProps> = (
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
      className={classnames("g-radio-button", {
        active: isGroup ? selectedValue === value : isChecked,
        disabled: disabled,
      })}
    >
      <input
        className="g-radio-input"
        type="radio"
        value={value}
        checked={isGroup ? selectedValue === value : isChecked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className="g-radio-button-text">{children}</span>
    </label>
  );
};

export default forwardRef(RadioButton);
