import { Temporal } from 'temporal-polyfill';
export default class bbnDtTime {
    #private;
    constructor(h?: any, i?: number, s?: number, ms?: number);
    get value(): Temporal.PlainTime;
}
