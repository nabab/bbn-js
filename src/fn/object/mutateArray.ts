import { isArray } from '../type/isArray.js';
import { hash } from '../string/hash.js';

const mutateArray = function(a1, a2) {
  if (!isArray(a1) || !isArray(a2)) {
    throw new TypeError('mutateArray can only be called with arrays');
  }

  // Create a map from the second array using the identity function to get the key
  const mapA2 = new Map(a2.map(item => [hash(item), item]));
  const mapA1 = new Map(a1.map(item => [hash(item), item]));

  // Result array to build the correct order
  const result = [];

  // Iterate over a2 and build the result array
  for (const item of a2) {
    const key = hash(item);
    if (mapA1.has(key)) {
      // If the item is in a1, use the item from a2 to preserve the order
      result.push(mapA2.get(key));
    } else {
      // If the item is not in a1, it's a new item to be added
      result.push(item);
    }
  }

  // Clear a1 and push the ordered results into it
  a1.splice(0, a1.length, ...result);

  return a1;
};

export { mutateArray }
