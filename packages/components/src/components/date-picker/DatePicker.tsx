import {
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import classnames from "classnames";
import Input from "../input";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import useClickOutSide from "../../hooks/useClickOutSide";
import useMergeState from "../../hooks/useMergeState";
import Dayjs from "../../utils/dayjs";
import DatePanel from "./DatePanel";
import type { DatePickerProps, modeType, valueType } from "./interface";
import "./index.scss";
import MonthPanel from "./MonthPanel";

const DatePicker: ForwardRefRenderFunction<any, DatePickerProps> = (
  props,
  ref
) => {
  const {
    defaultValue,
    value,
    onChange,
    allowClear = false,
    placeholder = "点击输入日期",
  } = props;
  const [stateValue, _setStateValue, isControlled] = useMergeState<valueType>(
    undefined,
    {
      defaultValue,
      value,
    }
  );
  const [visiblePanel, setVisiblePanel] = useState<boolean>(false);
  const [mode, setMode] = useState<modeType>("date");
  const [visibleValue, setVisibleValue] = useState<Dayjs>(
    new Dayjs(stateValue)
  );
  const innerValue: Dayjs | undefined = useMemo(
    () => (stateValue ? new Dayjs(stateValue) : undefined),
    [stateValue]
  );
  const componentRef = useRef<HTMLDivElement>(null);
  const openPanel = useCallback(() => {
    setMode("date");
    setVisibleValue(innerValue || new Dayjs());
    setVisiblePanel(true);
  }, [innerValue]);
  const closePanel = useCallback(() => {
    setVisiblePanel(false);
  }, []);
  const setStateValue = (newValue?: Date, valueString?: string) => {
    if (!isControlled) _setStateValue(newValue);
    onChange?.(newValue, valueString);
  };
  const handleClear = () => {
    setStateValue(undefined, undefined);
  };
  const handleChangeMode = (newMode: modeType) => setMode(newMode);
  useClickOutSide(componentRef, () => {
    closePanel();
  });
  useEffect(() => setVisibleValue(innerValue || new Dayjs()), [innerValue]);
  const renderPanel = () => {
    switch (mode) {
      case "date":
        return (
          <DatePanel
            visibleValue={visibleValue}
            onChangeVisibleValue={setVisibleValue}
            onChangeValue={setStateValue}
            closePanel={closePanel}
            onChangeMode={handleChangeMode}
            innerValue={innerValue}
          />
        );
      case "month":
        return <MonthPanel />;
      case "year":
        return <div>year</div>;
    }
  };
  return (
    <div className={classnames("g-datepicker")} ref={componentRef}>
      {innerValue?.format()}
      <Input
        suffix={<InternalIcon name="icon-date" />}
        width={200}
        readOnly
        onClick={openPanel}
        value={innerValue ? innerValue.format() : ""}
        clearable={allowClear}
        onClickClearButton={handleClear}
        placeholder={placeholder}
      />
      {visiblePanel && (
        <div className={classnames("g-datepicker-panel-wrapper")}>
          {renderPanel()}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
