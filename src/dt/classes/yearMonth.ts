import { Temporal } from 'temporal-polyfill';


export default class bbnDtYearMonth
{
  #value: Temporal.PlainYearMonth;
  constructor(y?: any, m?: number) {
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
};