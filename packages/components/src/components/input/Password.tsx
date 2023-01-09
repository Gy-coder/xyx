import React, { forwardRef, ForwardRefRenderFunction, useState } from "react";
import omit from "../../utils/omit";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import Input from "./Input";
import { InputPasswordProps } from "./interface";

const Password: ForwardRefRenderFunction<any, InputPasswordProps> = (
  props,
  ref
) => {
  const { visibility = true, suffix, ...rest } = props;
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const handleClickIcon = () => setIsPassword(!isPassword);
  const suffixIcon = visibility ? (
    <span className="g-input-visibility-icon" onClick={handleClickIcon}>
      {<InternalIcon name={isPassword ? "icon-eye" : "icon-eye-close"} />}
      {suffix}
    </span>
  ) : (
    suffix
  );
  return (
    <Input
      ref={ref}
      type={isPassword ? "password" : "text"}
      suffix={suffixIcon}
      {...omit({ ...rest }, ["type", "suffix"])}
    />
  );
};

export default forwardRef(Password);
