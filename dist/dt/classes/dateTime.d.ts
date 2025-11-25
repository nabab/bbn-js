import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
export default class bbnDtDateTime extends bbnDt<Temporal.PlainDateTime> {
    readonly kind: bbnDtKind;
    constructor(y?: any, m?: number, d?: number, h?: number, i?: number, s?: number, ms?: number);
    format(format?: string | boolean): string;
    fdate(long?: boolean, withTime?: boolean, weekday?: boolean): string;
    ftime(withSeconds?: boolean): string;
}
