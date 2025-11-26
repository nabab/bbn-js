import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';

export default class bbnDtMonthDay extends bbnDt<Temporal.PlainMonthDay>
{
  readonly kind: bbnDtKind = 'monthDay';

  constructor(m?: any, d?: number) {
    let value;
    if (!m) {
      const d = new Date();
      value = new Temporal.PlainMonthDay(d.getMonth() + 1, d.getDate());
    }
    else if (d === undefined) {
      if (m instanceof Temporal.PlainMonthDay) {
        value = m;
      }
      else if (m instanceof Date) {
        value = new Temporal.PlainMonthDay(m.getMonth() + 1, m.getDate());
      }
      else if (typeof m === 'number') {
        const d = new Date(m);
        value = new Temporal.PlainMonthDay(d.getMonth() + 1, d.getDate());
      }
      else {
        throw new Error('Invalid value for bbnDtDateTime');
      }
    }
    else {
      value = new Temporal.PlainMonthDay(m, d);
    }
    super(value);
  }

  fdate(long: boolean = false, withTime: boolean = false, weekday: boolean = false): string {
    if (!this.value) {
      return '';
    }

    const date = new Date(2000, (this.month() as number) - 1, this.day() as number);
    const opt: Intl.DateTimeFormatOptions = {
      month: long ? 'long' : 'numeric',
      day: 'numeric'
    };
    const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
    return d.format(date);
  }

};