import { Checkbox } from "@g-ui/components";
import { useState } from "react";

const Demo = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      受控的Checkbox是否被选中: {String(checked)}
      <br />
      <Checkbox value="1">一个小Checkbox</Checkbox>
      <Checkbox value="1" indeterminate>
        一个小Checkbox
      </Checkbox>
      <Checkbox
        value="1"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      >
        一个受控的Checkbox
      </Checkbox>
      <Checkbox value="1" disabled>
        一个被disabled的Checkbox
      </Checkbox>
      <Checkbox value="1" disabled checked>
        一个被disabled的Checkbox
      </Checkbox>
    </>
  );
};

export default Demo;
