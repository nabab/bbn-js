import { Temporal } from 'temporal-polyfill';
import { bbnDtKind } from '../vars/types.js';
export default class bbnDtMonthDay extends bbnDt<Temporal.PlainMonthDay> {
    #private;
    readonly kind: bbnDtKind;
    constructor(m?: any, d?: number);
    get value(): Temporal.PlainMonthDay;
    fdate(long?: boolean, withTime?: boolean, weekday?: boolean): string;
}
