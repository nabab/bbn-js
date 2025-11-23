import { Temporal } from 'temporal-polyfill';
export default class bbnDtDate {
    #private;
    constructor(y?: any, m?: number, d?: number);
    get value(): Temporal.PlainDate;
}
