import { Temporal } from 'temporal-polyfill';

/**
 * Convert a JS Date into:
 *  - Temporal.Instant  (if hasZone=true)
 *  - Temporal.PlainDate (if hasZone=false)
 */
export function fromJsDate(date: Date, hasZone = false, timeZone = Temporal.Now.timeZoneId()) {
  const T = Temporal;

  // 1) If we want an Instant → direct conversion
  if (hasZone) {
    return T.Instant.fromEpochMilliseconds(date.getTime());
  }

  // 2) Otherwise return the *calendar date* in the given time zone
  const instant = T.Instant.fromEpochMilliseconds(date.getTime());
  const zdt = instant.toZonedDateTimeISO(timeZone);
  return zdt.toPlainDate();
}