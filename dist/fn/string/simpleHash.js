import { simpleHash1 } from './simpleHash1.js';
import { simpleHash2 } from './simpleHash2.js';
var simpleHash = function (str) {
    var part1 = simpleHash1(str).toString(16).padStart(8, '0');
    var part2 = simpleHash2(str).toString(16).padStart(8, '0');
    return part1 + part2;
};
export { simpleHash };
