import { isDom } from './isDom';

const isCp = function (...args: any[]): boolean
{
	if (!args.length) {
		return false;
	}

	if (!('cp' in bbn) || !('isComponent' in bbn['cp']) || !(typeof bbn['cp'].isComponent === 'function')) {
		return false;
	}

	for (let a of args) {
		let res = bbn.cp.isComponent(a);
		if (!res || isDom(a) || !a.$el?.bbnCid) {
			return false;
		}
	}

	return true;
};

export { isCp };
