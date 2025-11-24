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
var _bbnDtZoned_value;
import { Temporal } from 'temporal-polyfill';
import fromJsDate from '../functions/fromJsDate.js';
import bbnDt from './dt.js';
class bbnDtZoned extends bbnDt {
    constructor(z, y, m, d, h, i, s, ms) {
        super();
        _bbnDtZoned_value.set(this, void 0);
        this.kind = 'zoned';
        if (!z) {
            const date = new Date();
            __classPrivateFieldSet(this, _bbnDtZoned_value, new Temporal.ZonedDateTime(BigInt(date.getTime() * 1000000), Intl.DateTimeFormat().resolvedOptions().timeZone), "f");
        }
        else if (y === undefined) {
            if (z instanceof Temporal.ZonedDateTime) {
                __classPrivateFieldSet(this, _bbnDtZoned_value, z, "f");
            }
            else if (z instanceof Date) {
                __classPrivateFieldSet(this, _bbnDtZoned_value, fromJsDate(z, true), "f");
            }
            else if (typeof z === 'number') {
                const d = new Date(z);
                __classPrivateFieldSet(this, _bbnDtZoned_value, fromJsDate(d, true), "f");
            }
            else {
                throw new Error('Invalid value for bbnDtZoned');
            }
        }
        else {
            const dt = new Temporal.PlainDateTime(y, m, d || 1, h || 0, i || 0, s || 0, ms || 0);
            __classPrivateFieldSet(this, _bbnDtZoned_value, dt.toZonedDateTime(z || Temporal.Now.timeZoneId()), "f");
        }
    }
    get value() {
        return __classPrivateFieldGet(this, _bbnDtZoned_value, "f");
    }
}
_bbnDtZoned_value = new WeakMap();
export default bbnDtZoned;
