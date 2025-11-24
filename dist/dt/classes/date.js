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
var _bbnDtDate_value;
import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
class bbnDtDate extends bbnDt {
    constructor(y, m, d) {
        super();
        _bbnDtDate_value.set(this, void 0);
        this.kind = 'date';
        if (!y) {
            __classPrivateFieldSet(this, _bbnDtDate_value, Temporal.PlainDate.from(Temporal.Now.plainDateISO()), "f");
        }
        else if (m === undefined) {
            if (y instanceof Temporal.PlainDate) {
                __classPrivateFieldSet(this, _bbnDtDate_value, y, "f");
            }
            else if (y instanceof Date) {
                __classPrivateFieldSet(this, _bbnDtDate_value, new Temporal.PlainDate(y.getFullYear(), y.getMonth() + 1, y.getDate()), "f");
            }
            else if (typeof y === 'number') {
                const d = new Date(y);
                __classPrivateFieldSet(this, _bbnDtDate_value, new Temporal.PlainDate(d.getFullYear(), d.getMonth() + 1, d.getDate()), "f");
            }
            else {
                throw new Error('Invalid value for bbnDtDateTime');
            }
        }
    }
    compareSameKind(other) {
        const cmp = Temporal.PlainDate.compare(__classPrivateFieldGet(this, _bbnDtDate_value, "f"), other.value);
        return (cmp < 0 ? -1 : cmp > 0 ? 1 : 0);
    }
    get value() {
        return __classPrivateFieldGet(this, _bbnDtDate_value, "f");
    }
}
_bbnDtDate_value = new WeakMap();
export default bbnDtDate;
;
