declare class bbnDateTool {
    #private;
    /**
     * Parses a date string strictly according to a format.
     *
     * Supported tokens:
     *   Years:   YYYY, YY, Y
     *   Months:  MMMM, MMM, MM, M, m
     *   Days:    DD, D, d
     *   Weekday: dddd, ddd, EE  (validation only)
     *   Hours:   HH, H, h
     *   Minutes: II, I, i
     *   Seconds: SS, S, s
     *   Milli:   ms
     *   Weeks:   WWWW, WWW, WW, W (parsed but not used to build the Date)
     *
     * @throws Error if parsing fails or the date is invalid.
     */
    static parse(input: string, format: string, locale?: {
        monthsLong?: string[];
        monthsShort?: string[];
        weekdaysLong?: string[];
        weekdaysShort?: string[];
    }): Date;
    constructor(value: any, inputFormat?: null | String);
    parse(input: string, format: string): bbnDateTool;
    matchFormat(value: any, format: string): boolean;
    toString(): string;
    year(v?: number): number | bbnDateTool;
    month(v?: number): number | bbnDateTool;
    day(v?: number): number | bbnDateTool;
    hour(v?: number): number | bbnDateTool;
    minute(v?: number): number | bbnDateTool;
    second(v?: number): number | bbnDateTool;
    weekday(v?: number, past?: boolean): number | bbnDateTool;
    /**
     * Returns the ISO-8601 week number of this date.
     * Week starts on Monday, and week 1 is the week with Jan 4.
     *
     * @returns {number} ISO week number (1–53)
     */
    week(): number;
    get tst(): number;
    get mtst(): number;
    get YYYY(): string;
    get YY(): string;
    get MMMM(): string;
    get MMM(): string;
    get MM(): string;
    get M(): string;
    get EE(): string;
    get DD(): string;
    get d(): string;
    get dddd(): string;
    get ddd(): string;
    get D(): string;
    get HH(): string;
    get H(): string;
    get II(): string;
    get mm(): string;
    get I(): string;
    get SS(): string;
    get S(): string;
    get WW(): string;
    get isValid(): boolean;
    inLeapYear(): boolean;
    daysInMonth(): number;
    valueOf(): number;
    add(value: number, unit?: string): bbnDateTool | null;
    subtract(value: number, unit?: string): bbnDateTool;
    dateFromFormat(value: string, unit: string | null): Date;
    date(v: any): string | bbnDateTool;
    datetime(v: any): string | bbnDateTool;
    time(v: any): string | bbnDateTool;
    fdate(long?: boolean, withTime?: boolean, weekday?: boolean): string;
    ftime(withSeconds?: boolean): string;
    format(format?: string): string;
    unix(ms?: boolean | number): number | bbnDateTool;
    sql(noTime?: boolean): string;
    /**
     * Compare this date to another date with a given precision.
     * @returns -1 if this < other, 0 if equal, 1 if this > other
     */
    compare(date: any, unit?: string): -1 | 0 | 1;
    isBefore(date: any, unit?: string): Boolean;
    isAfter(date: any, unit?: string): Boolean;
    isSame(date: any, unit?: string): Boolean;
    isAfterOrSame(date: any, unit?: string): Boolean;
    isBeforeOrSame(date: any, unit?: string): Boolean;
    fromNow(unit?: string): string;
    fromDate(date: any, unit?: string): string;
    guessUnit(valueInMs: number): string | null;
    diff(date: any, unit?: string, abs?: boolean): number;
    calendar(format: string): string;
    getWeekday(n: 0 | 1 | 2 | 3 | 4 | 5 | 6, mode?: string, locale?: string): any;
    getWeekdayIndex(name: string, locale?: string): number;
    /**
     * Returns a NEW date that is the next (or previous if past=true)
     * occurrence of the given weekday, starting from this.#value.
     *
     * @param {number|string} weekday - Weekday index (0=Sunday…6=Saturday)
     *                                 or a localized weekday name.
     * @param {boolean} past - If true → return previous occurrence instead of next.
     * @param {string} [locale] - Optional locale for weekday names.
     */
    setWeekday(weekday: number | string, past?: boolean, locale?: string): bbnDateTool;
    copy(): Date;
    clone(): bbnDateTool;
    /**
     * Returns a NEW bbnDateTool at the start of the given unit.
     * Units: year, month, week, day, hour, minute, second
     */
    startOf(unit?: string): bbnDateTool;
    /**
     * Returns a NEW bbnDateTool at the end of the given unit.
     * Units: year, month, week, day, hour, minute, second
     */
    endOf(unit?: string): bbnDateTool;
    duration(num: number, unit?: string): any;
}
declare function generatorFunction(value: any, inputFormat?: null | String): bbnDateTool;
export default generatorFunction;
