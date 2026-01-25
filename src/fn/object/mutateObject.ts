import isObject from '../type/isObject.js';
import hash from '../string/hash.js';
import isSame from '../type/isSame.js';
import checkType from '../type/checkType.js';


export default function mutateObject(a1, a2, hashFn) {
  if (!isObject(a1, a2)) {
    throw new TypeError('mutateObject can only be called with objects parameters');
  }

  if (hashFn) {
    checkType(hashFn, 'function', 'The hash function must be a function');
  }
  else {
    hashFn = hash;
  }

  const mapA2 = Object.keys(a2);

  // Remove items from a1 that are not in a2
  for (let n in a1) {
    if (!mapA2.includes(n)) {
      delete a1[n];
    }
  }

  mapA2.forEach(n => {
    if (!isSame(a1[n], a2[n])) {
      a1[n] = a2[n];
    }
  });

  return a1;
}
