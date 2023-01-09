import React, { FC, SVGAttributes } from "react";
import classnames from "classnames";

export interface InternalIconProps extends SVGAttributes<SVGElement> {
  name?: string;
}

const InternalIcon: FC<InternalIconProps> = (props) => {
  const { name, className, style, ...rest } = props;
  return (
    <svg
      className={classnames("icon", className)}
      {...rest}
      style={{ width: "1em", height: "1em", fill: "gray", ...style }}
    >
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

export default InternalIcon;
