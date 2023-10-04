import { each } from './each';

const setProperty = function (obj: object, prop: string, value: any, force?: boolean): void
{
	if (typeof obj === 'object' && typeof prop === 'string') {
		let o = obj;
		const bits = prop.split('.');
		each(bits, (v, i) => {
			if (!o) {
				if (!force) {
					throw new Error(bbn._('The object is invalid'));
				}
				o = {};
			}

			if (bits.length - 1 === i) {
				o[v] = value;
			} else {
				o = o[v];
			}
		});
	}
};

export { setProperty };
