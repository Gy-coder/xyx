import { Input } from "@g-ui/components";

const Demo = () => {
  return (
    <Input.TextArea
      placeholder="请输入密码"
      clearable
      showCount
      maxLength={100}
    />
  );
};

export default Demo;
