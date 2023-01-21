export default class Dayjs {
    public date: Date

    constructor(date?: number | string | Date) {
        this.date = date ? new Date(date) : new Date()
    }

    get year() {
        return this.date.getFullYear()
    }

    get month() {
        return this.date.getMonth() + 1
    }

    get week() {
        return this.date.getDay()
    }

    get day() {
        return this.date.getDate()
    }

    get hour() {
        return this.date.getHours()
    }

    get minute() {
        return this.date.getMinutes()
    }

    get second() {
        return this.date.getSeconds()
    }

    get millisecond() {
        return this.date.getMilliseconds()
    }

    get raw() {
        return this.date
    }

    public firstDayOfMonth() {
        return new Dayjs(
            new Date(
                this.year,
                this.month - 1,
                1,
                0,
                0,
                0)
        )
    }

    public add(amount: number, unit:
        "year"
        | "month"
        | "day"
        | "hour"
        | "minute"
        | "second"
        | "millisecond") {
        let date = new Date(this.date.getTime());
        switch (unit) {
            case 'year':
                const currentDate = date.getDate()
                date.setDate(1)
                date.setFullYear(date.getFullYear() + amount)
                const targetDate = new Date(
                    date.getFullYear(),
                    date.getMonth() + 1,
                    0,
                    0,
                    0,
                    0,
                ).getDate()
                date.setDate(Math.min(currentDate, targetDate))
                break;
            case 'month':
                const d = date.getDate()
                date.setDate(1)
                date.setMonth(date.getMonth() + amount);
                const d2 = new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0, 0).getDate()
                date.setDate(Math.min(d, d2))
                break;
            case 'day':
                date.setDate(date.getDate() + amount);
                break;
            case 'hour':
                date.setHours(date.getHours() + amount);
                break;
            case 'minute':
                date.setMinutes(date.getMinutes() + amount);
                break;
            case 'second':
                date.setSeconds(date.getSeconds() + amount);
                break;
            case 'millisecond':
                date.setMilliseconds(date.getMilliseconds() + amount);
                break;

            default:
                throw new Error('Time.add: unknown unit');
        }
        return new Dayjs(date)
    }

    //@ts-ignore
    format(pattern?: string = 'YYYY-MM-DD') {
        // 目前支持的格式有 YYYY MM DD HH mm ss SSS
        return pattern.replace(/YYYY/g, this.year.toString())
            .replace(/MM/, this.month.toString().padStart(2, '0'))
            .replace(/DD/, this.day.toString().padStart(2, '0'))
            .replace(/HH/, this.hour.toString().padStart(2, '0'))
            .replace(/mm/, this.minute.toString().padStart(2, '0'))
            .replace(/ss/, this.second.toString().padStart(2, '0'))
            .replace(/SSS/, this.millisecond.toString().padStart(3, '0'))
    }
}
