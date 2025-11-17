/**
 * Selects the content of an element.
 *
 * @method   selectElementText
 * @global
 * @example
 * ``` javascript
 * bbn.fn.selectElementText(document.getElementById('my_input_id'));
 * // false
 * bbn.fn.selectElementText(bbn.$('#my_span_id'));
 * // true
 * ```
 * @memberof bbn.fn
 *
 * @param {Element} ele The element in which the text should be selected
 * @param {Boolean} win The window object
 *
 * @returns  {Boolean} True if focused
 */
export default function selectElementText(ele: any, win?: any): void;
