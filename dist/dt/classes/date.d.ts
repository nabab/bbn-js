import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
export default class bbnDtDate extends bbnDt<Temporal.PlainDate> {
    readonly kind: bbnDtKind;
    constructor(y?: any, m?: number, d?: number);
    protected compareSameKind(other: this): -1 | 0 | 1;
    fdate(long?: boolean, weekday?: boolean): string;
}
