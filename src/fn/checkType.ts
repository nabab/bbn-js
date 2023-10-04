import { isArray } from './isArray';
import { each } from './each';
import { isFunction } from './isFunction';
import { isString } from './isString';
import { correctCase } from './correctCase';
import { error } from './error';
import { log } from './log';

const checkType = function (value: any, type: object|string, msg?: string, ...logs) {
	let ok = false;
	if (!isArray(type)) {
		type = [type];
	}
	const typesList = [];
	each(type, (t) => {
		if (t === String) {
			t = 'string';
		} else if (t === Number) {
			t = 'number';
		} else if (t === Array) {
			t = 'array';
		} else if (t === Boolean) {
			t = 'boolean';
		} else if (t === Object) {
			t = 'object';
		} else if (t === Function) {
			t = 'function';
		}
		if (isFunction(t)) {
			typesList.push(t.name || t.constructor?.name || t.toString());
			if (value instanceof t) {
				ok = true;
				return false;
			}
		} else if (!isString(t) || !isFunction(bbn.fn['is' + correctCase(t)])) {
			error(`The type ${t} is not recognized`);
		} else if (bbn.fn['is' + correctCase(t)](value)) {
			ok = true;
			return false;
		} else {
			typesList.push(t);
		}
	});

	if (!ok) {
		log(['Value given', value, 'type', typeof value, 'expected', typesList.join(' or ')]);
		if (logs.length) {
			log(logs);
		}

		throw new Error(
			(msg ? msg + ' - ' : '') + bbn._('The value should be a %s', typesList.join(' ' + bbn._('or a') + ' '))
		);
	}
};

export { checkType };
