import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

export default Button;
