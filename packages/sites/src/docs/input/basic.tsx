import { Input } from "@g-ui/components";

const Demo = () => {
  return (
    <>
      <Input defaultValue="123" placeholder="请输入文字" />
      <br />
      <Input defaultValue="123" size="large" />
      <br />
      <Input defaultValue="123" size="small" />
    </>
  );
};

export default Demo;
