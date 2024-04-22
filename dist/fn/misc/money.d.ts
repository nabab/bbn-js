/**
 * Returns the given value to money format basing on the given configuration.
 *
 * @method   money
 * @global
 *
 * @example
 * ``` javascript
 * // "5 856.0 $"
 * bbn.fn.money(5856, false, '$', false, '.' ,false, 1);
 * ```
 *
 * @memberof bbn.fn
 * @param {String|Number} val The value.
 * @param {Boolean} kilo If the value has to be rendered in kilo.
 * @param {String} currency The currency.
 * @param {String} novalue The string to return if no valid value is given.
 * @param {String} decimal The character to use separate decimals.
 * @param {String} thousands The character to use to separate thounsands.
 * @param {Number} precision The number of decimals places.
 */
export default function money(val: number, kilo?: boolean, currency?: string, novalue?: string | false, decimal?: string, thousands?: string, precision?: number): string;
