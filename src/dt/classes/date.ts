import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';

export default class bbnDtDate extends bbnDt<Temporal.PlainDate>
{
  readonly kind: bbnDtKind = 'date';
  constructor(y?: any, m?: number, d?: number) {
    let value;
    if (!y) {
      value = Temporal.PlainDate.from(Temporal.Now.plainDateISO());
    }
    else if (m === undefined) {
      if (y instanceof Temporal.PlainDate) {
        value = y;
      }
      else if (y instanceof Date) {
        value = new Temporal.PlainDate(y.getFullYear(), y.getMonth() + 1, y.getDate());
      }
      else if (typeof y === 'number') {
        const d = new Date(y);
        value = new Temporal.PlainDate(d.getFullYear(), d.getMonth() + 1, d.getDate());
      }
      else {
        throw new Error('Invalid value for bbnDtDateTime');
      }
    }
    else {
      value = new Temporal.PlainDate(y, m, d || 1);
    }
    super(value);
  }

  protected compareSameKind(other: this): -1 | 0 | 1 {
    const cmp = Temporal.PlainDate.compare(this.value, other.value);
    return (cmp < 0 ? -1 : cmp > 0 ? 1 : 0) as -1 | 0 | 1;
  }

  ftime(withSeconds: boolean = false): string {
    return '00:00' + (withSeconds ? ':00' : '');
  }
  
  fdate(long: boolean = false, weekday: boolean = false): string {
    const date = new Date(this.year() as number, (this.month() as number) - 1, this.day() as number);
    const opt: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: long ? 'long' : 'numeric',
      day: 'numeric',
      ...(weekday ? { weekday: (long ? 'long' : 'short') } : {}),
    };
    const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
    return d.format(date);
  }

};