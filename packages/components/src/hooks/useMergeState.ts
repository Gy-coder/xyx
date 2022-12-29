import React, { useState } from "react";
import { isUndefined } from "../utils/is";

interface Props<T> {
  defaultValue?: T;
  value?: T;
}

export default function useMergeState<T>(
  defaultStateValue: T,
  props?: Props<T>
): [T, React.Dispatch<T>, boolean] {
  const { defaultValue, value } = props || {};
  const isControlled = !isUndefined(value);
  const [innerValue, setInnerValue] = useState<T>(() => {
    if (isControlled) return value;
    if (!isUndefined(defaultValue)) return defaultValue;
    return defaultStateValue;
  });
  const stateValue = (isControlled ? value : innerValue) as T;
  return [stateValue, setInnerValue, isControlled];
}
