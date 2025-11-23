import { Temporal } from 'temporal-polyfill';
/**
 * Convert a JS Date into:
 *  - Temporal.Instant  (if hasZone=true)
 *  - Temporal.PlainDate (if hasZone=false)
 */
export default function fromJsDate(date: Date, hasZone?: boolean, timeZone?: string): Temporal.ZonedDateTime | Temporal.PlainDateTime;
