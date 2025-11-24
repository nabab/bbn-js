import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
export default class bbnDtMonthDay extends bbnDt {
    constructor(m, d) {
        let value;
        if (!m) {
            const d = new Date();
            value = new Temporal.PlainMonthDay(d.getMonth() + 1, d.getDate());
        }
        else if (d === undefined) {
            if (m instanceof Temporal.PlainMonthDay) {
                value = m;
            }
            else if (m instanceof Date) {
                value = new Temporal.PlainMonthDay(m.getMonth() + 1, m.getDate());
            }
            else if (typeof m === 'number') {
                const d = new Date(m);
                value = new Temporal.PlainMonthDay(d.getMonth() + 1, d.getDate());
            }
            else {
                throw new Error('Invalid value for bbnDtDateTime');
            }
        }
        else {
            value = new Temporal.PlainMonthDay(m, d);
        }
        super(value);
        this.kind = 'month-day';
    }
    fdate(long = false, withTime = false, weekday = false) {
        if (!this.value) {
            return '';
        }
        const date = new Date(2000, this.month() - 1, this.day());
        const opt = {
            month: long ? 'long' : 'numeric',
            day: 'numeric'
        };
        const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
        return d.format(date);
    }
}
;
