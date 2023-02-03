import { RefObject, useCallback, useLayoutEffect, useState } from "react";

export default function useClientRect(ref: RefObject<HTMLElement | null>, visible?: boolean) {
    const [clientRect, setClientRect] = useState<DOMRect | null>(null)
    const updateClientRect = useCallback(() => setClientRect(ref.current!.getBoundingClientRect()), []);
    useLayoutEffect(() => {
        if (ref.current) {
            updateClientRect();
        }
    }, [visible]);
    return [clientRect, updateClientRect] as [typeof clientRect, typeof updateClientRect];
}