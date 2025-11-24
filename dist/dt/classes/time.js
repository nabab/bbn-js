import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
export default class bbnDtTime extends bbnDt {
    constructor(h, i, s, ms) {
        let value;
        if (!h) {
            const d = new Date();
            value = new Temporal.PlainTime(d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds() * 1000000);
        }
        else if (h === undefined) {
            if (h instanceof Temporal.PlainTime) {
                value = h;
            }
            else if (h instanceof Date) {
                value = new Temporal.PlainTime(h.getHours(), h.getMinutes(), h.getSeconds(), h.getMilliseconds() * 1000000);
            }
            else if (typeof h === 'number') {
                if (i !== undefined) {
                    value = new Temporal.PlainTime(h, i, s || 0, ms || 0);
                }
                else {
                    const d = new Date(h);
                    value = new Temporal.PlainTime(d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds() * 1000000);
                }
            }
            else {
                throw new Error('Invalid value for bbnDtDateTime');
            }
        }
        else {
            value = new Temporal.PlainTime(h, i || 0, s || 0, ms || 0);
        }
        super(value);
        this.kind = 'time';
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
;
