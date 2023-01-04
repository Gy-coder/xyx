import InternalCheckbox from "./Checkbox";
import CheckboxGroup from "./CheckboxGroup";

type InternalCheckboxType = typeof InternalCheckbox;

type CheckboxType = InternalCheckboxType & {
  Group: typeof CheckboxGroup;
};

const Checkbox = InternalCheckbox as CheckboxType;
Checkbox.Group = CheckboxGroup;

export type { CheckboxGroupProps, CheckboxProps } from "./interface";
export default Checkbox;
