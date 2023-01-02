import React, { useState } from "react";
import { Radio } from "@g-ui/components";

const Demo = () => {
  const [value, setValue] = useState("");
  const handleChange = (newValue: string) => setValue(newValue);
  return (
    <>
      你选中的是:{value}
      <Radio.Group value={value} onChange={handleChange}>
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
        <Radio value="4">4</Radio>
      </Radio.Group>
    </>
  );
};

export default Demo;
