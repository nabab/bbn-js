import { isFunction } from './isFunction';

const defaultConfirmFunction = function (text: string, yesFn: () => any, noFn: () => any) {
	let ok = 0;
	if (confirm(text)) {
		if (isFunction(yesFn)) {
			yesFn();
			ok = 1;
		}
	}
	if (!ok && isFunction(noFn)) {
		noFn();
	}
};

export { defaultConfirmFunction };
