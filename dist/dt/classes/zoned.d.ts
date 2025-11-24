import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
export default class bbnDtZoned extends bbnDt<Temporal.ZonedDateTime> {
    readonly kind: bbnDtKind;
    constructor(z?: any, y?: any, m?: number, d?: number, h?: number, i?: number, s?: number, ms?: number);
    fdate(long?: boolean, withTime?: boolean, weekday?: boolean): string;
    ftime(withSeconds?: boolean): string;
}
