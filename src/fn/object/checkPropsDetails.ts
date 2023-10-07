import { isString } from '../type/isString.js'  ;
import { isArray } from '../type/isArray.js'  ;
import { isObject } from '../type/isObject.js'  ;
import { each } from '../loop/each.js'  ;
import { substr } from '../string/substr.js'  ;

const checkPropsDetails = function (
  obj: object,
  props: string | string[],
  checkEmpty: boolean = false
): BbnResError {
  let res: BbnResError = {
    error: false,
    result: true,
  };
  if (typeof props === "string") {
    props = [props];
  }
  if (!isArray(props)) {
    res.error = bbn._(
      "checkProps must receive a string or an array as props argument"
    );
  }
  if (!isObject(obj)) {
    res.error = bbn._("checkProps must receive an object as obj argument");
  }
  if (!res.error) {
    let check;
    each(props, (varName) => {
      varName = varName.trim().split(":");
      let type = varName[1] || false;
      varName = varName[0];
      if (obj[varName] === undefined) {
        res.error = varName + " " + bbn._("is not defined");
      } else if (type) {
        check =
          "is" +
          substr(type, 0, 1).toUpperCase() +
          substr(type, 1).toLowerCase();
        if (bbn.fn[check] === undefined) {
          res.error = type + " " + bbn._("is not a valid type");
        } else if (!bbn.fn[check](obj[varName])) {
          res.error = varName + " " + bbn._("is not a") + " " + type;
        }
      } else if (checkEmpty && !obj[varName]) {
        res.error = varName + " " + bbn._("is empty");
      }
      if (res.error) {
        return false;
      }
    });
  }
  if (res.error) {
    res.result = false;
  }
  return res;
};

export { checkPropsDetails };
