import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
export default class bbnDtTime extends bbnDt<Temporal.PlainTime> {
    readonly kind: 'time';
    constructor(h?: any, i?: number, s?: number, ms?: number);
    ftime(withSeconds?: boolean): string;
}
