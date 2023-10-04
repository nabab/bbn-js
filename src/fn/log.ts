import { isFunction } from './isFunction';

const log = function (...args) {
	if (window.console !== undefined) {
		let cfg;
		let level = 5;
		let fn = 'log';
		if (args[0] && typeof args[0] === 'object' && args[0]._bbn_console_style) {
			if (args[0]._bbn_console_mode && isFunction(console[args[0]._bbn_console_mode])) {
				fn = args[0]._bbn_console_mode;
			} else {
				cfg = args[0]._bbn_console_style;
				level = args[0]._bbn_console_level;
			}

			args.shift();
		}

		if (bbn.env.loggingLevel >= level) {
			let i = 0;
			while (i < args.length) {
				let t = typeof args[i];
				if (t === 'string' || t === 'number') {
					window.console[fn]('%c %s ', cfg, args[i]);
				} else {
					window.console[fn](args[i]);
				}
				i++;
			}
		}
	}
	return this;
};

export { log };
