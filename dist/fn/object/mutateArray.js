import { isArray } from '../type/isArray.js';
import { hash } from '../string/hash.js';
var mutateArray = function (a1, a2) {
    if (!isArray(a1, a2)) {
        throw new TypeError('mutateArray can only be called with arrays');
    }
    var mapA2 = new Map(a2.map(function (item) { return [hash(item), item]; }));
    var a1Ordered = [];
    // Build a1Ordered to have the same order and contents as a2
    a2.forEach(function (item) {
        if (mapA2.has(hash(item))) {
            a1Ordered.push(item);
        }
    });
    // Remove items from a1 that are not in a2
    var i = a1.length;
    while (i--) {
        if (!mapA2.has(hash(a1[i]))) {
            a1.splice(i, 1);
        }
    }
    var _loop_1 = function (j) {
        if (j >= a1.length || hash(a1[j]) !== hash(a1Ordered[j])) {
            // Find the index of the item in a1, if it exists
            var indexInA1 = a1.findIndex(function (item) { return hash(item) === hash(a1Ordered[j]); });
            if (indexInA1 !== -1) {
                // Move the item to the correct position if it already exists in a1
                var itemToMove = a1.splice(indexInA1, 1)[0];
                a1.splice(j, 0, itemToMove);
            }
            else {
                // Insert the new item from a2 into a1
                a1.splice(j, 0, a1Ordered[j]);
            }
        }
    };
    // Insert or move items to match the order of a2
    for (var j = 0; j < a1Ordered.length; j++) {
        _loop_1(j);
    }
    // If a1 has extra items at the end (not present in a2), remove them
    if (a1.length > a1Ordered.length) {
        a1.splice(a1Ordered.length, a1.length - a1Ordered.length);
    }
    return a1;
};
export { mutateArray };
