import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
import { BbnDtKind } from '../vars/types.js';

export default class bbnDtDate extends bbnDt<Temporal.PlainDate>
{
  #value: Temporal.PlainDate;
  readonly kind: BbnDtKind = 'date';
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
};