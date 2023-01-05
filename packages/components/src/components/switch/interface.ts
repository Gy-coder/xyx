import { CSSProperties } from "react";

export interface SwitchProps {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  style?: CSSProperties;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  size?: "small" | "middle" | "large";
}
