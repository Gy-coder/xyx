import { ChangeEvent, InputHTMLAttributes, PropsWithChildren } from "react";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

export interface RadioGroupProps extends PropsWithChildren {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
  vertical?: boolean;
  disabled?: boolean;
}
