import { useState } from "react";
import { Input } from "@g-ui/components";

const Demo = () => {
  const [v, setV] = useState("");
  return (
    <>
      {v}
      <Input
        value={v}
        onChange={(value) => {
          console.log("run", value);
          setV(value);
        }}
      />
    </>
  );
};

export default Demo;
