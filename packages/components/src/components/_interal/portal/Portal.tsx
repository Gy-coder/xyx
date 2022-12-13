import React, { Children, FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const Portal: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return createPortal(children, document.body);
};

export default Portal;
