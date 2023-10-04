import { each } from './each';

const _private = [];

const startChrono = function (name) {
	let now = new Date().getTime();
	let h1 = 3600 * 1000;
	if (_private.length) {
		each(_private, (t, n) => {
			if (now - t > h1) {
				delete _private[n];
			}
		});
		now = new Date().getTime();
	}
	_private[name] = now;
};

const stopChrono = function (name) {
	if (_private[name]) {
		let now = new Date().getTime();
		let diff = now - _private[name];
		return diff;
	}
};


export { startChrono, stopChrono};
