import { useCallback, useState } from "react";

export default function useVisible(initVisible?: boolean) {
    const [visible, setVisible] = useState<boolean>(initVisible || false)
    const open = useCallback(() => setVisible(true), [])
    const close = useCallback(() => setVisible(false), [])
    const toggle = () => setVisible(!visible)
    return { visible, open, close, toggle }
}