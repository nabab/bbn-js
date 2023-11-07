import { isArray } from '../type/isArray.js';
import { hash } from '../string/hash.js';
import { isSame } from '../type/isSame.js';
import { search } from './search.js';


const mutateArray = (a1, a2, onInsert) => {
  if (!isArray(a1, a2)) {
    throw new TypeError('mutateArray can only be called with arrays');
  }

  const mapA2 = new Map(a2.map(item => [hash(item), item]));
  let a1Ordered = [];

  // Build a1Ordered to have the same order and contents as a2
  a2.forEach(item => {
    a1Ordered.push(item);
  });

  // Remove items from a1 that are not in a2
  let i = a1.length;
  while (i--) {
    if (!mapA2.has(hash(a1[i]))) {
      a1.splice(i, 1);
    }
  }

  // Insert or move items to match the order of a2
  for (let j = 0; j < a1Ordered.length; j++) {
    if ((j >= a1.length) || !isSame(a1[j], a1Ordered[j])) {
      // Find the index of the item in a1, if it exists
      const indexInA1 = search(a1, a1Ordered[j]);
      if (indexInA1 !== -1) {
        // Move the item to the correct position if it already exists in a1
        const [itemToMove] = a1.splice(indexInA1, 1);
        a1.splice(j, 0, itemToMove);
      } else {
        // Insert the new item from a2 into a1
        a1.splice(j, 0, onInsert ? onInsert(a1Ordered[j]) : a1Ordered[j]);
      }
    }
  }

  // If a1 has extra items at the end (not present in a2), remove them
  if (a1.length > a1Ordered.length) {
    a1.splice(a1Ordered.length, a1.length - a1Ordered.length);
  }

  return a1;
}

export { mutateArray }
