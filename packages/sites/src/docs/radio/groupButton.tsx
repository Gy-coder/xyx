import { Radio } from "@g-ui/components";
import { useState } from "react";

const Demo = () => {
  const [value, setValue] = useState("");
  const handleChange = (newValue: string) => setValue(newValue);
  return (
    <>
      你选中的是: {value}
      <Radio.Group value={value} onChange={handleChange}>
        <Radio.Button value="1">first child</Radio.Button>
        <Radio.Button value="2">second child</Radio.Button>
        <Radio.Button value="3">third child</Radio.Button>
        <Radio.Button value="4">fourth child</Radio.Button>
      </Radio.Group>
      <br />
      <Radio.Group defaultValue="3" disabled>
        <Radio.Button value="1">first child</Radio.Button>
        <Radio.Button value="2">second child</Radio.Button>
        <Radio.Button value="3">third child</Radio.Button>
        <Radio.Button value="4">fourth child</Radio.Button>
      </Radio.Group>
    </>
  );
};

export default Demo;
