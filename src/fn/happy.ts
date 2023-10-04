import { log } from './log';

const happy = function (...args) {
	args.unshift({
		_bbn_console_level: 3,
		_bbn_console_style: 'color: white; background: green; font-size: 18px;',
	});
	log.apply(this, args);
	return this;
};

export { happy };
