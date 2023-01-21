import { createContext } from "react";
import { ContextType } from "./interface";

const RateContext = createContext<ContextType>({
  stateValue: 0,
  hover: 0,
  disabled: false,
});

export default RateContext;
