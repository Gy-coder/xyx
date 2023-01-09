import { useState } from "react";
import { Input } from "@g-ui/components";

const Demo = () => {
  const [v, setV] = useState("");
  const handleChange = (newValue: string) => setV(newValue);
  return (
    <>
      <Input
        value={v}
        onChange={handleChange}
        placeholder="请输入值，这个值可以被清除"
        clearable
      />
      <br />
      <br />
      <Input placeholder="请输入值，这个值可以被清除" clearable />
      <br />
      <br />
      <Input defaultValue="disabled下不可以清除" clearable disabled />
    </>
  );
};

export default Demo;
