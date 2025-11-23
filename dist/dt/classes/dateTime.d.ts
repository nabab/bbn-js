import { Temporal } from 'temporal-polyfill';
export default class bbnDtDateTime {
    #private;
    constructor(y?: any, m?: number, d?: number, h?: number, i?: number, s?: number, ms?: number);
    get value(): Temporal.PlainDateTime;
}
