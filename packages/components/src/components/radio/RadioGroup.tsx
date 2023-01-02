import classNames from "classnames";
import React, { ChangeEventHandler, FC } from "react";
import useMergeState from "../../hooks/useMergeState";
import RadioContext from "./context";
import Radio from "./Radio";
import "./index.scss";
import { RadioProps, RadioGroupProps } from "./interface";
import RadioButton from "./RadioButton";

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const {
    defaultValue,
    value,
    onChange,
    children,
    vertical = false,
    disabled = false,
  } = props;
  const [stateValue, setStateValue, isControlled] = useMergeState("", {
    defaultValue,
    value,
  });
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!isControlled) {
      setStateValue(e.target.value);
    }
    onChange?.(e.target.value, e);
  };
  const classes = classNames("g-radio-group", {
    [`g-radio-group-vertical`]: vertical,
  });
  const renderChildren = () => {
    return (
      <RadioContext.Provider
        value={{ isGroup: true, selectedValue: stateValue }}
      >
        {React.Children.map(children, (child) => {
          const childElement =
            child as React.FunctionComponentElement<RadioProps>;
          if (
            childElement.type !== Radio &&
            childElement.type !== RadioButton
          ) {
            throw new Error(
              "The child element of RadioGroup must be Radio or RadioGroup"
            );
          }
          return React.cloneElement(childElement, {
            value: childElement.props.value,
            onChange: handleChange,
            disabled: childElement.props.disabled || disabled,
          });
        })}
      </RadioContext.Provider>
    );
  };
  return <div className={classes}>{renderChildren()}</div>;
};

export default RadioGroup;
