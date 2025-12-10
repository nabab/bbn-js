// generate-weekinfo-overrides.ts
//
// Run with:
//   npx tsx generate-weekinfo-overrides.ts > weekinfo-overrides.txt
//
// It prints lines like:
//   US: { firstDay: 7, weekend: [6, 7], minimalDays: 1 },

import * as fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

type WeekDataJson = {
  supplemental: {
    weekData: {
      firstDay: Record<string, string>;
      weekendStart: Record<string, string>;
      weekendEnd: Record<string, string>;
      minDays: Record<string, string>;
    };
  };
};

const DAY_TO_NUM: Record<string, number> = {
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
  sun: 7,
};

// Your baseline config (the one you *don’t* want to list)
const BASE = {
  firstDay: 1,
  weekend: [6, 7] as number[],
  minimalDays: 4,
};

function loadWeekData(): WeekDataJson['supplemental']['weekData'] {
  // Let Node resolve cldr-core for us, independent of script location
  const weekDataPath = require.resolve('cldr-core/supplemental/weekData.json');
  const json = JSON.parse(fs.readFileSync(weekDataPath, 'utf8')) as WeekDataJson;
  return json.supplemental.weekData;
}

function territoryConfig(
  code: string,
  wd: WeekDataJson['supplemental']['weekData']
) {
  const firstDayStr = wd.firstDay[code] ?? wd.firstDay['001'];       // default
  const minDaysStr = wd.minDays[code] ?? wd.minDays['001'];         // default
  const weekendStartStr =
    wd.weekendStart[code] ?? wd.weekendStart['001'];                // default
  const weekendEndStr =
    wd.weekendEnd[code] ?? wd.weekendEnd['001'];                    // default

  const firstDay = DAY_TO_NUM[firstDayStr];
  const minimalDays = Number(minDaysStr);

  const startNum = DAY_TO_NUM[weekendStartStr];
  const endNum = DAY_TO_NUM[weekendEndStr];

  // Build weekend array as continuous range start..end (wrap if needed)
  const weekend: number[] = [];
  let d = startNum;
  while (true) {
    weekend.push(d);
    if (d === endNum) break;
    d = d === 7 ? 1 : d + 1;
  }

  return { firstDay, weekend, minimalDays };
}

function differentFromBase(cfg: {
  firstDay: number;
  weekend: number[];
  minimalDays: number;
}): boolean {
  if (cfg.firstDay !== BASE.firstDay) return true;
  if (cfg.minimalDays !== BASE.minimalDays) return true;
  if (cfg.weekend.length !== BASE.weekend.length) return true;
  return cfg.weekend.some((d, i) => d !== BASE.weekend[i]);
}

function main() {
  const wd = loadWeekData();

  // Collect all territory codes that appear in any of the maps
  const codes = new Set<string>();
  [wd.firstDay, wd.weekendStart, wd.weekendEnd, wd.minDays].forEach((map) => {
    Object.keys(map).forEach((code) => {
      if (code !== '001') codes.add(code);
    });
  });

  const sortedCodes = Array.from(codes).sort();

  for (const code of sortedCodes) {
    const cfg = territoryConfig(code, wd);
    if (!differentFromBase(cfg)) continue;

    const weekendStr = `[${cfg.weekend.join(', ')}]`;
    console.log(
      `${code}: { firstDay: ${cfg.firstDay}, weekend: ${weekendStr}, minimalDays: ${cfg.minimalDays} },`
    );
  }
}

main();
