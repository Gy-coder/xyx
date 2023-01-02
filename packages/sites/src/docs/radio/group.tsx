import { Radio } from "@g-ui/components";

const Demo = () => {
  //   const [value, setValue] = useState("");
  //   const handleChange = (newValue: string) => setValue(newValue);
  return (
    <Radio.Group
      onChange={(value) => {
        console.log(`你选中的是: ${value}`);
      }}
      vertical
    >
      <Radio value="1">1</Radio>
      <Radio value="2">2</Radio>
      <Radio value="3">3</Radio>
      <Radio value="4">4</Radio>
    </Radio.Group>
  );
};

export default Demo;
