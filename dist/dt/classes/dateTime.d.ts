import { Temporal } from 'temporal-polyfill';
import { bbnDtKind } from '../vars/types.js';
export default class bbnDtDateTime extends bbnDt<Temporal.PlainDateTime> {
    #private;
    readonly kind: bbnDtKind;
    constructor(y?: any, m?: number, d?: number, h?: number, i?: number, s?: number, ms?: number);
    get value(): Temporal.PlainDateTime;
    fdate(long?: boolean, withTime?: boolean, weekday?: boolean): string;
    ftime(withSeconds?: boolean): string;
}
