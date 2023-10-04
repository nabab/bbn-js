import { getLoader } from './getLoader';

const abort = function (requestId) {
	let loader = getLoader(requestId);
	if (loader && loader.source) {
		//_deleteLoader(requestId);
		loader.source.cancel('Operation canceled by the user.');
	}
	/*
      else {
        throw new Error("Impossible to find the loader " + requestId);
      }
      */
};

export { abort };
