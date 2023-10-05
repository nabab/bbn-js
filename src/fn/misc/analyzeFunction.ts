import { md5 } from '../string/md5';

interface Arg {
  name?: string;
  default?: string;
}

const analyzeFunction = function (fn) {
	const functionString = fn.toString();
	let all = functionString.split('');
	let exp = '';
	let isArrow = false;
	let isAsync = false;
	let hasFunction = false;
	let name = null;
	let parOpened = 0;
	let parClosed = 0;
	let args = [];
	let currentArg: Arg = {};
	let body;
	let currentQuote = '';
	let escapable = ['"', "'", '`'];
	let isEscaped = false;
	let settingDefault = false;

	for (let i = 0; i < all.length; i++) {
		if (all[i] === currentQuote && !isEscaped && currentQuote) {
			currentQuote = '';
			exp += all[i];
		} else if (currentQuote) {
			exp += all[i];
		} else if (escapable.includes(all[i]) && !isEscaped) {
			currentQuote = all[i];
			exp += all[i];
		} else if (all[i] === '(') {
			parOpened++;
			if (exp.trim() !== '') {
				if (exp.trim() === 'function') {
					hasFunction = true;
				}
				if (exp.trim() !== 'async') {
					name = exp.trim();
				}
				exp = '';
			}
		} else if (all[i] === ')') {
			if (parOpened === parClosed + 1) {
				if (settingDefault) {
					currentArg.default = exp.trim();
					settingDefault = false;
				} else if (exp) {
					currentArg.name = exp.trim();
				}
				if (currentArg.name || currentArg.default) {
					args.push(currentArg);
					currentArg = {};
				}
				exp = '';
			}
			parClosed++;
		} else if (all[i] === '=') {
			if (functionString.substr(i, 2) === '=>') {
				if (exp.trim() !== '' && parOpened === parClosed) {
					currentArg.name = exp.trim();
					args.push(currentArg);
					currentArg = {};
					exp = '';
				}
				isArrow = true;
				i++;
				continue;
			} else if (parOpened > parClosed && !settingDefault) {
				currentArg.name = exp.trim();
				exp = '';
				settingDefault = true;
			} else {
				exp += all[i];
			}
		} else if (all[i] === ',') {
			if (parOpened > parClosed) {
				if (settingDefault) {
					currentArg.default = exp.trim();
					settingDefault = false;
				} else if (exp) {
					currentArg.name = exp.trim();
				}
				if (currentArg.name || currentArg.default) {
					args.push(currentArg);
					currentArg = {};
				}
				exp = '';
			} else {
				throw Error("Unexpected ',' while parsing function");
			}
		} else if (all[i] === '{' || all[i] === '}') {
			body = functionString.substring(i).trim();
			break;
		} else if (isArrow) {
			body = functionString.substring(functionString.indexOf('=>') + 2).trim();
			break;
		} else if (all[i] === ' ') {
			if (exp.trim() !== '') {
				if (exp.trim() === 'async') {
					isAsync = true;
					exp = '';
				}
			}
		} else {
			exp += all[i];
		}
	}

	if (!body) {
		if (isArrow) {
			body = exp;
		} else {
			throw Error('Unexpected end of function while parsing function');
		}
	}

	const argString = args.map((arg) => arg.name + (arg.default ? ' = ' + arg.default : '')).join(', ');
	const hash = md5(body + (name ? '-' + name : '') + (argString ? '-' + argString : ''));

	return {
		body,
		args,
		argString,
		isArrow,
		hasFunction,
		name,
		isAsync,
		hash,
	};
};

export { analyzeFunction };
