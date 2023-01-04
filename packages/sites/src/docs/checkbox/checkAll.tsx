import { Checkbox } from "@g-ui/components";
import { ChangeEvent, useState } from "react";

const options = [
  { value: "mutton", label: "羔羊肉" },
  { value: "beef", label: "牛肉" },
  { value: "fired chicken", label: "炸鸡" },
];

const Demo = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState(false);
  const onChange = (list: string[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < options.length);
    setCheckAll(list.length === options.length);
  };

  const onCheckAllChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedList(
      e.target.checked ? options.map((option) => option.value) : []
    );
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      你选中的内容是: {String(checkedList)}
      <br />
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        全选
      </Checkbox>
      <br />
      <Checkbox.Group value={checkedList} onChange={onChange} vertical>
        {options.map((option) => (
          <Checkbox key={option.value} value={option.value}>
            {option.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </>
  );
};

export default Demo;
