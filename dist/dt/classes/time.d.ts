import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
export default class bbnDtTime extends bbnDt<Temporal.PlainTime> {
    #private;
    readonly kind: 'time';
    constructor(h?: any, i?: number, s?: number, ms?: number);
    get value(): Temporal.PlainTime;
}
