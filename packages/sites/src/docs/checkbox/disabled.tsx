import { Checkbox } from "@g-ui/components";
import { useState } from "react";

const Demo = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Checkbox value="1" disabled>
        一个被disabled的Checkbox
      </Checkbox>
      <Checkbox value="1" disabled checked>
        一个被disabled的Checkbox
      </Checkbox>
      <br />
      <Checkbox.Group disabled defaultValue={["bacon"]}>
        <Checkbox value="mutton">羔羊肉</Checkbox>
        <Checkbox value="beef">牛肉</Checkbox>
        <Checkbox value="fried chicken">炸鸡</Checkbox>
        <Checkbox value="bacon">培根</Checkbox>
      </Checkbox.Group>
    </>
  );
};

export default Demo;
