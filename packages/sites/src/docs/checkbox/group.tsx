import { Checkbox } from "@g-ui/components";

const Demo = () => {
  return (
    <>
      <Checkbox.Group
        defaultValue={["beef"]}
        onChange={(value: string[]) => console.log("你选中的内容是:", value)}
      >
        <Checkbox value="mutton">羔羊肉</Checkbox>
        <Checkbox value="beef">牛肉</Checkbox>
        <Checkbox value="fried chicken">炸鸡</Checkbox>
        <Checkbox value="bacon">培根</Checkbox>
      </Checkbox.Group>
      <Checkbox.Group disabled defaultValue={["bacon"]}>
        <Checkbox value="mutton">羔羊肉</Checkbox>
        <Checkbox value="beef">牛肉</Checkbox>
        <Checkbox value="fried chicken">炸鸡</Checkbox>
        <Checkbox value="bacon">培根</Checkbox>
      </Checkbox.Group>
    </>
  );
};

export default Demo;
