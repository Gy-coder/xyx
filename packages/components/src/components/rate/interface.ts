import { CSSProperties, FC, ReactNode } from "react";

export interface RateProps {
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  onHoverChange?: (value: number) => void;
  count?: number;
  disabled?: boolean;
  character?: ReactNode;
  className?: string;
  style?: CSSProperties;
  clearable?: boolean;
  half?: boolean;
  hint?: string[];
  size?: "small" | "large";
}

export interface RateItemProps
  extends Omit<RateProps, "defaultValue" | "count" | "hint"> {
  value: number;
  character?: ReactNode;
  half?: boolean;
}

export interface ContextType {
  stateValue: number;
  hover: number;
  onChange?: (value: number) => void;
  onMouseEnter?: (value: number) => void;
  onMouseLeave?: () => void;
  disabled: boolean;
  size?: "small" | "large";
}
