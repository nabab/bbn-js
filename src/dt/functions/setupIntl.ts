// setup-intl.ts
import { ensureIntlWeekInfoPolyfill } from './intl-weekinfo-polyfill';

// ------------------------------
// Feature detection
// ------------------------------

function needsRelativeTimeFormatPolyfill(): boolean {
  return typeof Intl === 'undefined' || typeof (Intl as any).RelativeTimeFormat !== 'function';
}

/**
 * We ONLY care about style formats (dateStyle/timeStyle).
 * If creating a DateTimeFormat with dateStyle throws, we polyfill.
 */
function needsDateTimeStylePolyfill(): boolean {
  if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat !== 'function') {
    return true;
  }

  try {
    // If this works, the engine supports style formats well enough.
    // Chrome / modern Firefox / modern Safari pass this.
    new Intl.DateTimeFormat('en', { dateStyle: 'medium' });
    return false;
  } catch {
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
export async function setupIntl(): Promise<void> {
  const tasks: Promise<unknown>[] = [];

  // Polyfill RelativeTimeFormat only if missing (old Safari, old Firefox, etc.)
  if (needsRelativeTimeFormatPolyfill()) {
    tasks.push(
      (async () => {
        const rtModule = await import('@formatjs/intl-relativetimeformat/polyfill');
        // Ensure module is evaluated (rtModule is unused but import side-effect matters)
        void rtModule;
        // Add the locales you actually use:
        await import('@formatjs/intl-relativetimeformat/locale-data/en');
        // await import('@formatjs/intl-relativetimeformat/locale-data/it');
        // ...more locales if needed
      })()
    );
  }

  // Polyfill DateTimeFormat only when style formats are not supported
  if (needsDateTimeStylePolyfill()) {
    tasks.push(
      (async () => {
        const dtModule = await import('@formatjs/intl-datetimeformat/polyfill');
        void dtModule;
        // Optional but common: locale data
        await import('@formatjs/intl-datetimeformat/locale-data/en');
        // await import('@formatjs/intl-datetimeformat/locale-data/it');
        // If you need full timezone data (heavy!):
        // await import('@formatjs/intl-datetimeformat/add-all-tz');
      })()
    );
  }

  // Wait for all FormatJS polyfills that are actually needed
  if (tasks.length > 0) {
    await Promise.all(tasks);
  }

  // Finally, always patch weekInfo (Intl.Locale) – Firefox, Chrome, etc.
  ensureIntlWeekInfoPolyfill();
}
