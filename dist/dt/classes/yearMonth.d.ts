import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
export default class bbnDtYearMonth extends bbnDt<Temporal.PlainYearMonth> {
    readonly kind: bbnDtKind;
    constructor(y?: any, m?: number);
    format(format?: string | boolean): string;
    fdate(long?: boolean, withTime?: boolean, weekday?: boolean): string;
}
