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
var _bbnDtYearMonth_value;
import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
class bbnDtYearMonth extends bbnDt {
    constructor(y, m) {
        super();
        _bbnDtYearMonth_value.set(this, void 0);
        this.kind = 'year-month';
        if (!y) {
            const d = new Date();
            __classPrivateFieldSet(this, _bbnDtYearMonth_value, new Temporal.PlainYearMonth(d.getFullYear(), d.getMonth() + 1), "f");
        }
        else if (m === undefined) {
            if (y instanceof Temporal.PlainYearMonth) {
                __classPrivateFieldSet(this, _bbnDtYearMonth_value, y, "f");
            }
            else if (y instanceof Date) {
                __classPrivateFieldSet(this, _bbnDtYearMonth_value, new Temporal.PlainYearMonth(y.getFullYear(), y.getMonth() + 1), "f");
            }
            else if (typeof m === 'number') {
                const d = new Date(m);
                __classPrivateFieldSet(this, _bbnDtYearMonth_value, new Temporal.PlainYearMonth(d.getFullYear(), d.getMonth() + 1), "f");
            }
            else {
                throw new Error('Invalid value for bbnDtDateTime');
            }
        }
    }
    get value() {
        return __classPrivateFieldGet(this, _bbnDtYearMonth_value, "f");
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
_bbnDtYearMonth_value = new WeakMap();
export default bbnDtYearMonth;
;
