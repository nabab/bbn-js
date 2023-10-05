import { getLoader } from './getLoader';

/**
 * Aborts (client side) the XHR corresponding to the given ID if it still exists.
 * 
 * This will throw an error if the loader can't be found.
 * 
 * @method   abort
 * @global   
 * @memberof bbn.fn
 * 
 * @example
 * ```javascript
 * bbn.fn.post('my/script', {a: 1, b: 2});
 * let requestId = bbn.fn.getRequestId('my/script', {a: 1, b: 2});
 * if (requestId) {
 *   bbn.fn.abort(requestId);
 * }
 * ```
 * 
 * @param    {String} requestId An ID generated by getRequestId
 * 
 * @returns  {undefined}  
 */
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
