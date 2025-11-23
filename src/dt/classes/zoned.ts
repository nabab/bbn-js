import { Temporal } from 'temporal-polyfill';
import fromJsDate from '../functions/fromJsDate.js';


export default class bbnDtZoned
{
  #value: Temporal.ZonedDateTime;
  constructor(z?: any, y?: any, m?: number, d?: number, h?: number, i?: number, s?: number, ms?: number) {
    if (!z) {
      const date = new Date();
      this.#value = new Temporal.ZonedDateTime(BigInt(date.getTime() * 1000000), Intl.DateTimeFormat().resolvedOptions().timeZone);
    }
    else if (y === undefined) {
      if (z instanceof Temporal.ZonedDateTime) {
        this.#value = z;
      }
      else if (z instanceof Date) {
        this.#value = fromJsDate(z, true) as Temporal.ZonedDateTime;
      }
      else if (typeof z === 'number') {
        const d = new Date(z);
        this.#value = fromJsDate(d, true) as Temporal.ZonedDateTime;
      }
      else {
        throw new Error('Invalid value for bbnDtZoned');
      }
    }
    else {
      const dt = new Temporal.PlainDateTime(y, m, d || 1, h || 0, i || 0, s || 0, ms || 0);
      this.#value = dt.toZonedDateTime(z || Temporal.Now.timeZoneId());
    }
  }

  get value() {
    return this.#value;
  }
}