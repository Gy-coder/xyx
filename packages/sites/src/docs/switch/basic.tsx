import { Switch } from "@g-ui/components";

const Demo = () => {
  return (
    <>
      <Switch
        onChange={(checked) => console.log(`当前的check状态为: ${checked}`)}
      />
    </>
  );
};

export default Demo;
