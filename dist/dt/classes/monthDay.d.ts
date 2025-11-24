import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
export default class bbnDtMonthDay extends bbnDt<Temporal.PlainMonthDay> {
    readonly kind: bbnDtKind;
    constructor(m?: any, d?: number);
    fdate(long?: boolean, withTime?: boolean, weekday?: boolean): string;
}
