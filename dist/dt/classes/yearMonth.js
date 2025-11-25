import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
import getRow from '../../fn/object/getRow.js';
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
    format(format) {
        // long
        if (format === true) {
            format = getRow(bbn.dt.locales.date, d => (d.year === 'numeric')
                && (d.month === 'long')
                && !('day' in d)).pattern;
        }
        // short
        if (!format) {
            format = getRow(bbn.dt.locales.date, d => (d.year === 'numeric')
                && (d.month === 'numeric')
                && !('day' in d)).pattern;
        }
        return bbnDt.prototype.format.call(this, this.value, format);
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
