import { isDom } from "../type/isDom";
import { isCp } from "../type/isCp";
import { log } from "../browser/log";

/**
 * Returns a function to give to JSON.stringify in order to avoid circular values.
 *
 * @returns Function
 */
const circularReplacer = function () {
  const visited = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (visited.has(value)) {
        return;
      }

      visited.add(value);
      if (![undefined, Object, Array, null].includes(value.constructor)) {
        if (isDom(value)) {
          if (value.bbnId) {
            value =
              "__BBN_DOM__" + value.tagName + "/" + value.bbnId + value.bbnHash;
          } else {
            value = "__BBN_DOM__" + value.tagName + "/" + value.className;
          }
        } else if (isCp(value)) {
          log("IS CP");
          value = "__BBN_CP__" + value.$options.name + "/" + value.$cid;
        } else {
          value = value.constructor.toString();
        }
      }
    }

    return value;
  };
};

export { circularReplacer };
