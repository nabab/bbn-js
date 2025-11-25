import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
import getRow from '../../fn/object/getRow.js';
export default class bbnDtDate extends bbnDt {
    constructor(y, m, d) {
        let value;
        if (!y) {
            value = Temporal.PlainDate.from(Temporal.Now.plainDateISO());
        }
        else if (m === undefined) {
            if (y instanceof Temporal.PlainDate) {
                value = y;
            }
            else if (y instanceof Date) {
                value = new Temporal.PlainDate(y.getFullYear(), y.getMonth() + 1, y.getDate());
            }
            else if (typeof y === 'number') {
                const d = new Date(y);
                value = new Temporal.PlainDate(d.getFullYear(), d.getMonth() + 1, d.getDate());
            }
            else {
                throw new Error('Invalid value for bbnDtDateTime');
            }
        }
        else {
            value = new Temporal.PlainDate(y, m, d || 1);
        }
        super(value);
        this.kind = 'date';
    }
    compareSameKind(other) {
        const cmp = Temporal.PlainDate.compare(this.value, other.value);
        return (cmp < 0 ? -1 : cmp > 0 ? 1 : 0);
    }
    format(format) {
        // long
        if (format === true) {
            format = getRow(bbn.dt.locales.date, { year: 'numeric', month: 'long', day: 'long', weekday: 'long' }).pattern;
        }
        // short
        if (!format) {
            format = getRow(bbn.dt.locales.date, { year: 'numeric', month: 'numeric', day: 'numeric' }).pattern;
        }
        return bbnDt.prototype.format.call(this, [format]);
    }
    ftime(withSeconds = false) {
        return '00:00' + (withSeconds ? ':00' : '');
    }
    fdate(long = false, weekday = false) {
        const date = new Date(this.year(), this.month() - 1, this.day());
        const opt = Object.assign({ year: 'numeric', month: long ? 'long' : 'numeric', day: 'numeric' }, (weekday ? { weekday: (long ? 'long' : 'short') } : {}));
        const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
        return d.format(date);
    }
}
;
