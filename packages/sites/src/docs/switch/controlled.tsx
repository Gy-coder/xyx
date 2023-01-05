import { Switch } from "@g-ui/components";
import { useState } from "react";

const Demo = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (newChecked: boolean) => setChecked(newChecked);
  return (
    <>
      开关是否打开: {String(checked)}
      <br />
      <Switch checked={checked} onChange={handleChange} />
    </>
  );
};

export default Demo;
