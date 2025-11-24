import { Temporal } from 'temporal-polyfill';
import { BbnDtKind } from '../vars/types.js';
import { bbnDt } from './dt.js';


export default class bbnDtYearMonth extends bbnDt<Temporal.PlainYearMonth>
{
  #value: Temporal.PlainYearMonth;
  readonly kind: BbnDtKind = 'year-month';
  constructor(y?: any, m?: number) {
    super();
    if (!y) {
      const d = new Date();
      this.#value = new Temporal.PlainYearMonth(d.getFullYear(), d.getMonth() + 1);
    }
    else if (m === undefined) {
      if (y instanceof Temporal.PlainYearMonth) {
        this.#value = y;
      }
      else if (y instanceof Date) {
        this.#value = new Temporal.PlainYearMonth(y.getFullYear(), y.getMonth() + 1);
      }
      else if (typeof m === 'number') {
        const d = new Date(m);
        this.#value = new Temporal.PlainYearMonth(d.getFullYear(), d.getMonth() + 1);
      }
      else {
        throw new Error('Invalid value for bbnDtDateTime');
      }
    }
  }

  get value() {
    return this.#value;
  }

  fdate(long: boolean = false, withTime: boolean = false, weekday: boolean = false): string {
    if (!this.value) {
      return '';
    }

    const date = new Date(this.year() as number, (this.month() as number) - 1);
    const opt: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: long ? 'long' : 'numeric',
    };
    const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
    return d.format(date);
  }
};