import { useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { Input } from "@g-ui/components";

const Demo = () => {
  const [v, setV] = useState("");
  const handleChange = (value: string) => {
    setV(value);
  };
  return (
    <>
      您输入的值为: {v}
      <br />
      <Input placeholder="place input" value={v} onChange={handleChange} />
    </>
  );
};

export default Demo;
