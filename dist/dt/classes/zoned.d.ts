import { Temporal } from 'temporal-polyfill';
import { bbnDtKind } from '../vars/types.js';
import bbnDt from './dt.js';
export default class bbnDtZoned extends bbnDt<Temporal.ZonedDateTime> {
    #private;
    readonly kind: bbnDtKind;
    constructor(z?: any, y?: any, m?: number, d?: number, h?: number, i?: number, s?: number, ms?: number);
    get value(): Temporal.ZonedDateTime;
    fdate(long?: boolean, withTime?: boolean, weekday?: boolean): string;
    ftime(withSeconds?: boolean): string;
}
