/**
 * Sets a given property on the given object
 *
 * @param {Object} obj
 * @param {String} prop
 * @param {*} value
 * @param {Boolean} writable
 * @param {Boolean} configurable
 */
var setProp = function (obj, prop, value, writable, configurable) {
    if (writable === void 0) { writable = true; }
    if (configurable === void 0) { configurable = true; }
    Object.defineProperty(obj, prop, {
        value: value,
        writable: writable,
        configurable: configurable,
    });
};
export { setProp };
