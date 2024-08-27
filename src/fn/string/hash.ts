import simpleHash from './simpleHash.js';
import treatForHash from './treatForHash.js'

/**
 * Makes a hash out of anything
 * @param {[*]} args
 * @returns {String}
 */
export default function hash(...args) {
  //log(obj);
  let st = "";
  let depth = null;
  if ((args.length === 2) && (typeof args[1] === 'number')) {
    depth = args[1];
    args = [args[0]];
  }

  for (let i in args) {
    st += treatForHash(args[i], depth, 0, null, treatForHash);
  }

  return simpleHash(st);
};
