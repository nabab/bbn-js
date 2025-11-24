import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
import { BbnDtKind } from '../vars/types.js';
export default class bbnDtDate extends bbnDt<Temporal.PlainDate> {
    #private;
    readonly kind: BbnDtKind;
    constructor(y?: any, m?: number, d?: number);
    protected compareSameKind(other: this): -1 | 0 | 1;
    get value(): Temporal.PlainDate;
}
