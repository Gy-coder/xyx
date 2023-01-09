import { Input } from "@g-ui/components";
import { FcBusinessman, FcTwoSmartphones } from "react-icons/fc";

const Demo = () => {
  return (
    <>
      <Input prefix={<FcBusinessman />} />
      <br />
      <br />
      <Input placeholder="输入商品价格" suffix={<>元</>} />
      <br />
      <br />
      <Input suffix={<FcTwoSmartphones />} prefix={<FcBusinessman />} />
    </>
  );
};

export default Demo;
