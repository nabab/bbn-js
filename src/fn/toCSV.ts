import { each } from './each';
import { isArray } from './isArray';
import { replaceAll } from './replaceAll';

const toCSV = function (arr: any[], valSep:string = ',', rowSep:string = '', valEsc:string = '"'): string
{
	if (!valSep) {
		valSep = ',';
	}
	if (!valEsc) {
		valEsc = '"';
	}
	let csvContent = '';
	let total = arr.length;
	each(arr, (a, i) => {
		let num = isArray(a) ? a.length : Object.values(a).length;
		let j = 0;
		each(a, (b) => {
			if (typeof b === 'string') {
				csvContent += valEsc + replaceAll(valEsc, '\\' + valEsc, b) + valEsc;
			} else if (b === 0) {
				csvContent += '0';
			} else if (!b) {
				csvContent += valEsc + valEsc;
			} else {
				csvContent += b.toString ? b.toString() : valEsc + valEsc;
			}
			j++;
			if (j < num) {
				csvContent += valSep;
			}
		});
		if (i < total - 1) {
			csvContent += rowSep + '\n';
		}
	});
	return csvContent;
};

export { toCSV };
