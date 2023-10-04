import { log } from './log';

const warning = function (message: string): void
{
	const args: any[] = ['BBN: ' + message];
  const obj: object = {
		_bbn_console_mode: 'warn',
		_bbn_console_level: 2,
		_bbn_console_style: 'color: #E64141; background: #F7E195; font-size: 14px',
	};
	args.unshift(obj);
	log.apply(this, args);
};

export { warning };
