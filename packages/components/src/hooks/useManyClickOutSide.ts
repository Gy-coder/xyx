import { RefObject, useLayoutEffect } from "react";

export default function useManyClickOutSide(
    refs: RefObject<HTMLElement>[],
    callback: Function
) {
    useLayoutEffect(() => {
        const listener = (e: MouseEvent) => {
            let isContainInRefs = false
            refs.forEach(ref => {
                if (!ref.current || ref.current.contains(e.target as HTMLElement)) {
                    isContainInRefs = true
                    return
                }
            })
            if (!isContainInRefs) {
                callback(e)
            }
        };
        document.addEventListener("click", listener, true);
        return () => {
            document.removeEventListener("click", listener, true);
        };
    }, [refs, callback]);
}
