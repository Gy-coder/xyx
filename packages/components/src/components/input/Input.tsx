import {
  forwardRef,
  ForwardRefRenderFunction,
  ChangeEventHandler,
  MouseEventHandler,
  KeyboardEventHandler,
} from "react";
import classnames from "classnames";
import useMergeState from "../../hooks/useMergeState";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import { InputProps } from "./interface";
import useHoverFocus from "./useHoverFocus";
import { keyboard } from "../../utils/keyboard";
import "./index.scss";

const Input: ForwardRefRenderFunction<any, InputProps> = (props, ref) => {
  const {
    defaultValue,
    value,
    onChange,
    size = "middle",
    clearable = false,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onPressEnter,
    prefix,
    suffix,
    maxLength,
    showCount = false,
    bordered = true,
    disabled = false,
    status,
    rounded = false,
    ...rest
  } = props;

  const [stateValue, setStateValue, isControlled] = useMergeState("", {
    defaultValue,
    value,
  });
  const {
    hover,
    focus,
    handleBlur,
    handleFocus,
    handleMouseEnter,
    handleMouseLeave,
  } = useHoverFocus({ onBlur, onFocus, disabled });
  const classes = classnames("g-input", {
    [`g-input-focus`]: focus,
    [`g-input-hover`]: hover,
    [`g-input-${size}`]: size,
    [`g-input-borderless`]: !bordered,
    [`g-input-disabled`]: disabled,
    [`g-input-${status}`]: status,
    [`g-input-rounded`]: rounded,
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (disabled) return;
    if (!isControlled) {
      setStateValue(e.target.value);
    }
    onChange?.(e.target.value, e);
  };
  const handleReset: MouseEventHandler = () => {
    if (!isControlled) {
      setStateValue("");
    }
    onChange?.("");
  };
  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.code === keyboard.Enter) onPressEnter?.(e);
  };
  const prefixIcon = prefix ? (
    <span className="g-input-prefix">{prefix}</span>
  ) : null;
  const suffixIcon = suffix ? (
    <span className="g-input-suffix">{suffix}</span>
  ) : null;
  const renderShowCount = showCount ? (
    <span className="g-input-show-count">
      {stateValue.length}
      {maxLength && <>&nbsp;/&nbsp;{maxLength}</>}
    </span>
  ) : null;
  const clearButton =
    clearable && stateValue !== "" && !disabled ? (
      <span className="g-input-clear" onClick={handleReset}>
        <InternalIcon />
      </span>
    ) : null;
  return (
    <div
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {prefixIcon}
      <input
        ref={ref}
        type="text"
        className={classnames("g-input-origin")}
        value={stateValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        maxLength={maxLength}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        {...rest}
      />
      {clearButton}
      {renderShowCount}
      {suffixIcon}
    </div>
  );
};

export default forwardRef(Input);
