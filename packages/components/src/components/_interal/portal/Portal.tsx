import React, { FC, ReactNode, ReactElement } from "react";
import { createPortal } from "react-dom";

type Props = {
  children?: ReactNode | ReactElement
}

const Portal: FC<Props> = (props) => {
  const { children } = props;
  return createPortal(children, document.body);
};

export default Portal;
