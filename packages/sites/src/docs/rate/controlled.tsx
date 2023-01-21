import { Rate } from "@g-ui/components";
import { useState } from "react";

const Demo = () => {
  const [v, setV] = useState(0);
  const handleChange = (number: number) => setV(number);
  return (
    <>
      您选中的值是: {v}
      <br />
      <br />
      <Rate
        value={v}
        onChange={handleChange}
        clearable
        hint={["terrible", "bad", "normal", "good", "wonderful"]}
      />
    </>
  );
};

export default Demo;
