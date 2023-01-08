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
        suffix={<>元</>}
        maxLength={20}
        showCount
        status="error"
        rounded
        width={200}
        disabled
      />
      <br />
      <Input
        defaultValue="123"
        size="large"
        prefix={prefix}
        suffix={suffix}
        maxLength={20}
        showCount
        status="warning"
        rounded
      />
      <br />
      <Input
        defaultValue="123"
        size="small"
        prefix={prefix}
        suffix={suffix}
        maxLength={20}
        showCount
        rounded
        clearable
      />
      <Input
        bordered={false}
        placeholder="borderless input"
        size="small"
        prefix={prefix}
        suffix={suffix}
        showCount
      />
    </>
  );
};

export default Demo;
