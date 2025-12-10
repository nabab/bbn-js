/**
 * Polyfill for:
 * - Intl.Locale (minimal)
 * - Intl.Locale.prototype.getWeekInfo()
 * - Intl.Locale.prototype.weekInfo
 *
 * It does NOT touch DateTimeFormat / RelativeTimeFormat.
 * Those will be handled by FormatJS in setup-intl.ts.
 */
export interface WeekInfo {
    /** 1 = Monday, 7 = Sunday */
    firstDay: number;
    /** Weekend days as 1–7 (1 = Monday, 7 = Sunday) */
    weekend: number[];
    /** Minimal days required in the first week of the year */
    minimalDays: number;
}
/**
 * Call this once after loading any Intl polyfills (FormatJS, etc.).
 */
export declare function ensureIntlWeekInfoPolyfill(): void;
