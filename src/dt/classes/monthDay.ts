import { Temporal } from 'temporal-polyfill';
import fromJsDate from '../functions/fromJsDate.js';

export default class bbnDtMonthDay
{
  #value: Temporal.PlainMonthDay;

  constructor(m?: any, d?: number) {
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