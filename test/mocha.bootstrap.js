// test/mocha.bootstrap.js
import "jsdom-global/register.js";

// ✅ carica il polyfill Temporal e rendilo globale
import { Temporal } from "temporal-polyfill"; // oppure "@js-temporal/polyfill"
globalThis.Temporal = Temporal;

// (opzionale) lingua per i formatter
try {
  Object.defineProperty(globalThis.navigator, "languages", {
    value: ["it"],
    configurable: true,
  });
  Object.defineProperty(globalThis.navigator, "language", {
    value: "it",
    configurable: true,
  });
} catch {}