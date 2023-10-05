import { checkType } from "../type/checkType";

/**
 * Gets the given property from the given object
 * @param {Object} obj
 * @param {String} prop
 * @returns
 */
const getProp = function (obj, prop) {
  checkType(obj, "object", bbn._("The obj must be an object in setProp"));
  checkType(prop, "string", bbn._("The prop must be a string in setProp"));
  return obj[prop];
};

export { getProp };
