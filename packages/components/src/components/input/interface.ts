import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "onChange" | "defaultChecked" | "checked" | "size" | "prefix"
  > {
  type?: "text" | "password" | "textarea";
  error?: boolean;
  onChange?: (value: string, e?: ChangeEvent<HTMLInputElement>) => void;
  clearable?: boolean;
  size?: "small" | "middle" | "large";
  prefix?: ReactNode;
  suffix?: ReactNode;
}
