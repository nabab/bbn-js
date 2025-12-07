/* eslint-disable no-var */
interface Money {
  precision: number;
  thousands: string;
  decimal: string;
  currency: string;
  kilo?: boolean;
  novalue?: string;
}


interface Lng {
  [key: string]: string;
}

interface Vars {
  colors: object;
  regexp: {
    [key: string]: RegExp;
  };
  shortenLen: number;
  [key: string]: any;
}

interface BbnEnv {
  siteTitle: string;
  logging: boolean;
  cdn: string;
  lang: string;
  host: string;
  url: string;
  old_path: string;
  loading: boolean;
  width: number;
  height: number;
  focused: any;
  last_focus: number;
  sleep: any;
  _enumerated: any[];
  get isEnumerating(): boolean;
  theme: string;
  loaders: BbnLoader[];
  loadersHistory: BbnLoader[];
  maxLoadersHistory: number;
  resizeTimer: any;
  hashChanged: number;
  params: string[];
  isInit: boolean;
  isFocused: boolean;
  isVisible: boolean;
  timeoff: any;
  loggingLevel: number;
  ignoreUnload: boolean;
  historyDisabled: boolean;
  nav: string;
  root?: string;
  isDev?: boolean;
  mode?: string;
  token?: string;
  connection_failures?: number;
  connection_max_failures?: number;
  money?: Money;
  appPrefix?: string;
  appName?: string;
  plugins?: object[];
  path?: string;
  scrollBarSize?: number;
  online: boolean;
}


declare namespace Temporal {
  class PlainDate {
    year: number;
    month: number;
    day: number;
    dayOfWeek: number;
    calendar: any;

    toPlainDateTime(time: PlainTime): PlainDateTime;

    with(fields: any): PlainDate;
    add(durationLike: any): PlainDate;
    subtract(durationLike: any): PlainDate;
    toString(): string;
    toLocaleString(
      locales?: string | string[],
      options?: Intl.DateTimeFormatOptions
    ): string;
  }

  class PlainTime {
    with(fields: any): PlainTime;
    add(durationLike: any): PlainTime;
    subtract(durationLike: any): PlainTime;
    toString(): string;
    toLocaleString(
      locales?: string | string[],
      options?: Intl.DateTimeFormatOptions
    ): string;
  }

  class PlainDateTime {
    toPlainDate(): PlainDate;
    toPlainTime(): PlainTime;

    with(fields: any): PlainDateTime;
    add(durationLike: any): PlainDateTime;
    subtract(durationLike: any): PlainDateTime;
    toString(): string;
    toLocaleString(
      locales?: string | string[],
      options?: Intl.DateTimeFormatOptions
    ): string;
  }

  class ZonedDateTime {
    // NOTE: static from(...) is where we do the "attach time zone" work
    static from(
      isoOrProps:
        | string
        | {
            timeZone: string;
            plainDateTime?: PlainDateTime;
            plainDate?: PlainDate;
            plainTime?: PlainTime;
            year?: number;
            month?: number;
            day?: number;
            hour?: number;
            minute?: number;
            second?: number;
            millisecond?: number;
            microsecond?: number;
            nanosecond?: number;
          }
    ): ZonedDateTime;

    toInstant(): Instant;
    toPlainDateTime(): PlainDateTime;
    toPlainDate(): PlainDate;
    toPlainTime(): PlainTime;

    with(fields: any): ZonedDateTime;
    add(durationLike: any): ZonedDateTime;
    subtract(durationLike: any): ZonedDateTime;
    toString(): string;
    toLocaleString(
      locales?: string | string[],
      options?: Intl.DateTimeFormatOptions
    ): string;

    readonly timeZoneId: string;
  }

  class Instant {
    readonly epochMilliseconds: number;

    add(durationLike: any): Instant;
    subtract(durationLike: any): Instant;
    toString(): string;
  }

  class PlainYearMonth {
    year: number;
    month: number;
    calendar: any;

    toPlainDate(day: number): PlainDate;
    with(fields: any): PlainYearMonth;
    add(durationLike: any): PlainYearMonth;
    subtract(durationLike: any): PlainYearMonth;
    toString(): string;
  }

  class PlainMonthDay {
    month: number;
    day: number;
    calendar: any;

    toPlainDate(year: number): PlainDate;
    with(fields: any): PlainMonthDay;
    add(durationLike: any): PlainMonthDay;
    subtract(durationLike: any): PlainMonthDay;
    toString(): string;
  }

  namespace Now {
    function timeZoneId(): string;
    function zonedDateTimeISO(): ZonedDateTime;
    function plainDateISO(): PlainDate;
    function plainTimeISO(): PlainTime;
    function plainDateTimeISO(): PlainDateTime;
  }
}


declare global {
  function parse(
    input: string,
    format: string | string[],
    cls: 'auto' | 'zoned' | 'dateTime' | 'date' | 'time' | 'yearMonth' | 'monthDay',
    locale?: {
      monthsLong?: string[];
      monthsShort?: string[];
      weekdaysLong?: string[];
      weekdaysShort?: string[];
    }
  ): bbnDt<any>;

  type bbnDtKindParams = 'auto' | 'zoned' | 'dateTime' | 'date' | 'time' | 'yearMonth' | 'monthDay';

  type bbnDtKind =
    | 'dateTime'
    | 'date'
    | 'time'
    | 'yearMonth'
    | 'monthDay'
    | 'zoned';

  type TimeFormatUnit = 
   | "year"
   | "month"
   | "week"
   | "day"
   | "hour"
   | "minute"
   | "second"
   | "millisecond";

  type TimeFormatSymbol = 
   | "y"
   | "m"
   | "w"
   | "e"
   | "d"
   | "h"
   | "i"
   | "s"
   | "l"
   | "z";

  type TimeProperties = {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
  }

   class bbnDtDuration {

  }

  abstract class bbnDt <T> {
    constructor(value?: any);
    abstract readonly kind: bbnDtKind;
    setValid(valid: boolean): void;
    parse(input: string, format: string): bbnDt<any>;
    compare(other: any, unit?: string): -1 | 0 | 1;
    add(amount: number | bbnDtDuration | object, unit?: string): bbnDt<any>;
    subtract(amount: number | bbnDtDuration | object, unit?: string): bbnDt<any>;
    isBefore(other: bbnDt<any>): boolean;
    isAfter(other: bbnDt<any>): boolean;
    isSame(other: bbnDt<any>): boolean;
    equals(other: bbnDt<any>): boolean;
    toJSON(): object;
    toString(): string;
    year(v?: any): number | bbnDt<any>;
    month(v?: any): number | bbnDt<any>;
    day(v?: any): number | bbnDt<any>;
    hour(v?: any): number | bbnDt<any>;
    minute(v?: any): number | bbnDt<any>;
    second(v?: any): number | bbnDt<any>;
    weekday(v?: any, past?: any): number | bbnDt<any>;
    date(v?: any): string | bbnDt<any>;
    datetime(v?: any): string | bbnDt<any>;
    time(v?: any): string | bbnDt<any>;
    week(): number;
    format(format?: string): string;
    setWeekday(weekday: number | string, past?: boolean, locale?: string): bbnDt<any>;
    get YYYY(): string;
    get YY(): string;
    get MMMM(): string;
    get MMM(): string;
    get MM(): string;
    get M(): string;
    get EE(): string;
    get DD(): string;
    get d(): string;
    get dddd(): string;
    get ddd(): string;
    get D(): string;
    get HH(): string;
    get H(): string;
    get II(): string;
    get mm(): string;
    get I(): string;
    get SS(): string;
    get S(): string;
    get WW(): string;
    get W(): string;
  }

  class bbnDtDateTime extends bbnDt<Temporal.PlainDateTime> {
    get value(): Temporal.PlainDateTime;
    readonly kind: bbnDtKind;
    fdate(long?: boolean, withTime?: boolean, weekday?: boolean): string;
    ftime(withSeconds?: boolean): string;
  }

  class bbnDtDate extends bbnDt<Temporal.PlainDate> {
    get value(): Temporal.PlainDate;
    readonly kind: bbnDtKind;
    fdate(long?: boolean, weekday?: boolean): string;
    ftime(withSeconds?: boolean): string;
  }

  class bbnDtTime extends bbnDt<Temporal.PlainTime> {
    get value(): Temporal.PlainTime;
    readonly kind: bbnDtKind;
    ftime(withSeconds?: boolean): string;
  }

  class bbnDtYearMonth extends bbnDt<Temporal.PlainYearMonth> {
    get value(): Temporal.PlainYearMonth;
    readonly kind: bbnDtKind;
    fdate(long?: boolean): string;
  }

  class bbnDtMonthDay extends bbnDt<Temporal.PlainMonthDay> {
    get value(): Temporal.PlainMonthDay;
    readonly kind: bbnDtKind;
    fdate(long?: boolean): string;
  }

  class bbnDtZoned extends bbnDt<Temporal.ZonedDateTime> {
    get value(): Temporal.ZonedDateTime;
    readonly kind: bbnDtKind;
    fdate(long?: boolean, withTime?: boolean, weekday?: boolean): string;
    ftime(withSeconds?: boolean): string;
  }

  type bbnDtClasses = 
    | bbnDtDateTime
    | bbnDtDate
    | bbnDtTime
    | bbnDtYearMonth
    | bbnDtMonthDay
    | bbnDtZoned;
    
  interface Window {
    bbn: Bbn;
    Temporal: any;
    bbnData: any;
    scheduler: any;
  }  
  
  interface Bbn {
    version: string;
    opt: object;
    env: BbnEnv;
    var: Vars;
    dt: any;
    com: object;
    lng: Lng;
    fn: {
      [key: string]: (...args: any[]) => any;
    };
    db?: object;
    vue?: object;
    cp?: object;
    _: (st: string, ...args: string[]) => string;
    $: (st: string, p?: HTMLElement) => NodeListOf<HTMLElement>;
    app?: object;
    info?: {
      value: string;
      label: string;
      description: string;
      icon: string;
    }[];
  }
  
  interface BbnLoader {
    key: string;
    start: number;
    url: string;
    loader: any;
    aborter: any;
    loading: boolean;
    error: boolean;
    abort: boolean;
    errorMessage: boolean;
    success: boolean;
  }

  interface BbnAjaxCfg {
    successFn?: (url) => any;
    errorFn?: () => any;
    abortFn?: () => any;
    force?: boolean;
    url?: string;
    datatype?: string;
    e?: Event;
    ele?: HTMLElement;
    obj?: object;
  }
  
  interface BbnBasicObject {
    [key: string]: any;
  }

  interface BbnOrderItem {
    field: string;
    dir: string;
  }
  
	interface BbnResError {
		error: false|string;
		result: boolean;
	}

  interface BbnAjaxResult {
    prescript?: string;
    url?: string;
    content?: string;
    script?: string|((data?:object, ele?:HTMLElement|HTMLInputElement|HTMLTextAreaElement|null) => any);
    data?: object;
    postscript?: string;
    error?: string;
    errorTitle?: string;
  }

  interface bbnXHR {
    error?: string;
    message?: string;
    request?: string;
    response?: null|{
      data?: string;
      status?: object;
    }
  }

  const bbn: Bbn;
}

export {};