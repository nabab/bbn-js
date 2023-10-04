import { log } from './log';

const info = function (...args) {
	args.unshift({
		//_bbn_console_mode: "info",
		_bbn_console_level: 4,
		_bbn_console_style: 'color: #EEE; background: blue; font-size: 12px;',
	});
	log.apply(this, args);
	return this;
};

export { info };
