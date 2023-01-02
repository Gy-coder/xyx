import InternalRadio from "./Radio";
import RadioGroup from "./RadioGroup";

type InternalRadioType = typeof InternalRadio;

type RadioType = InternalRadioType & {
  Group: typeof RadioGroup;
};

const Radio = InternalRadio as RadioType;

Radio.Group = RadioGroup;

export default Radio;
