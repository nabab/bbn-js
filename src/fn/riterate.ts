import { iterate } from './iterate';

const riterate = function (obj: object, fn: (a: any, b: string) => any, noPrivate?: boolean) {
	return iterate(obj, fn, noPrivate, true);
};

export { riterate };
