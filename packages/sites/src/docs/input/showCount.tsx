import { Input } from "@g-ui/components";

const Demo = () => {
  return (
    <>
      <Input placeholder="会显示字数" showCount />
      <br />
      <br />
      <Input placeholder="会显示字数 最多20个字" showCount maxLength={20} />
    </>
  );
};

export default Demo;
