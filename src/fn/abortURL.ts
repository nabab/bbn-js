import { each } from './each';
import { filter } from './filter';

const abortURL = function (url) {
	each(filter(bbn.env.loaders, { url: url }), (a) => {
		if (a && a.source) {
			a.source.cancel('Operation canceled by the user.');
		} else {
			throw new Error('Impossible to find the loader with URL ' + url);
		}
	});
};

export { abortURL };
