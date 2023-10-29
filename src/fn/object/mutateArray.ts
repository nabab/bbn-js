import { isArray } from '../type/isArray.js';
import { hash } from '../string/hash.js';

const mutateArray = (a1, a2) => {
  if (!isArray(a1, a2)) {
    throw new TypeError('mutateArray can only be called with arrays');
  }

  const mapA2 = new Map(a2.map(item => [hash(item), item]));
  let a1Pointer = 0;
  let a2Pointer = 0;

  while (a2Pointer < a2.length) {
    const a1Item = a1[a1Pointer];
    const a2Item = a2[a2Pointer];
    const a1Key = a1Item ? hash(a1Item) : undefined;
    const a2Key = hash(a2Item);

    if (a1Key === a2Key) {
      // The items match, move both pointers.
      a1Pointer++;
      a2Pointer++;
    } else if (mapA2.has(a1Key)) {
      // The item in a1 exists in a2 but is out of order, so it should be moved.
      // First, find the correct position to move it to.
      const correctIndex = a1.findIndex(item => hash(item) === a2Key);
      const [itemToMove] = a1.splice(correctIndex, 1);
      a1.splice(a1Pointer, 0, itemToMove);
      // Now that the item has been moved to the correct position, move pointers.
      a1Pointer++;
      a2Pointer++;
    } else {
      // The item in a1 does not exist in a2, so it should be removed.
      a1.splice(a1Pointer, 1);
    }

    // If there's no corresponding item in a1 for the current a2 item, insert it.
    if (a1[a1Pointer] === undefined && a2Pointer < a2.length) {
      a1.splice(a1Pointer, 0, a2Item);
      a1Pointer++;
      a2Pointer++;
    }
  }

  // If there are any remaining items in a1 that are not in a2, remove them.
  while (a1.length > a2.length) {
    a1.pop();
  }

  if (JSON.stringify(a1) !== JSON.stringify(a2)) {
    bbn.fn.log(a1, a2);
    throw new Error('mutateArray failed');
  }

  return a1;
};

export { mutateArray }
