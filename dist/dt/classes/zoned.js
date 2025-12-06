import { Temporal } from 'temporal-polyfill';
import fromJsDate from '../functions/fromJsDate.js';
import bbnDt from './dt.js';
export default class bbnDtZoned extends bbnDt {
    constructor(z, y, m, d, h, i, s, ms) {
        let value;
        if (!z) {
            const date = new Date();
            value = Temporal.Now.zonedDateTimeISO(Intl.DateTimeFormat().resolvedOptions().timeZone);
        }
        else if (y === undefined) {
            if (z instanceof Temporal.ZonedDateTime) {
                value = z;
            }
            else if (z instanceof Date) {
                value = fromJsDate(z, true);
            }
            else if (typeof z === 'number') {
                value = Temporal.Instant.fromEpochMilliseconds(z).toZonedDateTimeISO(Intl.DateTimeFormat().resolvedOptions().timeZone);
            }
            else {
                throw new Error('Invalid value for bbnDtZoned');
            }
        }
        else {
            const dt = new Temporal.PlainDateTime(y, m, d || 1, h || 0, i || 0, s || 0, ms || 0);
            value = dt.toZonedDateTime(z || Temporal.Now.timeZoneId());
        }
        super(value);
        this.kind = 'zoned';
    }
    fdate(long = false, withTime = false, weekday = false) {
        if (!this.value) {
            return '';
        }
        const date = new Date(this.year(), this.month() - 1, this.day(), this.hour(), this.minute(), this.second());
        const opt = Object.assign(Object.assign({ year: 'numeric', month: long ? 'long' : 'numeric', day: 'numeric' }, (weekday ? { weekday: (long ? 'long' : 'short') } : {})), (withTime ? { hour: (long ? '2-digit' : 'numeric'), minute: '2-digit' } : {}));
        const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
        return d.format(date);
    }
    ftime(withSeconds = false) {
        if (!this.value) {
            return '';
        }
        const date = new Date(2000, 1, 1, this.hour(), this.minute(), this.second());
        const opt = {
            hour: '2-digit',
            minute: '2-digit',
        };
        if (withSeconds) {
            opt.second = '2-digit';
        }
        const t = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
        return t.format(date);
    }
}
