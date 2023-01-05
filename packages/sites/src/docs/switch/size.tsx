import { Switch } from "@g-ui/components";
import { useState } from "react";

const Demo = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (newChecked: boolean) => setChecked(newChecked);
  return (
    <>
      <Switch checked={checked} onChange={handleChange} size="small" />
      <br />
      <Switch checked={checked} onChange={handleChange} />
      <br />
      <Switch checked={checked} onChange={handleChange} size="large" />
    </>
  );
};

export default Demo;
