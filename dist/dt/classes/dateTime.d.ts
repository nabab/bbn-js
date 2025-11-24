import { Temporal } from 'temporal-polyfill';
import { BbnDtKind } from '../vars/types.js';
import bbnDt from './dt.js';
export default class bbnDtDateTime extends bbnDt<Temporal.PlainDateTime> {
    #private;
    readonly kind: BbnDtKind;
    constructor(y?: any, m?: number, d?: number, h?: number, i?: number, s?: number, ms?: number);
    get value(): Temporal.PlainDateTime;
}
