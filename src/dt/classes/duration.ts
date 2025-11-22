import { Temporal } from 'temporal-polyfill';


class bbnDateDuration {
  #durationMs: number = 0;
  #unit: string = '';

  constructor(len: number, unit: string, fromMs: boolean = false) {
    const realUnit = unitsCorrespondence[unit] || unit;
    if (!realUnit) {
      throw new Error('Invalid unit for duration: ' + unit);
    }

    this.#unit = realUnit;

    const row = getRow(units, d => d[0] === realUnit);
    if (!row) {
      throw new Error('Invalid unit for duration: ' + realUnit);
    }

    const msPerUnit = row[2];
    this.#durationMs = fromMs ? len : len * msPerUnit;
  }

  #getUnitRowByName(name: string) {
    const row = getRow(units, d => d[1] === name);
    if (!row) {
      throw new Error('Unit name not found: ' + name);
    }
    return row;
  }

  /**
   * Internal helper for remaining or total whole units.
   */
  #getUnitValue(
    name: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second',
    remaining: boolean
  ): number {
    const index = units.findIndex(([, n]) => n === name);
    if (index === -1) {
      throw new Error('Unit not found: ' + name);
    }

    const unitMs = units[index][2];

    // Total units
    if (!remaining) {
      return Math.floor(this.#durationMs / unitMs);
    }

    // Remaining units
    let remainingMs = this.#durationMs;

    for (let i = 0; i < index; i++) {
      const [, , msHigher] = units[i];
      const amount = Math.floor(remainingMs / msHigher);
      remainingMs -= amount * msHigher;
    }

    return Math.floor(remainingMs / unitMs);
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
    const [, , ms] = this.#getUnitRowByName('year');
    return this.#durationMs / ms;
  }

  asMonths() {
    const [, , ms] = this.#getUnitRowByName('month');
    return this.#durationMs / ms;
  }

  asWeeks() {
    const [, , ms] = this.#getUnitRowByName('week');
    return this.#durationMs / ms;
  }

  asDays() {
    const [, , ms] = this.#getUnitRowByName('day');
    return this.#durationMs / ms;
  }

  asHours() {
    const [, , ms] = this.#getUnitRowByName('hour');
    return this.#durationMs / ms;
  }

  asMinutes() {
    const [, , ms] = this.#getUnitRowByName('minute');
    return this.#durationMs / ms;
  }

  asSeconds() {
    const [, , ms] = this.#getUnitRowByName('second');
    return this.#durationMs / ms;
  }

  /**
   * Add any unit (or instance default).
   */
  add(value: number, unit?: string): bbnDateDuration {
    const targetUnit = unit
      ? (unitsCorrespondence[unit] || unit)
      : this.#unit;

    const row = getRow(units, d => d[0] === targetUnit);
    if (!row) {
      throw new Error('Invalid unit for duration: ' + (unit ?? targetUnit));
    }

    return new bbnDateDuration(this.#durationMs + value * row[2], this.#unit, true);
  }

  subtract(value: number, unit?: string): bbnDateDuration {
    return this.add(-value, unit);
  }

  toMilliseconds() {
    return this.#durationMs;
  }
}


export default class bbnDtDuration
{

};