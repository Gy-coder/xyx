import { Input } from "@g-ui/components";
import React from "react";

const Demo = () => {
  return (
    <>
      <Input status="error" />
      <br />
      <br />
      <Input status="warning" />
      <br />
      <br />
      <Input status="error" rounded />
      <br />
      <br />
      <Input status="warning" rounded />
    </>
  );
};

export default Demo;
