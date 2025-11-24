import { Temporal } from 'temporal-polyfill';
import { bbnDtKind } from '../vars/types.js';
import { bbnDt } from './dt.js';
export default class bbnDtYearMonth extends bbnDt<Temporal.PlainYearMonth> {
    #private;
    readonly kind: bbnDtKind;
    constructor(y?: any, m?: number);
    get value(): Temporal.PlainYearMonth;
    fdate(long?: boolean, withTime?: boolean, weekday?: boolean): string;
}
