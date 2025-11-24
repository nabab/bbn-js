import { Temporal } from 'temporal-polyfill';
import fromJsDate from '../functions/fromJsDate.js';
import { BbnDtKind } from '../vars/types.js';
import bbnDt from './dt.js';


export default class bbnDtZoned extends bbnDt<Temporal.ZonedDateTime>
{
  #value: Temporal.ZonedDateTime;
  readonly kind: BbnDtKind = 'zoned';
  constructor(z?: any, y?: any, m?: number, d?: number, h?: number, i?: number, s?: number, ms?: number) {
    super();
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

  fdate(long: boolean = false, withTime: boolean = false, weekday: boolean = false): string {
    if (!this.value) {
      return '';
    }

    const date = new Date(this.year() as number, (this.month() as number) - 1, this.day() as number, this.hour() as number, this.minute() as number, this.second() as number);
    const opt: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: long ? 'long' : 'numeric',
      day: 'numeric',
      ...(weekday ? { weekday: (long ? 'long' : 'short') } : {}),
      ...(withTime ? { hour: (long ? '2-digit' : 'numeric'), minute: '2-digit'} : {})  
    };
    const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
    return d.format(date);
  }

  ftime(withSeconds: boolean = false): string {
    if (!this.value) {
      return '';
    }

    const date = new Date(2000, 1, 1, this.hour() as number, this.minute() as number, this.second() as number);
    const opt: Intl.DateTimeFormatOptions = {
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