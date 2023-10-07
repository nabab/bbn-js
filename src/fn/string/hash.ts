import { log } from '../browser/log' ;
import { isDom } from '../type/isDom' ;
import { isCp } from '../type/isCp' ;
import { circularReplacer } from '../object/circularReplacer' ;
import { simpleHash } from './simpleHash' ;

/**
 * Makes a hash out of anything
 * @param {Object|Array} obj
 * @returns {String}
 */
const hash = function (obj) {
  //log(obj);
  let st = "__bbn__";
  for (let i in arguments) {
    if (arguments[i]) {
      let value = arguments[i];
      if (isDom(value)) {
        if (value.bbnId) {
          st +=
            "__BBN_DOM__" + value.tagName + "/" + value.bbnId + value.bbnHash;
        } else {
          st += "__BBN_DOM__" + value.tagName + "/" + value.className;
        }
      } else if (isCp(value)) {
        log("IS CP");
        st += "__BBN_CP__" + value.$options.name + "/" + value.$cid;
      } else {
        try {
          st += JSON.stringify(arguments[i], circularReplacer());
        } catch (e) {
          st += ".";
        }
      }
    }
  }

  return simpleHash(st);
};

export { hash };
