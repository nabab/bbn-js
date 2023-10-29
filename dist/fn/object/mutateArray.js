var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { isArray } from '../type/isArray.js';
import { hash } from '../string/hash.js';
var mutateArray = function (a1, a2) {
    if (!isArray(a1) || !isArray(a2)) {
        throw new TypeError('mutateArray can only be called with arrays');
    }
    // Create a map from the second array using the identity function to get the key
    var mapA2 = new Map(a2.map(function (item) { return [hash(item), item]; }));
    var mapA1 = new Map(a1.map(function (item) { return [hash(item), item]; }));
    // Result array to build the correct order
    var result = [];
    // Iterate over a2 and build the result array
    for (var _i = 0, a2_1 = a2; _i < a2_1.length; _i++) {
        var item = a2_1[_i];
        var key = hash(item);
        if (mapA1.has(key)) {
            // If the item is in a1, use the item from a2 to preserve the order
            result.push(mapA2.get(key));
        }
        else {
            // If the item is not in a1, it's a new item to be added
            result.push(item);
        }
    }
    // Clear a1 and push the ordered results into it
    a1.splice.apply(a1, __spreadArray([0, a1.length], result, false));
    return a1;
};
export { mutateArray };
