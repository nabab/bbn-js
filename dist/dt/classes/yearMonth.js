import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
export default class bbnDtYearMonth extends bbnDt {
    constructor(y, m) {
        let value;
        if (!y) {
            const d = new Date();
            value = new Temporal.PlainYearMonth(d.getFullYear(), d.getMonth() + 1);
        }
        else if (m === undefined) {
            if (y instanceof Temporal.PlainYearMonth) {
                value = y;
            }
            else if (y instanceof Date) {
                value = new Temporal.PlainYearMonth(y.getFullYear(), y.getMonth() + 1);
            }
            else if (typeof m === 'number') {
                const d = new Date(m);
                value = new Temporal.PlainYearMonth(d.getFullYear(), d.getMonth() + 1);
            }
            else {
                throw new Error('Invalid value for bbnDtDateTime');
            }
        }
        else {
            value = new Temporal.PlainYearMonth(y, m);
        }
        super(value);
        this.kind = 'year-month';
    }
    fdate(long = false, withTime = false, weekday = false) {
        if (!this.value) {
            return '';
        }
        const date = new Date(this.year(), this.month() - 1);
        const opt = {
            year: 'numeric',
            month: long ? 'long' : 'numeric',
        };
        const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
        return d.format(date);
    }
}
;
