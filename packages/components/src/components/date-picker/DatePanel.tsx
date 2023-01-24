import {FC, useCallback, useMemo} from "react";
import classnames from "classnames";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import createId from "../../utils/createId";
import {DatePanelProps} from "./interface";
import Dayjs from "../../utils/dayjs";

const weeks = ["日", "一", "二", "三", "四", "五", "六"];

const DatePanel: FC<DatePanelProps> = (props) => {
    const {
        innerValue,
        visibleValue,
        onChangeValue,
        onChangeVisibleValue,
        onChangeMode,
        closePanel
    } = props;
    const handleClick = useCallback((day: Dayjs) => {
        onChangeValue(day.raw, day.format());
        closePanel()
    }, []);
    const handleClickLeft = useCallback(
        () => onChangeVisibleValue(visibleValue.add(-1, "month")),
        [visibleValue]
    );
    const handleClickDoubleLeft = useCallback(
        () => onChangeVisibleValue(visibleValue.add(-1, "year")),
        [visibleValue]
    );
    const handleClickRight = useCallback(
        () => onChangeVisibleValue(visibleValue.add(1, "month")),
        [visibleValue]
    );
    const handleClickDoubleRight = useCallback(
        () => onChangeVisibleValue(visibleValue.add(1, "year")),
        [visibleValue]
    );
    const handleClickFooter = useCallback(() => {
        onChangeValue(new Date(), new Dayjs(new Date()).format());
        closePanel()
    }, []);
    const handleClickMonth = () => onChangeMode("month");
    const handleClickYear = () => onChangeMode("year");
    const daysArray = useMemo(() => {
        const firstDay = visibleValue.firstDayOfMonth();
        const firstDayWeekOfMonth = firstDay.week;
        const beginDay = firstDay.add(-firstDayWeekOfMonth, "day");
        const tmp: Dayjs[][] = new Array(6)
            .fill(0)
            .map((_) => new Array(7).fill(0));
        for (let i = 0; i < 42; i++) {
            tmp[Math.floor(i / 7)][i % 7] = beginDay.add(i, "day");
        }
        return tmp;
    }, [visibleValue]);
    return (
        <div className={classnames("g-datepicker-day-picker")}>
            <header className={classnames("g-datepicker-day-picker-header")}>
                <div>
          <span
              className={classnames("g-datepicker-day-picker-header-arrow")}
              onClick={handleClickDoubleLeft}
          >
            <InternalIcon name="icon-arrow-double-left"/>
          </span>
                    <span
                        className={classnames("g-datepicker-day-picker-header-arrow")}
                        onClick={handleClickLeft}
                    >
            <InternalIcon name="icon-arrow-left"/>
          </span>
                </div>
                <div
                    className={classnames("g-datepicker-day-picker-header-day-and-month")}
                >
                    <span onClick={handleClickYear}>{visibleValue.year}年</span>
                    <span onClick={handleClickMonth}>{visibleValue.month}月</span>
                </div>
                <div>
          <span
              className={classnames("g-datepicker-day-picker-header-arrow")}
              onClick={handleClickRight}
          >
            <InternalIcon name="icon-arrow-right"/>
          </span>
                    <span
                        className={classnames("g-datepicker-day-picker-header-arrow")}
                        onClick={handleClickDoubleRight}
                    >
            <InternalIcon name="icon-arrow-double-right"/>
          </span>
                </div>
            </header>
            <main className={classnames("g-datepicker-day-picker-content")}>
        <span className={classnames("g-datepicker-day-picker-row")}>
          {weeks.map((w) => (
              <span
                  className={classnames("g-datepicker-day-picker-title")}
                  key={w}
              >
              {w}
            </span>
          ))}
        </span>
                {daysArray.map((line) => (
                    <span
                        className={classnames("g-datepicker-day-picker-row")}
                        key={createId()}
                    >
            {line.map((day) => (
                <div key={createId()}>
                <span
                    className={classnames("g-datepicker-day-picker-item", {
                        [`g-datepicker-day-picker-item-active`]: innerValue
                            ? day.isSameDay(innerValue) &&
                            visibleValue.year === day.year &&
                            visibleValue.month === day.month
                            : false,
                        [`g-datepicker-day-picker-item-not-in-this-month`]:
                            !day.isSameMonth(visibleValue),
                    })}
                    onClick={() => handleClick(day)}
                >
                  {day.day}
                </span>
                </div>
            ))}
          </span>
                ))}
            </main>
            <footer className={classnames("g-datepicker-day-picker-footer")}>
                <span onClick={handleClickFooter}>今&nbsp;天</span>
            </footer>
        </div>
    );
};

export default DatePanel;
