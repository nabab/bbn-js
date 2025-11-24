import { Temporal } from 'temporal-polyfill';
export type BbnDtKind = 'datetime' | 'date' | 'time' | 'year-month' | 'month-day' | 'zoned';
export type BbnDtTemporal = Temporal.PlainDateTime | Temporal.PlainDate | Temporal.PlainTime | Temporal.PlainYearMonth | Temporal.PlainMonthDay | Temporal.ZonedDateTime;
