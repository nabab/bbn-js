var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _bbnDtDateTime_value;
import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
class bbnDtDateTime extends bbnDt {
    constructor(y, m, d, h, i, s, ms) {
        super();
        _bbnDtDateTime_value.set(this, void 0);
        this.kind = 'datetime';
        if (!y) {
            __classPrivateFieldSet(this, _bbnDtDateTime_value, Temporal.PlainDateTime.from(Temporal.Now.plainDateISO()), "f");
        }
        else if (m === undefined) {
            if (y instanceof Temporal.PlainDateTime) {
                __classPrivateFieldSet(this, _bbnDtDateTime_value, y, "f");
            }
            else if (y instanceof Date) {
                __classPrivateFieldSet(this, _bbnDtDateTime_value, new Temporal.PlainDateTime(y.getFullYear(), y.getMonth() + 1, y.getDate(), y.getHours(), y.getMinutes(), y.getSeconds(), y.getMilliseconds()), "f");
            }
            else if (typeof y === 'number') {
                const d = new Date(y);
                __classPrivateFieldSet(this, _bbnDtDateTime_value, new Temporal.PlainDateTime(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()), "f");
            }
            else {
                throw new Error('Invalid value for bbnDtDateTime');
            }
        }
        else {
            __classPrivateFieldSet(this, _bbnDtDateTime_value, new Temporal.PlainDateTime(y, m, d || 1, h || 0, i || 0, s || 0, ms || 0), "f");
        }
    }
    get value() {
        return __classPrivateFieldGet(this, _bbnDtDateTime_value, "f");
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
_bbnDtDateTime_value = new WeakMap();
export default bbnDtDateTime;
;
