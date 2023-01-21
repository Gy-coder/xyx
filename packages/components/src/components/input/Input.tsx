import {
    ChangeEventHandler,
    forwardRef,
    ForwardRefRenderFunction,
    KeyboardEventHandler,
    MouseEventHandler,
} from "react";
import classnames from "classnames";
import useMergeState from "../../hooks/useMergeState";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import {InputProps} from "./interface";
import useHoverFocus from "../../hooks/useHoverFocus";
import {keyboard} from "../../utils/keyboard";
import "./index.scss";

const Input: ForwardRefRenderFunction<any, InputProps> = (props, ref) => {
    const {
        defaultValue,
        value,
        type = "text",
        size = "middle",
        clearable = false,
        prefix,
        suffix,
        maxLength,
        showCount = false,
        bordered = true,
        disabled = false,
        status,
        rounded = false,
        addOnBefore,
        addOnAfter,
        onChange,
        onFocus,
        onBlur,
        onMouseEnter,
        onMouseLeave,
        onPressEnter,
        onClickClearButton,
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
    } = useHoverFocus({onBlur, onFocus, disabled});
    const classes = classnames("g-input", {
        [`g-input-focus`]: focus,
        [`g-input-hover`]: hover,
        [`g-input-${size}`]: size,
        [`g-input-borderless`]: !bordered,
        [`g-input-disabled`]: disabled,
        [`g-input-${status}`]: status,
        [`g-input-rounded`]: rounded,
    });
    const needWrapper = addOnBefore || addOnAfter;

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (disabled) return;
        if (!isControlled) {
            setStateValue(e.target.value);
        }
        onChange?.(e.target.value, e);
    };
    const handleReset: MouseEventHandler = () => {
        if (disabled) return;
        if (!isControlled) {
            setStateValue("");
        }
        onChange?.("");
        onClickClearButton?.()

    };
    const handleKeyDown: KeyboardEventHandler<HTMLElement> = (e) => {
        if (disabled) return;
        if (e.code === keyboard.Enter) onPressEnter?.(stateValue, e);
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
        <InternalIcon name="icon-clear"/>
      </span>
        ) : null;
    const baseInput = (
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
                disabled={disabled}
                {...rest}
            />
            {clearButton}
            {renderShowCount}
            {suffixIcon}
        </div>
    );
    const inputComponent = needWrapper ? (
        <div
            className={classnames("g-input-wrapper", {
                [`g-input-wrapper-${size}`]: size,
            })}
        >
            <div className="g-input-add-on-before">{addOnBefore}</div>
            {baseInput}
            <div className="g-input-add-on-after">{addOnAfter}</div>
        </div>
    ) : (
        <>{baseInput}</>
    );
    return inputComponent;
};

export default forwardRef(Input);
