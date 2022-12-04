import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Highlight, { defaultProps } from "prism-react-renderer";
import { v4 as uuidv4 } from "uuid";
import vs from "prism-react-renderer/themes/vsLight";
import { BsCode } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";

const DemoBlock = ({ children }: any) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="border border-solid border-gray-300 rounded mt-4 inline-block w-full min-w-[200px]">
      {children.map((child: any, index: number) => {
        if (child.type === "pre") {
          const sourceCode = child.props.children.props.children;
          return (
            <div
              key={uuidv4()}
              className="border-t border-solid border-gray-300"
            >
              <div className="py-2 px-6 flex justify-center items-center">
                <CopyToClipboard
                  text={sourceCode}
                  onCopy={() => console.log("copy")}
                >
                  <AiOutlineCopy className="mr-2 cursor-pointer" />
                </CopyToClipboard>
                <BsCode
                  onClick={() => setVisible(!visible)}
                  className="mr-2 cursor-pointer"
                />
              </div>
              {visible && (
                <div className="border-t border-solid border-t-gray-300">
                  <Highlight
                    {...defaultProps}
                    code={sourceCode}
                    theme={vs}
                    language="jsx"
                  >
                    {({
                      className,
                      style,
                      tokens,
                      getLineProps,
                      getTokenProps,
                    }) => (
                      <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                          <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                              <span {...getTokenProps({ token, key })} />
                            ))}
                          </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
                </div>
              )}
            </div>
          );
        }
        return (
          <div className="m-6" key={uuidv4()}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default DemoBlock;
