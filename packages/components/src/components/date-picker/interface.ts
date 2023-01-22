import Dayjs from "../../utils/dayjs";

export type valueType = string | number | Date | undefined;
export type modeType = "date" | "month" | "year";

export interface DatePickerProps {
  allowClear?: boolean;
  defaultValue?: valueType;
  value?: valueType;
  onChange?: (newValue?: Date, valueString?: string) => void;
  placeholder?: string;
}

export interface DatePanelProps {
  visibleValue: Dayjs;
  onChangeVisibleValue: (day: Dayjs) => void;
  innerValue?: Dayjs;
  onChangeValue: (newValue?: Date, valueString?: string) => void;
  closePanel: () => void;
  onChangeMode: (newMode: modeType) => void;
}

export interface MonthPanelProps {}
