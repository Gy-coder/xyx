import { Input } from "@g-ui/components";
import { FcBusinessman, FcCompactCamera } from "react-icons/fc";

const prefix = <FcBusinessman />;
const suffix = <FcCompactCamera />;

const Demo = () => {
  return (
    <>
      <Input
        placeholder="请输入文字"
        prefix={prefix}
        suffix={suffix}
        maxLength={20}
        showCount
      />
      <br />
      <Input
        defaultValue="123"
        size="large"
        prefix={prefix}
        suffix={suffix}
        maxLength={20}
        showCount
      />
      <br />
      <Input
        defaultValue="123"
        size="small"
        prefix={prefix}
        suffix={suffix}
        maxLength={20}
        showCount
      />
    </>
  );
};

export default Demo;
