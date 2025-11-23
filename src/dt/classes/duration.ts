import { Temporal } from 'temporal-polyfill';
import {units, unitsCorrespondence} from '../vars/units';
import getRow from '../../fn/object/getRow.js';


export default class bbnDtDuration
{
  #value: Temporal.Duration;
  #unit: string;

  static fromUnit(value: number, unit: string): bbnDtDuration {
    const realUnit = unitsCorrespondence[unit] || 'ms';
    if (!realUnit) {
      throw new Error('Invalid unit for duration: ' + unit);
    }

    const ctx = [
      realUnit === 'y' ? value : 0,
      realUnit === 'm' ? value : 0,
      realUnit === 'd' ? value : 0,
      realUnit === 'h' ? value : 0,
      realUnit === 'i' ? value : 0,
      realUnit === 's' ? value : 0,
      ['y', 'm', 'd', 'h', 'i', 's'].includes(realUnit) ? 0 : value
    ];
    const dur = new Temporal.Duration(...ctx);
    return new bbnDtDuration(dur, 0, 0, 0, 0, 0, 0, realUnit as string);
  }

  constructor(y: Temporal.Duration | number, m?: number, d?: number, h?: number, i?: number, s?: number, ms?: number, unit?: string)
  {
    if (y instanceof Temporal.Duration) {
      this.#value = y;
    }
    else {
      this.#value = new Temporal.Duration(
        y || 0,
        m || 0,
        d || 0,
        h || 0,
        i || 0,
        s || 0,
        ms || 0,
        0,
        0
      );
    }
    const realUnit = unitsCorrespondence[unit || ''] || unit;
    this.#unit = realUnit || 'ms';
    const row = getRow(units, (a: any[]) => a[0] === realUnit);
    if (!row) {
      throw new Error('Invalid unit for duration: ' + realUnit);
    }
  }

  get value() {
    return this.#value;
  }
};
