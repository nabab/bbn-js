import { Temporal } from 'temporal-polyfill';
import { bbnDtTemporal } from '../vars/types.js';
import bbnDtDuration from './duration.js';
export declare abstract class bbnDt<TValue extends bbnDtTemporal> {
    #private;
    abstract readonly kind: bbnDtKind;
    readonly __bbnNoData = true;
    constructor(value?: TValue);
    get value(): TValue | undefined;
    get hasFullDate(): boolean;
    /** System time zone ID (e.g. "Europe/Rome") */
    private static readonly systemTimeZoneId;
    /**
     * Convert this.value (PlainDate, PlainTime, PlainDateTime, YearMonth,
     * MonthDay, ZonedDateTime) into epoch milliseconds, using the system
     * time zone when needed.
     *
     * Conventions:
     *  - time       → today at that time in system tz
     *  - date       → that date at 00:00 in system tz
     *  - year-month → first of that month at 00:00 in system tz
     *  - month-day  → that month/day in *this year* at 00:00 in system tz
     */
    protected toEpochMs(): number;
    /**
     * "Now" value in the same *kind* as this instance.
     */
    protected static nowForKind(kind: bbnDtKind): Temporal.PlainDate | Temporal.PlainTime | Temporal.PlainDateTime | Temporal.PlainYearMonth | Temporal.PlainMonthDay | Temporal.ZonedDateTime;
    /**
     * Helper to rebuild the same concrete subclass with a new Temporal value.
     * Assumes your subclass constructor takes the value as first argument.
     */
    protected withValue(newValue: any): this;
    static compare(a: any, b: any, unit: string | undefined): -1 | 0 | 1;
    static parse(input: string, format: string | string[], cls?: 'auto' | 'zoned' | 'dateTime' | 'date' | 'time' | 'yearMonth' | 'monthDay', locale?: {
        monthsLong?: string[];
        monthsShort?: string[];
        weekdaysLong?: string[];
        weekdaysShort?: string[];
    }): bbnDt<any>;
    parse(input: string, format: string, cls?: 'auto' | 'zoned' | 'dateTime' | 'date' | 'time' | 'yearMonth' | 'monthDay'): bbnDt<any>;
    compare(other: any, unit?: string): -1 | 0 | 1;
    add(amount: number | bbnDtDuration | object, unit?: string): bbnDt<any>;
    subtract(amount: number | bbnDtDuration | object, unit?: string): bbnDt<any>;
    isBefore(other: any): boolean;
    isBeforeOrSame(other: any): boolean;
    isAfter(other: any): boolean;
    isAfterOrSame(other: any): boolean;
    isSame(other: any): boolean;
    equals(other: any): boolean;
    toJSON(): {
        kind: bbnDtKind;
        value: string;
    };
    toString(): string;
    year(v?: any): number | bbnDt<any>;
    month(v?: any): number | bbnDt<any>;
    day(v?: any): number | bbnDt<any>;
    hour(v?: any): number | bbnDt<any>;
    minute(v?: any): number | bbnDt<any>;
    second(v?: any): number | bbnDt<any>;
    weekday(v?: any, past?: any): number | bbnDt<any>;
    date(v?: any): string | bbnDt<any>;
    datetime(v?: any): string | bbnDt<any>;
    time(v?: any): string | bbnDt<any>;
    week(): number;
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
    get W(): string;
    get isValid(): boolean;
    format(format?: string): string;
    matchFormat(value: any, format: string): boolean;
    getWeekday(n: 0 | 1 | 2 | 3 | 4 | 5 | 6, mode?: string, locale?: string): string | object;
    getWeekdayIndex: (name: string, locale?: string) => number;
    /**
     * Returns a NEW date that is the next (or previous if past=true)
     * occurrence of the given weekday, starting from this.#value.
     *
     * @param {number|string} weekday - Weekday index (0=Sunday…6=Saturday)
     *                                 or a localized weekday name.
     * @param {boolean} past - If true → return previous occurrence instead of next.
     * @param {string} [locale] - Optional locale for weekday names.
     */
    setWeekday(weekday: number | string, past?: boolean, locale?: string): bbnDt<any>;
    diff(date: any, unit?: string, abs?: boolean): number;
    guessUnit(valueInMs: number): string | null;
    fromNow(unit?: string): string;
    fromDate(date: any, unit?: string): string;
    startOf(unit?: string): bbnDt<any>;
    endOf(unit?: string): bbnDt<any>;
    clone(): bbnDt<any>;
}
export default bbnDt;
