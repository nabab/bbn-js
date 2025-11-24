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
var _bbnDtMonthDay_value;
import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
class bbnDtMonthDay extends bbnDt {
    constructor(m, d) {
        super();
        _bbnDtMonthDay_value.set(this, void 0);
        this.kind = 'month-day';
        if (!m) {
            const d = new Date();
            __classPrivateFieldSet(this, _bbnDtMonthDay_value, new Temporal.PlainMonthDay(d.getMonth() + 1, d.getDate()), "f");
        }
        else if (d === undefined) {
            if (m instanceof Temporal.PlainMonthDay) {
                __classPrivateFieldSet(this, _bbnDtMonthDay_value, m, "f");
            }
            else if (m instanceof Date) {
                __classPrivateFieldSet(this, _bbnDtMonthDay_value, new Temporal.PlainMonthDay(m.getMonth() + 1, m.getDate()), "f");
            }
            else if (typeof m === 'number') {
                const d = new Date(m);
                __classPrivateFieldSet(this, _bbnDtMonthDay_value, new Temporal.PlainMonthDay(d.getMonth() + 1, d.getDate()), "f");
            }
            else {
                throw new Error('Invalid value for bbnDtDateTime');
            }
        }
        else {
            __classPrivateFieldSet(this, _bbnDtMonthDay_value, new Temporal.PlainMonthDay(m, d), "f");
        }
    }
    get value() {
        return __classPrivateFieldGet(this, _bbnDtMonthDay_value, "f");
    }
}
_bbnDtMonthDay_value = new WeakMap();
export default bbnDtMonthDay;
;
