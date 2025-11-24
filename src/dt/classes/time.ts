import { Temporal } from 'temporal-polyfill';

export default class bbnDtTime extends bbnDt<Temporal.PlainTime>
{
  #value: Temporal.PlainTime;
  readonly kind: 'time' = 'time';
  constructor(h?: any, i?: number, s?: number, ms?: number) {
    super();
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

  ftime(withSeconds: boolean = false): string {
    if (!this.value) {
      return '';
    }

    const date = new Date(2000, 1, 1, this.hour() as number, this.minute() as number, this.second() as number);
    const opt: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
    };
    if (withSeconds) {
      opt.second = '2-digit';
    }
    const t = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
    return t.format(date);
  }

};