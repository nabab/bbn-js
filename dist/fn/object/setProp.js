/**
 * Sets a given property on the given object
 *
 * @param {Object} obj
 * @param {String} prop
 * @param {*} value
 * @param {Boolean} writable
 * @param {Boolean} configurable
 */
export default function setProp(obj, prop, value, writable = true, configurable = true) {
    Object.defineProperty(obj, prop, {
        value: value,
        writable: writable,
        configurable: configurable,
    });
}
;
