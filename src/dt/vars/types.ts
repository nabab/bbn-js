import { Temporal } from 'temporal-polyfill';

export type bbnDtTemporal =
  | Temporal.PlainDateTime
  | Temporal.PlainDate
  | Temporal.PlainTime
  | Temporal.PlainYearMonth
  | Temporal.PlainMonthDay
  | Temporal.ZonedDateTime;

