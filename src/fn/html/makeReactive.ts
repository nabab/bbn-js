import { log } from '../browser/log' ;
import { createObject } from '../object/createObject' ;
import { isSymbol } from '../type/isSymbol' ;
import { isNumber } from '../type/isNumber' ;
import { isArray } from '../type/isArray' ;
import { warning } from '../browser/warning' ;
import { isFunction } from '../type/isFunction' ;
import { isSame } from '../type/isSame' ;

const makeReactive = function (obj, onSet, parent, parentProp) {
	const parentString = parent?.$cid || '';
	const prefix = '__bbn_' + (parentString ? parentString + '_' : '');
	if (obj && typeof obj === 'object' && [undefined, Object, Array].includes(obj.constructor)) {
		if (obj.__bbnIsProxy && obj.__bbnParent === parent) {
			return obj;
		}
		if (parent && parent.$options && parent.$options.name === 'bbn-loadbar') {
			log(['MAKING bbn-loadbar', obj]);
		}

		if (!obj.__bbnWatchers) {
			Reflect.defineProperty(obj, '__bbnWatchers', {
				value: createObject(),
				writable: true,
				configurable: true,
				enumerable: false,
			});
		}

		const handler = {
			get(target, key) {
				const realValue = Reflect.get(target, key);
				const realTarget = target.__bbnRoot || target;

				if (isSymbol(key)) {
					return Reflect.get(realTarget, key);
				}

				const propName = parentProp ? parentProp + '.' + key : key;
				const hiddenKey = prefix + (isNumber(key) ? key.toString() : key);

				if (
					['fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'].includes(key) &&
					isArray(target)
				) {
					return function (...args) {
						let res = realTarget[key](...args);
						warning('DOING ARRAY STUFF');
						log(target.__bbnParent);
						onSet(target, 'length', parent);
						return res;
					};
				}

				if (isFunction(realValue)) {
					return realValue;
				}

				if (key === '__bbnRoot') {
					let root = obj;
					while (root && root?.__bbnTarget) {
						root = root.__bbnTarget;
					}

					return root;
				}

				if (key === '__bbnIsProxy') {
					return true;
				}

				if (key === '__bbnTarget') {
					return target;
				}

				if (key === '__bbnParent') {
					return parent;
				}

				if (key === '__bbnWatchers') {
					return target.__bbnWatchers;
				}

				if (key.indexOf('__bbn_') === 0) {
					return Reflect.get(target, key);
				}

				if (key === 'length' && isArray(target.__bbnRoot || target)) {
					return realTarget.length;
				}

				if (!(key in target)) {
					return realValue;
				}

				if (
					realValue &&
					typeof realValue === 'object' &&
					[undefined, Object, Array].includes(realValue.constructor)
				) {
					if (realValue.__bbnIsProxy && realValue.__bbnParent === parent) {
						return realTarget[hiddenKey];
					}

					if (!(hiddenKey in realTarget)) {
						Reflect.defineProperty(realTarget, hiddenKey, {
							value: makeReactive(realValue, onSet, parent, propName),
							writable: true,
							configurable: true,
							enumerable: false,
						});
					}
					if (realTarget[hiddenKey].__bbnIsProxy && !realTarget.__bbnWatchers[parentString]) {
						realTarget.__bbnWatchers[parentString] = propName;
					}

					return realTarget[hiddenKey];
				}

				return realValue;
			},
			set(target, key, value) {
				if (isSymbol(key)) {
					return Reflect.get(target, key, value);
				}

				const realTarget = target.__bbnRoot || target;
				const propName = parentProp ? parentProp + '.' + key : key;
				if (isSymbol(key)) {
					return Reflect.get(target, key);
				}

				if (parent && parent.$options && parent.$options.name === 'bbn-loadbar') {
					log(['Setting proxy prop in ' + parent.$options.name, target, key, value]);
				}

				if (!isSame(realTarget[key], value)) {
					if (key.indexOf('__bbn_') === 0) {
						Reflect.defineProperty(realTarget, key, {
							value: makeReactive(value, onSet, parent, propName),
							writable: true,
							configurable: true,
							enumerable: false,
						});
					} else {
						if (
							value &&
							typeof value === 'object' &&
							[undefined, Object, Array].includes(value.constructor)
						) {
							const hiddenKey = prefix + (isNumber(key) ? key.toString() : key);
							Reflect.defineProperty(realTarget, hiddenKey, {
								value: makeReactive(value, onSet, parent, propName),
								writable: true,
								configurable: true,
								enumerable: false,
							});
							if (realTarget[hiddenKey].__bbnIsProxy && !realTarget.__bbnWatchers[parentString]) {
								realTarget.__bbnWatchers[parentString] = propName;
							}
						}
					}

					if (parent && parent.$options && parent.$options.name === 'bbn-loadbar') {
						log([
							'Setting proxy prop in ' +
								parent.$options.name +
								' ' +
								(isNumber(key) ? key.toString() : key),
							value,
							target,
						]);
					}

					Reflect.set(realTarget, key, value);
					onSet(target, key, parent);
				}

				return true;
			},
			defineProperty(target, key, description) {
				const realTarget = target;
				const propName = parentProp ? parentProp + '.' + key : key;
				if (key === '__bbnWatchers' || isSymbol(key) || key.indexOf('__bbn_') === 0) {
					Reflect.defineProperty(realTarget, key, description);
				} else {
					const hiddenKey = prefix + (isNumber(key) ? key.toString() : key);
					Reflect.defineProperty(realTarget, hiddenKey, {
						value: makeReactive(description.value, onSet, parent, propName),
						writable: true,
						configurable: true,
						enumerable: false,
					});
				}

				onSet(target, key, parent);
				return true;
			},
			deleteProperty(target, key) {
				const realTarget = target;
				if (key.indexOf('__bbn_') === 0) {
					Reflect.deleteProperty(realTarget, key);
				} else {
					const hiddenKey = prefix + (isNumber(key) ? key.toString() : key);
					Reflect.deleteProperty(realTarget, hiddenKey);
					Reflect.deleteProperty(target, key);
				}

				return true;
			},
		};

		return new Proxy(obj, handler);
	}

	return obj;
};

export { makeReactive };
