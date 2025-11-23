import { Temporal } from 'temporal-polyfill';

/**
 * Convert a JS Date into:
 *  - Temporal.Instant  (if hasZone=true)
 *  - Temporal.PlainDate (if hasZone=false)
 */
export default function fromJsDate(date: Date, hasZone = false, timeZone = Temporal.Now.timeZoneId()): Temporal.ZonedDateTime | Temporal.PlainDateTime
{
  const T = Temporal;
  const instant = T.Instant.fromEpochMilliseconds(date.getTime());
  const zdt = instant.toZonedDateTimeISO(timeZone);
  return hasZone ? zdt : zdt.toPlainDateTime();
}
