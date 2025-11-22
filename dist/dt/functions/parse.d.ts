import { Temporal } from 'temporal-polyfill';
export default function parse(input: string, format: string | string[], locale?: {
    monthsLong?: string[];
    monthsShort?: string[];
    weekdaysLong?: string[];
    weekdaysShort?: string[];
}): Temporal.Instant | Temporal.PlainDateTime | Temporal.PlainDate | Temporal.PlainTime | Temporal.PlainYearMonth | Temporal.PlainMonthDay;
