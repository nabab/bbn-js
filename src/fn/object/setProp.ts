/**
 * Sets a given property on the given object
 *
 * @param {Object} obj
 * @param {String} prop
 * @param {*} value
 * @param {Boolean} writable
 * @param {Boolean} configurable
 */
const setProp = function (
  obj: object,
  prop: string,
  value: any,
  writable: boolean = true,
  configurable: boolean = true
): void {
  Object.defineProperty(obj, prop, {
    value: value,
    writable: writable,
    configurable: configurable,
  });
};

export { setProp };
