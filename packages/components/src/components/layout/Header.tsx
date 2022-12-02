import React, { FC, HTMLAttributes, ReactElement, ReactNode } from "react";
import classnames from "classnames";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[] | ReactNode;
}

const Header: FC<HeaderProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classnames("g-layout-header", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Header;
