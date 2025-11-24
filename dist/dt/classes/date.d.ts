import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
import { bbnDtKind } from '../vars/types.js';
export default class bbnDtDate extends bbnDt<Temporal.PlainDate> {
    #private;
    readonly kind: bbnDtKind;
    constructor(y?: any, m?: number, d?: number);
    protected compareSameKind(other: this): -1 | 0 | 1;
    get value(): Temporal.PlainDate;
    fdate(long?: boolean, weekday?: boolean): string;
}
