import InternalRadio from "./Radio";
import RadioButton from "./RadioButton";
import RadioGroup from "./RadioGroup";

type InternalRadioType = typeof InternalRadio;

type RadioType = InternalRadioType & {
  Group: typeof RadioGroup;
  Button: typeof RadioButton;
};

const Radio = InternalRadio as RadioType;

Radio.Group = RadioGroup;
Radio.Button = RadioButton;

export type { RadioGroupProps, RadioProps } from "./interface";
export default Radio;
