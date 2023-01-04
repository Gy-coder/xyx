import React, { ChangeEventHandler, FC, FunctionComponentElement } from "react";
import classnames from "classnames";
import useMergeState from "../../hooks/useMergeState";
import Checkbox from "./Checkbox";
import CheckboxContext from "./context";
import { CheckboxGroupProps, CheckboxProps } from "./interface";

const CheckboxGroup: FC<CheckboxGroupProps> = (props) => {
  const {
    children,
    defaultValue,
    value,
    onChange,
    disabled = false,
    vertical = false,
  } = props;
  const [stateValue, setStateValue, isControlled] = useMergeState([], {
    defaultValue,
    value,
  });
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const idx = stateValue.indexOf(e.target.value);
    const newValue = (function () {
      if (idx >= 0) {
        stateValue.splice(idx, 1);
      } else {
        stateValue.push(e.target.value);
      }
      return [...stateValue];
    })();
    if (!isControlled) {
      setStateValue(newValue);
    }
    onChange?.(newValue, e);
  };
  const renderChildren = () => {
    return (
      <CheckboxContext.Provider
        value={{ isGroup: true, selectedValue: stateValue }}
      >
        {React.Children.map(children, (child) => {
          const childElement = child as FunctionComponentElement<CheckboxProps>;
          if (childElement.type !== Checkbox) {
            throw new Error(
              "The child element of CheckboxGroup must be Checkbox"
            );
          }
          return React.cloneElement(childElement, {
            value: childElement.props.value,
            onChange: handleChange,
            disabled: childElement.props.disabled || disabled,
          });
        })}
      </CheckboxContext.Provider>
    );
  };
  return (
    <div
      className={classnames("g-checkbox-group", {
        [`g-checkbox-group-vertical`]: vertical,
      })}
    >
      {renderChildren()}
    </div>
  );
};

export default CheckboxGroup;
