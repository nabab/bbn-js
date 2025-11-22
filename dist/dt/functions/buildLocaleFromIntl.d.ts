type Style = 'full' | 'long' | 'medium' | 'short';
type CommonFormats = {
    date: Array<{
        style: Style;
        pattern: string;
        sample: string;
        options: Intl.DateTimeFormatOptions;
    }>;
    time: Array<{
        style: Style;
        pattern: string;
        sample: string;
        options: Intl.DateTimeFormatOptions;
    }>;
    datetime: Array<{
        dateStyle: Style;
        timeStyle: Style;
        pattern: string;
        sample: string;
        options: Intl.DateTimeFormatOptions;
    }>;
};
/**
 * Get all common date/time/datetime formats for a given locale using Intl.DateTimeFormat.
 *
 * - Date formats: dateStyle only (full/long/medium/short)
 * - Time formats: timeStyle only
 * - Datetime formats: all combinations of dateStyle × timeStyle
 *
 * Returns tokens using your convention: YYYY, MM, DD, HH, II, SS, A, etc.
 */
export declare function getCommonFormatsForLocale(lng: string | string[]): CommonFormats;
export default function buildLocaleFromIntl(): void;
export {};
