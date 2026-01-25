import isObject from '../type/isObject.js';
import hash from '../string/hash.js';
import isSame from '../type/isSame.js';
import checkType from '../type/checkType.js';
import isArray from '../type/isArray.js';
import mutateArray from './mutateArray.js';
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
            if (isObject(a1[n], a2[n])) {
                mutateObject(a1[n], a2[n], hashFn);
                return;
            }
            if (isArray(a1[n], a2[n])) {
                mutateArray(a1[n], a2[n], hashFn);
                return;
            }
            a1[n] = a2[n];
        }
    });
    return a1;
}
