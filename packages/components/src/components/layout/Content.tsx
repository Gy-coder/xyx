import React, { FC, HTMLAttributes, ReactElement } from "react";
import classnames from "classnames";

export interface ContentProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[];
}

const Content: FC<ContentProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classnames("g-layout-content", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Content;
