import { bbnDtTemporal } from '../vars/types.js';
import bbnDtDuration from './duration.js';
export declare abstract class bbnDt<TValue extends bbnDtTemporal> {
    #private;
    abstract readonly kind: bbnDtKind;
    constructor(value?: TValue);
    get value(): TValue | undefined;
    static compare(a: any, b: any, unit: string | undefined): -1 | 0 | 1;
    static parse(input: string, format: string | string[], cls?: 'auto' | 'zoned' | 'dateTime' | 'date' | 'time' | 'yearMonth' | 'monthDay', locale?: {
        monthsLong?: string[];
        monthsShort?: string[];
        weekdaysLong?: string[];
        weekdaysShort?: string[];
    }): bbnDt<any>;
    parse(input: string, format: string): bbnDt<any>;
    compare(other: any, unit?: string): -1 | 0 | 1;
    add(amount: number | bbnDtDuration | object, unit?: string): bbnDt<any>;
    subtract(amount: number | bbnDtDuration | object, unit?: string): bbnDt<any>;
    isBefore(other: any): boolean;
    isAfter(other: any): boolean;
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
    format(format?: string): string;
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
}
export default bbnDt;
