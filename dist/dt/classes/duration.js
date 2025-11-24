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
var _bbnDtDuration_instances, _bbnDtDuration_value, _bbnDtDuration_unit, _bbnDtDuration_getUnitValue;
import { Temporal } from 'temporal-polyfill';
import { units, unitsCorrespondence } from '../vars/units.js';
import getRow from '../../fn/object/getRow.js';
const DURATION_RELATIVE_TO = Temporal.ZonedDateTime.from('1970-01-01T00:00Z[UTC]');
class bbnDtDuration {
    static fromUnit(value, unit) {
        const realUnit = unitsCorrespondence[unit] || 'ms';
        if (!realUnit) {
            throw new Error('Invalid unit for duration: ' + unit);
        }
        const ctx = [
            realUnit === 'y' ? value : 0,
            realUnit === 'm' ? value : 0,
            realUnit === 'd' ? value : 0,
            realUnit === 'h' ? value : 0,
            realUnit === 'i' ? value : 0,
            realUnit === 's' ? value : 0,
            ['y', 'm', 'd', 'h', 'i', 's'].includes(realUnit) ? 0 : value
        ];
        const dur = new Temporal.Duration(...ctx);
        return new bbnDtDuration(dur);
    }
    constructor(y, m, w, d, h, i, s, ms, unit) {
        _bbnDtDuration_instances.add(this);
        _bbnDtDuration_value.set(this, void 0);
        _bbnDtDuration_unit.set(this, void 0);
        if (y instanceof Temporal.Duration) {
            __classPrivateFieldSet(this, _bbnDtDuration_value, y, "f");
        }
        else if (typeof y === 'object') {
            __classPrivateFieldSet(this, _bbnDtDuration_value, new Temporal.Duration(y.years || 0, y.months || 0, y.weeks || 0, y.days || 0, y.hours || 0, y.minutes || 0, y.seconds || 0, y.milliseconds || 0, 0, 0), "f");
        }
        else {
            __classPrivateFieldSet(this, _bbnDtDuration_value, new Temporal.Duration(y || 0, m || 0, w || 0, d || 0, h || 0, i || 0, s || 0, ms || 0, 0, 0), "f");
        }
        const realUnit = unitsCorrespondence[unit || ''] || unit;
        __classPrivateFieldSet(this, _bbnDtDuration_unit, realUnit || 'ms', "f");
        const row = getRow(units, (a) => a[0] === realUnit);
        if (!row) {
            //throw new Error('Invalid unit for duration: ' + realUnit);
        }
    }
    get value() {
        return __classPrivateFieldGet(this, _bbnDtDuration_value, "f");
    }
    // -----------------------
    //     Public getters
    // -----------------------
    years(remaining = false) { return __classPrivateFieldGet(this, _bbnDtDuration_instances, "m", _bbnDtDuration_getUnitValue).call(this, 'year', remaining); }
    months(remaining = false) { return __classPrivateFieldGet(this, _bbnDtDuration_instances, "m", _bbnDtDuration_getUnitValue).call(this, 'month', remaining); }
    weeks(remaining = false) { return __classPrivateFieldGet(this, _bbnDtDuration_instances, "m", _bbnDtDuration_getUnitValue).call(this, 'week', remaining); }
    days(remaining = false) { return __classPrivateFieldGet(this, _bbnDtDuration_instances, "m", _bbnDtDuration_getUnitValue).call(this, 'day', remaining); }
    hours(remaining = false) { return __classPrivateFieldGet(this, _bbnDtDuration_instances, "m", _bbnDtDuration_getUnitValue).call(this, 'hour', remaining); }
    minutes(remaining = false) { return __classPrivateFieldGet(this, _bbnDtDuration_instances, "m", _bbnDtDuration_getUnitValue).call(this, 'minute', remaining); }
    seconds(remaining = false) { return __classPrivateFieldGet(this, _bbnDtDuration_instances, "m", _bbnDtDuration_getUnitValue).call(this, 'second', remaining); }
    // -----------------------
    //      Day.js style
    //   "asX" conversions
    // -----------------------
    toJSON() {
        return {
            years: this.years(true),
            months: this.months(true),
            days: this.days(true),
            hours: this.hours(true),
            minutes: this.minutes(true),
            seconds: this.seconds(true),
            milliseconds: this.toMilliseconds()
        };
    }
    /**
     * Returns the full duration expressed as X (float), like Day.js.
     */
    asYears() {
        return __classPrivateFieldGet(this, _bbnDtDuration_value, "f").total({
            unit: 'year',
            relativeTo: DURATION_RELATIVE_TO
        });
    }
    asMonths() {
        return __classPrivateFieldGet(this, _bbnDtDuration_value, "f").total({
            unit: 'month',
            relativeTo: DURATION_RELATIVE_TO
        });
    }
    asWeeks() {
        return __classPrivateFieldGet(this, _bbnDtDuration_value, "f").total({
            unit: 'week',
            relativeTo: DURATION_RELATIVE_TO
        });
    }
    asDays() {
        return __classPrivateFieldGet(this, _bbnDtDuration_value, "f").total({
            unit: 'day',
            relativeTo: DURATION_RELATIVE_TO
        });
    }
    asHours() {
        return __classPrivateFieldGet(this, _bbnDtDuration_value, "f").total({
            unit: 'hour',
            relativeTo: DURATION_RELATIVE_TO
        });
    }
    asMinutes() {
        return __classPrivateFieldGet(this, _bbnDtDuration_value, "f").total({
            unit: 'minute',
            relativeTo: DURATION_RELATIVE_TO
        });
    }
    asSeconds() {
        return __classPrivateFieldGet(this, _bbnDtDuration_value, "f").total({
            unit: 'second',
            relativeTo: DURATION_RELATIVE_TO
        });
    }
    /**
     * Add any unit (or instance default).
     */
    add(value, unit) {
        const targetUnit = unit
            ? (unitsCorrespondence[unit] || unit)
            : __classPrivateFieldGet(this, _bbnDtDuration_unit, "f");
        // Map to Temporal.DurationLike field name, e.g. 'year' → 'years'
        const field = (targetUnit + 's');
        if (!['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'].includes(field)) {
            throw new Error('Invalid unit for duration: ' + (unit !== null && unit !== void 0 ? unit : targetUnit));
        }
        const delta = { [field]: value };
        const newDuration = __classPrivateFieldGet(this, _bbnDtDuration_value, "f").add(delta);
        // Adapt this constructor call to however you now construct your duration:
        return new bbnDtDuration(newDuration, undefined, undefined, undefined, undefined, undefined, undefined, undefined, __classPrivateFieldGet(this, _bbnDtDuration_unit, "f"));
    }
    subtract(value, unit) {
        return this.add(-value, unit);
    }
    toMilliseconds() {
        const d = __classPrivateFieldGet(this, _bbnDtDuration_value, "f");
        // If there are no calendar units, we can let Temporal do it directly:
        if (!d.years && !d.months && !d.weeks && !d.days) {
            return d.total({ unit: 'millisecond' });
        }
        // Otherwise we must supply a relativeTo (same as in asX)
        return d.total({
            unit: 'millisecond',
            relativeTo: DURATION_RELATIVE_TO
        });
    }
}
_bbnDtDuration_value = new WeakMap(), _bbnDtDuration_unit = new WeakMap(), _bbnDtDuration_instances = new WeakSet(), _bbnDtDuration_getUnitValue = function _bbnDtDuration_getUnitValue(name, remaining) {
    const d = __classPrivateFieldGet(this, _bbnDtDuration_value, "f"); // Temporal.Duration
    if (remaining) {
        switch (name) {
            case 'year': return d.years;
            case 'month': return d.months;
            case 'week': return d.weeks;
            case 'day': return d.days;
            case 'hour': return d.hours;
            case 'minute': return d.minutes;
            case 'second':
                // seconds component only; sub-second parts go to milliseconds in toJSON()
                return d.seconds;
        }
    }
    // Total units: use Duration.total()
    const total = d.total({
        unit: name,
        relativeTo: DURATION_RELATIVE_TO
    });
    // Keep same semantics as old code (Math.floor on totals)
    return Math.floor(total);
};
export default bbnDtDuration;
;
