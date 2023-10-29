import { isArray } from '../type/isArray.js';
import { hash } from '../string/hash.js';
var mutateArray = function (a1, a2) {
    if (!isArray(a1, a2)) {
        throw new TypeError('mutateArray can only be called with arrays');
    }
    var mapA2 = new Map(a2.map(function (item) { return [hash(item), item]; }));
    var a1Pointer = 0;
    var a2Pointer = 0;
    var _loop_1 = function () {
        var a1Item = a1[a1Pointer];
        var a2Item = a2[a2Pointer];
        var a1Key = a1Item ? hash(a1Item) : undefined;
        var a2Key = hash(a2Item);
        if (a1Key === a2Key) {
            // The items match, move both pointers.
            a1Pointer++;
            a2Pointer++;
        }
        else if (mapA2.has(a1Key)) {
            // The item in a1 exists in a2 but is out of order, so it should be moved.
            // First, find the correct position to move it to.
            var correctIndex = a1.findIndex(function (item) { return hash(item) === a2Key; });
            var itemToMove = a1.splice(correctIndex, 1)[0];
            a1.splice(a1Pointer, 0, itemToMove);
            // Now that the item has been moved to the correct position, move pointers.
            a1Pointer++;
            a2Pointer++;
        }
        else {
            // The item in a1 does not exist in a2, so it should be removed.
            a1.splice(a1Pointer, 1);
        }
        // If there's no corresponding item in a1 for the current a2 item, insert it.
        if (a1[a1Pointer] === undefined && a2Pointer < a2.length) {
            a1.splice(a1Pointer, 0, a2Item);
            a1Pointer++;
            a2Pointer++;
        }
    };
    while (a2Pointer < a2.length) {
        _loop_1();
    }
    // If there are any remaining items in a1 that are not in a2, remove them.
    while (a1.length > a2.length) {
        a1.pop();
    }
    return a1;
};
export { mutateArray };
