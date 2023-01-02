import classNames from "classnames";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  PropsWithChildren,
} from "react";
import useMergeState from "../../hooks/useMergeState";
import RadioContext from "./context";
import Radio, { RadioProps } from "./Radio";
import "./index.scss";

export interface RadioGroupProps extends PropsWithChildren {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
  vertical?: boolean;
  disabled?: boolean;
}

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
          if (childElement.type !== Radio) throw new Error();
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
