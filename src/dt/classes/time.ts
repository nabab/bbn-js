import { Temporal } from 'temporal-polyfill';


export default class bbnDtTime
{
  #value: Temporal.PlainTime;
  constructor(h?: any, i?: number, s?: number, ms?: number) {
    if (!h) {
      const d = new Date();
      this.#value = new Temporal.PlainTime(d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds() * 1000000);
    }
    else if (h === undefined) {
      if (h instanceof Temporal.PlainTime) {
        this.#value = h;
      }
      else if (h instanceof Date) {
        this.#value = new Temporal.PlainTime(h.getHours(), h.getMinutes(), h.getSeconds(), h.getMilliseconds() * 1000000);
      }
      else if (typeof h === 'number') {
        if (i !== undefined) {
          this.#value = new Temporal.PlainTime(h, i, s || 0, ms || 0);
        }
        else {
          const d = new Date(h);
          this.#value = new Temporal.PlainTime(d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds() * 1000000);
        }
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