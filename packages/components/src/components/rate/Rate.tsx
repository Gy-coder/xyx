import {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useState,
} from "react";
import classnames from "classnames";
import { RateProps } from "./interface";
import useMergeState from "../../hooks/useMergeState";
import "./index.scss";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import RateContext from "./context";
import RateItem from "./RateItem";

const Rate: ForwardRefRenderFunction<any, RateProps> = (props, ref) => {
  const {
    defaultValue,
    value,
    onChange,
    onHoverChange,
    character = <InternalIcon name="icon-star-fill" />,
    disabled = false,
    clearable = false,
    count = 5,
    half = false,
    size,
    className,
    style,
    hint,
  } = props;
  const [stateValue, setStateValue, isControlled] = useMergeState<number>(0, {
    defaultValue,
    value,
  });

  const [hover, setHover] = useState(0);

  const handleChange = useCallback(
    (v: number) => {
      if (disabled) return;
      const newValue = clearable && v === stateValue ? 0 : v;
      if (!isControlled) setStateValue(newValue);
      onChange?.(newValue);
    },
    [stateValue, clearable]
  );

  const handleMouseEnter = (v: number) => {
    if (disabled) return;
    setHover(v);
    onHoverChange?.(v);
  };
  const handleMouseLeave = () => {
    if (disabled) return;
    setHover(0);
  };
  if (hint && hint.length !== count)
    throw new Error("hint.length must be equal with count");
  return (
    <RateContext.Provider
      value={{
        stateValue,
        hover,
        disabled,
        size,
        onChange: handleChange,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      }}
    >
      <div
        className={classnames("g-rate", className, {
          "g-rate-disabled": disabled,
          [`g-rate-${size}`]: size,
        })}
        style={style}
        ref={ref}
      >
        {new Array(count)
          .fill(false)
          .map((_, i) => i + 1)
          .map((item) => {
            return (
              <span className="g-rate-item-wrapper" key={item}>
                {half && <RateItem value={item} character={character} half />}
                <RateItem value={item} character={character} />
              </span>
            );
          })}
        {hint && <span className="g-rate-hint">{hint[stateValue - 1]}</span>}
      </div>
    </RateContext.Provider>
  );
};

export default forwardRef(Rate);
