import React, { FC } from "react";

export interface InternalIconProps {}

const InternalIcon: FC<InternalIconProps> = (props) => {
  return (
    <svg style={{ width: "100%", height: "100%", fill: "gray" }}>
      <use xlinkHref="#icon-clear"></use>
    </svg>
  );
};

export default InternalIcon;
