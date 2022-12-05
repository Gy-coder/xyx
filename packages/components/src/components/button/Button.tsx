import { FC, ButtonHTMLAttributes } from "react";
import classnames from "classnames";
import "./index.scss";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  size?: "small" | "middle" | "large";
  type?: "default" | "primary" | "success" | "error" | "warning";
  attr_type?: "button" | "submit" | "reset";
  circle?: boolean;
  rounded?: boolean;
  text?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    size = "middle",
    type = "default",
    attr_type = "button",
    className,
    disabled = false,
    text = false,
    rounded = false,
    circle = false,
    ...rest
  } = props;
  const classes = classnames("g-button", className, {
    [`g-button-${size}`]: size,
    [`g-button-${type}`]: type,
    [`g-button-disabled`]: disabled,
    [`g-button-rounded`]: rounded,
    [`g-button-circle`]: circle,
  });
  return (
    <button {...rest} type={attr_type} className={classes}>
      {/* <span className="g-button-loading"></span> */}
      <span>{children}</span>
    </button>
  );
};

export default Button;
