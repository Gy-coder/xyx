import { useMemo } from "react";
import useMergeState from "../../hooks/useMergeState";

type Options = {
  defaultCurrent?: number;
  current?: number;
  total: number;
  pageSize: number;
  onChange?: (newCurrent: number) => void;
};

export default function usePager(options: Options) {
  const { defaultCurrent, current, total, pageSize, onChange } = options;
  const [pageIndex, _setPageIndex, isControlled] = useMergeState(1, {
    defaultValue: defaultCurrent,
    value: current,
  });
  const totalPage = useMemo(
    () => Math.ceil(total / pageSize),
    [total, pageSize]
  );
  const setPageIndex = (newCurrent: number) => {
    if (!isControlled) _setPageIndex(newCurrent);
    onChange?.(newCurrent);
  };
  const jumpToPage = (newCurrent: number) => {
    if (newCurrent < 1) setPageIndex(1);
    else if (newCurrent > totalPage) setPageIndex(totalPage);
    else setPageIndex(newCurrent);
  };
  const prevPage = () => {
    jumpToPage(pageIndex - 1);
  };
  const nextPage = () => {
    jumpToPage(pageIndex + 1);
  };
  return { pageIndex, jumpToPage, nextPage, prevPage, totalPage };
}
