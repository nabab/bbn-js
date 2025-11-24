export interface BbnDtHasYearMonth {
  year(v?: number): number | this;
  month(v?: number): number | this;
}

export interface BbnDtHasDay extends BbnDtHasYearMonth {
  day(v?: number): number | this;

  /** weekday: getter or setter, depending on args */
  weekday(v?: number, past?: boolean): number | this;

  /** ISO-like week number (or your existing semantics) */
  week(): number;

  inLeapYear(): boolean;
  daysInMonth(): number;

  getWeekday(
    n: 0 | 1 | 2 | 3 | 4 | 5 | 6,
    mode?: 'long' | 'short',
    locale?: string
  ): string;

  getWeekdayIndex(
    name: string,
    locale?: string
  ): number;

  setWeekday(
    weekday: number | string,
    past?: boolean,
    locale?: string
  ): this;
}
export interface BbnDtHasTime {
  hour(v?: number): number | this;
  minute(v?: number): number | this;

  /** Optional: you may also want seconds here later */
  // second?(v?: number): number | this;

  /** Return a bbnDtTime or set time on this, depending on your semantics. */
  time(v?: any): this | bbnDtTime; // bbnDtTime type defined later

  /**
   * Formatted time (localized / custom), e.g. "13:45" or "13:45:30".
   */
  ftime(withSeconds?: boolean): string;
}

export interface BbnDtFormattable {
  /**
   * Formatted date: you control semantics per subclass.
   * - long:     long vs short style
   * - withTime: include time part if available
   * - weekday:  include weekday name if available
   */
  fdate(long?: boolean, withTime?: boolean, weekday?: boolean): string;

  /**
   * Generic custom pattern formatting (your existing tokens).
   */
  format(format: string): string;

  /**
   * Human calendar-like formatting with a pattern, e.g. "Today at 13:00".
   */
  calendar(format?: string): string;

  /**
   * SQL string representation:
   * - notime=true: date-only
   * - otherwise: datetime
   */
  sql(notime?: boolean): string;
}

export interface BbnDtHasInstantNumeric {
  /**
   * Unix timestamp:
   *  - ms=false: seconds
   *  - ms=true:  milliseconds
   */
  unix(ms?: boolean): number;

  /**
   * Primitive numeric value, used by JS when doing + or comparisons.
   * You can map this to unix(ms=true) or epochSeconds, as you prefer.
   */
  valueOf(): number;
}
