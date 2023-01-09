import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEventHandler,
  ReactNode,
} from "react";

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "defaultValue"
    | "value"
    | "type"
    | "onChange"
    | "defaultChecked"
    | "checked"
    | "size"
    | "prefix"
  > {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string, e?: ChangeEvent<HTMLInputElement>) => void;
  clearable?: boolean;
  size?: "small" | "middle" | "large";
  prefix?: ReactNode;
  suffix?: ReactNode;
  showCount?: boolean;
  onPressEnter?: KeyboardEventHandler;
  bordered?: boolean;
  status?: "error" | "warning";
  rounded?: boolean;
  addOnBefore?: ReactNode;
  addOnAfter?: ReactNode;
}
