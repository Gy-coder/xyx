import { createContext, useContext } from "react";

interface ContextType {
  isGroup: boolean;
  selectedValue: string[];
}

const CheckboxContext = createContext<ContextType>({
  isGroup: false,
  selectedValue: [],
});

export default CheckboxContext;
