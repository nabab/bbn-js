import { Temporal } from 'temporal-polyfill';
export default class bbnDtZoned {
    #private;
    constructor(z?: any, y?: any, m?: number, d?: number, h?: number, i?: number, s?: number, ms?: number);
    get value(): Temporal.ZonedDateTime;
}
