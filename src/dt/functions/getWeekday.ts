
const getWeekday = (n: 0 | 1 | 2 | 3 | 4 | 5 | 6, mode: string = 'long', locale?: string): any => {
  if (!mode) {
    const letter = getWeekday(n, 'narrow', locale);
    const abbr = getWeekday(n, 'short', locale);
    const full = getWeekday(n, 'long', locale);
    return {
      letter,
      abbr,
      full,
      long: full,
      short: abbr,
      narrow: letter
    };
  }

  let m: 'long' | 'short' | 'narrow';
  if (mode === 'letter') {
    m = 'narrow';
  }
  else if (mode === 'abbr') {
    m = 'short';
  }
  else if (mode === 'full') {
    m = 'long';
  }
  else if (!['long', 'short', 'narrow'].includes(mode)) {
    throw new Error('Invalid mode for getWeekDay: ' + mode + '. Allowed values are "long", "short", "narrow", "letter", "abbr", "full".');
  }
  else {
    m = mode as 'long' | 'short' | 'narrow';
  }

  // Create a date with the right weekday
  // 2023-01-01 was a Sunday → base for offset
  const base = new Date(2023, 0, 1 + n);
  return base.toLocaleDateString([locale || bbn.env.lang, ...navigator.languages], { weekday: m });
};

const getWeekdayIndex = (name: string, locale?: string): number => {
  const loc = locale || bbn.env.lang;
  const input = name.trim().toLowerCase();
  // Build a localized map only once per locale (optional optimization)
  const langs = [loc, ...navigator.languages];
  for (let i = 0; i < langs.length; i++) {
    if (!langs[i]) {
      continue;
    }
    
    const formatter = new Intl.DateTimeFormat(langs[i], { weekday: "long" });
    // Generate localized weekday names for Sun → Sat
    for (let i = 0; i < 7; i++) {
      // 2023-01-01 was Sunday
      const date = new Date(2023, 0, 1 + i);
      const localized = formatter.format(date).toLowerCase();

      if (localized === input) {
        return i; // JS weekday number
      }
    }
  }

  throw new Error(`Unknown weekday name '${name}' for locale '${loc}'`);
}

export { getWeekday, getWeekdayIndex };
