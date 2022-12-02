import { FC, ButtonHTMLAttributes } from "react";
import "./index.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <button {...rest} className="g-button">
      {children}
    </button>
  );
};

export default Button;
