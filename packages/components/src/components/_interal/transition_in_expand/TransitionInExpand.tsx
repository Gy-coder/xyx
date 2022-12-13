import React, { FC, PropsWithChildren, useRef } from "react";
import { Transition, SwitchTransition } from "react-transition-group";
import "./index.scss";

type Props = {
  in: boolean;
} & PropsWithChildren;
const TransistionInExpand: FC<Props> = (props) => {
  const { children } = props;

  const onExit = (node: HTMLElement) => {
    node.style.maxWidth = `${node.offsetWidth}px`;
    void node.offsetWidth;
  };
  const onExiting = (node: HTMLElement) => {
    node.style.maxWidth = "0";
    void node.offsetWidth;
  };
  const onExited = (node: HTMLElement) => {
    node.style.maxWidth = "";
  };
  const onEntering = (node: HTMLElement) => {
    const memorizedWidth = node.offsetWidth;
    node.style.maxWidth = "0";
    void node.offsetWidth;
    node.style.transition = "";
    node.style.maxWidth = `${memorizedWidth}px`;
  };
  const onEntered = (node: HTMLElement) => {
    node.style.maxWidth = "";
  };
  return (
    <Transition
      in={props.in}
      unmountOnExit
      timeout={300}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    >
      <div className="g-transition-in-expand-wrapper">{children}</div>
    </Transition>
  );
};

export default TransistionInExpand;
