import { Temporal } from 'temporal-polyfill';

export type bbnDtKind =
  | 'datetime'
  | 'date'
  | 'time'
  | 'year-month'
  | 'month-day'
  | 'zoned';

export type bbnDtTemporal =
  | Temporal.PlainDateTime
  | Temporal.PlainDate
  | Temporal.PlainTime
  | Temporal.PlainYearMonth
  | Temporal.PlainMonthDay
  | Temporal.ZonedDateTime;

