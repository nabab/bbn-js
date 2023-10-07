import { each } from '../loop/each.js'  ;

const isPropSize = function (name) {
	let isTrue = false;
	each(['width', 'height', 'gap', 'margin', 'padding', 'top', 'left', 'right', 'bottom'], (a) => {
		if (name.indexOf(a) !== -1) {
			isTrue = true;
			return false;
		}
	});

	return isTrue;
};

export { isPropSize };
