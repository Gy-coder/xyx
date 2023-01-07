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
import "./index.scss";
import useHoverFocus from "./useHoverFocus";
import { keyborad } from "../../utils/keyborad";

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
    maxLength,
    showCount = false,
    onPressEnter,
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
  } = useHoverFocus({ onBlur, onFocus });
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
  const handleReset: MouseEventHandler = () => {
    if (!isControlled) {
      setStateValue("");
    }
    onChange?.("");
  };
  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.code === keyborad.Enter) onPressEnter?.(e);
  };
  const prefixIcon = prefix ? (
    <span className="g-input-prefix">{prefix}</span>
  ) : null;
  const suffixIcon = suffix ? (
    <span className="g-input-suffix">{suffix}</span>
  ) : null;
  const renderShowCount = showCount ? (
    <span className="g-input-show-count">
      {stateValue.length} {maxLength && <>/&nbsp;{maxLength}</>}
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
        type={type}
        className={classnames("g-input-origin")}
        value={stateValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        maxLength={maxLength}
        onKeyDown={handleKeyDown}
        {...rest}
      />
      {clearable && stateValue !== "" && (
        <span className="g-input-clear" onClick={handleReset}>
          <InternalIcon />
        </span>
      )}
      {renderShowCount}
      {suffixIcon}
    </div>
  );
};

export default forwardRef(Input);
