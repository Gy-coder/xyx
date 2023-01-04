import { InputHTMLAttributes, PropsWithChildren } from "react";

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "defalutValue"
  > {
  value?: string;
  indeterminate?: boolean;
}

export interface CheckboxGroupProps extends PropsWithChildren {
  defaultValue?: string[];
  value?: string[];
  onChange?: (
    value: string[],
    e: InputHTMLAttributes<HTMLInputElement>
  ) => void;
  vertical?: boolean;
  disabled?: boolean;
}
