import { Input } from "@g-ui/components";
import { FcBusinessman, FcTwoSmartphones } from "react-icons/fc";

const Demo = () => {
  return (
    <>
      <Input disabled />
      <br />
      <br />
      <Input placeholder="123" disabled />
      <br />
      <br />
      <Input defaultValue="123" disabled />
      <br />
      <br />
      <Input rounded disabled />
      <br />
      <br />
      <Input
        suffix={<FcTwoSmartphones />}
        prefix={<FcBusinessman />}
        disabled
      />
      <br />
      <br />
      <Input placeholder="borderless and disabled" bordered={false} disabled />
    </>
  );
};

export default Demo;
