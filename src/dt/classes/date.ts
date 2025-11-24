import { Temporal } from 'temporal-polyfill';
import { bbnDtKind } from '../vars/types.js';
import bbnDt from './dt.js';

export default class bbnDtDate extends bbnDt<Temporal.PlainDate>
{
  #value: Temporal.PlainDate;
  readonly kind: bbnDtKind = 'date';
  constructor(y?: any, m?: number, d?: number) {
    super();
    if (!y) {
      this.#value = Temporal.PlainDate.from(Temporal.Now.plainDateISO());
    }
    else if (m === undefined) {
      if (y instanceof Temporal.PlainDate) {
        this.#value = y;
      }
      else if (y instanceof Date) {
        this.#value = new Temporal.PlainDate(y.getFullYear(), y.getMonth() + 1, y.getDate());
      }
      else if (typeof y === 'number') {
        const d = new Date(y);
        this.#value = new Temporal.PlainDate(d.getFullYear(), d.getMonth() + 1, d.getDate());
      }
      else {
        throw new Error('Invalid value for bbnDtDateTime');
      }
    }
  }

  protected compareSameKind(other: this): -1 | 0 | 1 {
    const cmp = Temporal.PlainDate.compare(this.#value, other.value);
    return (cmp < 0 ? -1 : cmp > 0 ? 1 : 0) as -1 | 0 | 1;
  }
  
  get value() {
    return this.#value;
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