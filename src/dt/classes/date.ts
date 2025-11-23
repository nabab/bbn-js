import { Temporal } from 'temporal-polyfill';

export default class bbnDtDate
{
  #value: Temporal.PlainDate;
  constructor(y?: any, m?: number, d?: number) {
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

  get value() {
    return this.#value;
  }
};