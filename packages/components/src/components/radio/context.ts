import { createContext } from "react";

interface ContextProps {
  isGroup: boolean;
  selectedValue: string | undefined;
}

const RadioContext = createContext<ContextProps>({
  isGroup: false,
  selectedValue: undefined,
});

export default RadioContext;
