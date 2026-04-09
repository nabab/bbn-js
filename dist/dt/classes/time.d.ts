import { Temporal } from '../../../node_modules/temporal-polyfill/index.js';
import bbnDt from './dt.js';
export default class bbnDtTime extends bbnDt<Temporal.PlainTime> {
    readonly kind: 'time';
    constructor(h?: any, i?: number, s?: number, ms?: number);
    ftime(withSeconds?: boolean): string;
}
