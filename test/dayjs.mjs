// test/dayjs.mjs
import assert from "node:assert/strict";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import weekOfYear from "dayjs/plugin/weekOfYear.js";
import weekday from "dayjs/plugin/weekday.js";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter.js";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore.js";
import calendar from "dayjs/plugin/calendar.js";
import updateLocale from "dayjs/plugin/updateLocale.js";
import "dayjs/locale/it.js";
import "dayjs/locale/en.js";
import "dayjs/locale/fr.js";

// bbn globale
import bbn from "../dist/index.js";
globalThis.bbn = bbn;

// factory dt()
import dt from "../dist/dt.js";

// plugins Day.js
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.extend(weekOfYear);
dayjs.extend(weekday);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(calendar);
dayjs.extend(updateLocale);

dayjs.locale(globalThis.navigator.language);
dayjs.updateLocale(globalThis.navigator.language, {
  calendar: {
    lastDay: "[" + "Yesterday at" + "] LT",
    sameDay: "[" + "Today at" + "] LT",
    nextDay: "[" + "Tomorrow at" + "] LT",
    lastWeek: "[" + "last" + "] dddd [" + "at" + "] LT",
    nextWeek: "dddd [" + "at" + "] LT",
    sameElse: "L",
  },
  weekStart: 1,
  yearStart: 4
});

// ---------- helpers ----------
function makeBbn(value, format = null) {
  return dt(value, format);
}

// Day.js numeri = ms; convertiamo s/us → ms
function makeDayjsFromCase(tc) {
  if (typeof tc.value === "number") {
    const ms =
      tc.numUnit === "s"
        ? tc.value * 1000
        : tc.numUnit === "ms"
        ? tc.value
        : tc.numUnit === "us"
        ? Math.floor(tc.value / 1000)
        : tc.value;
    return dayjs(ms);
  }
  return tc.format ? dayjs(tc.value, tc.format) : dayjs(tc.value);
}

function ctx(tc, extra = "") {
  return `
[case] ${tc.label}
[input] ${String(tc.value)}
[format] ${tc.format ?? "(none)"}
${extra}`.trim();
}

function eq(actual, expected, tc, extra = "") {
  assert.equal(actual, expected, ctx(tc, extra));
}
// ---------------------------

// Now fisso
const FIXED_NOW_ISO = new Date().toISOString();
const FIXED_NOW_MS = Date.parse(FIXED_NOW_ISO);

// CASI input multiformato (senza cls)
const CASES = [
  // full datetime
  { label: "full datetime standard", value: "2023-02-05 14:03:09", format: "YYYY-MM-DD HH:mm:ss" },
  { label: "full datetime slash",    value: "2023/02/05 14:03:09", format: "YYYY/MM/DD HH:mm:ss" },
  { label: "iso datetime T",         value: "2023-02-05T14:03:09", format: "YYYY-MM-DDTHH:mm:ss" },
  { label: "datetime no seconds",    value: "2023-02-05 14:03",    format: "YYYY-MM-DD HH:mm" },

  // ISO con timezone / offset  (⛔️ commentati per ora)
  // { label: "iso datetime Z",
  //   value: "2023-02-05T14:03:09Z",
  //   format: "YYYY-MM-DDTHH:mm:ss[Z]",
  // },
  // { label: "iso datetime offset",
  //   value: "2023-02-05T14:03:09+02:00",
  //   format: "YYYY-MM-DDTHH:mm:ssZ",
  // },

  // full date
  { label: "full date Y-M-D",  value: "2023-02-05", format: "YYYY-MM-DD" },
  { label: "full date D-M-Y",  value: "05-02-2023", format: "DD-MM-YYYY" },
  { label: "full date M-D-Y",  value: "02-05-2023", format: "MM-DD-YYYY" },
  { label: "full date D/M/Y",  value: "05/02/2023", format: "DD/MM/YYYY" },

  // solo anno
  { label: "only year", value: "2023", format: "YYYY" },

  // anno-mese / mese-anno
  { label: "year-month", value: "2023-02", format: "YYYY-MM" },
  { label: "month-year", value: "02-2023", format: "MM-YYYY" },

  // giorno-mese / mese-giorno (senza anno)
  { label: "day-month", value: "05-02", format: "DD-MM" },
  { label: "month-day", value: "02-05", format: "MM-DD" },

  // timestamp numerici
  { label: "timestamp seconds", value: 1675605789,    format: null, numUnit: "s" },
  { label: "timestamp ms",      value: 1675605789000, format: null, numUnit: "ms" },
];

const CASES_WITH_TIME = CASES.filter(c =>
  (c.format && (c.format.includes("HH") || c.format.includes("mm") || c.format.includes("ss"))) ||
  typeof c.value === "number"
);

const CASES_WITH_FULL_DATE = CASES.filter(c =>
  (c.format && c.format.includes("YYYY") && c.format.includes("MM") && c.format.includes("DD")) ||
  typeof c.value === "number"
);

describe("bbnDt vs Day.js — funzioni comuni con input multiformato", () => {

  before(() => {
    const realNow = Date.now;
    Date.now = () => FIXED_NOW_MS;
    after(() => { Date.now = realNow; });
  });

  // PARSE / FORMAT
  describe("parse / format", () => {
    CASES.forEach(tc => {
      it(`[${tc.label}] parse+format coincidono`, () => {
        const b = makeBbn(tc.value, tc.format);
        const d = makeDayjsFromCase(tc);

        const fmt = tc.hasMicro
          ? "YYYY-MM-DD HH:mm:ss.SSS"
          : (tc.format || "YYYY-MM-DD HH:mm:ss");

        eq(
          b.format(fmt),
          d.format(fmt),
          tc,
          `[bbn] ${b.format(fmt)}\n[dayjs] ${d.format(fmt)}`
        );

        eq(
          b.valueOf(),
          d.valueOf(),
          tc,
          `[bbn valueOf] ${b.valueOf()}\n[dayjs valueOf] ${d.valueOf()}`
        );
      });
    });
  });

  // GETTER / SETTER
  describe("year/month/day/hour/minute/second", () => {
    CASES.forEach(tc => {
      it(`[${tc.label}] getter coincidono`, () => {
        const b = makeBbn(tc.value, tc.format);
        const d = makeDayjsFromCase(tc);

        eq(b.year(),   d.year(),   tc, `[bbn] ${b.year()}\n[dayjs] ${d.year()}`);
        eq(b.month(),  d.month() + 1, tc, `[bbn] ${b.month()}\n[dayjs] ${d.month()+1}`);
        eq(b.day(),    d.date(),   tc, `[bbn] ${b.day()}\n[dayjs] ${d.date()}`);
        eq(b.hour(),   d.hour(),   tc, `[bbn] ${b.hour()}\n[dayjs] ${d.hour()}`);
        eq(b.minute(), d.minute(), tc, `[bbn] ${b.minute()}\n[dayjs] ${d.minute()}`);
        eq(b.second(), d.second(), tc, `[bbn] ${b.second()}\n[dayjs] ${d.second()}`);
      });
    });

    it("setter coincidono (caso standard)", () => {
      const tcs = { label: "setter standard", value: "2023-03-04 05:06:07", format: "YYYY-MM-DD HH:mm:ss" };
      const b0 = makeBbn(tcs.value, tcs.format);
      const d0 = dayjs(tcs.value, tcs.format);

      const b = b0.year(2020).month(12).day(25).hour(23).minute(59).second(58);
      const d = d0.year(2020).month(11).date(25).hour(23).minute(59).second(58);

      eq(
        b.format(tcs.format),
        d.format(tcs.format),
        tcs,
        `[bbn] ${b.format(tcs.format)}\n[dayjs] ${d.format(tcs.format)}`
      );
    });
  });

  // ADD / SUBTRACT
  describe("add / subtract", () => {
    CASES_WITH_TIME.forEach(tc => {
      it(`[${tc.label}] add(5, day) coincide`, () => {
        const b = makeBbn(tc.value, tc.format).add(5, "d");
        const d = makeDayjsFromCase(tc).add(5, "day");

        eq(
          b.format("YYYY-MM-DD HH:mm:ss"),
          d.format("YYYY-MM-DD HH:mm:ss"),
          tc,
          `[bbn] ${b.format("YYYY-MM-DD HH:mm:ss")}\n[dayjs] ${d.format("YYYY-MM-DD HH:mm:ss")}`
        );
      });

      it(`[${tc.label}] subtract(2, week) coincide`, () => {
        const b = makeBbn(tc.value, tc.format).subtract(2, "w");
        const d = makeDayjsFromCase(tc).subtract(2, "week");

        eq(
          b.format("YYYY-MM-DD HH:mm:ss"),
          d.format("YYYY-MM-DD HH:mm:ss"),
          tc,
          `[bbn] ${b.format("YYYY-MM-DD HH:mm:ss")}\n[dayjs] ${d.format("YYYY-MM-DD HH:mm:ss")}`
        );
      });
    });
  });

  // STARTOF / ENDOF
  describe("startOf / endOf", () => {
    CASES_WITH_FULL_DATE.forEach(tc => {
      it(`[${tc.label}] startOf(day) coincide`, () => {
        const b = makeBbn(tc.value, tc.format).startOf("d");
        const d = makeDayjsFromCase(tc).startOf("day");

        eq(
          b.format("YYYY-MM-DD HH:mm:ss"),
          d.format("YYYY-MM-DD HH:mm:ss"),
          tc,
          `[bbn] ${b.format("YYYY-MM-DD HH:mm:ss")}\n[dayjs] ${d.format("YYYY-MM-DD HH:mm:ss")}`
        );
      });

      it(`[${tc.label}] endOf(month) coincide`, () => {
        const b = makeBbn(tc.value, tc.format).endOf("m");
        const d = makeDayjsFromCase(tc).endOf("month");

        eq(
          b.format("YYYY-MM-DD HH:mm:ss"),
          d.format("YYYY-MM-DD HH:mm:ss"),
          tc,
          `[bbn] ${b.format("YYYY-MM-DD HH:mm:ss")}\n[dayjs] ${d.format("YYYY-MM-DD HH:mm:ss")}`
        );
      });
    });
  });

  // DIFF
  describe("diff", () => {
    const refTc = { label: "ref", value: "2023-01-01 00:00:00", format: "YYYY-MM-DD HH:mm:ss" };

    CASES_WITH_FULL_DATE.forEach(tc => {
      it(`[${tc.label}] diff in giorni coincide`, () => {
        const b1 = makeBbn(tc.value, tc.format);
        const d1 = makeDayjsFromCase(tc);

        const b2 = makeBbn(refTc.value, refTc.format);
        const d2 = dayjs(refTc.value, refTc.format);

        eq(
          b1.diff(b2, "d"),
          d1.diff(d2, "day"),
          tc,
          `[bbn diff d] ${b1.diff(b2, "d")}\n[dayjs diff d] ${d1.diff(d2, "day")}\n[ref input] ${refTc.value}`
        );

        eq(
          b1.diff(b2),
          d1.valueOf() - d2.valueOf(),
          tc,
          `[bbn diff ms] ${b1.diff(b2)}\n[dayjs diff ms] ${d1.valueOf() - d2.valueOf()}\n[ref input] ${refTc.value}`
        );
      });
    });
  });

  // COMPARATORS
  describe("isBefore/isAfter/isSame(+OrSame)", () => {
    const otherTc = { label: "other", value: "2023-12-31 00:00:00", format: "YYYY-MM-DD HH:mm:ss" };

    CASES_WITH_FULL_DATE.forEach(tc => {
      it(`[${tc.label}] comparators coincidono`, () => {
        const b1 = makeBbn(tc.value, tc.format);
        const d1 = makeDayjsFromCase(tc);

        const b2 = makeBbn(otherTc.value, otherTc.format);
        const d2 = dayjs(otherTc.value, otherTc.format);

        eq(b1.isBefore(b2), d1.isBefore(d2), tc, `[other] ${otherTc.value}`);
        eq(b2.isAfter(b1),  d2.isAfter(d1),  tc, `[other] ${otherTc.value}`);
        eq(b1.isSame(b1),   d1.isSame(d1),   tc);
        eq(b1.isBeforeOrSame(b1), d1.isSameOrBefore(d1), tc);
        eq(b2.isAfterOrSame(b2),  d2.isSameOrAfter(d2),  tc);
      });
    });
  });

  // WEEK / WEEKDAY
  describe("week / weekday", () => {
    CASES_WITH_FULL_DATE.forEach(tc => {
      it(`[${tc.label}] week() coincide`, () => {
        const b = makeBbn(tc.value, tc.format);
        const d = makeDayjsFromCase(tc);
        eq(b.week(), d.week(), tc, `[bbn] ${b.week()}\n[dayjs] ${d.week()}`);
      });

      it(`[${tc.label}] weekday() coincide`, () => {
        const b = makeBbn(tc.value, tc.format);
        const d = makeDayjsFromCase(tc);
        eq(b.weekday(), d.day(), tc, `[bbn] ${b.weekday()}\n[dayjs] ${d.day()}`);
      });
    });
  });

  // fromNow / fromDate
  describe("fromNow / fromDate", () => {
    CASES_WITH_TIME.forEach(tc => {
      it(`[${tc.label}] fromNow coincide`, () => {
        const b = makeBbn(tc.value, tc.format);
        const d = makeDayjsFromCase(tc);
        eq(b.fromNow("d"), d.fromNow(), tc, `[bbn] ${b.fromNow("d")}\n[dayjs] ${d.fromNow()}`);
      });

      it(`[${tc.label}] fromDate coincide`, () => {
        const b = makeBbn(tc.value, tc.format);
        const d = makeDayjsFromCase(tc);
        const ref = dayjs("2023-06-10 10:20:30", "YYYY-MM-DD HH:mm:ss");

        eq(
          b.fromDate("2023-06-10 10:20:30", "d"),
          d.from(ref),
          tc,
          `[bbn] ${b.fromDate("2023-06-10 10:20:30", "d")}\n[dayjs] ${d.from(ref)}`
        );
      });
    });
  });

  // calendar
  describe("calendar", () => {
    CASES_WITH_TIME.forEach(tc => {
      it(`[${tc.label}] calendar coincide almeno nel relativo`, () => {
        const b = makeBbn(tc.value, tc.format);
        const d = makeDayjsFromCase(tc);

        const bRel = b.calendar().split(" ")[0];
        const dRel = d.calendar().split(" ")[0];

        eq(bRel, dRel, tc, `[bbn] ${b.calendar()}\n[dayjs] ${d.calendar()}`);
      });
    });
  });

  // unix / valueOf / toJSON / toString / clone
  describe("unix / valueOf / toJSON / toString / clone", () => {
    CASES_WITH_FULL_DATE.forEach(tc => {
      it(`[${tc.label}] unix(false) coincide`, () => {
        const b = makeBbn(tc.value, tc.format);
        const d = makeDayjsFromCase(tc);
        eq(b.unix(false), d.unix(), tc, `[bbn] ${b.unix(false)}\n[dayjs] ${d.unix()}`);
      });

      it(`[${tc.label}] unix(true) coincide con valueOf`, () => {
        const b = makeBbn(tc.value, tc.format);
        const d = makeDayjsFromCase(tc);
        eq(b.unix(true), d.valueOf(), tc, `[bbn] ${b.unix(true)}\n[dayjs] ${d.valueOf()}`);
      });

      it(`[${tc.label}] valueOf coincide`, () => {
        const b = makeBbn(tc.value, tc.format);
        const d = makeDayjsFromCase(tc);
        eq(b.valueOf(), d.valueOf(), tc, `[bbn] ${b.valueOf()}\n[dayjs] ${d.valueOf()}`);
      });

      it(`[${tc.label}] toString coincide`, () => {
        const b = makeBbn(tc.value, tc.format);
        const d = makeDayjsFromCase(tc);
        eq(b.toString(), d.toString(), tc, `[bbn] ${b.toString()}\n[dayjs] ${d.toString()}`);
      });

      it(`[${tc.label}] toJSON coincide`, () => {
        const b = makeBbn(tc.value, tc.format);
        const d = makeDayjsFromCase(tc);
        eq(b.toJSON().value, d.toJSON(), tc, `[bbn] ${b.toJSON().value}\n[dayjs] ${d.toJSON()}`);
      });

      it(`[${tc.label}] clone non cambia valore`, () => {
        const b = makeBbn(tc.value, tc.format);
        const bc = b.clone();

        const d = makeDayjsFromCase(tc);
        const dc = d.clone();

        eq(
          b.format("YYYY-MM-DD HH:mm:ss"),
          bc.format("YYYY-MM-DD HH:mm:ss"),
          tc,
          `[bbn] ${b.format("YYYY-MM-DD HH:mm:ss")}\n[bbn clone] ${bc.format("YYYY-MM-DD HH:mm:ss")}`
        );

        eq(
          d.format("YYYY-MM-DD HH:mm:ss"),
          dc.format("YYYY-MM-DD HH:mm:ss"),
          tc,
          `[dayjs] ${d.format("YYYY-MM-DD HH:mm:ss")}\n[dayjs clone] ${dc.format("YYYY-MM-DD HH:mm:ss")}`
        );
      });
    });
  });

  // inLeapYear / daysInMonth
  describe("inLeapYear / daysInMonth", () => {
    it("inLeapYear coincide su anno bisestile", () => {
      const tc = { label: "leap year fixed", value: "2020-02-01 00:00:00", format: "YYYY-MM-DD HH:mm:ss" };
      const b = makeBbn(tc.value, tc.format);
      const d = dayjs(tc.value, tc.format);
      eq(b.inLeapYear(), d.inLeapYear(), tc, `[bbn] ${b.inLeapYear()}\n[dayjs] ${d.inLeapYear()}`);
    });

    CASES_WITH_FULL_DATE.forEach(tc => {
      it(`[${tc.label}] daysInMonth coincide`, () => {
        const b = makeBbn(tc.value, tc.format);
        const d = makeDayjsFromCase(tc);
        eq(b.daysInMonth(), d.daysInMonth(), tc, `[bbn] ${b.daysInMonth()}\n[dayjs] ${d.daysInMonth()}`);
      });
    });
  });
});