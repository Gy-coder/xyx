import { InputHTMLAttributes } from "react";

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "defalutValue"
  > {
  value: string;
}
