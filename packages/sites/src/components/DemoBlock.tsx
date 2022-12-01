import React, { useState } from "react";
import "./DemoBlock.css";

const DemoBlock = ({ children }: any) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="demo-block prose">
      {children.map((child: any) => {
        if (child.type === "pre") {
          return (
            <div key={child.key}>
              <div
                className="demo-block-button"
                onClick={() => setVisible(!visible)}
              >
                {!visible ? "显示代码" : "收起代码"}
              </div>
              {visible && child}
            </div>
          );
        }
        return child;
      })}
    </div>
  );
};

export default DemoBlock;
