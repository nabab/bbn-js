/**
 * Polyfill for:
 * - Intl.Locale (minimal)
 * - Intl.Locale.prototype.getWeekInfo()
 * - Intl.Locale.prototype.weekInfo
 *
 * It does NOT touch DateTimeFormat / RelativeTimeFormat.
 * Those will be handled by FormatJS in setup-intl.ts.
 */
/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */
function parseLocaleTag(tag) {
    const str = String(tag !== null && tag !== void 0 ? tag : '');
    const parts = str.split('-').filter(Boolean);
    if (!parts.length) {
        return { language: 'und' };
    }
    let language = parts[0].toLowerCase();
    let script;
    let region;
    for (let i = 1; i < parts.length; i++) {
        const part = parts[i];
        if (!script && part.length === 4) {
            script = part[0].toUpperCase() + part.slice(1).toLowerCase();
        }
        else if (!region && (part.length === 2 || part.length === 3)) {
            region = part.toUpperCase();
        }
    }
    return { language, script, region };
}
const REGION_WEEK_INFO = import('../data/weekinfo-overrides.js');
function computeWeekInfo(localeInstance) {
    var _a, _b, _c;
    const tag = (_c = (_a = localeInstance.baseName) !== null && _a !== void 0 ? _a : (_b = localeInstance.toString) === null || _b === void 0 ? void 0 : _b.call(localeInstance)) !== null && _c !== void 0 ? _c : 'und';
    const { region } = parseLocaleTag(tag);
    const info = (region && REGION_WEEK_INFO[region]) || {
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
function ensureIntlLocalePolyfill() {
    if (typeof Intl === 'undefined') {
        return;
    }
    const hasNativeLocale = typeof Intl.Locale === 'function';
    if (!hasNativeLocale) {
        class PolyfilledLocale {
            constructor(tag) {
                const t = Array.isArray(tag) ? tag[0] : tag;
                const str = String(t !== null && t !== void 0 ? t : 'und');
                const parsed = parseLocaleTag(str);
                this._tag = str;
                this._language = parsed.language;
                this._script = parsed.script;
                this._region = parsed.region;
            }
            toString() {
                return this._tag;
            }
            get baseName() {
                return this._tag;
            }
            get language() {
                return this._language;
            }
            get script() {
                return this._script;
            }
            get region() {
                return this._region;
            }
            getWeekInfo() {
                return computeWeekInfo(this);
            }
            get weekInfo() {
                return computeWeekInfo(this);
            }
        }
        Intl.Locale = PolyfilledLocale;
    }
    const proto = Intl.Locale.prototype;
    if (typeof proto.getWeekInfo !== 'function') {
        proto.getWeekInfo = function getWeekInfo() {
            return computeWeekInfo(this);
        };
    }
    if (!Object.getOwnPropertyDescriptor(proto, 'weekInfo')) {
        Object.defineProperty(proto, 'weekInfo', {
            configurable: true,
            enumerable: true,
            get() {
                if (typeof this.getWeekInfo === 'function') {
                    return this.getWeekInfo();
                }
                return computeWeekInfo(this);
            },
        });
    }
}
/**
 * Call this once after loading any Intl polyfills (FormatJS, etc.).
 */
export function ensureIntlWeekInfoPolyfill() {
    ensureIntlLocalePolyfill();
}
