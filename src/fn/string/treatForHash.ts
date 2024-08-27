import isDom from '../type/isDom.js';
import isCp from '../type/isCp.js';

/**
 * Makes a string out of anything
 * @param {*} value
 * @param {Function} fn
 * @param {Number} [depth=null]
 * @param {Number} [level=0]
 * @param {WeakSet} [visited=null]
 * @returns {String}
 */
export default function treatForHash(value, depth = null, level = 0, visited = null, fn = null) {
  if (!level && !visited) {
    visited = new WeakSet();
  }

  if (value === undefined) {
    value = "__BBN_UNDEFINED__";
  }
  else if (value === null) {
    value = "__BBN_NULL__";
  }
  else if (value === null) {
    value = "__BBN_NULL__";
  }
  else if (typeof value === 'function') {
    value = "__BBN_FUNCTION__" + value.toString();
  }
  else if (typeof value === 'symbol') {
    value = "__BBN_SYMBOL__" + value.toString();
  }
  else if (typeof value === 'string') {
    value = "__BBN_STRING__" + value;
  }
  else if (typeof value === 'number') {
    value = "__BBN_NUMBER__" + value.toString();
  }
  else if (typeof value === 'boolean') {
    value = "__BBN_BOOLEAN__" + value.toString();
  }
  else if (![undefined, Object, Array, null].includes(value?.constructor)) {
    if (isDom(value)) {
      if (value.bbnId) {
        value =
          "__BBN_DOM__" + value.tagName + "/" + value.bbnId + value.bbnHash;
      } else {
        value = "__BBN_DOM__" + value.tagName + "/" + value.className;
      }
    } else if (isCp(value)) {
      value = "__BBN_CP__" + value.$options.name + "/" + value.$cid;
    } else {
      value = "__BBN_OBJECT__" + value.constructor.toString();
    }
  }
  else if (bbn.fn.isArray(value)) {
    if (visited.has(value) || (depth && (depth < level))) {
      value = "__BBN_ARRAY__" + value.constructor.toString();
    }
    else {
      visited.add(value);
      let st = '';
      for (let i = 0; i < value.length; i++) {
        st += "__BBN_ITEM" + i.toString() + "__" + fn(value[i], depth, level + 1, visited, fn);
      }

      value = "__BBN_ARRAY__" + st;
    }
  }
  else if (typeof value === 'object') {
    if (visited.has(value) || (depth && (depth < level))) {
      value = "__BBN_OBJECT__" + (value.constructor ? value.constructor.toString() : '');
    }
    else {
      visited.add(value);
      let st = '';
      for (let n in value) {
        let idx = n;
        if (typeof idx !== 'string') {
          idx = fn(idx, fn, 1, 1);
        }

        st += "__BBN_PROP_" + idx + "__" + fn(value[n], depth, level + 1, visited, fn);
      }

      value = "__BBN_OBJECT__" + st;
    }
  }

  return value;
};
