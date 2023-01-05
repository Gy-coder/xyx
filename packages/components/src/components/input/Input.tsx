import {
  forwardRef,
  ForwardRefRenderFunction,
  ChangeEventHandler,
  useState,
  FocusEventHandler,
  MouseEventHandler,
} from "react";
import classnames from "classnames";
import "./index.scss";
import useMergeState from "../../hooks/useMergeState";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import { InputProps } from "./interface";

const Input: ForwardRefRenderFunction<any, InputProps> = (props, ref) => {
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
    prefix,
    suffix,
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
  const prefixIcon = prefix ? (
    <span className="g-input-prefix">{prefix}</span>
  ) : null;
  const suffixIcon = suffix ? (
    <span className="g-input-suffix">{suffix}</span>
  ) : null;
  return (
    <div
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={hadnleMouseLeave}
    >
      {prefixIcon}
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
      {suffixIcon}
    </div>
  );
};

export default forwardRef(Input);
