import { forwardRef, ForwardRefRenderFunction, useCallback, useEffect, useMemo, useRef, useState, } from "react";
import classnames from "classnames";
import Input from "../input";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import useClickOutSide from "../../hooks/useClickOutSide";
import useMergeState from "../../hooks/useMergeState";
import Dayjs from "../../utils/dayjs";
import DatePanel from "./DatePanel";
import type { DatePickerProps, modeType, valueType } from "./interface";
import MonthPanel from "./MonthPanel";
import YearPanel from "./YearPanel";
import CentreyPanel from "./CentreyPanel";
import "./index.scss";

const formatMap: Record<'date' | 'month' | 'year', string> = {
    date: 'YYYY-MM-DD',
    month: 'YYYY-MM',
    year: 'YYYY'
}

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
        picker = 'date',
        format = formatMap[picker as 'date' | 'month' | 'year'],
        status
    } = props;
    const [stateValue, _setStateValue, isControlled] = useMergeState<valueType>(
        undefined,
        {
            defaultValue,
            value,
        }
    );
    const [visiblePanel, setVisiblePanel] = useState<boolean>(false);
    const [mode, setMode] = useState<modeType>(picker as modeType);
    const [visibleValue, setVisibleValue] = useState<Dayjs>(
        new Dayjs(stateValue)
    );
    const innerValue: Dayjs | undefined = useMemo(
        () => (stateValue ? new Dayjs(stateValue) : undefined),
        [stateValue]
    );
    const componentRef = useRef<HTMLDivElement>(null);
    const openPanel = useCallback(() => {
        if (visiblePanel) return
        setMode(picker as modeType);
        setVisibleValue(innerValue || new Dayjs());
        setVisiblePanel(true);
    }, [innerValue, visiblePanel]);
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
                        format={format}
                    />
                );
            case "month":
                return (
                    <MonthPanel
                        innerValue={innerValue}
                        visibleValue={visibleValue}
                        onChangeVisibleValue={setVisibleValue}
                        onChangeMode={handleChangeMode}
                        onChangeValue={setStateValue}
                        closePanel={closePanel}
                        picker={picker}
                        format={format}
                    />
                );
            case "year":
                return (
                    <YearPanel
                        innerValue={innerValue}
                        visibleValue={visibleValue}
                        onChangeVisibleValue={setVisibleValue}
                        onChangeMode={handleChangeMode}
                        onChangeValue={setStateValue}
                        closePanel={closePanel}
                        picker={picker}
                        format={format}
                    />
                )
            case "centrey":
                return (
                    <CentreyPanel
                        innerValue={innerValue}
                        visibleValue={visibleValue}
                        onChangeVisibleValue={setVisibleValue}
                        onChangeMode={handleChangeMode}
                    />
                )
        }
    };
    return (
        <div className={classnames("g-datepicker")} ref={componentRef}>
            <Input
                suffix={<InternalIcon name="icon-date" />}
                width={300}
                readOnly
                onClick={openPanel}
                value={innerValue ? innerValue.format(format) : ""}
                clearable={allowClear}
                onClickClearButton={handleClear}
                placeholder={placeholder}
                status={status}
                ref={ref}
            />
            {visiblePanel && (
                <div className={classnames("g-datepicker-panel-wrapper")}>
                    {renderPanel()}
                </div>
            )}
        </div>
    );
};

export default forwardRef(DatePicker);
