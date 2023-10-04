import { search } from './search';

const getLoader = function (requestId: string): BbnLoader | null
{
	let idx = search(bbn.env.loaders, {key: requestId});
	if (idx > -1) {
		return bbn.env.loaders[idx];
	}

	return null;
};

export { getLoader };
