import { BbnDtKind, BbnDtTemporal } from '../vars/types.js';
export declare abstract class bbnDt<TValue extends BbnDtTemporal> {
    abstract readonly kind: BbnDtKind;
    abstract get value(): TValue;
    /**
     * Subclasses implement how to compare two values of the *same kind*.
     * Base class does not try to mix date vs time etc.
     */
    protected abstract compareSameKind(other: this): -1 | 0 | 1;
    abstract add(value: number, unit: string): TValue;
    abstract subtract(value: number, unit: string): TValue;
    compare(other: bbnDt<any>): -1 | 0 | 1;
    isBefore(other: bbnDt<any>): boolean;
    isAfter(other: bbnDt<any>): boolean;
    isSame(other: bbnDt<any>): boolean;
    equals(other: bbnDt<any>): boolean;
    toJSON(): {
        kind: BbnDtKind;
        value: string;
    };
    toString(): string;
    year(v?: any): number | TValue;
    month(v?: any): number | TValue;
    day(v?: any): number | TValue;
    hour(v?: any): number | TValue;
    minute(v?: any): number | TValue;
    second(v?: any): number | TValue;
    weekday(): number;
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
    setWeekday(weekday: number | string, past?: boolean, locale?: string): TValue;
}
export default bbnDt;
