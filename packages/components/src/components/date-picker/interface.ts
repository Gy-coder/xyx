import Dayjs from "../../utils/dayjs";

export type valueType = string | number | Date | undefined;
export type modeType = "date" | "month" | "year" | "centrey";

export interface DatePickerProps {
  allowClear?: boolean;
  defaultValue?: valueType;
  value?: valueType;
  onChange?: (newValue?: Date, valueString?: string) => void;
  placeholder?: string;
  format?: string
  picker?: Omit<modeType, 'centrey'>
  status?: "error" | "warning"
  size?: "small" | "middle" | "large";
  className?: string
}

export interface DatePanelProps {
  visibleValue: Dayjs;
  onChangeVisibleValue: (day: Dayjs) => void;
  innerValue?: Dayjs;
  onChangeValue: (newValue?: Date, valueString?: string) => void;
  closePanel: () => void;
  onChangeMode: (newMode: modeType) => void;
  format: string
}

export interface PanelProps {
  innerValue?: Dayjs;
  visibleValue: Dayjs;
  onChangeVisibleValue: (day: Dayjs) => void;
  onChangeMode: (newMode: modeType) => void;
  picker?: Omit<modeType, 'centrey'>
  format?: string
  onChangeValue?: (newValue?: Date, valueString?: string) => void;
  closePanel?: () => void;
}

