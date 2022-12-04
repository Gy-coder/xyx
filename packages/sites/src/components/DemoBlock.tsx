import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsLight from "prism-react-renderer/themes/vsLight";

const DemoBlock = ({ children }: any) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="border border-solid border-gray-300 rounded mt-4 inline-block w-full min-w-[200px]">
      {children.map((child: any) => {
        if (child.type === "pre") {
          const sourceCode = child.props.children.props.children;
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
                {visible && (
                  <CopyToClipboard text={sourceCode}>
                    <button>Copy to clipboard with button</button>
                  </CopyToClipboard>
                )}
              </div>
              {visible && (
                <div className="border-t border-solid border-t-gray-300">
                  <Highlight
                    {...defaultProps}
                    code={sourceCode}
                    theme={vsLight}
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
        return <div className="pt-1 pb-2 px-6">{child}</div>;
      })}
    </div>
  );
};

export default DemoBlock;
