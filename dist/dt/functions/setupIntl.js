var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// setup-intl.ts
import { ensureIntlWeekInfoPolyfill } from './intl-weekinfo-polyfill';
// ------------------------------
// Feature detection
// ------------------------------
function needsRelativeTimeFormatPolyfill() {
    return typeof Intl === 'undefined' || typeof Intl.RelativeTimeFormat !== 'function';
}
/**
 * We ONLY care about style formats (dateStyle/timeStyle).
 * If creating a DateTimeFormat with dateStyle throws, we polyfill.
 */
function needsDateTimeStylePolyfill() {
    if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat !== 'function') {
        return true;
    }
    try {
        // If this works, the engine supports style formats well enough.
        // Chrome / modern Firefox / modern Safari pass this.
        new Intl.DateTimeFormat('en', { dateStyle: 'medium' });
        return false;
    }
    catch (_a) {
        // Old Safari, old Firefox, old Chrome, etc.
        return true;
    }
}
// ------------------------------
// Conditional polyfill loader
// ------------------------------
/**
 * Call this once at startup *before* your app uses Intl.
 *
 * Example:
 *   import { setupIntl } from './setup-intl';
 *   await setupIntl();
 */
export default function setupIntl() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = [];
        // Polyfill RelativeTimeFormat only if missing (old Safari, old Firefox, etc.)
        if (needsRelativeTimeFormatPolyfill()) {
            tasks.push((() => __awaiter(this, void 0, void 0, function* () {
                const rtModule = yield import('@formatjs/intl-relativetimeformat/polyfill.js');
                // Ensure module is evaluated (rtModule is unused but import side-effect matters)
                void rtModule;
                // Add the locales you actually use:
                yield import('@formatjs/intl-relativetimeformat/locale-data/en.js');
                // await import('@formatjs/intl-relativetimeformat/locale-data/it');
                // ...more locales if needed
            }))());
        }
        // Polyfill DateTimeFormat only when style formats are not supported
        if (needsDateTimeStylePolyfill()) {
            tasks.push((() => __awaiter(this, void 0, void 0, function* () {
                const dtModule = yield import('@formatjs/intl-datetimeformat/polyfill');
                void dtModule;
                // Optional but common: locale data
                yield import('@formatjs/intl-datetimeformat/locale-data/en');
                // await import('@formatjs/intl-datetimeformat/locale-data/it');
                // If you need full timezone data (heavy!):
                // await import('@formatjs/intl-datetimeformat/add-all-tz');
            }))());
        }
        // Wait for all FormatJS polyfills that are actually needed
        if (tasks.length > 0) {
            yield Promise.all(tasks);
        }
        // Finally, always patch weekInfo (Intl.Locale) – Firefox, Chrome, etc.
        ensureIntlWeekInfoPolyfill();
    });
}
