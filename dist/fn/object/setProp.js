/**
 * Sets a given property on the given object
 *
 * @param {Object} obj
 * @param {String} prop
 * @param {*} value
 * @param {Boolean} writable
 * @param {Boolean} configurable
 */
const setProp = function (obj, prop, value, writable = true, configurable = true) {
    Object.defineProperty(obj, prop, {
        value: value,
        writable: writable,
        configurable: configurable,
    });
};
export { setProp };
