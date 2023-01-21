import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode,
  TextareaHTMLAttributes,
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
  type?: "text" | "password";
  defaultValue?: string;
  value?: string;
  onChange?: (value: string, e?: ChangeEvent<HTMLInputElement>) => void;
  clearable?: boolean;
  size?: "small" | "middle" | "large";
  prefix?: ReactNode;
  suffix?: ReactNode;
  showCount?: boolean;
  bordered?: boolean;
  status?: "error" | "warning";
  rounded?: boolean;
  addOnBefore?: ReactNode;
  addOnAfter?: ReactNode;
  onPressEnter?: (value: string, e?: KeyboardEvent<HTMLElement>) => void;
}

export interface InputPasswordProps extends InputProps {
  visibility?: boolean;
}

export interface TextAreaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
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
  onChange?: (value: string, e?: ChangeEvent<HTMLTextAreaElement>) => void;
  onPressEnter?: (value: string, e?: KeyboardEvent<HTMLElement>) => void;
  clearable?: boolean;
  showCount?: boolean;
}
