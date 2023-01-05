import {
  forwardRef,
  InputHTMLAttributes,
  ForwardRefRenderFunction,
  ChangeEvent,
  ChangeEventHandler,
  useState,
  FocusEventHandler,
  MouseEventHandler,
} from "react";
import classnames from "classnames";
import "./index.scss";
import useMergeState from "../../hooks/useMergeState";
import InternalIcon from "../_interal/internal_icon/InternalIcon";

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "onChange" | "defaultChecked" | "checked" | "size"
  > {
  type?: "text" | "password" | "textarea";
  error?: boolean;
  onChange?: (value: string, e?: ChangeEvent<HTMLInputElement>) => void;
  clearable?: boolean;
  size?: "small" | "middle" | "large";
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  const {
    type = "text",
    error = false,
    defaultValue,
    value,
    onChange,
    size = "middle",
    clearable = true,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    ...rest
  } = props;
  const [stateValue, setStateValue, isControlled] = useMergeState("", {
    defaultValue,
    value,
  });
  const [focus, setFocus] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const classes = classnames("g-input", {
    [`g-input-focus`]: focus,
    [`g-input-hover`]: hover,
    [`g-input-${size}`]: size,
  });
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!isControlled) {
      setStateValue(e.target.value);
    }
    onChange?.(e.target.value, e);
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    setFocus(true);
    setHover(false);
    onFocus?.(e);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    setFocus(false);
    setHover(false);
    onBlur?.(e);
  };
  const handleMouseEnter: MouseEventHandler<HTMLInputElement> = (e) => {
    setHover(true);
  };
  const hadnleMouseLeave: MouseEventHandler<HTMLInputElement> = (e) => {
    setHover(false);
  };

  const handleReset: MouseEventHandler = () => {
    if (!isControlled) {
      setStateValue("");
    }
    onChange?.("");
  };
  return (
    <div
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={hadnleMouseLeave}
    >
      <input
        ref={ref}
        type={type}
        className={classnames("g-input-origin")}
        value={stateValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      {clearable && stateValue !== "" && (
        <span className="g-input-clear" onClick={handleReset}>
          <InternalIcon />
        </span>
      )}
    </div>
  );
};

export default forwardRef(Input);
