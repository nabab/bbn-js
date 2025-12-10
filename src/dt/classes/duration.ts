import { Temporal } from 'temporal-polyfill';
import {units, unitsCorrespondence} from '../vars/units.js';
import getRow from '../../fn/object/getRow.js';

const DURATION_RELATIVE_TO = Temporal.ZonedDateTime.from('1970-01-01T00:00Z[UTC]');

export default class bbnDtDuration
{
  #value: Temporal.Duration;
  #unit: string;

  static fromUnit(value: number, unit: string): bbnDtDuration {
    const realUnit = unitsCorrespondence[unit] || 'ms';
    if (!realUnit) {
      throw new Error('Invalid unit for duration: ' + unit);
    }

    const ctx = [
      realUnit === 'y' ? value : 0,
      realUnit === 'm' ? value : 0,
      realUnit === 'w' ? value : 0,
      realUnit === 'd' ? value : 0,
      realUnit === 'h' ? value : 0,
      realUnit === 'i' ? value : 0,
      realUnit === 's' ? value : 0,
      ['y', 'm', 'w', 'd', 'h', 'i', 's'].includes(realUnit) ? 0 : value
    ];
    const dur = new Temporal.Duration(...ctx);
    return new bbnDtDuration(dur);
  }

  constructor(y: Temporal.Duration | number | object, m?: number, w?: number, d?: number, h?: number, i?: number, s?: number, ms?: number, unit?: string)
  {
    if (y instanceof Temporal.Duration) {
      this.#value = y;
    }
    else if (typeof y === 'object') {
      this.#value = new Temporal.Duration(
        (y as any).years || 0,
        (y as any).months || 0,
        (y as any).weeks || 0,
        (y as any).days || 0,
        (y as any).hours || 0,
        (y as any).minutes || 0,
        (y as any).seconds || 0,
        (y as any).milliseconds || 0,
        0,
        0
      );
    }
    else {
      this.#value = new Temporal.Duration(
        y || 0,
        m || 0,
        w || 0,
        d || 0,
        h || 0,
        i || 0,
        s || 0,
        ms || 0,
        0,
        0
      );
    }
    const realUnit = unitsCorrespondence[unit || ''] || unit;
    this.#unit = realUnit || 'ms';
    const row = getRow(units, (a: any[]) => a[0] === realUnit);
    if (!row) {
      //throw new Error('Invalid unit for duration: ' + realUnit);
    }
    Object.defineProperty(this, 'isValid', {
      value: false,
      writable: false,
      configurable: true
    });
  }

  setValid(isValid: boolean) {
    Object.defineProperty(this, 'isValid', {
      value: isValid,
      writable: false,
      configurable: false
    });
  }

  get value() {
    return this.#value;
  }

  /**
   * Internal helper for remaining or total whole units, using Temporal.Duration.
   *
   * - remaining = false → total number of those units (floored),
   *   using Duration.total() with a fixed relativeTo.
   * - remaining = true  → returns the "component" for that unit from #value
   *   (years, months, weeks, days, hours, minutes, seconds).
   */
  #getUnitValue(
    name: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second',
    remaining: boolean
  ): number {
    const d = this.#value; // Temporal.Duration

    if (remaining) {
      switch (name) {
        case 'year':   return d.years;
        case 'month':  return d.months;
        case 'week':   return d.weeks;
        case 'day':    return d.days;
        case 'hour':   return d.hours;
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
  }

  // -----------------------
  //     Public getters
  // -----------------------

  years(remaining = false)   { return this.#getUnitValue('year', remaining); }
  months(remaining = false)  { return this.#getUnitValue('month', remaining); }
  weeks(remaining = false)    { return this.#getUnitValue('week', remaining); }
  days(remaining = false)    { return this.#getUnitValue('day', remaining); }
  hours(remaining = false)   { return this.#getUnitValue('hour', remaining); }
  minutes(remaining = false) { return this.#getUnitValue('minute', remaining); }
  seconds(remaining = false) { return this.#getUnitValue('second', remaining); }

  // -----------------------
  //      Day.js style
  //   "asX" conversions
  // -----------------------

  toJSON() {
    return this.value.toJSON();
  }
  /**
   * Returns the full duration expressed as X (float), like Day.js.
   */
  asYears() {
    return this.#value.total({
      unit: 'year',
      relativeTo: DURATION_RELATIVE_TO
    });
  }

  asMonths() {
    return this.#value.total({
      unit: 'month',
      relativeTo: DURATION_RELATIVE_TO
    });
  }

  asWeeks() {
    return this.#value.total({
      unit: 'week',
      relativeTo: DURATION_RELATIVE_TO
    });
  }

  asDays() {
    return this.#value.total({
      unit: 'day',
      relativeTo: DURATION_RELATIVE_TO
    });
  }

  asHours() {
    return this.#value.total({
      unit: 'hour',
      relativeTo: DURATION_RELATIVE_TO
    });
  }

  asMinutes() {
    return this.#value.total({
      unit: 'minute',
      relativeTo: DURATION_RELATIVE_TO
    });
  }

  asSeconds() {
    return this.#value.total({
      unit: 'second',
      relativeTo: DURATION_RELATIVE_TO
    });
  }

  /**
   * Add any unit (or instance default).
   */
  add(value: number, unit?: string): bbnDtDuration {
    let targetUnit = this.#unit;
    if (unit) {
      if (unitsCorrespondence[unit]) {
        const realUnit = getRow(units, (a: any[]) => a[0] === unitsCorrespondence[unit]);
        if (realUnit) {
          targetUnit = realUnit[1];
        }
      }
      else {
        targetUnit = unit;
      }
    }

    // Map to Temporal.DurationLike field name, e.g. 'year' → 'years'
    const field = (targetUnit + 's') as
      | 'years' | 'months' | 'weeks' | 'days'
      | 'hours' | 'minutes' | 'seconds'
      | 'milliseconds';

    if (!['years','months','weeks','days','hours','minutes','seconds','milliseconds'].includes(field)) {
      throw new Error('Invalid unit for duration: ' + (unit ?? targetUnit));
    }

    const delta: Temporal.DurationLike = { [field]: value } as any;
    const newDuration = this.#value.add(delta);

    // Adapt this constructor call to however you now construct your duration:
    return new bbnDtDuration(newDuration, undefined, undefined, undefined, undefined, undefined, undefined, undefined, this.#unit);
  }

  subtract(value: number, unit?: string): bbnDtDuration {
    return this.add(-value, unit);
  }

  toMilliseconds(): number {
    const d = this.#value;

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

};
