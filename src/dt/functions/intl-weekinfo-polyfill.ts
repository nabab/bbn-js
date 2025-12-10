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
  firstDay: number
  ;
  /** Weekend days as 1–7 (1 = Monday, 7 = Sunday) */
  weekend: number[];
  /** Minimal days required in the first week of the year */
  minimalDays: number;
}

interface ParsedLocaleTag {
  language: string;
  script?: string;
  region?: string;
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function parseLocaleTag(tag: unknown): ParsedLocaleTag {
  const str = String(tag ?? '');
  const parts = str.split('-').filter(Boolean);

  if (!parts.length) {
    return { language: 'und' };
  }

  let language = parts[0].toLowerCase();
  let script: string | undefined;
  let region: string | undefined;

  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    if (!script && part.length === 4) {
      script = part[0].toUpperCase() + part.slice(1).toLowerCase();
    } else if (!region && (part.length === 2 || part.length === 3)) {
      region = part.toUpperCase();
    }
  }

  return { language, script, region };
}

const REGION_WEEK_INFO: Object = import('../data/weekinfo-overrides.js');

function computeWeekInfo(localeInstance: Intl.Locale): WeekInfo {
  const tag =
    (localeInstance as any).baseName ??
    localeInstance.toString?.() ??
    'und';

  const { region } = parseLocaleTag(tag);

  const info =
    (region && (REGION_WEEK_INFO as any)[region]) || {
      firstDay: 1,
      weekend: [6, 7],
      minimalDays: 4,
    };

  return {
    firstDay: info.firstDay,
    weekend: info.weekend.slice(),
    minimalDays: info.minimalDays,
  };
}

/* -------------------------------------------------------------------------- */
/*  Polyfill entry                                                            */
/* -------------------------------------------------------------------------- */

function ensureIntlLocalePolyfill(): void {
  if (typeof Intl === 'undefined') {
    return;
  }

  const hasNativeLocale = typeof (Intl as any).Locale === 'function';

  if (!hasNativeLocale) {
    class PolyfilledLocale implements Intl.Locale {
      private _tag: string;
      private _language: string;
      private _script?: string;
      private _region?: string;

      minimize!: () => Intl.Locale;
      maximize!: () => Intl.Locale;

      constructor(tag?: string | string[]) {
        const t = Array.isArray(tag) ? tag[0] : tag;
        const str = String(t ?? 'und');
        const parsed = parseLocaleTag(str);

        this._tag = str;
        this._language = parsed.language;
        this._script = parsed.script;
        this._region = parsed.region;
      }

      toString(): string {
        return this._tag;
      }

      get baseName(): string {
        return this._tag;
      }

      get language(): string {
        return this._language;
      }

      get script(): string | undefined {
        return this._script;
      }

      get region(): string | undefined {
        return this._region;
      }

      getWeekInfo?(): WeekInfo {
        return computeWeekInfo(this as any);
      }

      get weekInfo(): WeekInfo {
        return computeWeekInfo(this as any);
      }
    }

    (Intl as any).Locale = PolyfilledLocale;
  }

  const proto = (Intl as any).Locale.prototype as Intl.Locale & {
    [key: string]: unknown;
  };

  if (typeof proto.getWeekInfo !== 'function') {
    proto.getWeekInfo = function getWeekInfo(this: Intl.Locale): WeekInfo {
      return computeWeekInfo(this);
    };
  }

  if (!Object.getOwnPropertyDescriptor(proto, 'weekInfo')) {
    Object.defineProperty(proto, 'weekInfo', {
      configurable: true,
      enumerable: true,
      get(this: Intl.Locale): WeekInfo {
        if (typeof (this as any).getWeekInfo === 'function') {
          return (this as any).getWeekInfo();
        }
        return computeWeekInfo(this);
      },
    });
  }
}

/**
 * Call this once after loading any Intl polyfills (FormatJS, etc.).
 */
export function ensureIntlWeekInfoPolyfill(): void {
  ensureIntlLocalePolyfill();
}
