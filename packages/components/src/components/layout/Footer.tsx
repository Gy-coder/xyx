import React, { FC, HTMLAttributes, ReactElement } from "react";
import classnames from "classnames";

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[];
}

const Footer: FC<FooterProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classnames("g-layout-footer", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Footer;
