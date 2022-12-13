import React, { FC, ButtonHTMLAttributes } from "react";
import classnames from "classnames";
import "./index.scss";
import TransistionInExpand from "../_interal/transition_in_expand/TransitionInExpand";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  size?: "small" | "middle" | "large";
  type?: "default" | "primary" | "success" | "error" | "warning";
  attr_type?: "button" | "submit" | "reset";
  circle?: boolean;
  rounded?: boolean;
  loading?: boolean;
  dashed?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    size = "middle",
    type = "default",
    attr_type = "button",
    className,
    disabled = false,
    rounded = false,
    circle = false,
    loading = false,
    dashed = false,
    onClick,
    ...rest
  } = props;
  const classes = classnames("g-button", className, {
    [`g-button-${size}`]: size,
    [`g-button-${type}`]: type,
    [`g-button-disabled`]: disabled,
    [`g-button-rounded`]: rounded,
    [`g-button-circle`]: circle,
    [`g-button-loading`]: loading,
    [`g-button-dashed`]: dashed,
  });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled || loading) return;
    onClick?.(e);
  };
  return (
    <button
      {...rest}
      type={attr_type}
      className={classes}
      onClick={handleClick}
    >
      <TransistionInExpand in={loading}>
        <span className="g-button-loading-icon" />
      </TransistionInExpand>
      <span className="g-button-content">{children}</span>
    </button>
  );
};

export default Button;
