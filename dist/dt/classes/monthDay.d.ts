import { Temporal } from 'temporal-polyfill';
import { BbnDtKind } from '../vars/types.js';
import bbnDt from './dt.js';
export default class bbnDtMonthDay extends bbnDt<Temporal.PlainMonthDay> {
    #private;
    readonly kind: BbnDtKind;
    constructor(m?: any, d?: number);
    get value(): Temporal.PlainMonthDay;
}
