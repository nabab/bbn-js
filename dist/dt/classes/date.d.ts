import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
export default class bbnDtDate extends bbnDt<Temporal.PlainDate> {
    readonly kind: bbnDtKind;
    constructor(y?: any, m?: number, d?: number);
    protected compareSameKind(other: this): -1 | 0 | 1;
    format(format?: string | boolean): string;
    ftime(withSeconds?: boolean): string;
    fdate(long?: boolean, weekday?: boolean): string;
}
