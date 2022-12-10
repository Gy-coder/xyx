import { Button, ButtonGroup } from "@g-ui/components";

const Demo = () => {
  return (
    <>
      <div>
        <ButtonGroup>
          <Button type="primary">Button</Button>
          <Button type="success">Button</Button>
          <Button type="warning">Button</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup>
          <Button rounded>Button</Button>
          <Button rounded>Button</Button>
          <Button rounded>Button</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default Demo;
