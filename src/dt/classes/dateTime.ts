import { Temporal } from 'temporal-polyfill';
import { BbnDtKind } from '../vars/types.js';
import bbnDt from './dt.js';


export default class bbnDtDateTime extends bbnDt<Temporal.PlainDateTime>
{
  #value: Temporal.PlainDateTime;
  readonly kind: BbnDtKind = 'datetime';
  constructor(y?: any, m?: number, d?: number, h?: number, i?: number, s?: number, ms?: number) {
    super();
    if (!y) {
      this.#value = Temporal.PlainDateTime.from(Temporal.Now.plainDateISO());
    }
    else if (m === undefined) {
      if (y instanceof Temporal.PlainDateTime) {
        this.#value = y;
      }
      else if (y instanceof Date) {
        this.#value = new Temporal.PlainDateTime(y.getFullYear(), y.getMonth() + 1, y.getDate(), y.getHours(), y.getMinutes(), y.getSeconds(), y.getMilliseconds());
      }
      else if (typeof y === 'number') {
        const d = new Date(y);
        this.#value = new Temporal.PlainDateTime(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
      }
      else {
        throw new Error('Invalid value for bbnDtDateTime');
      }
    }
    else {
      this.#value = new Temporal.PlainDateTime(y, m, d || 1, h || 0, i || 0, s || 0, ms || 0);
    }
  }

  get value() {
    return this.#value;
  }
};
