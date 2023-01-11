import {
  FocusEvent,
  FocusEventHandler,
  MouseEventHandler,
  useState,
} from "react";

type Options = {
  onFocus?: FocusEventHandler<HTMLElement>;
  onBlur?: FocusEventHandler<HTMLElement>;
  disabled?: boolean;
};

export default function useHoverFocus(options: Options) {
  const { onFocus, onBlur, disabled = false } = options;
  const [focus, setFocus] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  const handleFocus: FocusEventHandler<HTMLElement> = (e) => {
    if (disabled) return;
    setFocus(true);
    setHover(false);
    onFocus?.(e);
  };

  const handleBlur: FocusEventHandler<HTMLElement> = (e) => {
    if (disabled) return;
    setFocus(false);
    setHover(false);
    onBlur?.(e);
  };
  const handleMouseEnter: MouseEventHandler<HTMLElement> = (e) => {
    if (disabled) return;
    setHover(true);
  };
  const handleMouseLeave: MouseEventHandler<HTMLElement> = (e) => {
    if (disabled) return;
    setHover(false);
  };
  return {
    focus: focus && !disabled,
    hover: hover && !disabled,
    handleFocus,
    handleBlur,
    handleMouseEnter,
    handleMouseLeave,
  };
}
