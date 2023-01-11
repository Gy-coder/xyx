import React, {
  ChangeEventHandler,
  forwardRef,
  ForwardRefRenderFunction,
  KeyboardEventHandler,
} from "react";
import classnames from "classnames";
import useMergeState from "../../hooks/useMergeState";
import { TextAreaProps } from "./interface";
import { keyboard } from "../../utils/keyboard";
import useHoverFocus from "./useHoverFocus";
import omit from "../../utils/omit";
import "./index.scss";
import InternalIcon from "../_interal/internal_icon/InternalIcon";

const TextArea: ForwardRefRenderFunction<any, TextAreaProps> = (props, ref) => {
  const {
    defaultValue,
    value,
    onChange,
    showCount = false,
    maxLength,
    disabled = false,
    onPressEnter,
    onFocus,
    onBlur,
    clearable = false,
    ...rest
  } = props;
  const [stateValue, setStateValue, isControlled] = useMergeState("", {
    defaultValue,
    value,
  });
  const {
    hover,
    focus,
    handleFocus,
    handleBlur,
    handleMouseEnter,
    handleMouseLeave,
  } = useHoverFocus({ onBlur, onFocus, disabled });
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (disabled) return;
    if (!isControlled) setStateValue(e.target.value);
    onChange?.(e.target.value);
  };
  const handlePressEnter: KeyboardEventHandler = (e) => {
    if (disabled) return;
    if (keyboard.Enter) onPressEnter?.(e);
  };
  const handleReset = () => {
    if (disabled) return;
    if (!isControlled) setStateValue("");
    onChange?.("");
  };
  const clearIcon =
    clearable && !disabled && stateValue !== "" ? (
      <span className="g-textarea-clear" onClick={handleReset}>
        <InternalIcon name="icon-clear" />
      </span>
    ) : null;
  const renderShowCount = showCount ? (
    <span className="g-textarea-show-count">
      {stateValue.length}
      {maxLength && <>&nbsp;/&nbsp;{maxLength}</>}
    </span>
  ) : null;
  return (
    <div
      className={classnames("g-textarea", {
        [`g-textarea-hover`]: hover,
        [`g-textarea-focus`]: focus,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <textarea
        ref={ref}
        value={stateValue}
        onChange={handleChange}
        onKeyDown={handlePressEnter}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="g-textarea-origin"
        disabled={disabled}
        {...omit(rest, ["defaultValue"])}
      />
      {clearIcon}
      {renderShowCount}
    </div>
  );
};

export default forwardRef(TextArea);
