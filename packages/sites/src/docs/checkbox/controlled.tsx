import { Checkbox } from "@g-ui/components";
import { useState } from "react";

const Demo = () => {
  const [value, setValue] = useState<string[]>([]);
  const handleChange = (newValue: string[]) => setValue(newValue);
  return (
    <>
      你选中的内容是: {String(value)}
      <Checkbox.Group value={value} onChange={handleChange}>
        <Checkbox value="mutton">羔羊肉</Checkbox>
        <Checkbox value="beef">牛肉</Checkbox>
        <Checkbox value="fried chicken">炸鸡</Checkbox>
        <Checkbox value="bacon">培根</Checkbox>
      </Checkbox.Group>
    </>
  );
};

export default Demo;
