import { Temporal } from 'temporal-polyfill';
import fromJsDate from '../functions/fromJsDate.js';
import { BbnDtKind } from '../vars/types.js';
import bbnDt from './dt.js';

export default class bbnDtMonthDay extends bbnDt<Temporal.PlainMonthDay>
{
  #value: Temporal.PlainMonthDay;
  readonly kind: BbnDtKind = 'month-day';

  constructor(m?: any, d?: number) {
    super();
    if (!m) {
      const d = new Date();
      this.#value = new Temporal.PlainMonthDay(d.getMonth() + 1, d.getDate());
    }
    else if (d === undefined) {
      if (m instanceof Temporal.PlainMonthDay) {
        this.#value = m;
      }
      else if (m instanceof Date) {
        this.#value = new Temporal.PlainMonthDay(m.getMonth() + 1, m.getDate());
      }
      else if (typeof m === 'number') {
        const d = new Date(m);
        this.#value = new Temporal.PlainMonthDay(d.getMonth() + 1, d.getDate());
      }
      else {
        throw new Error('Invalid value for bbnDtDateTime');
      }
    }
    else {
      this.#value = new Temporal.PlainMonthDay(m, d);
    }
  }

  get value() {
    return this.#value;
  }

};