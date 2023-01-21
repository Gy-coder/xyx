import React, { FC, useContext } from "react";
import classnames from "classnames";
import { RateItemProps } from "./interface";
import RateContext from "./context";

const RateItem: FC<RateItemProps> = (props) => {
  const { value, character, half } = props;
  const {
    stateValue,
    onChange,
    onMouseEnter,
    onMouseLeave,
    disabled,
    hover,
    size,
  } = useContext(RateContext);
  const innerValue = half ? value - 0.5 : value;
  const handleChange = (v: number) => onChange?.(v);
  const handleMouseEnter = (v: number) => onMouseEnter?.(v);
  const handleMouseLeave = () => onMouseLeave?.();
  return (
    <span
      className={classnames("g-rate-item", {
        "g-rate-item-active":
          hover !== 0 ? innerValue <= hover : innerValue <= stateValue,
        "g-rate-item-hover": innerValue === hover,
        "g-rate-item-disabled": disabled,
        "g-rate-item-half": half,
        [`g-rate-item-${size}`]: size,
      })}
      onClick={() => handleChange(innerValue)}
      onMouseEnter={() => handleMouseEnter(innerValue)}
      onMouseLeave={() => handleMouseLeave()}
      key={innerValue}
      tabIndex={0}
    >
      {character}
    </span>
  );
};

export default RateItem;
