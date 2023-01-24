import { RefObject, useLayoutEffect } from "react";

export default function useClickOutSide(
  ref: RefObject<HTMLElement>,
  callback: Function
) {
  useLayoutEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as HTMLElement)) {
        return;
      } else {
        callback(e);
      }
    };
    document.addEventListener("click", listener,true);
    return () => {
      document.removeEventListener("click", listener,true);
    };
  }, [ref, callback]);
}
