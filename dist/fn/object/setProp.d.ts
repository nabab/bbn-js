/**
 * Sets a given property on the given object
 *
 * @param {Object} obj
 * @param {String} prop
 * @param {*} value
 * @param {Boolean} writable
 * @param {Boolean} configurable
 */
declare const setProp: (obj: object, prop: string, value: any, writable?: boolean, configurable?: boolean) => void;
export { setProp };
