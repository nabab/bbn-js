import { Temporal } from 'temporal-polyfill';
import bbnDt from './dt.js';
import getRow from '../../fn/object/getRow.js';


export default class bbnDtDateTime extends bbnDt<Temporal.PlainDateTime>
{
  readonly kind: bbnDtKind = 'datetime';
  constructor(y?: any, m?: number, d?: number, h?: number, i?: number, s?: number, ms?: number) {
    let value;
    if (!y) {
      value = Temporal.PlainDateTime.from(Temporal.Now.plainDateISO());
    }
    else if (m === undefined) {
      if (y instanceof Temporal.PlainDateTime) {
        value = y;
      }
      else if (y instanceof Date) {
        value = new Temporal.PlainDateTime(y.getFullYear(), y.getMonth() + 1, y.getDate(), y.getHours(), y.getMinutes(), y.getSeconds(), y.getMilliseconds());
      }
      else if (typeof y === 'number') {
        const d = new Date(y);
        value = new Temporal.PlainDateTime(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
      }
      else {
        throw new Error('Invalid value for bbnDtDateTime');
      }
    }
    else {
      value = new Temporal.PlainDateTime(y, m, d || 1, h || 0, i || 0, s || 0, ms || 0);
    }
    super(value);
  }

  format(format?: string | boolean): string {
    // long
    if (format === true) {
      format = getRow(bbn.dt.locales.date, {year: 'numeric', month: 'long', day: 'long', weekday: 'long', hour: '2-digit', minute: '2-digit', second: undefined}).pattern;
    }
    // short
    if (!format) {
      format = getRow(bbn.dt.locales.date, {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit', second: undefined}).pattern;
    }

    return bbnDt.prototype.format.call(this, format);
  }

  fdate(long: boolean = false, withTime: boolean = false, weekday: boolean = false): string {
    if (!this.value) {
      return '';
    }

    const date = new Date(this.year() as number, (this.month() as number) - 1, this.day() as number, this.hour() as number, this.minute() as number, this.second() as number);
    const opt: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: long ? 'long' : 'numeric',
      day: 'numeric',
      ...(weekday ? { weekday: (long ? 'long' : 'short') } : {}),
      ...(withTime ? { hour: (long ? '2-digit' : 'numeric'), minute: '2-digit'} : {})  
    };
    const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
    return d.format(date);
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
