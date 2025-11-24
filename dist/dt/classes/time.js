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
var _bbnDtTime_value;
import { Temporal } from 'temporal-polyfill';
class bbnDtTime extends bbnDt {
    constructor(h, i, s, ms) {
        super();
        _bbnDtTime_value.set(this, void 0);
        this.kind = 'time';
        if (!h) {
            const d = new Date();
            __classPrivateFieldSet(this, _bbnDtTime_value, new Temporal.PlainTime(d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds() * 1000000), "f");
        }
        else if (h === undefined) {
            if (h instanceof Temporal.PlainTime) {
                __classPrivateFieldSet(this, _bbnDtTime_value, h, "f");
            }
            else if (h instanceof Date) {
                __classPrivateFieldSet(this, _bbnDtTime_value, new Temporal.PlainTime(h.getHours(), h.getMinutes(), h.getSeconds(), h.getMilliseconds() * 1000000), "f");
            }
            else if (typeof h === 'number') {
                if (i !== undefined) {
                    __classPrivateFieldSet(this, _bbnDtTime_value, new Temporal.PlainTime(h, i, s || 0, ms || 0), "f");
                }
                else {
                    const d = new Date(h);
                    __classPrivateFieldSet(this, _bbnDtTime_value, new Temporal.PlainTime(d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds() * 1000000), "f");
                }
            }
            else {
                throw new Error('Invalid value for bbnDtDateTime');
            }
        }
    }
    get value() {
        return __classPrivateFieldGet(this, _bbnDtTime_value, "f");
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
_bbnDtTime_value = new WeakMap();
export default bbnDtTime;
;
