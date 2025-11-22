import extend from "../../fn/object/extend.js";
import numProperties from "../../fn/object/numProperties.js";
export default function buildLocaleFromIntl() {
    if (numProperties(bbn.dt.locales)) {
        return;
    }
    const langs = [bbn.env.lang, ...navigator.languages];
    const fmtMonthLong = new Intl.DateTimeFormat(langs, { month: 'long' });
    const fmtMonthShort = new Intl.DateTimeFormat(langs, { month: 'short' });
    const fmtWeekLong = new Intl.DateTimeFormat(langs, { weekday: 'long' });
    const fmtWeekShort = new Intl.DateTimeFormat(langs, { weekday: 'short' });
    // Create 12 dates for months (2020 chosen arbitrarily)
    const monthsLong = [];
    const monthsShort = [];
    for (let m = 0; m < 12; m++) {
        const d = new Date(2020, m, 1);
        monthsLong.push(fmtMonthLong.format(d));
        monthsShort.push(fmtMonthShort.format(d));
    }
    // Create 7 dates for weekdays (starting from Sunday 2020-02-02 which *is* Sunday)
    // 2020-02-02 is Sunday → guarantees stable weekday list
    const baseSunday = new Date(2020, 1, 2); // YYYY, MM (0-based), DD
    const weekdaysLong = [];
    const weekdaysShort = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(baseSunday.getTime() + i * 86400000);
        weekdaysLong.push(fmtWeekLong.format(d));
        weekdaysShort.push(fmtWeekShort.format(d));
    }
    extend(bbn.dt.locales, {
        monthsLong,
        monthsShort,
        weekdaysLong,
        weekdaysShort,
    });
}
;
