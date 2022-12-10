import React, { FC, HTMLAttributes } from "react";
import classnames from "classnames";
import Button from "../button";
import type { ButtonProps } from "../button";
import "./index.scss";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {}

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const { children, ...rest } = props;
  const classes = classnames("g-button-group");
  React.Children.map(children, (child) => {
    const childElement = child as React.FunctionComponentElement<ButtonProps>;
    if (childElement.type !== Button)
      throw new Error("ButtonGroup的子元素必须是Button");
  });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default ButtonGroup;
