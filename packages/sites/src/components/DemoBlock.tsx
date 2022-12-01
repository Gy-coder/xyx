import { useState } from "react";
import "./DemoBlock.css";

const DemoBlock = ({ children }: any) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="demo-block">
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

/*
<Highlight {...defaultProps} code={children} language='javascript'>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
*/
