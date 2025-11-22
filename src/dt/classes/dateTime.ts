import { Temporal } from 'temporal-polyfill';


export default class bbnDtDateTime
{
  #value: Temporal.PlainDateTime;
  constructor(y: number, m: number, d: number, h: number, i: number, s: number, ms: number = 0) {
    this.#value = new Temporal.PlainDateTime(y, m, d, h, i, s, ms);
  }

  get value() {
    return this.#value;
  }
};
