import React, { FC, HTMLAttributes, ReactElement } from "react";
import classnames from "classnames";

export interface AsideProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[];
}

const Aside: FC<AsideProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classnames("g-layout-aside", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Aside;
