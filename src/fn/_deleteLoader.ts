import { search } from './search';
import { getRow } from './getRow';
import { isObject } from './isObject';

const _deleteLoader = function (requestId: string, res: any = null, isAbort: boolean = false) {
	let idx = search(bbn.env.loaders, { key: requestId });
	if (idx > -1) {
		let loader: BbnLoader = bbn.env.loaders.splice(idx, 1)[0];
		let history = getRow(bbn.env.loadersHistory, { key: requestId, start: loader.start });
		if (history) {
			history.loading = false;
			history.duration = new Date().getTime() - loader.start;
			if (typeof res === 'string') {
				history.errorMessage = res;
				history.error = !isAbort;
				history.abort = isAbort;
			} else if (isObject(res)) {
				history.success = true;
			}
		}
		return true;
	}
	return false;
};

export { _deleteLoader };
