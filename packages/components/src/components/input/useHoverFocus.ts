import {
  FocusEvent,
  FocusEventHandler,
  MouseEventHandler,
  useState,
} from "react";

type Options = {
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

export default function useHoverFocus(options: Options) {
  const { onFocus, onBlur } = options;
  const [focus, setFocus] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    setFocus(true);
    setHover(false);
    onFocus?.(e);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    setFocus(false);
    setHover(false);
    onBlur?.(e);
  };
  const handleMouseEnter: MouseEventHandler<HTMLInputElement> = (e) => {
    setHover(true);
  };
  const handleMouseLeave: MouseEventHandler<HTMLInputElement> = (e) => {
    setHover(false);
  };
  return {
    focus,
    hover,
    handleFocus,
    handleBlur,
    handleMouseEnter,
    handleMouseLeave,
  };
}
