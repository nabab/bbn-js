import simpleHash1 from './simpleHash1.js';
import simpleHash2 from './simpleHash2.js';
export default function simpleHash(str) {
    var part1 = simpleHash1(str).padStart(8, '0');
    var part2 = simpleHash2(str).padStart(8, '0');
    return part1 + part2;
}
;
