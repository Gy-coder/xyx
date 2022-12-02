import React, { FC, ReactElement, HTMLAttributes } from "react";
import classnames from "classnames";
import Aside from "./Aside";
import "./index.scss";

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[];
}

const Layout: FC<LayoutProps> = (props) => {
  const { children, className, ...rest } = props;
  if (!children)
    throw new Error(
      "children must be haven in Layout,Please add Lauout.Content or other Layout Component"
    );
  const hasAside =
    "length" in children &&
    children.reduce((result, node) => {
      return result || node.type === Aside;
    }, false);
  const classes = classnames("g-layout", className, {
    "g-layout-hasAside": hasAside,
  });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Layout;
