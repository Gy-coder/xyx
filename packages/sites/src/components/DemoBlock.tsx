import { useState } from "react";

const DemoBlock = ({ children }: any) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="border border-solid border-gray-300 rounded mt-4 inline-block w-full min-w-[200px]">
      {children.map((child: any) => {
        if (child.type === "pre") {
          return (
            <div
              key={child.key}
              className="border-t border-solid border-gray-300"
            >
              <div
                onClick={() => setVisible(!visible)}
                className="py-2 px-6 flex justify-center items-center cursor-pointer"
              >
                {!visible ? "显示代码" : "收起代码"}
              </div>
              {visible && (
                <div className="px-1 border-t border-solid border-t-gray-300">
                  {child}
                </div>
              )}
            </div>
          );
        }
        return <div className="pt-1 pb-2 px-6">{child}</div>;
      })}
    </div>
  );
};

export default DemoBlock;
