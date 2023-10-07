import { simpleHash1 } from './simpleHash1.js'  ;
import { simpleHash2 } from './simpleHash2.js'  ;

const simpleHash = function (str) {
	const part1 = simpleHash1(str).toString(16).padStart(8, '0');
	const part2 = simpleHash2(str).toString(16).padStart(8, '0');
	return part1 + part2;
};

export { simpleHash };
